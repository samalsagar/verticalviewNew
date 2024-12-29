import React from "react";
import "./Cards.css";
// import ConstEngg from "../../assets/ConstEngg.jpeg";
// import Consultancy from "../../assets/Consultancy.jpeg";
// import DesignTech from "../../assets/DesignTech.jpeg";
// import ExteInter from "../../assets/ExteInter.jpeg";
// import Modular from "../../assets/Modular.jpeg";
import constr from '../../assets/Web folder/Service_Construction.png'
import ExteInter from '../../assets/Web folder/Service_Interior.png'
import Modular from '../../assets/Web folder/Service_Furniture.png'
import Consultancy from '../../assets/Web folder/Service_Consultancy.png'
import DesignTech from '../../assets/Web folder/Service_Design.png'






function Cards() {
  const features = [
    {
      title: "Construction & Engineering",
      image:  constr ,
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
        <div className="flex flex-wrap justify-between mt-10">
          {features.map((feature, index) => (
            <div key={index} className="card">
              <div className="flex rounded-lg h-full flex-col pb-8 pt-8 ps-3 pe-2">
                <div className="flex justify-center" style={{objectFit: 'contain' , height: '10rem'}}>
                    <img style={{height: '10rem'}} src={feature.image} alt="" />
                </div>
                <div className="flex justify-center mb-2 mt-2">
                  <h2 className="text-purple-950 text-lg font-bold text-shadow">
                    {feature.title}
                  </h2>
                </div>
                <div className="flex flex-col justify-between flex-grow">
                  <p className="leading-relaxed text-base text-black font-medium">
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
