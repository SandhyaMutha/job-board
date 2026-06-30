import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">


        <Link
          href="/"
          className="text-3xl font-bold text-blue-600"
        >
          JobBoard
        </Link>


        <div className="hidden md:flex gap-8 text-gray-700 font-medium">

          <Link href="/">
            Home
          </Link>


          <Link href="/#latest-jobs">
            Jobs
          </Link>


          <Link href="/#companies">
            Companies
          </Link>


          <Link href="/#about">
            About
          </Link>


          <Link href="/#contact">
            Contact
          </Link>

        </div>



        <Link href="/login">

          <button
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
          >
            Login
          </button>

        </Link>


      </div>

    </nav>
  );
}