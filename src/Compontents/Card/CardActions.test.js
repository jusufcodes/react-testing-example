import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import {CardActions} from "./CardActions";
import {Action, FavoriteAction} from "../Action/Action";

describe("CardActions Component", () => {

  test("CardActions without content", () => {
    const actions = <CardActions />;

    expect(shallow(actions).isEmptyRender()).toEqual(true);
  });

  test("CardActions with left content", () => {
    const actionsLeft = <CardActions left={(<Action>Action 1</Action>)} />;

    expect(shallow(actionsLeft).isEmptyRender()).toEqual(false);
    expect(shallow(actionsLeft).children()).toHaveLength(1);

    const actionSnaphot = renderer.create(actionsLeft).toJSON();
    expect(actionSnaphot).toMatchSnapshot();
  });

  test("CardActions with right content", () => {
    const actionsRight = <CardActions right={(<FavoriteAction />)} />;

    expect(shallow(actionsRight).isEmptyRender()).toEqual(false);
    expect(shallow(actionsRight).children()).toHaveLength(1);

    const actionSnaphot = renderer.create(actionsRight).toJSON();
    expect(actionSnaphot).toMatchSnapshot();
  });

  test("CardActions with left and right content", () => {
    const actions = <CardActions
      left={(<Action>Action 1</Action>)}
      right={(<FavoriteAction />)}
    />;

    expect(shallow(actions).isEmptyRender()).toEqual(false);
    expect(shallow(actions).children()).toHaveLength(2);

    const actionSnaphot = renderer.create(actions).toJSON();
    expect(actionSnaphot).toMatchSnapshot();
  });
});