import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-20 rounded-lg shadow-xl">
        <div className="hero-content">
          <h1 className="text-5xl font-extrabold tracking-tight mb-4">
            Welcome to My Blog
          </h1>
          <p className="text-xl mb-8">
            Thoughts, stories, and ideas on the world of tech and beyond.
          </p>
          <Link
            href="/blog"
            className="inline-block bg-white text-purple-600 font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition-transform transform hover:scale-105">
            Explore the Blog
          </Link>
        </div>
      </section>

      {/* Latest Posts Section */}
      <section id="latest" className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-8">Latest Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Placeholder for blog post cards */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Post Title</h3>
            <p className="text-gray-600">
              This is a short excerpt of the blog post...
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Post Title</h3>
            <p className="text-gray-600">
              This is a short excerpt of the blog post...
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Post Title</h3>
            <p className="text-gray-600">
              This is a short excerpt of the blog post...
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
