import "./../../styles/header.css";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import HeaderCategory from "./HeaderCategory";

const Header = () => {
  return (
    <>
      <header className="header-wrapper">
        <div className="top-header">
          <div className="container">
            <div className="top-header-wrapper">
              <div className="top-header-left">
                <ul className="top-header-list">
                  <li>
                    <div className="top-header-dropdown">
                      <Link href={"#"} className="language-items">
                        <span>English</span>
                        <MdKeyboardArrowDown />
                      </Link>
                      {/* <div className="top-header-menu">
                        <ul>
                          <li>
                            <Link href={"#"}>English</Link>
                          </li>
                          <li>
                            <Link href={"#"}>Bangla</Link>
                          </li>
                          <li>
                            <Link href={"#"}>Japan</Link>
                          </li>
                        </ul>
                      </div> */}
                    </div>
                  </li>
                  <li>
                    <Link href={"#"}>Help Center</Link>
                  </li>
                  <li>
                    <Link href={"tel:#"}>Helpline: 0964781656</Link>
                  </li>
                </ul>
              </div>
              <div className="top-header-right">
                <ul>
                  <li>
                    <Link href={"#"}>Become a Seller</Link>
                  </li>
                  <li>
                    <Link href={"#"}>Order Track</Link>
                  </li>
                  <li>
                    <Link href={"#"} className="sign-up-btn">
                      Sign up / Login
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="header">
          <div className="container">
            <div className="header-content">
              <div className="header-logo">
                <Link href={"/"}>
                  <Image
                    width={129}
                    height={37}
                    src={"/assets/images/logo.png"}
                    alt="logo"
                  />
                </Link>
              </div>
              <div className="header-search-bar">
                <form action="">
                  <div className="form-input-search">
                    <input type="text" placeholder="Search Product" />
                    <button type="submit" className="form-search-btn">
                      <IoSearch />
                    </button>
                  </div>
                </form>
              </div>
              <div className="header-cart-items">
                <ul>
                  <li>
                    <Link href={"#"}>
                      <FaRegUser />
                    </Link>
                  </li>
                  <li>
                    <Link href={"#"}>
                      <FiHeart />
                    </Link>
                  </li>
                  <li>
                    <Link href={"#"}>
                      <BsCart3 />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="header-cloud-img">
                <Image
                  width={177}
                  height={44}
                  src={"/assets/images/cloud-img.png"}
                  alt="logo"
                />
              </div>
              <HeaderCategory />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
