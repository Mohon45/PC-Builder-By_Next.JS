import RootLayout from "@/components/Layouts/RootLayout";
import Banner from "@/components/UI/Banner";
import ProductCard from "@/components/UI/ProductCard";
import axios from "axios";

const { default: Head } = require("next/head");

const HomePage = ({ homeProducts }) => {
  return (
    <div>
      <Head>
        <title>PC BUILDER</title>
        <meta
          name="description"
          content="This is a Custom PC Build and Pc Accessories Saling Website"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      <div className="my-8">
        <h1 className="text-3xl my-5 font-semibold text-[#18AE91]">
          Trending Accessories
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mx-auto">
          {homeProducts?.map((item, index) => (
            <div key={index}>
              <ProductCard product={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const result = await axios
    .get("http://localhost:5000/api/v1/home-products")
    .then((res) => {
      return res.data?.data;
    })
    .catch((error) => console.log(error));

  return {
    props: {
      homeProducts: result,
    },
    revalidate: 10,
  };
};
