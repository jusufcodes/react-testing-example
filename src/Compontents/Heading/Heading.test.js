import React from 'react';
import { shallow } from 'enzyme';
import {Avatar, Heading} from "./Heading";
import renderer from 'react-test-renderer';

describe("Heading component", () => {

  test("Heading level by props", () => {
    for (let i = 1; i <= 6; i++) {
      const heading = shallow(<Heading level={i}>Welcome to React</Heading>);

      expect(heading.is(`h${i}`)).toEqual(true);
    }
  });

  test("Heading level without props", () => {
    const heading = shallow(<Heading>Welcome to React</Heading>);

    expect(heading.is("h1")).toEqual(true);
  });

  test("Heading text", () => {
    const heading = shallow(<Heading>Welcome to React</Heading>);

    expect(heading.text()).toEqual("Welcome to React");
  });

  test("Avatar without source", () => {
    const altText = "Placeholder Iamge";
    const avatar = <Avatar alt={altText} />;

    expect(shallow(avatar).isEmptyRender()).toEqual(true);

    const avatarSnapshot = renderer.create(avatar).toJSON();
    expect(avatarSnapshot).toMatchSnapshot();
  });

});
