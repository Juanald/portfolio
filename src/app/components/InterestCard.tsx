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
    <div className="w-full sm:w-64 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border">
      <div className="relative w-full h-40">
        <Image
          src={imageSrc}
          alt={alt}
          layout="fill"
          objectFit="cover"
          className="rounded-t-xl"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      </div>
    </div>
  );
}
