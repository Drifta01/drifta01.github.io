import { getAllProductIds, getProductData } from "@/lib/products";

export async function generateStaticParams() {
  const paths = getAllProductIds();
  return paths;
}

const ProductPage = async ({ params }: { params: { id: string } }) => {
  const productData = await getProductData(params.id);

  return (
    <article className="bg-white p-8 rounded-lg shadow-md">
      <img
        src={productData.image}
        alt={productData.name}
        className="w-full h-96 object-cover mb-4"
      />
      <h1 className="text-4xl font-bold mb-2">{productData.name}</h1>
      <p className="text-2xl text-gray-700 mb-4">{productData.price}</p>
      <div
        className="prose lg:prose-xl max-w-none"
        dangerouslySetInnerHTML={{ __html: productData.contentHtml }}
      />
    </article>
  );
};

export default ProductPage;
