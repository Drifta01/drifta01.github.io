"use client";

import { useState, useRef } from "react";
import { Product, InventoryItem } from "@/lib/products-database";
import { updateProductAction } from "@/components/actions";
import Image from "next/image";

interface EditProductFormProps {
  product: Product;
  inventoryItems: InventoryItem[];
}

export default function EditProductForm({
  product,
  inventoryItems,
}: EditProductFormProps) {
  const [productName, setProductName] = useState(product.name);
  const [productImage, setProductImage] = useState<string | null>(
    product.image_url,
  );
  const [requiredParts, setRequiredParts] = useState(
    product.required_parts || [],
  );
  const [selectedPart, setSelectedPart] = useState<string>("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setProductImage(URL.createObjectURL(file));
    }
  };

  const handleAddPart = () => {
    if (!selectedPart) return;

    const partToAdd = inventoryItems.find(
      (item) => item.part_number === selectedPart,
    );
    if (!partToAdd) return;

    const existingPart = requiredParts.find(
      (p) => p.part_number === partToAdd.part_number,
    );

    if (!existingPart) {
      setRequiredParts([
        ...requiredParts,
        { part_number: partToAdd.part_number!, quantity: 1 },
      ]);
    }
    setSelectedPart(""); // Reset dropdown
  };

  const handleRemovePart = (partNumber: string) => {
    setRequiredParts(requiredParts.filter((p) => p.part_number !== partNumber));
  };

  const handleQuantityChange = (partNumber: string, quantity: number) => {
    setRequiredParts(
      requiredParts.map((p) =>
        p.part_number === partNumber ? { ...p, quantity } : p,
      ),
    );
  };

  const availableParts = inventoryItems.filter(
    (item) => !requiredParts.some((p) => p.part_number === item.part_number),
  );

  return (
    <form
      ref={formRef}
      action={async (formData) => {
        await updateProductAction(formData);
      }}>
      <input type="hidden" name="id" value={product.id} />
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
          Product Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
          onChange={handleImageChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {productImage && (
          <Image
            src={productImage}
            alt="Product Preview"
            width={128}
            height={128}
            className="mt-4 w-32 h-32 object-cover"
          />
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="part-select"
          className="block text-gray-700 font-bold mb-2">
          Add Part
        </label>
        <div className="flex items-center">
          <select
            id="part-select"
            value={selectedPart}
            onChange={(e) => setSelectedPart(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            <option value="" disabled>
              Select a part
            </option>
            {availableParts.map((item) => (
              <option key={item.id} value={item.part_number!}>
                {item.name}
              </option>
            ))}
          </select>
          <button
            type="button"
            onClick={handleAddPart}
            className="ml-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Add
          </button>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-2">Required Parts</h3>
        <ul>
          {requiredParts.map((part) => (
            <li
              key={part.part_number}
              className="flex items-center justify-between mb-2">
              <span>
                {
                  inventoryItems.find((i) => i.part_number === part.part_number)
                    ?.name
                }
              </span>
              <div className="flex items-center">
                <input
                  type="number"
                  min="1"
                  value={part.quantity}
                  onChange={(e) =>
                    handleQuantityChange(
                      part.part_number,
                      parseInt(e.target.value, 10),
                    )
                  }
                  className="shadow appearance-none border rounded w-20 py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <button
                  type="button"
                  onClick={() => handleRemovePart(part.part_number)}
                  className="ml-4 text-red-500 hover:text-red-700 font-bold">
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <input
        type="hidden"
        name="required_parts"
        value={JSON.stringify(requiredParts)}
      />

      <div className="mt-6">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Save Product
        </button>
      </div>
    </form>
  );
}
