import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="bg-sky-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <Link href={"/"} className="text-xl text-white">
            Items System
          </Link>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link
                  href="/"
                  className=" text-white hover:bg-sky-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  All Items
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
