import { Label } from "@/components/ui/label";
import Link from "next/link";
import Image from "next/image";

export default async function Profile() {
  return (
    <div className="h-screen w-screen text-content flex flex-col items-center">
      <div className="flex flex-col justify-center items-center w-96 m-8 shadow-lg bg-gray-900 rounded-lg text-center mx-10 gap-3">
        <Image
          src="/hello.jpeg"
          alt="Placeholder"
          className="rounded-lg my-5"
          height={200}
          width={200}
        />
        <Label className="font-bold text-xl">Jaafar Al-Muallim</Label>
        <Label className="text-lg my-5">Full-stack Web Developer</Label>
      </div>
      <div className="flex flex-col gap-8">
        <Link href={"https://visualizer-xi.vercel.app/"}>
          <div className="block w-96 h-20 backdrop-brightness-50 text-white rounded-lg bg-cover shadow-lg bg-gray-900">
            <div className="w-full flex items-center justify-between p-4">
              <Label className="mb-1 text-base font-bold leading-tight text-white shadow-xl">
                Visualizer
              </Label>
            </div>
          </div>
        </Link>
        <Link href={"https://exam-tracker.vercel.app/"}>
          <div className="block w-96 h-20 backdrop-brightness-50 text-white rounded-lg bg-cover shadow-lg bg-gray-900">
            <div className="w-full flex items-center justify-between p-4">
              <Label className="mb-1 text-base font-bold leading-tight text-white shadow-xl">
                KFUPM Exam Tracker (Web Scraping)
              </Label>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
