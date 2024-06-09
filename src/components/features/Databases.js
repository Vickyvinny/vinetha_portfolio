import React from "react";
import Title from "../layouts/Title";
import Card from "./Card";
import { databases, featuresData } from "../../data/data";

const Databases = () => {
  return (
    <section id="features" className="w-full py-20">
      <Title des="Databases" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6 xl:gap-10">
        {databases.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default Databases;
