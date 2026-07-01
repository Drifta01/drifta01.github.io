"use server";

import { getProductById } from "@/lib/products-database";
import { getInventoryItemByPartNumber, updateInventoryQuantities } from "@/lib/database";
import { revalidatePath } from "next/cache";

export async function buildProduct(formData: FormData) {
    const productId = formData.get("productId") as string;
    const product = await getProductById(productId);

    if (!product) {
        throw new Error("Product not found");
    }

    const requiredParts = product.required_parts;
    const inventoryChecks = await Promise.all(
        requiredParts.map(async (part) => {
            const inventoryItem = await getInventoryItemByPartNumber(part.part_number);
            if (!inventoryItem || inventoryItem.quantity < part.quantity) {
                return { ...part, sufficient: false };
            }
            return { ...part, sufficient: true, inventoryItem };
        })
    );

    const allPartsSufficient = inventoryChecks.every((part) => part.sufficient);

    if (allPartsSufficient) {
        const updates = inventoryChecks.map((part) => ({
            part_number: part.part_number,
            quantity: part.quantity,
        }));
        await updateInventoryQuantities(updates);
        revalidatePath("/products/inventory");
        console.log("Inventory updated successfully!");
    } else {
        console.error("Insufficient parts to build the product.");
    }
}