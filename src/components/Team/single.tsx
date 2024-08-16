import { Testimonial } from "@/types/testimonial";
import Image from "next/image";

const Single = ({ testimonial }: { testimonial: Testimonial }) => {
  const { name, image, instagram, designation } = testimonial;

  return (
    <div
      className={` w-full opacity-0 transition-opacity duration-1000 hover:opacity-100 ${
        name === "El nombre a ocultar" ? "opacity-0 transition-opacity duration-1000 hover:opacity-100" : "opacity-100"
      }`} 
    >
      <div className="rounded-lg bg-white p-8 shadow-two duration-300 hover:shadow-one dark:bg-dark dark:shadow-three dark:hover:shadow-gray-dark lg:px-5 xl:px-8">
        <a href={`https://www.instagram.com/${instagram.slice(1)}`}>
          <div className="flex items-center">
            <div className="relative mr-4 h-[50px] w-full max-w-[50px] overflow-hidden rounded-full">
              <Image src={image} alt={name} fill />
            </div>
            <div className="w-full">
            <h3 className="mb-1 text-lg font-semibold text-dark dark:text-white lg:text-base xl:text-lg">
              <p>{name} ({designation})</p>
            </h3>

              <p className="text-sm text-body-color">{instagram}</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Single;
