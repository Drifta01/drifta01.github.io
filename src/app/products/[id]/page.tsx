import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const productsDirectory = path.join(process.cwd(), "products");

export async function getProductData(id: string) {
  const fullPath = path.join(productsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();
  return {
    id,
    contentHtml,
    ...(matterResult.data as { name: string; price: string; image: string }),
  };
}

export function getAllProductIds() {
  const fileNames = fs.readdirSync(productsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

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
