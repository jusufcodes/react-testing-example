import React from "react";
import {Media} from "../Media/Media";
import {Heading} from "../Heading/Heading";

export const CardHeading = (props) => {
  return (props.avatar || props.heading || props.subHeading) ? (
    <div className={"cardHeading"}>
      {props.avatar && <Media src={props.avatar} />}
      {props.heading && <Heading level={2}>{props.heading}</Heading>}
      {props.subHeading && <Heading level={3}>{props.subHeading}</Heading>}
    </div>
  ) : null;
};