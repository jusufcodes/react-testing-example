import React from 'react';
import { shallow } from 'enzyme';
import renderer from "react-test-renderer";
import {Text} from "./Text";

describe("Card text component", () => {
  const demoText = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt";

  test("Text without text", () => {
    const content = <Text />;

    expect(shallow(content).isEmptyRender()).toEqual(true);

    const contentSnapshot = renderer.create(content).toJSON();
    expect(contentSnapshot).toMatchSnapshot();
  });

  test("Text with text", () => {
    const content = <Text>{demoText}</Text>;

    expect(shallow(content).text()).toEqual(demoText);

    const contentSnapshot = renderer.create(content).toJSON();
    expect(contentSnapshot).toMatchSnapshot();
  });
});