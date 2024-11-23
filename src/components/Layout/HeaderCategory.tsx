"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const HeaderCategory = () => {
  const [menuItems, setMenuItems] = useState([]); // Menu items state
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  const fetchMenuItems = async () => {
    try {
      const response = await fetch(
        "https://api.shope.com.bd/api/v1/public/hero-categories"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setMenuItems(data); // Update state with fetched data
    } catch (err) {
      console.error("Error fetching menu items:", err);
      setError(err.message); // Update error state
    } finally {
      setLoading(false); // Stop loading
    }
  };

  useEffect(() => {
    fetchMenuItems();
  }, []);

  // Recursive function to render nested menus
  const renderSubMenu = (items) => {
    return (
      <ul className="sub-menu-vertical">
        {items.map((item, index) => (
          <li className="sub-menu-vertical-list" key={index}>
            <Link href={item.link} className="sub-megamenu-list">
              <span>{item.title}</span>
              {item.childrens && <MdKeyboardArrowRight />}
            </Link>
            {item.childrens && (
              <div className="sub-megamenu">{renderSubMenu(item.childrens)}</div>
            )}
          </li>
        ))}
      </ul>
    );
  };

  if (loading) {
    return <div>Loading categories...</div>; // Add a loading message
  }

  if (error) {
    return <div>Error loading categories: {error}</div>; // Display error message
  }

  return (
    <div className="header-category-items">
      <ul className="menu-vertical">
        {menuItems.map((item, index) => (
          <li className="megamenu-container" key={index}>
            <Link href={item.link || "#"} className="cate-megamenu-list">
              <span>{item.title}</span>
              {item.childrens && <MdKeyboardArrowRight />}
            </Link>
            {item.childrens && (
              <div className="megamenu">{renderSubMenu(item.childrens)}</div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HeaderCategory;
