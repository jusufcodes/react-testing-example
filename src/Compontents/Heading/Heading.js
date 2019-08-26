import React from "react";

export const Heading = (props) => {
  const level = props.level ? props.level : 1;

  const Elem = `h${level}`;

  return <Elem>{props.children}</Elem>
};

export const Avatar = (props) => {
  return props.src ? <img src={props.src} alt={props.alt} /> : null;
};