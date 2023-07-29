import RootLayout from "@/components/Layouts/RootLayout";
import Banner from "@/components/UI/Banner";
// import FeaturedCategoryPage from "@/components/UI/FeaturedCategory";
import ProductCard from "@/components/UI/ProductCard";
import axios from "axios";
import dynamic from "next/dynamic";

const { default: Head } = require("next/head");

const HomePage = ({ homeProducts }) => {
  const FeaturedCategoryPage = dynamic(
    () => import("@/components/UI/FeaturedCategory"),
    {
      loading: () => <h1 className="text-5xl">Loading...</h1>,
      ssr: false,
    }
  );
  console.log(FeaturedCategoryPage);
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
      {FeaturedCategoryPage ? (
        <>
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
            <FeaturedCategoryPage />
          </div>
        </>
      ) : (
        <div className="w-[100%] h-[100vh] flex items-center justify-center">
          <span className="w-[100px] loading loading-spinner "></span>
        </div>
      )}
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const result = await axios
    .get("https://pc-builder-server.onrender.com/api/v1/home-products")
    .then((res) => {
      return res.data?.data;
    })
    .catch((error) => console.log(error));

  return {
    props: {
      homeProducts: result || [],
    },
    revalidate: 10,
  };
};
