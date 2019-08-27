import React from 'react';
import {shallow} from 'enzyme';
import renderer from "react-test-renderer";
import {Card} from "./Card";
import {CardHeading} from "./CardHeading";
import {Media} from "../Media/Media";
import {CardActions} from "./CardActions";
import {Action, FavoriteAction, ShareAction} from "../Action/Action";
import {Text} from "../Text/Text";
import { toMatchImageSnapshot } from "jest-image-snapshot";
import puppeteer from "puppeteer";

expect.extend({ toMatchImageSnapshot });

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

  test("Test CSS Regression", async () => {
    const browser = await puppeteer.launch({
      headless: true
    });

    const viewports = {
      desktop: { width: 1440, height: 900 },
      ipad: {
        portrait: { width: 768, height: 1024 },
        landscape: { width: 1024, height: 768 }
      }
    };

    const page = await browser.newPage();
    await page.goto("http://localhost:3000/Card"); // for localhost:3000 test start dev - yarn start

    /** ipad portrait */
    await page.setViewport(viewports.desktop);
    let image = await page.screenshot({fullpage: true});
    expect(image).toMatchImageSnapshot();

    /** ipad portrait */
    await page.setViewport(viewports.ipad.portrait);
    image = await page.screenshot({fullpage: true});
    expect(image).toMatchImageSnapshot();

    /** ipad landscape */
    await page.setViewport(viewports.ipad.landscape);
    image = await page.screenshot({fullpage: true});
    expect(image).toMatchImageSnapshot();

    browser.close();
  });
});
