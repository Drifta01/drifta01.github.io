import { getInventoryItemById } from "@/lib/database";
import { notFound } from "next/navigation";
import Link from "next/link";
import { saveInventoryItem, deleteItem } from "./actions";

export default async function EditInventoryItemPage({
  params,
}: {
  params: { id: string };
}) {
  const id = parseInt(params.id, 10);
  if (isNaN(id)) {
    notFound();
  }

  const item = await getInventoryItemById(id);
  if (!item) {
    notFound();
  }

  return (
    <div className="container mx-auto px-1 py-1">
      <h1 className="text-3xl font-bold mb-6">Edit Inventory Item</h1>
      <form action={saveInventoryItem}>
        <input type="hidden" name="id" value={item.id} />
        <div className="mb-1">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Part Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue={item.name ?? ""}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="part_name"
            className="block text-gray-700 font-bold mb-2">
            Part Name
          </label>
          <input
            type="text"
            id="part_name"
            name="part_name"
            defaultValue={item.part_name ?? ""}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="quantity"
            className="block text-gray-700 font-bold mb-2">
            Quantity
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            defaultValue={item.quantity ?? 0}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            formAction={saveInventoryItem}
            className=" text-blue-500 hover:text-blue-800 font-bold py-1 px-1 focus:outline-none focus:shadow-outline">
            Save
          </button>
          <button
            type="submit"
            formAction={deleteItem}
            className="text-red-500 hover:text-red-700 font-bold py-1 px-1">
            Delete
          </button>
          <Link href="/products/inventory">
            <p className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
              Cancel
            </p>
          </Link>
        </div>
      </form>
    </div>
  );
}
