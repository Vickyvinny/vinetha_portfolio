import React, { useState } from "react";
import Languages from "./Languages";
import Frameworks from "./Frameworks";
import WebTechonologies from "./WebTechonologies";
import Databases from "./Databases";
import CloudTechnology from "./CloudTechnology";

const SkillsBar = () => {
  const [languages, setLanguages] = useState(true);
  const [frem, setFrem] = useState(false);
   const [web, setWeb] = useState(false);
  const [database, setDatabase] = useState(false);
  const [cloud, setCloud] = useState(false);
  return (
    <section id="resume" className="w-full py-20">
      <div>
        <ul className="w-full grid grid-cols-1  md:grid-cols-3 xl:grid-cols-5">
          <li
            onClick={() =>
              setLanguages(true) &
              setFrem(false) &
              setDatabase(false) &
              setCloud(false) &
              setWeb(false)
            }
            className={`${
              languages ? "border-designColor rounded-lg" : "border-transparent"
            } resumeLi`}
          >
            Languages
          </li>
          <li
            onClick={() =>
              setLanguages(false) &
              setFrem(false) &
              setDatabase(false) &
              setCloud(false) &
              setWeb(true)
            }
            className={`${
              web ? "border-designColor rounded-lg" : "border-transparent"
            } resumeLi`}
          >
            Web Technologies
          </li>
          <li
            onClick={() =>
              setLanguages(false) &
              setFrem(true) &
              setDatabase(false) &
              setCloud(false) &
              setWeb(false)
            }
            className={`${
              frem ? "border-designColor rounded-lg" : "border-transparent"
            } resumeLi`}
          >
            Frameworks
          </li>
          <li
            onClick={() =>
              setLanguages(false) &
              setFrem(false) &
              setDatabase(true) &
              setCloud(false) &
              setWeb(false)
            }
            className={`${
              database ? "border-designColor rounded-lg" : "border-transparent"
            } resumeLi`}
          >
            Databases
          </li>
          <li
            onClick={() =>
              setLanguages(false) &
              setFrem(false) &
              setDatabase(false) &
              setCloud(true) &
              setWeb(false)
            }
            className={`${
              cloud ? "border-designColor rounded-lg" : "border-transparent"
            } resumeLi`}
          >
            Cloud Technologies
          </li>
        </ul>
      </div>
      {languages && <Languages />}
      {web && <WebTechonologies />}
      {frem && <Frameworks />}
      {database && <Databases />}
      {cloud && <CloudTechnology />}
    </section>
  );
};

export default SkillsBar;
