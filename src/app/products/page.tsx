import Link from "next/link";
import Image from "next/image";
import { getAllProducts } from "@/lib/products-database";

const ProductsPage = async () => {
  const products = await getAllProducts();

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <Image
        src="/images/IMG_E1902 (1).JPG"
        alt="Products"
        width={300}
        height={100}
        className="mb-8 "
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map(({ id, name, image }) => (
          <div key={id} className="border p-4 rounded-lg">
            <img
              src={image}
              alt={name}
              className="w-full h-48 object-cover mb-4"
            />
            <h2 className="text-2xl font-bold">{name}</h2>

            <Link
              href={`/products/${encodeURIComponent(id)}`}
              className="text-blue-500 hover:underline mt-4 inline-block">
              View Details
            </Link>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <Link
          href="/products/new"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add New Product
        </Link>
      </div>
    </div>
  );
};

export default ProductsPage;
