import Image from "next/image";
import Item from "@/model/item";
import Card from "./componenets/Card";
import CardList from "./componenets/CardList";
// make it dynamic page

export default async function Home() {
  const res = await fetch("http://localhost:8080/read", { cache: "no-store" });
  const data = (await res.json()) as Item[];
  return (
    <div className="flex flex-col justify-center items-center">
      <CardList items={data} />
    </div>
  );
}
