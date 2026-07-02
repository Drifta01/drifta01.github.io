import { getProductById, getInventoryItems } from "@/lib/products-database";
import EditProductForm from "../../../../components/EditProductForm";

export default async function EditProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await getProductById(params.id);
  const inventoryItems = await getInventoryItems();

  if (!product) {
    return <div>Product not found</div>;
  }

  return <EditProductForm product={product} inventoryItems={inventoryItems} />;
}
