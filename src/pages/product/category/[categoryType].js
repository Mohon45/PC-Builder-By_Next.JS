import RootLayout from "@/components/Layouts/RootLayout";
import ProductCard from "@/components/UI/ProductCard";
import capitalizeFirstLetter from "@/utils/camleCaseConvert";
import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";

const CategoryPage = ({ products }) => {
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mx-auto">
        {products?.map((item, index) => (
          <div key={index}>
            <ProductCard product={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;

CategoryPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:5000/api/v1/products");
  const products = await res.json();
  const paths = products?.data?.map((product) => {
    if (product.category === ("GPU" || "Mouse" || "Keyboard")) {
      return { params: { categoryType: "others" } };
    } else {
      return { params: { categoryType: product.category } };
    }
  });

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const result = await axios
    .get(`http://localhost:5000/api/v1/products/${params.categoryType}`)
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
