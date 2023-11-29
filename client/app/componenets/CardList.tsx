"use client";
import Item from "@/model/item";
import Card from "./Card";
import { useState } from "react";

export default function CardList({ items }: { items: Item[] }) {
  const [currentItems, setCurrentItems] = useState(items);
  const deleteItem = (_id: string) => {
    const res = fetch(`http://localhost:8080/delete/${_id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setCurrentItems((currentItems) =>
          currentItems.filter((item) => item._id !== _id),
        );
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      {currentItems.map((item) => {
        return <Card item={item} key={item._id} deleteItem={deleteItem} />;
      })}
    </>
  );
}
