import React from 'react';
import { shallow } from 'enzyme';
import renderer from "react-test-renderer";
import {Media} from "./Media";

describe("Card media component", () => {

  test("Card media without source", () => {
    const altText = "Placeholder Iamge";
    const avatar = <Media alt={altText} />;

    expect(shallow(avatar).isEmptyRender()).toEqual(true);

    const avatarSnapshot = renderer.create(avatar).toJSON();
    expect(avatarSnapshot).toMatchSnapshot();
  });

  test("Card media with source", () => {
    const image = "https://via.placeholder.com/300x200";
    const altText = "Placeholder Iamge";

    const media = <Media src={image} alt={altText} />;
    expect(shallow(media).prop("src")).toEqual(image);
    expect(shallow(media).prop("alt")).toEqual(altText);

    const mediaSnapshot = renderer.create(media).toJSON();
    expect(mediaSnapshot).toMatchSnapshot();
  });

});