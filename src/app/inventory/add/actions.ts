"use server";

import { addInventoryItem } from "@/lib/database";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function addItem(formData: FormData) {
    const name = formData.get("name") as string;
    const part_number = formData.get("part_number") as string;
    const quantity = formData.get("quantity");

    if (!name || !part_number || !quantity) {
        return;
    }

    const quantityNumber = parseInt(quantity as string, 10);
    if (isNaN(quantityNumber)) {
        return;
    }

    await addInventoryItem({ name, part_number, quantity: quantityNumber });

    revalidatePath("/products/inventory");
    redirect("/products/inventory");
}