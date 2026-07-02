"use server";

import { updateProduct, getProductById } from "@/lib/products-database";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
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

export async function updateProductAction(formData: FormData) {
    const id = formData.get("id") as string;
    const name = formData.get("name") as string;
    const image = formData.get("image") as File;
    const required_parts = JSON.parse(formData.get("required_parts") as string);

    let imageUrl: string | undefined;

    if (image && image.size > 0) {
        const buffer = Buffer.from(await image.arrayBuffer());
        imageUrl = await uploadImageToS3(buffer, image.name, id);
    } else {
        const product = await getProductById(id);
        if (product) {
            imageUrl = product.image_url;
        }
    }

    await updateProduct({ id, name, image_url: imageUrl, required_parts });

    revalidatePath(`/products/edit/${id}`);
    redirect(`/products/edit/${id}`);
}