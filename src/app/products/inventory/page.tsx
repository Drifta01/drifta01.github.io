import { getInventoryItems, InventoryItem } from "@/lib/database";
import Link from "next/link";

export default async function InventoryPage() {
  const inventoryItems = await getInventoryItems();
  const editedInventoryItems = inventoryItems.map((item) => ({
    ...item,
    name: item.name || "N/A",
    part_number: item.part_number || "N/A",
    quantity: item.quantity !== undefined ? item.quantity : 0,
  }));

  return (
    <div className="container mx-auto px-1 py-1">
      <h1 className="text-3xl font-bold mb-6">Inventory</h1>
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
            </tr>
          </thead>
          <tbody>
            {inventoryItems.map((item: InventoryItem) => (
              <tr key={item.id}>
                <td className=" border-b border-gray-200 bg-white text-sm">
                  <Link href={`/products/inventory/edit/${item.id}`}>
                    <p className="text-gray-900 whitespace-no-wrap hover:text-blue-500">
                      {item.name}
                    </p>
                  </Link>
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Link href="/products/inventory/add">
        <button className="justify-center text-blue-500 hover:text-blue-800 font-bold py-1 px-1">
          Add New Part
        </button>
      </Link>
      <div className="container mx-auto px-4 py-8"></div>
    </div>
  );
}
