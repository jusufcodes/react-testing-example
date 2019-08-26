import React from "react";

export const Text = (props) => {
  return props.children ? <p>{props.children}</p> : null;
};