"use server";

import { deleteInventoryItem } from "@/lib/database";
import { revalidatePath } from "next/cache";

export async function deleteItem(formData: FormData) {
    const id = parseInt(formData.get("id") as string, 10);
    await deleteInventoryItem(id);
    revalidatePath("/products/inventory");
}