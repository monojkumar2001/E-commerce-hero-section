"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const HeaderCategory = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [catActive, setCatActive] = useState(null);
  const [subActive, setSubActive] = useState(null);
  const [subSubActive, setSubSubActive] = useState(null);

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
      setError(error.message);
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
