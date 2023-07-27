import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/Images/pc-builder-logo.png";

const RootLayout = ({ children }) => {
  return (
    <div>
      <div className=" bg-[#202D3D] text-[#FFFFFF]">
        {/* #18AE91 */}
        <div className="w-[90%] mx-auto navbar py-4">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  bg-[#202D3D] rounded-box w-52"
              >
                <li className="border-b-2 border-b-[#202D3D]  hover:border-b-[#FFFFFF]">
                  <Link href="/pc-build" className="hover:text-[#18AE91]">
                    PC Builder
                  </Link>
                </li>
                <li
                  tabIndex={0}
                  className="border-b-2 border-b-[#202D3D]  hover:border-b-[#18AE91] "
                >
                  <details>
                    <summary className="hover:text-[#FFFFFF]">
                      Categories
                    </summary>
                    <ul className="p-2 bg-[#202D3D] text-[#FFFFFF]">
                      <li>
                        <a>Submenu 1</a>
                      </li>
                      <li>
                        <a>Submenu 2</a>
                      </li>
                    </ul>
                  </details>
                </li>
                <li className="border-b-2 border-b-[#202D3D]  hover:border-b-[#18AE91]">
                  <Link href="/" className="hover:text-[#FFFFFF]">
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <Link className="btn btn-ghost normal-case text-xl" href="/">
              <Image src={Logo} alt="logo" className="w-[200px]" />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-lg">
              <li className="border-b-2 border-b-[#202D3D]  hover:border-b-[#18AE91]">
                <Link href="/pc-build" className="hover:text-[#FFFFFF]">
                  PC Builder
                </Link>
              </li>
              <li
                tabIndex={0}
                className="border-b-2 border-b-[#202D3D]  hover:border-b-[#18AE91] "
              >
                <details>
                  <summary className="hover:text-[#FFFFFF]">Categories</summary>
                  <ul className="p-2 z-10 bg-[#202D3D] text-[#FFFFFF]">
                    <li>
                      <Link href="/">CPU / Processor</Link>
                    </li>
                    <li>
                      <Link href="/">Motherboard</Link>
                    </li>
                    <li>
                      <Link href="/">RAM</Link>
                    </li>
                    <li>
                      <Link href="/">Power Supply Unit</Link>
                    </li>
                    <li>
                      <Link href="/">Storage Device</Link>
                    </li>
                    <li>
                      <Link href="/">Monitor</Link>
                    </li>
                    <li>
                      <Link href="/">Others</Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li className="border-b-2 border-b-[#202D3D]  hover:border-b-[#18AE91]">
                <Link href="/" className="hover:text-[#FFFFFF]">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <Link href="/login" className="text-2xl cursor-pointer">
              Login
            </Link>
          </div>
        </div>
      </div>

      <div className="w-[90%] mx-auto">{children}</div>

      <footer className="footer p-10 bg-[#202D3D] text-[#FFFFFF]">
        <div>
          <Link href="/">
            <Image src={Logo} alt="logo" className="w-[200px]" />
          </Link>
          <p>
            PC BUILDER BANGLADESH
            <br />
            Providing reliable tech since 1992
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-[#18AE91]">Services</h2>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-[#18AE91]">Company</h2>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-[#18AE91]">Legal</h2>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
    </div>
  );
};

export default RootLayout;