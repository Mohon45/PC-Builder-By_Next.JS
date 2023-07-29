import RootLayout from "@/components/Layouts/RootLayout";
import { removeComponent } from "@/redux/features/pcBuilder/pcBuilderSlice";
import capitalizeFirstLetter from "@/utils/camleCaseConvert";
import { Icon } from "@iconify/react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

const PcBuilderPage = () => {
  const dispatch = useDispatch();
  const { products, total } = useSelector((state) => state.pcBuilder);
  const removeComponentHandler = (component) => {
    dispatch(removeComponent(component));
  };
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
        <div className="w-[170px] bg-[#18AE91] p-2 rounded-lg">
          <h1 className="text-[#FFFFFF] text-xl">
            Total : {total} <span className="md:text-2xl">$</span>
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
                {products?.cpu ? (
                  <Image
                    src={products?.cpu?.image}
                    alt=""
                    width={50}
                    height={50}
                  />
                ) : (
                  <Icon icon="ph:cpu-bold" width={50} />
                )}
              </div>
              <div className="md:ml-8">
                {products?.cpu ? (
                  <div className="font-semibold">
                    <h2 className="text-xl font-semibold">
                      {products?.cpu?.productName}
                    </h2>
                    <p>
                      Category :{" "}
                      {capitalizeFirstLetter(products?.cpu?.category)}
                    </p>
                    <p>Status : {products?.cpu?.status}</p>
                  </div>
                ) : (
                  <h1 className="text-sm md:text-xl font-semibold">CPU</h1>
                )}
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center">
              {products?.cpu ? (
                <>
                  <p className="md:border-r-2 md:border-r-[#18AE91] md:pr-6 text-sm md:text-xl font-semibold">
                    {products?.cpu?.price}{" "}
                    <span className="md:text-2xl">$</span>
                  </p>
                  <Icon
                    icon="maki:cross"
                    width={30}
                    className=" text-[#18AE91] ml-5 cursor-pointer"
                    onClick={() => removeComponentHandler(products?.cpu)}
                  />
                </>
              ) : (
                <Link href="/pc-builder/cpu">
                  <button className="btn btn-sm md:btn-md mt-5 md:mt-0 outline outline-[#18AE91] text-[#18AE91] ml-5 hover:bg-[#18AE91] hover:text-[#FFFFFF] hover:outline-none">
                    Choose
                  </button>
                </Link>
              )}
            </div>
          </div>
          <hr className="border-1 border-[#18AE91] my-3" />
        </div>

        <div className="py-5">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-[50px]">
                {products?.motherboard ? (
                  <Image
                    src={products?.motherboard?.image}
                    alt=""
                    width={50}
                    height={50}
                  />
                ) : (
                  <Icon icon="bi:motherboard" width={40} />
                )}
              </div>
              <div className="md:ml-8">
                {products?.motherboard ? (
                  <div className="font-semibold">
                    <h2 className="text-xl font-semibold">
                      {products?.motherboard?.productName}
                    </h2>
                    <p>
                      Category :{" "}
                      {capitalizeFirstLetter(products?.motherboard?.category)}
                    </p>
                    <p>Status : {products?.motherboard?.status}</p>
                  </div>
                ) : (
                  <h1 className="text-sm md:text-xl font-semibold">
                    Motherboard
                  </h1>
                )}
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center">
              {products?.motherboard ? (
                <>
                  <p className="md:border-r-2 md:border-r-[#18AE91] md:pr-6 text-sm md:text-xl font-semibold">
                    {products?.motherboard?.price}{" "}
                    <span className="md:text-2xl">$</span>
                  </p>
                  <Icon
                    icon="maki:cross"
                    width={30}
                    className=" text-[#18AE91] ml-5 cursor-pointer"
                    onClick={() =>
                      removeComponentHandler(products?.motherboard)
                    }
                  />
                </>
              ) : (
                <Link href="/pc-builder/motherboard">
                  <button className="btn btn-sm md:btn-md mt-5 md:mt-0 outline outline-[#18AE91] text-[#18AE91] ml-5 hover:bg-[#18AE91] hover:text-[#FFFFFF] hover:outline-none">
                    Choose
                  </button>
                </Link>
              )}
            </div>
          </div>
          <hr className="border-1 border-[#18AE91] my-3" />
        </div>

        <div className="py-5">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-[50px]">
                {products?.ram ? (
                  <Image
                    src={products?.ram?.image}
                    alt=""
                    width={50}
                    height={50}
                  />
                ) : (
                  <Icon icon="gg:smartphone-ram" width={50} />
                )}
              </div>
              <div className="md:ml-8">
                {products?.ram ? (
                  <div className="font-semibold">
                    <h2 className="text-xl font-semibold">
                      {products?.ram?.productName}
                    </h2>
                    <p>
                      Category :{" "}
                      {capitalizeFirstLetter(products?.ram?.category)}
                    </p>
                    <p>Status : {products?.ram?.status}</p>
                  </div>
                ) : (
                  <h1 className="text-sm md:text-xl font-semibold">RAM</h1>
                )}
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center">
              {products?.ram ? (
                <>
                  <p className="md:border-r-2 md:border-r-[#18AE91] md:pr-6 text-sm md:text-xl font-semibold">
                    {products?.ram?.price}{" "}
                    <span className="md:text-2xl">$</span>
                  </p>
                  <Icon
                    icon="maki:cross"
                    width={30}
                    className=" text-[#18AE91] ml-5 cursor-pointer"
                    onClick={() => removeComponentHandler(products?.ram)}
                  />
                </>
              ) : (
                <Link href="/pc-builder/ram">
                  <button className="btn btn-sm md:btn-md mt-5 md:mt-0 outline outline-[#18AE91] text-[#18AE91] ml-5 hover:bg-[#18AE91] hover:text-[#FFFFFF] hover:outline-none">
                    Choose
                  </button>
                </Link>
              )}
            </div>
          </div>
          <hr className="border-1 border-[#18AE91] my-3" />
        </div>

        <div className="py-5">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-[50px]">
                {products?.power ? (
                  <Image
                    src={products?.power?.image}
                    alt=""
                    width={50}
                    height={50}
                  />
                ) : (
                  <Icon icon="grommet-icons:power-shutdown" width={40} />
                )}
              </div>
              <div className="md:ml-8">
                {products?.power ? (
                  <div className="font-semibold">
                    <h2 className="text-xl font-semibold">
                      {products?.power?.productName}
                    </h2>
                    <p>
                      Category :{" "}
                      {capitalizeFirstLetter(products?.power?.category)}
                    </p>
                    <p>Status : {products?.power?.status}</p>
                  </div>
                ) : (
                  <h1 className="text-sm md:text-xl font-semibold">
                    Power Supply Unit
                  </h1>
                )}
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center">
              {products?.power ? (
                <>
                  <p className="md:border-r-2 md:border-r-[#18AE91] md:pr-6 text-sm md:text-xl font-semibold">
                    {products?.power?.price}{" "}
                    <span className="md:text-2xl">$</span>
                  </p>
                  <Icon
                    icon="maki:cross"
                    width={30}
                    className=" text-[#18AE91] ml-5 cursor-pointer"
                    onClick={() => removeComponentHandler(products?.power)}
                  />
                </>
              ) : (
                <Link href="/pc-builder/power-supply">
                  <button className="btn btn-sm md:btn-md mt-5 md:mt-0 outline outline-[#18AE91] text-[#18AE91] ml-5 hover:bg-[#18AE91] hover:text-[#FFFFFF] hover:outline-none">
                    Choose
                  </button>
                </Link>
              )}
            </div>
          </div>
          <hr className="border-1 border-[#18AE91] my-3" />
        </div>

        <div className="py-5">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-[50px]">
                {products?.storage ? (
                  <Image
                    src={products?.storage?.image}
                    alt=""
                    width={50}
                    height={50}
                  />
                ) : (
                  <Icon icon="icon-park-solid:cloud-storage" width={40} />
                )}
              </div>
              <div className="md:ml-8">
                {products?.storage ? (
                  <div className="font-semibold">
                    <h2 className="text-xl font-semibold">
                      {products?.storage?.productName}
                    </h2>
                    <p>
                      Category :{" "}
                      {capitalizeFirstLetter(products?.storage?.category)}
                    </p>
                    <p>Status : {products?.storage?.status}</p>
                  </div>
                ) : (
                  <h1 className="text-sm md:text-xl font-semibold">
                    Storage Device
                  </h1>
                )}
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center">
              {products?.storage ? (
                <>
                  <p className="md:border-r-2 md:border-r-[#18AE91] md:pr-6 text-sm md:text-xl font-semibold">
                    {products?.storage?.price}{" "}
                    <span className="md:text-2xl">$</span>
                  </p>
                  <Icon
                    icon="maki:cross"
                    width={30}
                    className=" text-[#18AE91] ml-5 cursor-pointer"
                    onClick={() => removeComponentHandler(products?.storage)}
                  />
                </>
              ) : (
                <Link href="/pc-builder/storage">
                  <button className="btn btn-sm md:btn-md mt-5 md:mt-0 outline outline-[#18AE91] text-[#18AE91] ml-5 hover:bg-[#18AE91] hover:text-[#FFFFFF] hover:outline-none">
                    Choose
                  </button>
                </Link>
              )}
            </div>
          </div>
          <hr className="border-1 border-[#18AE91] my-3" />
        </div>

        <div className="py-5">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-[50px]">
                {products?.monitor ? (
                  <Image
                    src={products?.monitor?.image}
                    alt=""
                    width={50}
                    height={50}
                  />
                ) : (
                  <Icon icon="solar:monitor-outline" width={40} />
                )}
              </div>
              <div className="md:ml-8">
                {products?.monitor ? (
                  <div className="font-semibold">
                    <h2 className="text-xl font-semibold">
                      {products?.monitor?.productName}
                    </h2>
                    <p>
                      Category :{" "}
                      {capitalizeFirstLetter(products?.monitor?.category)}
                    </p>
                    <p>Status : {products?.monitor?.status}</p>
                  </div>
                ) : (
                  <h1 className="text-sm md:text-xl font-semibold">Monitor</h1>
                )}
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center">
              {products?.monitor ? (
                <>
                  <p className="md:border-r-2 md:border-r-[#18AE91] md:pr-6 text-sm md:text-xl font-semibold">
                    {products?.monitor?.price}{" "}
                    <span className="md:text-2xl">$</span>
                  </p>
                  <Icon
                    icon="maki:cross"
                    width={30}
                    className=" text-[#18AE91] ml-5 cursor-pointer"
                    onClick={() => removeComponentHandler(products?.monitor)}
                  />
                </>
              ) : (
                <Link href="/pc-builder/monitor">
                  <button className="btn btn-sm md:btn-md mt-5 md:mt-0 outline outline-[#18AE91] text-[#18AE91] ml-5 hover:bg-[#18AE91] hover:text-[#FFFFFF] hover:outline-none">
                    Choose
                  </button>
                </Link>
              )}
            </div>
          </div>
          <hr className="border-1 border-[#18AE91] my-3" />
        </div>
        <div>
          <button
            className="btn outline outline-[#18AE91] text-[#18AE91] ml-5 hover:bg-[#18AE91] hover:text-[#FFFFFF] hover:outline-none"
            disabled={Object.keys(products).length === 6 ? false : true}
            onClick={() => window.my_modal_5.showModal()}
          >
            Complete Build{" "}
            <span>
              <Icon icon="el:ok-circle" width={20} />
            </span>
          </button>
          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <form method="dialog" className="modal-box">
              <h3 className="font-bold text-lg text-center text-[#18AE91]">
                Your Pc Complited!
              </h3>
              <hr className="border-1 border-[#18AE91] my-3" />
              <p className="py-4 text-lg font-semibold">
                Your Total Cost : {total} $
              </p>
              <div className="modal-action">
                <button className="btn">Close</button>
              </div>
            </form>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default PcBuilderPage;

PcBuilderPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
