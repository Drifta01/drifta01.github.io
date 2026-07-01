"use client";

import { useState, useRef } from "react";
import { Product } from "@/lib/products-database";
import { InventoryItem } from "@/lib/database";
import { updateProduct } from "@/app/products/actions";
import { useRouter } from "next/navigation";

export default function EditProductForm({
  product,
  inventoryItems,
}: {
  product: Product;
  inventoryItems: InventoryItem[];
}) {
  const [name, setName] = useState(product.name);
  const [requiredParts, setRequiredParts] = useState(product.required_parts);
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();

  const handleAddPart = () => {
    setRequiredParts([...requiredParts, { part_number: "", quantity: 0 }]);
  };

  const handlePartNumberChange = (index: number, value: string) => {
    const newParts = [...requiredParts];
    newParts[index].part_number = value;
    setRequiredParts(newParts);
  };

  const handleQuantityChange = (index: number, value: string) => {
    const newParts = [...requiredParts];
    newParts[index].quantity = parseInt(value, 10) || 0;
    setRequiredParts(newParts);
  };

  const handleRemovePart = (index: number) => {
    const newParts = [...requiredParts];
    newParts.splice(index, 1);
    setRequiredParts(newParts);
  };

  return (
    <form
      ref={formRef}
      action={async (formData) => {
        await updateProduct(product.id, formData);
        router.push(`/products/${product.id}`);
      }}
      className="bg-white p-8 rounded-lg shadow-md mt-8">
      <h2 className="text-2xl font-bold mb-6">Edit Product</h2>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
          Product Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="image" className="block text-gray-700 font-bold mb-2">
          Product Image
        </label>
        <input
          type="file"
          id="image"
          name="image"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {product.image && (
          <div className="mt-4">
            <p>Current image:</p>
            <img
              src={product.image}
              alt={product.name}
              className="w-32 h-32 object-cover"
            />
          </div>
        )}
      </div>

      <h3 className="text-xl font-bold mb-4">Required Parts</h3>
      {requiredParts.map((part, index) => (
        <div key={index} className="flex gap-4 mb-4 items-center">
          <select
            value={part.part_number}
            onChange={(e) => handlePartNumberChange(index, e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required>
            <option value="" disabled>
              Select a part
            </option>
            {inventoryItems.map((item) => (
              <option key={item.id} value={item.part_number}>
                {item.name} ({item.part_number})
              </option>
            ))}
          </select>
          <input
            type="number"
            placeholder="Quantity"
            value={part.quantity}
            onChange={(e) => handleQuantityChange(index, e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
          <button
            type="button"
            onClick={() => handleRemovePart(index)}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Remove
          </button>
        </div>
      ))}
      <input
        type="hidden"
        name="required_parts"
        value={JSON.stringify(requiredParts)}
      />
      <button
        type="button"
        onClick={handleAddPart}
        className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded mb-6">
        Add Part
      </button>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Update Product
        </button>
        <button
          type="button"
          onClick={() => router.back()}
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
          Cancel
        </button>
      </div>
    </form>
  );
}
