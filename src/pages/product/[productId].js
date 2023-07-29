import RootLayout from "@/components/Layouts/RootLayout";
import Image from "next/image";
import ProuctImage from "@/assets/Images/demo-ram.jpg";
import ProductRating from "@/components/UI/ProductRating";
import { Icon } from "@iconify/react";
import Head from "next/head";
import axios from "axios";
import capitalizeFirstLetter from "@/utils/camleCaseConvert";

const ProductDetailsPage = ({ product }) => {
  return (
    <div className="my-5 ">
      <Head>
        <title>Product Details</title>
        <meta
          name="description"
          content="This is a Custom PC Build and Pc Accessories Saling Website"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <Image
            className="mx-auto my-auto"
            src={product?.image}
            alt=""
            width={300}
            height={100}
          />
        </div>
        <div>
          <h1 className="text-3xl font-semibold text-[#18AE91]">
            {product?.productName}
          </h1>
          <div className="flex my-5 ">
            <p className="bg-[#F5F6FC] text-lg px-5 pb-2 rounded-full mr-3">
              Price : {product?.price} <span className="text-2xl">&#2547;</span>
            </p>
            <p className="bg-[#F5F6FC] text-lg px-5 py-2 rounded-full mr-3">
              Status : {product?.status}
            </p>
          </div>
          <div>
            <h1 className="w-[150px] text-2xl font-semibold border-b-2 border-b-[#18AE91]">
              Key Features
            </h1>
            <div className="mt-5 text-lg font-semibold">
              <h2>Model : {product?.model}</h2>
              <h2>Category : {capitalizeFirstLetter(product?.category)}</h2>

              <h2 className="flex">
                <span className="mr-3">Rating :</span>{" "}
                {<ProductRating rating={product?.rating} />}
              </h2>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-2 border-[#18AE91] my-3" />
      <div>
        <h1 className="text-3xl font-semibold my-4">Description</h1>
        <p className="w-[80%] mx-auto text-justify text-lg mb-4">
          <span className="text-2xl font-bold">{product?.productName}</span>{" "}
          <br />
          {product?.description}
        </p>
      </div>
      <hr className="border-2 border-[#18AE91]" />
      <div>
        <div className="flex justify-between my-2">
          <div>
            <h2 className="text-3xl font-semibold">Questions (0)</h2>
            <p className="text-lg">
              Have question about this product? Get specific details about this
              product from expert.
            </p>
          </div>
          <button className="px-4 py-1 h-[50px] text-[#18AE91] border-2 border-[#18AE91] rounded-lg hover:bg-[#18AE91] hover:text-[#FFFFFF]">
            Ask Question
          </button>
        </div>
        <hr />
        <div className="hero h-[300px] bg-base-200 rounded-md">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <div className="w-[70px] mx-auto h-[70px] bg-slate-300 rounded-full p-3">
                <Icon icon="ri:message-2-line" width={50} />
              </div>
              <p className="py-6">
                There are no questions asked yet. Be the first one to ask a
                question.
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-2 border-[#18AE91] mt-5" />
      <div>
        <div className="flex justify-between my-2">
          <div>
            <h2 className="text-3xl font-semibold">Reviews (10)</h2>
            <p className="text-lg">
              Get specific details about this product from customers who own it.
            </p>
          </div>
          <button className="px-4 py-1 h-[50px] text-[#18AE91] border-2 border-[#18AE91] rounded-lg hover:bg-[#18AE91] hover:text-[#FFFFFF]">
            Write a Review
          </button>
        </div>
        <hr />
        <div className="hero bg-base-200 rounded-md px-10 py-3 flex flex-col">
          {product?.reviews?.map((item, index) => (
            <div
              className="w-[100%] flex items-center bg-[#18AE91] rounded-md px-10 py-5 mb-3 "
              key={index}
            >
              <Icon
                icon="carbon:user-avatar-filled"
                width={50}
                color="#FFFFFF"
              />
              <div className="ml-5 text-[#FFFFFF]">
                <p>{item}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;

ProductDetailsPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const products = await axios
    .get("https://pc-builder-server.onrender.com/api/v1/products")
    .then((res) => {
      return res.data || [];
    })
    .catch((error) => {
      return { paths: [], fallback: false };
    });

  const paths = products?.data?.map((product) => ({
    params: { productId: product._id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const result = await axios
    .get(
      `https://pc-builder-server.onrender.com/api/v1/product/${params.productId}`
    )
    .then((res) => {
      return res.data?.data;
    })
    .catch((error) => console.log(error));

  return {
    props: {
      product: result || {},
    },
  };
};
