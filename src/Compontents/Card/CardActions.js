import React from "react";

export const CardActions = (props) => {
  return (props.left || props.right) ? (
    <div className={"cardActions"}>
      {props.left && (
        <div className={"cardActionsLeft"}>
          {props.left}
        </div>
      )}
      {props.right && (
        <div className={"cardActionsRight"}>
          {props.right}
        </div>
      )}
    </div>
  ) : null;
};