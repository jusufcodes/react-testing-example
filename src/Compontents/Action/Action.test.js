import React from 'react';
import { shallow } from 'enzyme';
import renderer from "react-test-renderer";
import {Action, FavoriteAction, likeAndShare, ShareAction} from "./Action";
import FavoriteIcon from "../Icon/Favorite.svg";
import ShareIcon from "../Icon/Share.svg";

const demoPosts = "https://jsonplaceholder.typicode.com/posts";

describe("Card action component", () => {
  /**
   * TEST REST API
   */
  test("Rest API", async () => {
    // FAIL
    const likedOrShared_error = await likeAndShare();
    expect(likedOrShared_error).toEqual(undefined);

    // SUCCESS
    const likedOrShared_success = await likeAndShare(101);
    expect(likedOrShared_success).toEqual(101);
  });

  /**
   * DEFAULT ACTION
   *  **/
  test("Action without text", () => {
    const action = <Action />;

    expect(shallow(action).isEmptyRender()).toEqual(true);

    const contentSnapshot = renderer.create(action).toJSON();
    expect(contentSnapshot).toMatchSnapshot();
  });

  test("Action with text", () => {
    const children = "Action 1";

    const action = <Action>{children}</Action>;

    expect(shallow(action).text()).toContain(children);

    const contentSnapshot = renderer.create(action).toJSON();
    expect(contentSnapshot).toMatchSnapshot();
  });

  test("Action onClick event", () => {
    const children = "Action 1";

    const handleClick = jest.fn();
    const action = shallow(<Action onClick={handleClick}>{children}</Action>);

    action.simulate("click");
    expect(handleClick.mock.calls.length).toEqual(1);

    action.simulate("click");
    expect(handleClick.mock.calls.length).toEqual(2);
  });

  /**
   *  FAVORITE
   *  **/
  test("Action as favorite - no props", () => {
    const action = <FavoriteAction />;

    expect(shallow(action).isEmptyRender()).toEqual(true);
  });

  test("Action as favorite - with PostID and Like", () => {
    const action = <FavoriteAction postId={1} />;
    const shallowAction = shallow(action);

    expect(shallowAction.find("img")).toHaveLength(1);
    expect(shallowAction.find("img").prop("src")).toEqual(FavoriteIcon);

    const contentSnapshot = renderer.create(action).toJSON();
    expect(contentSnapshot).toMatchSnapshot();

    shallowAction.simulate("click");
    shallowAction.update();

    expect(shallowAction.find("img").hasClass("active")).toBe(true);

    shallowAction.simulate("click");
    shallowAction.update();

    expect(shallowAction.find("img").hasClass("active")).toBe(false);
  });

  /**
   * SHARE
   * **/
  test("Action as share - no props", () => {
    const action = <ShareAction />;

    expect(shallow(action).isEmptyRender()).toEqual(true);
  });

  test("Action as share - with PostID and Shared", () => {
    const action = <ShareAction postId={1} />;
    const shallowAction = shallow(action);

    expect(shallowAction.find("img")).toHaveLength(1);
    expect(shallowAction.find("img").prop("src")).toEqual(ShareIcon);

    const contentSnapshot = renderer.create(action).toJSON();
    expect(contentSnapshot).toMatchSnapshot();

    shallowAction.simulate("click");
    shallowAction.update();

    expect(shallowAction.find("img").hasClass("active")).toBe(true);

    shallowAction.simulate("click");
    shallowAction.update();

    expect(shallowAction.find("img").hasClass("active")).toBe(false);
  });

});