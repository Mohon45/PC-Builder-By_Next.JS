import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";

const FeaturedCategoryPage = () => {
  return (
    <div className="my-8 mt-14">
      <div className="text-center">
        <h1 className="text-2xl md:text-3xl font-semibold">
          Featured Category
        </h1>
        <p className="text-sm md:text-lg font-semibold mt-3">
          Get Your Desired Product from Featured Category!
        </p>
      </div>
      <div className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-y-5">
        <Link href={"/product/category/storage"}>
          <div className="w-[150px] h-[130px] rounded-lg flex flex-col justify-evenly items-center bg-[#F2F4F8]">
            <Icon icon="ph:cpu-bold" width={50} />
            <p className="text-xl font-semibold">Cpu</p>
          </div>
        </Link>
        <Link href={"/product/category/motherboard"}>
          <div className="w-[150px] h-[130px] rounded-lg flex flex-col justify-evenly items-center bg-[#F2F4F8]">
            <Icon icon="bi:motherboard" width={40} />
            <p className="text-xl font-semibold">Motherboard</p>
          </div>
        </Link>
        <Link href={"/product/category/ram"}>
          <div className="w-[150px] h-[130px] rounded-lg flex flex-col justify-evenly items-center bg-[#F2F4F8]">
            <Icon icon="gg:smartphone-ram" width={50} />
            <p className="text-xl font-semibold">Ram</p>
          </div>
        </Link>
        <Link href={"/product/category/power-supply"}>
          <div className="w-[150px] h-[130px] rounded-lg flex flex-col justify-evenly items-center bg-[#F2F4F8]">
            <Icon icon="grommet-icons:power-shutdown" width={40} />
            <p className="text-xl font-semibold">Power Supply</p>
          </div>
        </Link>

        <Link href={"/product/category/storage"}>
          <div className="w-[150px] h-[130px] rounded-lg flex flex-col justify-evenly items-center bg-[#F2F4F8]">
            <Icon icon="icon-park-solid:cloud-storage" width={40} />
            <p className="text-xl font-semibold">Storage</p>
          </div>
        </Link>

        <Link href={"/product/category/monitor"}>
          <div className="w-[150px] h-[130px] rounded-lg flex flex-col justify-evenly items-center bg-[#F2F4F8]">
            <Icon icon="solar:monitor-outline" width={40} />
            <p className="text-xl font-semibold">Monitor</p>
          </div>
        </Link>

        <Link href={"/product/category/Mouse"}>
          <div className="w-[150px] h-[130px] rounded-lg flex flex-col justify-evenly items-center bg-[#F2F4F8]">
            <Icon icon="solar:mouse-bold" width={40} />
            <p className="text-xl font-semibold">Mouse</p>
          </div>
        </Link>

        <Link href={"/product/category/Keyboard"}>
          <div className="w-[150px] h-[130px] rounded-lg flex flex-col justify-evenly items-center bg-[#F2F4F8]">
            <Icon icon="bxs:keyboard" width={40} />
            <p className="text-xl font-semibold">Keyboard</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedCategoryPage;
