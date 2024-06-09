import React from "react";
import Title from "../layouts/Title";
import Card from "./Card";
import { languagesdata } from "../../data/data";

const Languages = () => {
  return (
    <section id="features" className="w-full py-20">
      <Title des="Languages" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6 xl:gap-10 justify-center">
        {languagesdata.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default Languages;
