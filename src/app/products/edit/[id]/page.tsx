import { getProductById, getAllParts } from "@/lib/products-database";
import { notFound } from "next/navigation";
import EditProductForm from "@/components/EditProductForm";

export default async function EditProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await getProductById(params.id);
  const inventoryItems = await getAllParts();

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Edit {product.name}</h1>
      <EditProductForm product={product} inventoryItems={inventoryItems} />
    </div>
  );
}
