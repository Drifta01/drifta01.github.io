import { getInventoryByCategory, InventoryItem } from "@/lib/products-database";
import Link from "next/link";

export default async function InventoryPage() {
  const inventoryByCategory = await getInventoryByCategory();
  const categories = Object.keys(inventoryByCategory);

  return (
    <div className="container mx-auto px-1 py-1">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Inventory</h1>
        <Link href="/inventory/add">
          <button className="justify-center text-blue-500 hover:text-blue-800 font-bold py-1 px-1">
            Add New Part
          </button>
        </Link>
      </div>

      {categories.map((category) => (
        <div key={category} className="mt-8">
          <h2 className="text-2xl font-bold mb-4">{category}</h2>
          <div className="overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-1 py-1 border-b-4 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Part Name
                  </th>
                  <th className="px-1 py-1 border-b-4 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Part Number
                  </th>
                  <th className="px-1 py-1 border-b-4 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Quantity
                  </th>
                  <th className="px-1 py-1 border-b-4 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                {inventoryByCategory[category].map((item: InventoryItem) => (
                  <tr key={item.id}>
                    <td className=" border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {item.name}
                      </p>
                    </td>
                    <td className="border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {item.part_number}
                      </p>
                    </td>
                    <td className=" border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {item.quantity}
                      </p>
                    </td>
                    <td className=" border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        ${item.price.toFixed(2)}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}
