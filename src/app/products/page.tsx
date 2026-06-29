import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Image from "next/image";

const productsDirectory = path.join(process.cwd(), "products");

function getProductsData() {
  const fileNames = fs.readdirSync(productsDirectory);
  const allProductsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(productsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);
    return {
      id,
      ...(matterResult.data as { name: string; price: string; image: string }),
    };
  });
  return allProductsData;
}

const ProductsPage = () => {
  const products = getProductsData();

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
        {products.map(({ id, name, price, image }) => (
          <div key={id} className="border p-4 rounded-lg">
            <img
              src={image}
              alt={name}
              className="w-full h-48 object-cover mb-4"
            />
            <h2 className="text-2xl font-bold">{name}</h2>
            <p className="text-xl text-gray-700">{price}</p>
            <p className="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              euismod, nunc ut laoreet tincidunt, nunc nisl aliquam nunc, eget
              aliquam nisl nunc vel nisl.
            </p>

            <Link
              href={`/products/${id}`}
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
