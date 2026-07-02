import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-slate-900  text-white p-6 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="logo">
          <Link href="/" className="text-3xl font-bold tracking-tight">
            Home
          </Link>
        </div>
        <ul className="flex items-center space-x-6">
          <li>
            {/* <Link
              href="/#featured"
              className="hover:text-gray-300 transition-colors">
              Featured
            </Link> */}
          </li>
          <li>
            {/* <Link
              href="/#latest"
              className="hover:text-gray-300 transition-colors">
              Latest Posts
            </Link> */}
          </li>
          <li>
            {/* <Link
              href="/about"
              className="hover:text-gray-300 transition-colors">
              About
            </Link> */}
          </li>
          <li>
            <Link
              href="/products"
              className="hover:text-gray-300 transition-colors">
              Products
            </Link>
          </li>
          <li>
            <Link
              href="/inventory"
              className="hover:text-gray-300 transition-colors">
              Inventory
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:text-gray-300 transition-colors">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
