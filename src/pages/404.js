import Image from "next/image";
import NotFoundImage from "@/assets/Images/notfound.jpg";
import Link from "next/link";
import { useRouter } from "next/router";

const NotFoundPage = () => {
  const router = useRouter();

  setTimeout(() => {
    router.push("/");
  }, 3000);
  return (
    <div className="text-center">
      <Image className="w-[600px] mx-auto" src={NotFoundImage} alt="" />
      <Link href="/">
        <button className="btn outline outline-[#18AE91]">Go To Home</button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
