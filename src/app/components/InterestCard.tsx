import Image from "next/image";

interface InterestCardProps {
  title: string;
  imageSrc: string;
  alt: string;
}

export default function InterestCard({
  title,
  imageSrc,
  alt,
}: InterestCardProps) {
  return (
    <div className="w-full sm:w-64 h-80 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border flex flex-col">
      <div className="relative w-full h-50">
        <Image
          src={imageSrc}
          alt={alt}
          layout="fill"
          objectFit="cover"
          className="rounded-t-xl"
        />
      </div>
      <div className="flex-grow p-4 flex items-center justify-center">
        <h3 className="text-lg font-semibold text-gray-800 text-center  ">
          {title}
        </h3>
      </div>
    </div>
  );
}
