import { SLIDE_ITEMS } from "@/contants/slides";
import Image from "next/image";
import { useEffect, useState } from "react";

const HomeHeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === SLIDE_ITEMS.length - 1 ? 0 : prevSlide + 1
      );
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="xl:max-w-[537px] md:max-w-[402px] max-w-[374px]">
      <div
        className="w-full rounded-[40px] overflow-hidden"
        style={{ boxShadow: "0 4px 20px 12px rgba(52, 138, 225, 0.05)" }}>
        <div className="relative">
          <Image
            src={SLIDE_ITEMS[currentSlide]}
            alt="Headstar"
            width={537}
            height={682}
            className="h-full w-auto transition-opacity duration-500"
            priority={currentSlide === 0}
            fetchPriority={currentSlide === 0 ? "high" : "auto"}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeHeroSlider;