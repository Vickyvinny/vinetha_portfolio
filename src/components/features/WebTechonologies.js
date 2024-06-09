import React from "react";
import Title from "../layouts/Title";
import Card from "./Card";
import {  webData } from "../../data/data";

const WebTechonologies = () => {
  return (
    <section id="features" className="w-full py-20">
      <Title des="Web Technologies" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6 xl:gap-10">
        {webData.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default WebTechonologies;
