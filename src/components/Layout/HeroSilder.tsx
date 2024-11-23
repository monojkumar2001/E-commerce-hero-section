"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import Image from "next/image";
const HeroSilder = () => {
  return (
    <div>
      <section className="hero-section">
        <div className="hero-wrapper">
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="hero-banner-img">
                <Image
                  src="/assets/images/slidebanner.png"
                  alt="hero banner"
                  width={1920}
                  height={391}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="hero-banner-img">
                <Image
                  src="/assets/images/slidebanner.png"
                  alt="hero banner"
                  width={1920}
                  height={391}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="hero-banner-img">
                <Image
                  src="/assets/images/slidebanner.png"
                  alt="hero banner"
                  width={1920}
                  height={391}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="hero-banner-img">
                <Image
                  src="/assets/images/slidebanner.png"
                  alt="hero banner"
                  width={1920}
                  height={391}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="hero-banner-img">
                <Image
                  src="/assets/images/slidebanner.png"
                  alt="hero banner"
                  width={1920}
                  height={391}
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default HeroSilder;
