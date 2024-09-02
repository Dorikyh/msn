import { Feature } from "@/types/feature";


const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="flex items-center mb-2">
          <div className="flex h-[60px] w-[60px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-red">
            {icon}
          </div>
          <h3 className="ml-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            {title}
          </h3>
        </div>

        <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
