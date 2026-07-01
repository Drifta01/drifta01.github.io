"use server";

import { updateInventoryItem, deleteInventoryItem } from "@/lib/database";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function saveInventoryItem(formData: FormData) {
    const id = parseInt(formData.get("id") as string, 10);
    const name = formData.get("name") as string;
    const part_number = formData.get("part_number") as string;
    const quantity = parseInt(formData.get("quantity") as string, 10);

    await updateInventoryItem({ id, name, part_number, quantity });

    revalidatePath("/products/inventory");
    redirect("/products/inventory");
}

export async function deleteItem(formData: FormData) {
    const id = parseInt(formData.get("id") as string, 10);
    await deleteInventoryItem(id);
    revalidatePath("/products/inventory");
    redirect("/products/inventory");
}