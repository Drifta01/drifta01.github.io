"use server";

import { revalidatePath } from "next/cache";
import { getAllParts, InventoryItem } from "@/lib/products-database";
import fs from "fs/promises";
import path from "path";

export async function createInventoryItem(formData: FormData) {
    const category = formData.get("category") as string;
    const newPart: Omit<InventoryItem, "id"> = {
        name: formData.get("name") as string,
        part_number: formData.get("part_number") as string,
        quantity: parseInt(formData.get("quantity") as string, 10),
        price: parseFloat(formData.get("price") as string),
    };

    const dbPath = path.join(process.cwd(), "src/lib/inventory.json");
    try {
        const fileContent = await fs.readFile(dbPath, "utf-8");
        const inventory = JSON.parse(fileContent);

        const allItems = Object.values(inventory).flat() as InventoryItem[];
        const maxId = allItems.reduce(
            (max, item) => (item.id > max ? item.id : max),
            0
        );

        if (!inventory[category]) {
            inventory[category] = [];
        }
        inventory[category].push({ ...newPart, id: maxId + 1 });

        await fs.writeFile(dbPath, JSON.stringify(inventory, null, 2));
    } catch (err) {
        console.error("Failed to create inventory item:", err);
    }

    revalidatePath("/inventory");
    redirect("/inventory");
}