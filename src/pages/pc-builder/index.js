import RootLayout from "@/components/Layouts/RootLayout";
import { Icon } from "@iconify/react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const PcBuilderPage = () => {
  return (
    <div className="my-5">
      <Head>
        <title>Build Your Computer</title>
        <meta
          name="description"
          content="This is a Custom PC Build and Pc Accessories Saling Website"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="w-[160px] bg-[#18AE91] p-2 rounded-lg">
          <h1 className="text-[#FFFFFF] text-xl">
            Total : 50, 000 <span className="text-2xl">&#2547;</span>
          </h1>
        </div>
        <div className="flex flex-col items-center my-5">
          <h1 className="text-3xl font-semibold">PC Builder</h1>
          <p>Build Your Own Computer</p>
        </div>
        <div className="flex">
          <div
            className="p-2 bg-[#F1F1F1]"
            style={{ boxShadow: "2px 2px 18px 2px rgba(150, 150, 150, 0.4)" }}
          >
            <Icon icon="fa:download" width={30} />
          </div>
          <div
            className="p-2 bg-[#F1F1F1] ml-3"
            style={{ boxShadow: "2px 2px 18px 2px rgba(150, 150, 150, 0.4)" }}
          >
            <Icon icon="subway:print" width={30} />
          </div>
          <div
            className="p-2 bg-[#F1F1F1] ml-3"
            style={{ boxShadow: "2px 2px 18px 2px rgba(150, 150, 150, 0.4)" }}
          >
            <Icon icon="bxs:cart-add" width={30} />
          </div>
        </div>
      </div>
      <hr className="border-2 border-[#18AE91] my-3" />
      <div className="w-[100%] md:w-[80%] mx-auto px-1 md:px-20 py-5 bg-[#F2F4F8] rounded-md">
        <div className="py-5">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-[50px]">
                <Icon icon="ph:cpu-bold" width={50} />
              </div>
              {/* <Image src="" alt=""/> */}
              <div className="ml-2">
                <h1 className="text-sm md:text-xl font-semibold">CPU</h1>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center">
              <p className="md:border-r-2 md:border-r-[#18AE91] md:pr-6 text-sm md:text-xl font-semibold">
                10000 <span className="text-3xl">&#2547;</span>
              </p>
              <Link href="/pc-builder/cpu">
                <button className="btn btn-sm md:btn-md mt-5 md:mt-0 outline outline-[#18AE91] text-[#18AE91] ml-5 hover:bg-[#18AE91] hover:text-[#FFFFFF] hover:outline-none">
                  Choose
                </button>
              </Link>
            </div>
          </div>
          <hr className="border-1 border-[#18AE91] my-3" />
        </div>

        <div className="py-5">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-[50px]">
                <Icon icon="bi:motherboard" width={40} />
              </div>
              {/* <Image src="" alt=""/> */}
              <div className="ml-2">
                <h1 className="text-sm md:text-xl font-semibold">
                  Motherboard
                </h1>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center">
              <p className="md:border-r-2 md:border-r-[#18AE91] md:pr-6 text-sm md:text-xl font-semibold">
                10000 <span className="text-3xl">&#2547;</span>
              </p>
              <Link href="/pc-builder/motherboard">
                <button className="btn btn-sm md:btn-md mt-5 md:mt-0 outline outline-[#18AE91] text-[#18AE91] ml-5 hover:bg-[#18AE91] hover:text-[#FFFFFF] hover:outline-none">
                  Choose
                </button>
              </Link>
            </div>
          </div>
          <hr className="border-1 border-[#18AE91] my-3" />
        </div>

        <div className="py-5">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-[50px]">
                <Icon icon="gg:smartphone-ram" width={50} />
              </div>
              {/* <Image src="" alt=""/> */}
              <div className="ml-2">
                <h1 className="text-sm md:text-xl font-semibold">RAM</h1>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center">
              <p className="md:border-r-2 md:border-r-[#18AE91] md:pr-6 text-sm md:text-xl font-semibold">
                10000 <span className="text-3xl">&#2547;</span>
              </p>
              <Link href="/pc-builder/ram">
                <button className="btn btn-sm md:btn-md mt-5 md:mt-0 outline outline-[#18AE91] text-[#18AE91] ml-5 hover:bg-[#18AE91] hover:text-[#FFFFFF] hover:outline-none">
                  Choose
                </button>
              </Link>
            </div>
          </div>
          <hr className="border-1 border-[#18AE91] my-3" />
        </div>

        <div className="py-5">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-[50px]">
                <Icon icon="grommet-icons:power-shutdown" width={40} />
              </div>
              {/* <Image src="" alt=""/> */}
              <div className="ml-2">
                <h1 className="text-sm md:text-xl font-semibold">
                  Power Supply Unit
                </h1>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center">
              <p className="md:border-r-2 md:border-r-[#18AE91] md:pr-6 text-sm md:text-xl font-semibold">
                10000 <span className="text-3xl">&#2547;</span>
              </p>
              <Link href="/pc-builder/power-supply">
                <button className="btn btn-sm md:btn-md mt-5 md:mt-0 outline outline-[#18AE91] text-[#18AE91] ml-5 hover:bg-[#18AE91] hover:text-[#FFFFFF] hover:outline-none">
                  Choose
                </button>
              </Link>
            </div>
          </div>
          <hr className="border-1 border-[#18AE91] my-3" />
        </div>

        <div className="py-5">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-[50px]">
                <Icon icon="icon-park-solid:cloud-storage" width={40} />
              </div>
              {/* <Image src="" alt=""/> */}
              <div className="ml-2">
                <h1 className="text-sm md:text-xl font-semibold">
                  Storage Device
                </h1>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center">
              <p className="md:border-r-2 md:border-r-[#18AE91] md:pr-6 text-sm md:text-xl font-semibold">
                10000 <span className="text-3xl">&#2547;</span>
              </p>
              <Link href="/pc-builder/storage">
                <button className="btn btn-sm md:btn-md mt-5 md:mt-0 outline outline-[#18AE91] text-[#18AE91] ml-5 hover:bg-[#18AE91] hover:text-[#FFFFFF] hover:outline-none">
                  Choose
                </button>
              </Link>
            </div>
          </div>
          <hr className="border-1 border-[#18AE91] my-3" />
        </div>

        <div className="py-5">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-[50px]">
                <Icon icon="solar:monitor-outline" width={40} />
              </div>
              {/* <Image src="" alt=""/> */}
              <div className="ml-2">
                <h1 className="text-sm md:text-xl font-semibold">Monitor</h1>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center">
              <p className="md:border-r-2 md:border-r-[#18AE91] md:pr-6 text-sm md:text-xl font-semibold">
                10000 <span className="text-3xl">&#2547;</span>
              </p>
              <Link href="/pc-builder/monitor">
                <button className="btn btn-sm md:btn-md mt-5 md:mt-0 outline outline-[#18AE91] text-[#18AE91] ml-5 hover:bg-[#18AE91] hover:text-[#FFFFFF] hover:outline-none">
                  Choose
                </button>
              </Link>
            </div>
          </div>
          <hr className="border-1 border-[#18AE91] my-3" />
        </div>
        <div>
          <button
            className="btn outline outline-[#18AE91] text-[#18AE91] ml-5 hover:bg-[#18AE91] hover:text-[#FFFFFF] hover:outline-none"
            disabled
          >
            Complete Build{" "}
            <span>
              <Icon icon="el:ok-circle" width={20} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PcBuilderPage;

PcBuilderPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
