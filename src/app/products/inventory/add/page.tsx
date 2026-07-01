import Link from "next/link";
import { addItem } from "./actions";

export default function AddInventoryItemPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Add Inventory Item</h1>
      <form action={addItem}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Part Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="part_number"
            className="block text-gray-700 font-bold mb-2">
            Part Number
          </label>
          <input
            type="text"
            id="part_number"
            name="part_number"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
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
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className=" text-blue-500 hover:text-blue-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Add Item
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
