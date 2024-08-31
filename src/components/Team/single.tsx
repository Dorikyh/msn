import { Member } from "@/types/member";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";


const Single = ({ member }: { member: Member }) => {
  const { name, image, instagram, designation } = member;

  return (
    <div
      className={` w-full opacity-0 transition-opacity duration-1000 hover:opacity-100 ${
        name === "" || name === "Adalbergt H" ? "opacity-0 transition-opacity duration-1000 hover:opacity-100" : "opacity-100"
      }`} 
    >
      <div className="rounded-lg bg-white p-8 shadow-two duration-300 hover:shadow-one dark:bg-dark dark:shadow-three dark:hover:shadow-gray-dark lg:px-5 xl:px-8">
        <a href={`https://www.instagram.com/${instagram}`}>
          <div className="flex items-center">
            <div className="relative mr-4 h-[50px] w-full max-w-[50px] overflow-hidden rounded-xl">
              <Image src={image} alt={name} fill />
            </div>
            <div className="w-full">
            <h3 className="mb-1 text-lg font-semibold text-dark dark:text-white lg:text-base xl:text-lg">
              <p>{name} ({designation})</p>
            </h3>

              <p className="flex items-center text-sm text-body-color">
                <FaInstagram className="mr-1"/>
                {instagram}
                </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Single;
