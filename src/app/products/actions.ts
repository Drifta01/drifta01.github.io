"use server";

import { revalidatePath } from "next/cache";
import { addProduct } from "@/lib/products-database";
// @ts-ignore: Allow importing @aws-sdk/client-s3 even if types aren't installed in this environment
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const s3Client = new S3Client({
    region: process.env.AWS_REGION as string,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
    },
});

async function uploadImageToS3(
    file: Buffer,
    fileName: string,
    productId: string,
): Promise<string> {
    const params = {
        Bucket: process.env.AWS_BUCKET_NAME as string,
        Key: `products/${productId}/${fileName}`,
        Body: file,
        ContentType: "image/jpeg",
    };

    const command = new PutObjectCommand(params);
    await s3Client.send(command);

    return `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/products/${productId}/${fileName}`;
}

export async function createProduct(formData: FormData) {
    const name = formData.get("name") as string;
    const imageFile = formData.get("image") as File;
    const required_parts = JSON.parse(
        formData.get("required_parts") as string,
    );

    const productId = Date.now().toString();
    const buffer = Buffer.from(await imageFile.arrayBuffer());
    const imageUrl = await uploadImageToS3(buffer, imageFile.name, productId);

    const newProduct = {
        id: productId,
        name,
        image: imageUrl,
        image_url: imageUrl,

        required_parts,
    };

    await addProduct(newProduct);

    revalidatePath("/products");
}