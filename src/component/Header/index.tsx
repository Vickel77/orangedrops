"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function Header() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [elementPos, setElementPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: any) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const followMouse = () => {
      setElementPos((prevPos) => ({
        x: prevPos.x + (mousePos.x * 0.05 - prevPos.x),
        y: prevPos.y + (mousePos.y * 0.05 - prevPos.y),
      }));
    };

    const animationFrame = requestAnimationFrame(followMouse);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [mousePos]);

  return (
    <header className="relative z-[-1] min-h-[90vh] flex flex-col place-items-center before:absolute before:top-0 before:left-0 before:h-[500px] before:w-[500px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-secondary before:opacity-50 before:to-transparent before:blur-2xl  before:content-[''] after:absolute after:bottom-0 after:right-0 after:-z-20 after:h-[500px] after:opacity-50 after:blur-2xl after:w-[500px] after:translate-x-1/3 after:bg-gradient-radial after:from-primary  after:content-[''] text-center pt-40">
      {/* <div className="w-[300px] h-[300px] " /> */}
      <div className=" w-[90%] md:w-[80%] mb-5 relative">
        <h1 className="text-2xl md:text-5xl text-secondary font-bold mb-5 leading-[2rem] md:leading-[4rem]">
          Pioneering food production and health
        </h1>
      </div>
      <div className="overflow-visible before:opacity-5 before:w-[800px] before:top-20 before:h-[700px] before:border-2 before:content-[''] before:absolute before:rounded-full before:border-secondary  before:border-dashed  before:left-[50%] before:translate-x-[-50%]">
        <div className="opacity-50">
          <Image
            className=" hidden md:block drop-shadow-xl absolute left-20 top-52"
            width={70}
            height={200}
            alt=""
            src="/snack-sketch-2.png"
            style={{
              transform: `translate3d(${elementPos.x}px, ${elementPos.y}px, 0)`,
            }}
          />
          <Image
            className="hidden md:block drop-shadow-xl absolute left-40 bottom-0"
            width={70}
            height={200}
            alt=""
            src="/gym.png"
            style={{
              transform: `translate3d(${elementPos.x}px, ${elementPos.y}px, 0)`,
              transition: "0.1s ",
            }}
          />

          <Image
            className="hidden md:block drop-shadow-xl absolute right-40 bottom-0"
            width={70}
            height={200}
            alt=""
            src="/report.png"
            style={{
              transform: `translate3d(${elementPos.x}px, ${elementPos.y}px, 0)`,
            }}
          />
          <Image
            className="hidden md:block drop-shadow-xl absolute right-20 top-52"
            width={70}
            height={200}
            alt=""
            src="/snack-sketch-3.png"
            style={{
              transform: `translate3d(${elementPos.x}px, ${elementPos.y}px, 0)`,
              transition: "0.1s ",
            }}
          />
        </div>

        <Image
          data-aos="fade-up"
          className="drop-shadow-xl rounded-lg"
          width={600}
          height={200}
          alt=""
          src="/wwd1.jpeg"
        />
      </div>
    </header>
  );
}

export default Header;
