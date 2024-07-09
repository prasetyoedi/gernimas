import Link from 'next/link';

const LayananCard = ({ imageUrl, link, title, description }) => {
    return (
        <Link href={link}>
            <div className="w-[198px] h-[250px] shadow-xl bg-red-100 rounded-t-[40px] rounded-b-2xl cursor-pointer hover:scale-105 transition-transform duration-300">
                <img
                    src={imageUrl}
                    alt={title}
                    className="-mt-1"
                />
                <div className="card-body ">
                    <div className="text-center text-red-400 text-xl font-bold mt-4 uppercase">
                        {title}
                    </div>
                    <div className="pt-7 ps-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                        >
                            <path
                                d="M5.6665 3.00002H2.99984C2.26346 3.00002 1.6665 3.59697 1.6665 4.33335V11C1.6665 11.7364 2.26346 12.3334 2.99984 12.3334H9.6665C10.4029 12.3334 10.9998 11.7364 10.9998 11V8.33335M8.33317 1.66669H12.3332M12.3332 1.66669V5.66669M12.3332 1.66669L5.6665 8.33335"
                                stroke="#E5677A"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default LayananCard;
