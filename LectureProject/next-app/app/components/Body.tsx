import Image from "next/image";
export default function Body() {
  return (
    <div className="container mx-auto flex flex-col md:flex-row py-8 px-4 md:px-0">
      <div className="md:w-1/2 md:pr-8">
        <h2 className="text-2xl font-bold mb-4">Next Js Setup</h2>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl
          eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a
          bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis
          tincidunt laoreet ex, in pretium orci vestibulum eget.
        </p>
        <p>
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. Duis pharetra luctus lacus ut vestibulum.
          Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
        </p>
      </div>

      <div className="md:w-1/2 mt-8 md:mt-0">
        <Image
          src="/hello.jpeg"
          alt="Placeholder"
          className="w-full rounded shadow"
          height={400}
          width={400}
        />
      </div>
    </div>
  );
}
