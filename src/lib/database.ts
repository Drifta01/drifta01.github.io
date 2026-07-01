
import 'server-only';
import fs from 'fs/promises';
import path from 'path';

export interface InventoryItem {
    id: number;
    name: string;
    part_number: string;
    quantity: number;
}

export async function getInventoryItemById(id: number): Promise<InventoryItem | null> {
    const dbPath = path.join(process.cwd(), 'src/lib/inventory.json');
    try {
        const fileContent = await fs.readFile(dbPath, 'utf-8');
        const data = JSON.parse(fileContent);
        const inventory: InventoryItem[] = data.inventory || [];
        const item = inventory.find((item) => item.id === id);
        return item || null;
    } catch (err) {
        console.error('Failed to get inventory item by ID:', err);
        return null;
    }
}

export async function getInventoryItemByPartNumber(partNumber: string): Promise<InventoryItem | null> {
    const dbPath = path.join(process.cwd(), 'src/lib/inventory.json');
    try {
        const fileContent = await fs.readFile(dbPath, 'utf-8');
        const data = JSON.parse(fileContent);
        const inventory: InventoryItem[] = data.inventory || [];
        const item = inventory.find((item) => item.part_number === partNumber);
        return item || null;
    } catch (err) {
        console.error('Failed to get inventory item by part number:', err);
        return null;
    }
}

async function writeInventory(inventory: InventoryItem[]): Promise<void> {
    const dbPath = path.join(process.cwd(), 'src/lib/inventory.json');
    const tempPath = dbPath + '.tmp';
    try {
        await fs.writeFile(tempPath, JSON.stringify({ inventory }, null, 2));
        await fs.rename(tempPath, dbPath);
    } catch (err) {
        console.error('Failed to write inventory:', err);
        throw err;
    }
}

export async function updateInventoryItem(updatedItem: InventoryItem): Promise<void> {
    const dbPath = path.join(process.cwd(), 'src/lib/inventory.json');
    try {
        const fileContent = await fs.readFile(dbPath, 'utf-8');
        const data = JSON.parse(fileContent);
        const inventory: InventoryItem[] = data.inventory || [];
        const itemIndex = inventory.findIndex((item) => item.id === updatedItem.id);
        if (itemIndex === -1) {
            throw new Error('Item not found');
        }
        inventory[itemIndex] = updatedItem;
        await writeInventory(inventory);
    } catch (err) {
        console.error('Failed to update inventory item:', err);
        throw err;
    }
}
export async function addInventoryItem(newItem: Omit<InventoryItem, "id">): Promise<void> {
    const dbPath = path.join(process.cwd(), 'src/lib/inventory.json');
    try {
        const fileContent = await fs.readFile(dbPath, 'utf-8');
        const data = JSON.parse(fileContent);
        const inventory: InventoryItem[] = data.inventory || [];
        const newId = inventory.length > 0 ? Math.max(...inventory.map((item) => item.id)) + 1 : 1;
        const itemToAdd = { ...newItem, id: newId };
        inventory.push(itemToAdd);
        await writeInventory(inventory);
    } catch (err) {
        console.error('Failed to add inventory item:', err);
        throw err;
    }
}

export async function deleteInventoryItem(id: number): Promise<void> {
    const dbPath = path.join(process.cwd(), 'src/lib/inventory.json');
    try {
        const fileContent = await fs.readFile(dbPath, 'utf-8');
        const data = JSON.parse(fileContent);
        let inventory: InventoryItem[] = data.inventory || [];
        inventory = inventory.filter((item) => item.id !== id);
        await writeInventory(inventory);
    } catch (err) {
        console.error('Failed to delete inventory item:', err);
        throw err;
    }
}

export async function getInventoryItems(): Promise<InventoryItem[]> {
    const dbPath = path.join(process.cwd(), 'src/lib/inventory.json');
    try {
        const fileContent = await fs.readFile(dbPath, 'utf-8');
        const data = JSON.parse(fileContent);
        return data.inventory || [];
    } catch (err) {
        console.error('Failed to get inventory items:', err);
        // If the file doesn't exist or is empty, return an empty array
        return [];
    }
}

export async function updateInventoryQuantities(updates: { part_number: string; quantity: number }[]): Promise<void> {
    const dbPath = path.join(process.cwd(), 'src/lib/inventory.json');
    try {
        const fileContent = await fs.readFile(dbPath, 'utf-8');
        const data = JSON.parse(fileContent);
        const inventory: InventoryItem[] = data.inventory || [];

        for (const update of updates) {
            const itemIndex = inventory.findIndex((item) => item.part_number === update.part_number);
            if (itemIndex !== -1) {
                inventory[itemIndex].quantity -= update.quantity;
            }
        }

        await writeInventory(inventory);
    } catch (err) {
        console.error('Failed to update inventory quantities:', err);
        throw err;
    }
}