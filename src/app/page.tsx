import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className=" text-black shadow-xl">
        <div className="hero-content">
          <h1 className="text-2xl font-extrabold tracking-tight mb-4"></h1>
          <p className="text-xl mb-8">More Shit to come</p>
        </div>
      </section>

      {/* Latest Posts Section */}
      <section id="latest" className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-8">References</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Placeholder for blog post cards */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Link
              className="block mt-4 text-blue-500 hover:underline"
              href="/products">
              {""}
              <img src="/images/IMG_E1902 (1).JPG" alt="Lindford" width={400} />
            </Link>
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
