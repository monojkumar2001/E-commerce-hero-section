"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
interface MenuItem {
  title: string;
  link: string;
  childrens?: MenuItem[];
}
const HeaderCategory = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [catActive, setCatActive] = useState<number | null>(null);
  const [subActive, setSubActive] = useState<number | null>(null);
  const [subSubActive, setSubSubActive] = useState<number | null>(null);

  const fetchMenuItems = async () => {
    try {
      const response = await fetch(
        "https://api.shope.com.bd/api/v1/public/hero-categories"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setMenuItems(data);
    } catch (error) {
      if (error instanceof Error) {
        console.error("An unexpected error occurred:", error.message);
      } else {
        console.error("An unexpected error occurred:", error);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMenuItems();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="header-category-items">
      <ul className="menu-vertical">
        {menuItems.map((item, index) => (
          <li
            className={`megamenu-container ${
              catActive === index ? "active" : ""
            }`}
            onMouseEnter={() => setCatActive(index)}
            onMouseLeave={() => setCatActive(null)}
            key={index}
          >
            <Link href={item.link} className="cate-megamenu-list">
              <span>{item.title}</span>
              {item.childrens && <MdKeyboardArrowRight />}
            </Link>
            {item.childrens && (
              <div className="megamenu">
                <ul className="sub-menu-vertical">
                  {item.childrens.map((item, index) => (
                    <li
                      className={`sub-menu-vertical-list ${
                        subActive === index ? "active" : ""
                      }`}
                      onMouseEnter={() => setSubActive(index)}
                      onMouseLeave={() => setSubActive(null)}
                      key={index}
                    >
                      <Link href={item.link} className="sub-megamenu-list">
                        <span>{item.title}</span>
                        {item.childrens && <MdKeyboardArrowRight />}
                      </Link>
                      {item.childrens && (
                        <div className="sub-megamenu">
                          <ul className="sub-menu-vertical">
                            {item.childrens.map((item, index) => (
                              <li
                                className={`sub-sub-menu-vertical-list ${
                                  subSubActive === index ? "active" : ""
                                }`}
                                onMouseEnter={() => setSubSubActive(index)}
                                onMouseLeave={() => setSubSubActive(null)}
                                key={index}
                              >
                                <Link
                                  href={item.link}
                                  className="sub-sub-megamenu-list"
                                >
                                  <span>{item.title}</span>
                                  {item.childrens && <MdKeyboardArrowRight />}
                                </Link>
                                {item.childrens && (
                                  <div className="sub-sub-megamenu">
                                    <ul className="sub-menu-vertical">
                                      {item.childrens.map((item, index) => (
                                        <li
                                          className={`sub-sub-menu-vertical-list ${
                                            subSubActive === index
                                              ? "active"
                                              : ""
                                          }`}
                                          onMouseEnter={() =>
                                            setSubSubActive(index)
                                          }
                                          onMouseLeave={() =>
                                            setSubSubActive(null)
                                          }
                                          key={index}
                                        >
                                          <Link
                                            href={item.link}
                                            className="sub-sub-megamenu-list"
                                          >
                                            <span>{item.title}</span>
                                            {item.childrens && (
                                              <MdKeyboardArrowRight />
                                            )}
                                          </Link>
                                          {item.childrens && (
                                            <div className="sub-sub-megamenu">
                                              <ul className="sub-menu-vertical">
                                                {item.childrens.map(
                                                  (item, index) => (
                                                    <li
                                                      className={`sub-sub-menu-vertical-list ${
                                                        subSubActive === index
                                                          ? "active"
                                                          : ""
                                                      }`}
                                                      onMouseEnter={() =>
                                                        setSubSubActive(index)
                                                      }
                                                      onMouseLeave={() =>
                                                        setSubSubActive(null)
                                                      }
                                                      key={index}
                                                    >
                                                      <Link
                                                        href={item.link}
                                                        className="sub-sub-megamenu-list"
                                                      >
                                                        <span>
                                                          {item.title}
                                                        </span>
                                                        {item.childrens && (
                                                          <MdKeyboardArrowRight />
                                                        )}
                                                      </Link>
                                                      {/* {item.childrens && (
                                                        <div className="sub-megamenu"></div>
                                                      )} */}
                                                    </li>
                                                  )
                                                )}
                                              </ul>
                                            </div>
                                          )}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HeaderCategory;
