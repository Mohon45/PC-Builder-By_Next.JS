import RootLayout from "@/components/Layouts/RootLayout";
import ProductCard from "@/components/UI/ProductCard";
import capitalizeFirstLetter from "@/utils/camleCaseConvert";
import Head from "next/head";
import { useRouter } from "next/router";

const CategoryPage = () => {
  const router = useRouter();
  const { categoryType } = router.query;
  return (
    <div className="my-5">
      <Head>
        <title>Accessories</title>
        <meta
          name="description"
          content="This is a Custom PC Build and Pc Accessories Saling Website"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-3xl font-semibold">
        {categoryType !== "others"
          ? `All ${capitalizeFirstLetter(categoryType)} Accessories`
          : "Others Accessories"}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default CategoryPage;

CategoryPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
