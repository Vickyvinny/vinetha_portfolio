import React from "react";
import Title from "../layouts/Title";
import Card from "./Card";
import { cloudData, featuresData } from "../../data/data";

const CloudTechnology = () => {
  return (
    <section id="features" className="w-full py-20">
      <Title des="Cloud Technologies" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6 xl:gap-10">
        {cloudData.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default CloudTechnology;
