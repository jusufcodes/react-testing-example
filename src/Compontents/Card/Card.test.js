import React from 'react';
import {shallow} from 'enzyme';
import renderer from "react-test-renderer";
import {Card} from "./Card";
import {CardHeading} from "./CardHeading";
import {Media} from "../Media/Media";
import {CardActions} from "./CardActions";
import {Action, FavoriteAction, ShareAction} from "../Action/Action";
import {Text} from "../Text/Text";

const demoHeading = {
  avatar: "https://via.placeholder.com/60x60",
  heading: "Card Example",
  subHeading: "Demonstration of TDD"
};

const demoMedia = "https://via.placeholder.com/300x200";
const demoText = "Lorem ipsum dolor sit amet";
const demoAction = {
  left: (
    <>
      <Action>Action 1</Action>
      <Action>Action 2</Action>
    </>
  ),
  right: (
    <>
      <FavoriteAction/>
      <ShareAction/>
    </>
  )
};

describe("Card component", () => {

  test("Test without props", () => {
    const card = <Card/>;

    expect(shallow(card).isEmptyRender()).toEqual(true);
  });

  test("Test with heading", () => {
    const card = <Card heading={demoHeading}/>;
    const shallowCard = shallow(card);

    expect(shallowCard.isEmptyRender()).toEqual(false);
    expect(shallowCard.children().length).toEqual(1);
    expect(shallowCard.find(CardHeading).length).toEqual(1);

    const snapshot = renderer.create(card).toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  test("Test with media", () => {
    const card = <Card media={demoMedia}/>;
    const shallowCard = shallow(card);

    expect(shallowCard.isEmptyRender()).toEqual(false);
    expect(shallowCard.children().length).toEqual(1);
    expect(shallowCard.find(Media).length).toEqual(1);

    const snapshot = renderer.create(card).toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  test("Test with Text", () => {
    const card = <Card text={demoText}/>;
    const shallowCard = shallow(card);

    expect(shallowCard.isEmptyRender()).toEqual(false);
    expect(shallowCard.children().length).toEqual(1);
    expect(shallowCard.find(Text).length).toEqual(1);

    const snapshot = renderer.create(card).toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  test("Test with Actions", () => {
    const card = <Card actions={demoAction}/>;
    const shallowCard = shallow(card);

    expect(shallowCard.isEmptyRender()).toEqual(false);
    expect(shallowCard.children().length).toEqual(1);
    expect(shallowCard.find(CardActions).length).toEqual(1);

    const snapshot = renderer.create(card).toJSON();
    expect(snapshot).toMatchSnapshot();
  });

});
