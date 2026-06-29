
import 'server-only';
import fs from 'fs/promises';
import path from 'path';

export interface InventoryItem {
    id: number;
    name: string;
    part_number: string;
    quantity: number;
    supplier: string;
    cost: number;
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