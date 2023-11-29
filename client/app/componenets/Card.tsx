"use client";
import Item from "@/model/item";
import Image from "next/image";
import Link from "next/link";
export default function Card(props: { item: Item; deleteItem: Function }) {
  return (
    <div className="my-5 mx-5 shadow-xl px-10 rounded-lg bg-slate-800 py-20 w-80">
      <Image
        src={props.item.image!}
        alt={props.item.name!}
        className="rounded my-10"
        width={100}
        height={100}
      />
      <div className="text-xl font-semibold text-right text-purple-500">
        <p>{props.item.name}</p>
      </div>
      <div className="text-2xl font-semibold text-right text-white">
        <p>{props.item.price}</p>
      </div>
      <div className="flex gap-2">
        <button className="bg-orange-600 hover:bg-orange-800 text-white font-bold py-2 px-4 rounded">
          <Link href={`/${props.item._id}`}>Update</Link>
        </button>
        <button
          onClick={() => props.deleteItem(props.item._id)}
          className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
