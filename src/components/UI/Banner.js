import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Banner1 from "@/assets/Images/banner-1.png";
import Banner2 from "@/assets/Images/banner-2.png";
import Banner3 from "@/assets/Images/banner-3.png";
import Image from "next/image";

const Banner = () => {
  let settings = {
    dots: true,
    infinite: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
  };
  return (
    <div className="my-5">
      <Slider {...settings}>
        <div>
          <Image
            src={Banner1}
            alt=""
            className=" w-[100%] h-[500px] rounded-md"
          />
        </div>
        <div className="w-[100%] h-[500px] rounded-md">
          <Image
            src={Banner2}
            alt=""
            className=" w-[100%] h-[500px] rounded-md"
          />
        </div>
        <div className="w-[100%] h-[500px] rounded-md">
          <Image
            src={Banner3}
            alt=""
            className=" w-[100%] h-[500px] rounded-md"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
