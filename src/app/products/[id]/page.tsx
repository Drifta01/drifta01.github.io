import { getProductData, getAllProductIds } from "@/lib/products";
import { notFound } from "next/navigation";
import Image from "next/image";

export async function generateStaticParams() {
  const paths = getAllProductIds();
  return paths;
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const productData = await getProductData(params.id);
  return {
    title: productData.name,
  };
}

const ProductPage = async ({ params }: { params: { id: string } }) => {
  const productData = await getProductData(params.id).catch(() => notFound());

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative w-full h-96">
          <Image
            src={productData.image}
            alt={productData.name}
            fill
            className="object-contain"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-4">{productData.name}</h1>
          <p className="text-3xl font-bold text-blue-600 mb-4">
            ${productData.price}
          </p>
          <div className="mb-4">
            <span className="font-semibold">SKU:</span> {productData.sku}
          </div>
          <div className="mb-6">
            <span className="font-semibold">Inventory:</span>{" "}
            {productData.inventory} units available
          </div>
          <div
            className="prose lg:prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: productData.contentHtml ?? "" }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
