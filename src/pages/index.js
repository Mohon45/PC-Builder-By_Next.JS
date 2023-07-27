import RootLayout from "@/components/Layouts/RootLayout";
import Banner from "@/components/UI/Banner";
import ProductCard from "@/components/UI/ProductCard";

const { default: Head } = require("next/head");

const HomePage = () => {
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
        <h1 className="text-3xl mt-5 mb-2 font-semibold text-[#18AE91]">
          Trending Accessories
        </h1>
        <ProductCard />
      </div>
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
