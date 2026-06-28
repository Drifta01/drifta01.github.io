import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const productsDirectory = path.join(process.cwd(), 'products');

export type Product = {
    id: string;
    name: string;
    price: string;
    sku: string;
    inventory: number;
    image: string;
    contentHtml?: string;
};

export function getAllProductsData(): Product[] {
    const fileNames = fs.readdirSync(productsDirectory);
    const allProductsData = fileNames.map((fileName) => {
        const id = fileName.replace(/\.md$/, '');
        const fullPath = path.join(productsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents);

        return {
            id,
            ...(matterResult.data as Omit<Product, 'id'>),
        };
    });
    return allProductsData;
}

export async function getProductData(id: string): Promise<Product> {
    const fullPath = path.join(productsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
    const contentHtml = processedContent.toString();

    return {
        id,
        contentHtml,
        ...(matterResult.data as Omit<Product, 'id' | 'contentHtml'>),
    };
}

export function getAllProductIds() {
    const fileNames = fs.readdirSync(productsDirectory);
    return fileNames.map((fileName) => {
        return {
            params: {
                id: fileName.replace(/\.md$/, ''),
            },
        };
    });
}