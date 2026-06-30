import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

        <Link href="/" className="text-3xl font-bold text-blue-600">
          JobBoard
        </Link>

        <div className="hidden md:flex gap-8 text-gray-700 font-medium">
          <Link href="/">Home</Link>
          <Link href="/">Jobs</Link>
          <Link href="/">Companies</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>

        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
          Login
        </button>

      </div>
    </nav>
  );
}