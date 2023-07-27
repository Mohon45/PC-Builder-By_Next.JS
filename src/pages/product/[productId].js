import RootLayout from "@/components/Layouts/RootLayout";

const ProductDetailsPage = () => {
  return (
    <div>
      <h1>This is Product Details Page</h1>
    </div>
  );
};

export default ProductDetailsPage;

ProductDetailsPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
