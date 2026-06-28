import { getPostData, getAllPostIds } from "@/lib/posts";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths;
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const postData = await getPostData(params.id);
  return {
    title: postData.title,
  };
}

const Post = async ({ params }: { params: { id: string } }) => {
  const postData = await getPostData(params.id).catch(() => notFound());

  return (
    <article className="bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-4xl font-bold mb-2">{postData.title}</h1>
      <div className="text-gray-500 mb-6">{postData.date}</div>
      <div
        className="prose lg:prose-xl max-w-none"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      />
    </article>
  );
};

export default Post;
