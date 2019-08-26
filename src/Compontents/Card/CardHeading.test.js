import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import {CardHeading} from "./CardHeading";
import {Heading} from "../Heading/Heading";
import {Media} from "../Media/Media";

describe("CardHeading Component", () => {

  test("without content", () => {
    const heading = <CardHeading/>;

    expect(shallow(heading).isEmptyRender()).toEqual(true);
  });

  test("whith heading", () => {
    const heading = <CardHeading
      heading={"Card Example"}
    />;

    const shallowHeading = shallow(heading);

    expect(shallowHeading.children()).toHaveLength(1);
    expect(shallowHeading.find(Heading).prop("level")).toEqual(2);

    const snapshot = renderer.create(heading).toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  test("with sub heading", () => {
    const heading = <CardHeading
      subHeading={"Demonstration of TDD"}
    />;

    const shallowHeading = shallow(heading);

    expect(shallowHeading.children()).toHaveLength(1);
    expect(shallowHeading.find(Heading).prop("level")).toEqual(3);

    const snapshot = renderer.create(heading).toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  test("with image", () => {
    const heading = <CardHeading
      avatar={"https://via.placeholder.com/60x60"}
    />;

    const shallowHeading = shallow(heading);

    expect(shallowHeading.children()).toHaveLength(1);
    expect(shallowHeading.find(Media)).toHaveLength(1);

    const snapshot = renderer.create(heading).toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  test("with all props", () => {
    const heading = <CardHeading
      avatar={"https://via.placeholder.com/60x60"}
      heading={"Card Example"}
      subHeading={"Demonstration of TDD"}
    />;

    const shallowHeading = shallow(heading);

    expect(shallowHeading.children()).toHaveLength(3);
    expect(shallowHeading.find(Heading)).toHaveLength(2);
    expect(shallowHeading.find(Media)).toHaveLength(1);

    const snapshot = renderer.create(heading).toJSON();
    expect(snapshot).toMatchSnapshot();
  })
});