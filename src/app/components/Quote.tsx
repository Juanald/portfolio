// Have a pic of Tom Platz to the right or something
export default function Quote() {
  return (
    <section className="w-full h-screen flex items-center justify-center bg-black text-white px-6">
      <blockquote className="text-3xl md:text-5xl font-semibold text-center max-w-4xl">
        “You have to achieve failure”
        <span className="block text-lg md:text-2xl mt-4 font-light text-gray-400">
          – Tom Platz
        </span>
      </blockquote>
    </section>
  );
}
