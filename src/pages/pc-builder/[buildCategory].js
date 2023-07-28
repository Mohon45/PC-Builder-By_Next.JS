import RootLayout from "@/components/Layouts/RootLayout";
import Image from "next/image";
import { useRouter } from "next/router";
import ProuctImage from "@/assets/Images/demo-ram.jpg";
import ProductRating from "@/components/UI/ProductRating";
import Head from "next/head";
import axios from "axios";
import { useDispatch } from "react-redux";
import { selectComponent } from "@/redux/features/pcBuilder/pcBuilderSlice";

const BuilCatagoryProductPage = ({ products }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const selectPcComponent = (product) => {
    dispatch(selectComponent(product));
    router.push("/pc-builder");
  };
  return (
    <div className="w-[100%] md:w-[80%] mx-auto my-5">
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
      <div>
        {products?.map((item, index) => (
          <div
            className="md:h-[200px] bg-[#F2F4F8] px-5 rounded-md flex flex-col md:flex-row justify-between items-center md: mb-3"
            key={index}
          >
            <div className="flex flex-col text-center md:text-left md:flex-row">
              <Image
                className="w-[200px] h-[150px] my-auto mx-auto"
                src={item?.image}
                width={200}
                height={150}
                alt=""
              />
              <div className="md:ml-8">
                <h1 className="text-xl font-semibold my-5 md:my-0">
                  {item?.productName}
                </h1>
                <ul type="circle" className="list-outside text-md">
                  <li>Catagory : {item.category}</li>
                  <li>Status : {item?.status}</li>
                  <li className="flex">
                    <span className="mr-2">Rating :</span>{" "}
                    {<ProductRating rating={item?.rating} />}
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-xl font-semibold mb-5">
                {item?.price} <span className="md:text-2xl">$</span>
              </h1>
              <button
                className="btn bg-[#18AE91] text-[#FFFFFF] hover:bg-[#18AE91] mb-5 md:mb-0"
                onClick={() => selectPcComponent(item)}
              >
                Add To Builder
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuilCatagoryProductPage;

BuilCatagoryProductPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async ({ params }) => {
  const result = await axios
    .get(`http://localhost:5000/api/v1/products/${params.buildCategory}`)
    .then((res) => {
      return res.data?.data;
    })
    .catch((error) => console.log(error));

  return {
    props: {
      products: result,
    },
  };
};
