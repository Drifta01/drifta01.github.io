import Link from "next/link";
import Image from "next/image";
import { getAllProducts } from "@/lib/products-database";

export interface Product {
  id: string;
  name: string;
  image_url: string;
}

const ProductsPage = async () => {
  const products = await getAllProducts();

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg">
            <Image
              src={product.image ?? "/images/placeholder.jpg"}
              alt={product.name}
              width={300}
              height={200}
              className="w-full h-48 object-cover mb-4"
            />
            <h2 className="text-2xl font-bold">{product.name}</h2>

            <Link
              href={`/products/${encodeURIComponent(product.id)}`}
              className="text-blue-500 hover:underline mt-4 inline-block">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
