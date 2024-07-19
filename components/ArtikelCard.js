import Link from "next/link";

const ArtikelCard = ({ id, imageUrl, category, title }) => {
  return (
    <Link href={`/detail_artikel?id=${id}`}>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden m-5 cursor-pointer hover:scale-110 hover:shadow-2xl transition-transform duration-1000">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <div className="text-rose-500 text-[13px] font-medium leading-3 tracking-wide">
            {category}
          </div>
          <div className="w-80 text-neutral-900 text-base md:text-xl font-normal leading-[22px] md:leading-[30px] mt-4">
            {title}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ArtikelCard;
