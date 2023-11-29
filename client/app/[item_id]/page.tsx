import Link from "next/link";
export default function Home(params: { params: { item_id: string } }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <form className="rounded px-8 pt-6 pb-8 mb-4 bg-gray-700 my-20">
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded-lg w-full py-3 px-3 leading-tight focus:outline-none focus:shadow-outline text-black"
            id="name"
            type="text"
            name="name"
            placeholder="item name"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-bold mb-2" htmlFor="price">
            Price
          </label>
          <input
            className="shadow appearance-none border rounded-lg w-full py-3 px-3 leading-tight focus:outline-none focus:shadow-outline text-black"
            id="price"
            type="text"
            name="price"
            placeholder="item price"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-bold mb-2" htmlFor="image">
            Image
          </label>
          <input
            className="shadow appearance-none border rounded-lg w-full py-3 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline text-black"
            id="image"
            type="text"
            name="image"
            placeholder="item image Url"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hov text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
}
