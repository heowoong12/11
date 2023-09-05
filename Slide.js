import React from "react";
import "./slide.module.css";

export default function Slide() {
  return (
    <span className="slide">
      <img
        className="slidelogo"
        src="img/slide01.png"
        alt="로고"
        style={{
          float: "right",
          width: "360px",
          height: "375px",
          position: "relative",
          left: "200px",
          bottom: "350px",
        }}
      />
    </span>
  );
}
