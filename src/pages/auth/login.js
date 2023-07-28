import RootLayout from "@/components/Layouts/RootLayout";
import { Icon } from "@iconify/react";

const LoginPage = () => {
  return (
    <div>
      <div className="hero py-20 bg-base-200">
        <div className="w-[100%] hero-content flex-col lg:flex-row">
          <div className="w-[100%] md:w-[50%] text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Please Login with your GitHub or Google account
            </p>
          </div>
          <div className="w-[100%] md:w-[50%]card flex-shrink-0 max-w-sm shadow-2xl bg-base-100 rounded-md">
            <div className="card-body">
              <h1 className="text-center text-3xl font-semibold">Log In</h1>
              <div className="px-8 py-2 my-4 flex items-center rounded-md border-2 border-[#18AE91]">
                <Icon icon="icon-park:github" width={40} />
                <p className="ml-5 text-xl font-semibold">Log in with Github</p>
              </div>
              <div className="px-8 py-2 my-4 flex items-center rounded-md border-2 border-[#18AE91]">
                <Icon icon="flat-color-icons:google" width={40} />
                <p className="ml-5 text-xl font-semibold">Log in with Google</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

LoginPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
