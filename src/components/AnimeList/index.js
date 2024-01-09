import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ title, images, id }) => {
  return (
    // gap = jarak kiri kanan atas bawah
    // h = tinggi classname nya berapa
    <Link href={`/${id}`} className="cursor-pointer">
      <Image
        src={images}
        alt="..."
        width={350}
        height={350}
        className="w-full max-h-64 object-cover"
      />
      <h3 className="font-bold md:tex-xl text-md p-4">{title}</h3>
    </Link>
  );
};

export default AnimeList;
