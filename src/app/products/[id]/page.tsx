import { getProductById } from "@/lib/products-database";
import { getInventoryItemByPartNumber } from "@/lib/database";
import { notFound } from "next/navigation";
import { buildProduct } from "./actions";
import Link from "next/link";

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const product = await getProductById(id);

  if (!product) {
    notFound();
  }

  const requiredParts = await Promise.all(
    product.required_parts.map(
      async (part: { part_number: string; quantity: number }) => {
        const inventoryItem = await getInventoryItemByPartNumber(
          part.part_number,
        );
        return {
          ...part,
          name: inventoryItem?.name || "Part not found",
        };
      },
    ),
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{product.name}</h1>
      <h2 className="text-2xl font-bold mb-4">Parts Required</h2>
      <ul>
        {requiredParts.map((part) => (
          <li key={part.part_number} className="mb-2">
            {part.name} x {part.quantity}
          </li>
        ))}
      </ul>
      <div className="flex gap-4 mt-6">
        <form action={buildProduct}>
          <input type="hidden" name="productId" value={id} />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Build
          </button>
        </form>
        <Link
          href={`/products/${encodeURIComponent(id)}/edit`}
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
          Edit
        </Link>
      </div>
    </div>
  );
}
