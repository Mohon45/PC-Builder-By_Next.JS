import Image from "next/image";
import ProuctImage from "@/assets/Images/demo-ram.jpg";
import ProductRating from "./ProductRating";
import Link from "next/link";
import capitalizeFirstLetter from "@/utils/camleCaseConvert";

const ProductCard = ({ product }) => {
  return (
    <div className="card w-96 mx-auto shadow-xl">
      <Link href={`/product/${product?._id}`}>
        <figure>
          <Image
            src={product?.image}
            width={300}
            height={250}
            alt=""
            className="w-[300px] h-[250px]"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {product?.productName?.slice(0, 25)}...
          </h2>
          <h3 className="text-lg">
            Catagory : {capitalizeFirstLetter(product?.category)}
          </h3>
          <p className="text-xl">
            Price : {product?.price} <span className="text-2xl">$</span>
          </p>
          <div className="card-actions justify-between items-center mt-2">
            <div className="badge badge-outline py-2 text-lg px-3">
              <p>{product?.status}</p>
            </div>
            {/* <div className="badge badge-outline">Products</div> */}
            <ProductRating rating={product?.rating} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
