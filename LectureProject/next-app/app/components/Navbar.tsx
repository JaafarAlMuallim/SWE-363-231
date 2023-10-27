import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Image
              className="hidden rounded-full mx-5 lg:block h-8 w-auto"
              height={40}
              width={40}
              src="/hello.jpeg"
              alt="Workflow"
            />
          </div>
          <Link href={"/"} className="text-xl text-white">
            Jaafar Al-Muallim
          </Link>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link
                  href="/classes"
                  className=" text-white hover:bg-sky-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Profile
                </Link>
                <Link
                  href="/all-students"
                  className="text-white hover:bg-sky-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  About Us
                </Link>
                <Link
                  href="/reg-user"
                  className="text-white hover:bg-sky-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="ml-3 relative">
              <Popover>
                <PopoverTrigger
                  aria-controls="user-menu"
                  className="max-w-xs bg-gray-500 bg-opacity-90 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-700 focus:ring-white"
                >
                  <span className="sr-only">Open user menu</span>

                  <span className="underline p-3 text-white">Settings</span>
                </PopoverTrigger>
                <PopoverContent
                  className={`origin-top-right absolute 
                  right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-slate-800 ring-1 ring-black ring-opacity-5`}
                >
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm md:hidden text-slate-300 hover:bg-slate-700"
                  >
                    Profile
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm md:hidden text-slate-300 hover:bg-slate-700"
                  >
                    About Us
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm md:hidden text-slate-300 hover:bg-slate-700"
                  >
                    About Us
                  </Link>
                  <div className="px-4 py-2 flex items-center">
                    <label
                      htmlFor="language"
                      className="text-slate-300 text-sm hover:bg-slate-700 whitespace-nowrap"
                    >
                      Arabic
                    </label>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
