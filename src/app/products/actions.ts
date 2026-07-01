"use server";

import { revalidatePath } from "next/cache";
import { addProduct, updateProduct as updateProductInDatabase } from "@/lib/products-database";
import { writeFile } from "fs/promises";
import path from "path";

export async function createProduct(formData: FormData) {
    const name = formData.get("name") as string;
    const imageFile = formData.get("image") as File;
    const required_parts = JSON.parse(formData.get("required_parts") as string);

    const imagePath = `/images/${imageFile.name}`;
    const imageFullPath = path.join(process.cwd(), "public", imagePath);

    const buffer = Buffer.from(await imageFile.arrayBuffer());
    await writeFile(imageFullPath, buffer);

    const newProduct = {
        id: Date.now().toString(),
        name,
        image: imagePath,
        required_parts,
    };

    await addProduct(newProduct);

    revalidatePath("/products");
}

export async function updateProduct(id: string, formData: FormData) {
    const name = formData.get("name") as string;
    const imageFile = formData.get("image") as File;
    const required_parts = JSON.parse(formData.get("required_parts") as string);

    let imagePath: string | undefined = undefined;

    if (imageFile && imageFile.size > 0) {
        imagePath = `/images/${imageFile.name}`;
        const imageFullPath = path.join(process.cwd(), "public", imagePath);
        const buffer = Buffer.from(await imageFile.arrayBuffer());
        await writeFile(imageFullPath, buffer);
    }

    const updatedProduct: any = {
        id,
        name,
        required_parts,
    };

    if (imagePath) {
        updatedProduct.image = imagePath;
    }

    await updateProductInDatabase(updatedProduct);

    revalidatePath(`/products`);
    revalidatePath(`/products/${id}`);
}