"use client";
import { FC, useEffect, useState } from "react";

const LOOP_TIME = 60 * 60 * 1000;

const Background: FC = () => {
  useEffect(() => {
    const getBackgoundImgLoop = setInterval(() => {
      setBackgroundImage(getBackgroundImage);
    }, LOOP_TIME);
    return () => clearInterval(getBackgoundImgLoop);
  }, []);
  const [backgroundImage, setBackgroundImage] = useState<string>(
    getBackgroundImage()
  );

  return (
    <div
      className={`${backgroundImage} bg-no-repeat bg-cover absolute top-0 left=0 h-full w-full z-[-1]`}
    ></div>
  );
};

export default Background;

const getBackgroundImage = (): string => {
  const currentDate = new Date();
  const currentTime = currentDate.getHours();
  if (currentTime >= 7 && currentTime < 20) return "bg-day";
  return "bg-night";
};
