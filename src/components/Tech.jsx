/* eslint-disable */
import React, { useState } from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import "./styles.css";

const Tech = () => {
  const [isRotating, setIsRotating] = useState(false);

  const handleRotate = () => {
    setIsRotating(!isRotating);
  };
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <div
            className={`rotating-circle ${isRotating ? "rotate" : ""}`}
            onClick={handleRotate}
          >
            <div
              style={{
                backgroundColor: "white",
                width: "fit-content",
                borderRadius: "50%",
                padding: "10px",
                textAlign: "center",
              }}
            >
              {technology.icon && (
                <img src={technology.icon} alt="Icon" width={60} height={60} />
              )}
            </div>

            {/* Add icon if provided */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
