import RootLayout from "@/components/Layouts/RootLayout";
import Image from "next/image";
import { useRouter } from "next/router";
import ProuctImage from "@/assets/Images/demo-ram.jpg";
import ProductRating from "@/components/UI/ProductRating";
import Head from "next/head";

const BuilCatagoryProductPage = () => {
  const router = useRouter();
  const { buildCatagory } = router.query;
  console.log(buildCatagory);
  return (
    <div className="w-[80%] mx-auto my-5">
      <Head>
        <title>Select Accessories</title>
        <meta
          name="description"
          content="This is a Custom PC Build and Pc Accessories Saling Website"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-3xl font-semibold mb-5">
        Select accessories for your building computer
      </h1>
      <div className="h-[200px] bg-[#F2F4F8] px-5 rounded-md flex justify-between items-center">
        <div className="flex">
          <Image
            className="w-[200px] h-[150px] my-auto"
            src={ProuctImage}
            alt=""
          />
          <div className="ml-8">
            <h1 className="text-xl font-semibold">
              CRYORIG Socket sTR4 (AMD Threadripper) Upgrade Kit
            </h1>
            <ul type="circle" className="list-outside text-md">
              <li>Catagory : RAM</li>
              <li>Status : In-Stock</li>
              <li className="flex">
                <span className="mr-2">Rating :</span>{" "}
                {<ProductRating rating={3.5} />}
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-xl font-semibold mb-5">
            10000 <span className="text-3xl">&#2547;</span>
          </h1>
          <button className="btn bg-[#18AE91] text-[#FFFFFF] hover:bg-[#18AE91]">
            Add To Builder
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuilCatagoryProductPage;

BuilCatagoryProductPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
