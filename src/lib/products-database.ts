import 'server-only';
import fs from 'fs/promises';
import path from 'path';

export interface Product {
    id: string;
    name: string;
    image: string;
    required_parts: { part_number: string; quantity: number }[];
    image_url: string;

}

export interface InventoryItem {
    id: number;
    name: string;
    part_number: string | null;
    quantity: number;
    price: number;
}

async function writeProducts(products: Product[]): Promise<void> {
    const dbPath = path.join(process.cwd(), 'src/lib/products.json');
    const tempPath = dbPath + '.tmp';
    try {
        await fs.writeFile(tempPath, JSON.stringify({ products }, null, 2));
        await fs.rename(tempPath, dbPath);
    } catch (err) {
        console.error('Failed to write products:', err);
        throw err;
    }
}

export async function addProduct(product: Product): Promise<void> {
    const products = await getAllProducts();
    products.push(product);
    await writeProducts(products);
}

export async function updateProduct(updatedProduct: Partial<Product> & { id: string }): Promise<void> {
    const products = await getAllProducts();
    const index = products.findIndex((p) => p.id === updatedProduct.id);
    if (index === -1) {
        throw new Error(`Product with id ${updatedProduct.id} not found`);
    }
    const existingProduct = products[index];
    products[index] = {
        ...existingProduct,
        ...updatedProduct,
        image: updatedProduct.image || existingProduct.image,
    };
    await writeProducts(products);
}

export async function getProductById(id: string): Promise<Product | null> {
    const dbPath = path.join(process.cwd(), 'src/lib/products.json');
    try {
        const fileContent = await fs.readFile(dbPath, 'utf-8');
        const data = JSON.parse(fileContent);
        const products: Product[] = data.products || [];
        const product = products.find((product) => product.id === id);
        return product || null;
    } catch (err) {
        console.error('Failed to get product by ID:', err);
        return null;
    }
}

export async function getAllProducts(): Promise<Product[]> {
    const dbPath = path.join(process.cwd(), 'src/lib/products.json');
    try {
        const fileContent = await fs.readFile(dbPath, 'utf-8');
        const data = JSON.parse(fileContent);
        return data.products || [];
    } catch (err) {
        console.error('Failed to get all products:', err);
        return [];
    }
}

export async function getAllParts(): Promise<InventoryItem[]> {
    const dbPath = path.join(process.cwd(), "src/lib/inventory.json");
    try {
        const fileContent = await fs.readFile(dbPath, "utf-8");
        const data = JSON.parse(fileContent);
        const allParts = Object.values(data).flat();
        return allParts as InventoryItem[];
    } catch (err) {
        console.error("Failed to get all parts:", err);
        return [];
    }
}

export async function getInventoryItems(): Promise<InventoryItem[]> {
    return getAllParts();
}

export async function getInventoryByCategory(): Promise<{ [category: string]: InventoryItem[] }> {
    const dbPath = path.join(process.cwd(), "src/lib/inventory.json");
    try {
        const fileContent = await fs.readFile(dbPath, "utf-8");
        return JSON.parse(fileContent);
    } catch (err) {
        console.error("Failed to get inventory by category:", err);
        return {};
    }
}

export async function getCategories(): Promise<string[]> {
    const dbPath = path.join(process.cwd(), "src/lib/inventory.json");
    try {
        const fileContent = await fs.readFile(dbPath, "utf-8");
        const data = JSON.parse(fileContent);
        return Object.keys(data);
    } catch (err) {
        console.error("Failed to get categories:", err);
        return [];
    }
}