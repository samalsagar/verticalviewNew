import React from "react";
import "./Cards.css";
import ConstEngg from "../../assets/ConstEngg.jpeg";
import Consultancy from "../../assets/Consultancy.jpeg";
import DesignTech from "../../assets/DesignTech.jpeg";
import ExteInter from "../../assets/ExteInter.jpeg";
import Modular from "../../assets/Modular.jpeg";



function Cards() {
  const features = [
    {
      title: "Construction & Engineering",
      image:  ConstEngg ,
      description:
        "We deal in all type of commercial and residential infrastructure development.",
    },
    {
      title: "Exterior & Interior",
      image: ExteInter ,
      description:
        "we deal in all type of commercial and residential interior and exterior work.",
    },
    {
      title: "Modular Furnitures",
      image: Modular,
      description: "we fulfill your needs for office and home furnitures.",
    },
    {
      title: "Consultancy & Support",
      image: Consultancy ,
      description:
        "our expertise are there to guide and support you for satisfication.",
    },
    {
        title: "Design & Technology",
        image: DesignTech ,
        description:
          "get the top notch design in no time with the best possibility for your space.",
      },
  ];
  return (
    <>
      <div className="background relative w-full h-auto mt-5 try rounded-3xl">
        <div className="flex flex-wrap justify-center mt-10">
          {features.map((feature, index) => (
            <div key={index} className="p-4 card">
              <div className="flex rounded-lg h-full dark:bg-gray-800 p-8 flex-col">
                <div className="flex items-center" style={{objectFit: 'contain' , height: '13rem'}}>
                    <img style={{height: '10rem'}} src={feature.image} alt="" />
                </div>
                <div className="flex items-center mb-3">
                  <h2 className="text-white dark:text-white text-lg font-medium">
                    {feature.title}
                  </h2>
                </div>
                <div className="flex flex-col justify-between flex-grow">
                  <p className="leading-relaxed text-base text-black dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Cards;
