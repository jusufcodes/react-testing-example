import React from "react";

export const Media = (props) => {
  return props.src ? <img src={props.src} alt={props.alt ? props.alt : ""} /> : null;
};
