import AddProductForm from "@/components/AddProductForm";
import { getInventoryItems } from "@/lib/database";

export default async function NewProductPage() {
  const inventoryItems = await getInventoryItems();

  return <AddProductForm inventoryItems={inventoryItems} />;
}
