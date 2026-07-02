import { AddInventoryItemForm } from "@/components/AddInventoryItemForm";
import { getCategories } from "@/lib/products-database";

export default async function AddInventoryItemPage() {
  const categories = await getCategories();
  return <AddInventoryItemForm categories={categories} />;
}
