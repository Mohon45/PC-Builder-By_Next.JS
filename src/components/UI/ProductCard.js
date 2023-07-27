import Image from "next/image";
import ProuctImage from "@/assets/Images/demo-ram.jpg";
import ProductRating from "./ProductRating";
import Link from "next/link";

const ProductCard = () => {
  return (
    <Link href="/">
      <div className="card w-96  shadow-xl">
        <figure>
          <Image src={ProuctImage} alt="" className="w-[300px] h-[250px]" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            APACER 4GB DDR4 2400Mhz Panther Golden Desktop Ram
          </h2>
          <h3 className="text-lg">Catagory : RAM</h3>
          <p className="text-xl">
            Price : 2000 <span className="text-2xl">&#2547;</span>
          </p>
          <div className="card-actions justify-between items-center mt-2">
            <div className="badge badge-outline py-2">Stock In</div>
            {/* <div className="badge badge-outline">Products</div> */}
            <ProductRating rating={1} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
