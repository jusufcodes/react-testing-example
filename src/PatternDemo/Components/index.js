import React from "react";
import {Action, FavoriteAction, ShareAction} from "../../Compontents/Action/Action";
import {Card} from "../../Compontents/Card/Card";
import {Text} from "../../Compontents/Text/Text";
import {Media} from "../../Compontents/Media/Media";
import {Heading} from "../../Compontents/Heading/Heading";

export function CardDemo() {
  return (
    <Card
      heading={{
        avatar: "https://via.placeholder.com/60x60",
        heading: "Card Example",
        subHeading: "Demonstration of TDD"
      }}
      media="https://via.placeholder.com/500x300"
      text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam"
      actions={{
        left: (
          <>
            <Action>Action 1</Action>
            <Action>Action 2</Action>
          </>
        ),
        right: (
          <>
            <FavoriteAction postId={1} />
            <ShareAction postId={1} />
          </>
        )
      }}
    />
  );
}

export function LoadPattern(props) {
  const {component, fn} = props;

  let demo;
  switch (component) {
    case "Heading":
      demo = (
        <>
          <Heading level={1}>Demo Heading</Heading>
          <Heading level={2}>Demo Heading</Heading>
          <Heading level={3}>Demo Heading</Heading>
          <Heading level={4}>Demo Heading</Heading>
          <Heading level={5}>Demo Heading</Heading>
          <Heading level={6}>Demo Heading</Heading>
        </>
      );
      break;
    case "Media":
      demo = <Media src={"https://via.placeholder.com/1600x900"} alt={"16x9"} />;
      break;
    case "Text":
      demo = <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At</Text>;
      break;
    default:
      demo = <CardDemo />;
  }

  return demo;
}