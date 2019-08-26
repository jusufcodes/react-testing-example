import React from "react";
import {CardHeading} from "./CardHeading";
import {Media} from "../Media/Media";
import {Text} from "../Text/Text";
import {CardActions} from "./CardActions";

export const Card = (props) => {
  return (props.heading || props.media || props.text || props.actions) ? (
    <div className={"card"}>
      {props.heading && (
        <CardHeading
          avatar={props.heading.avatar}
          heading={props.heading.heading}
          subHeading={props.heading.subHeading}
        />
      )}

      {props.media && (
        <Media src={props.media} />
      )}

      {props.text && (
        <Text>{props.text}</Text>
      )}

      {props.actions && (
        <CardActions
          {...props.actions}
        />
      )}
    </div>
  ) : null;
};