import { getSortedPostsData } from "@/lib/posts";
import Link from "next/link";

const BlogPage = () => {
  const posts = getSortedPostsData();

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-4xl font-bold mb-8 text-center">All Posts</h1>
      <ul className="space-y-4">
        {posts.map(({ id, date, title }) => (
          <li key={id} className="border-b pb-4">
            <Link
              href={`/blog/${id}`}
              className="text-2xl font-bold text-blue-600 hover:underline">
              {title}
            </Link>
            <br />
            <small className="text-gray-500">{date}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPage;
