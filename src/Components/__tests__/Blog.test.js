import React from "react";
import ReactDom from "react-dom";
import { Blog, BlogRow } from "../Blog";
import { shallow, mount, render, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

const testItem = {
  body:
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
  date: "06/11/2017",
  featuredImage:
    "https://media.istockphoto.com/photos/man-using-laptop-computer-picture-id590062300?s=2048x2048",
  featuredImageAlt: "Description of Image",
  summary:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  tags: ["Fun", "First"],
  title: "My First Post Ever!",
  uuid: 1
};

describe("<Blog />", () => {
  it("it outputs the expected wrapper class", () => {
    const wrapper = shallow(<Blog />);
    expect(wrapper.find("div.Blog").length).toEqual(1);
  });
});

describe("<BlogRow />", () => {
  it("outputs the expected title", () => {
    const wrapper = shallow(<BlogRow item={[testItem]} />);
    expect(wrapper.find("div.post .title").text()).toEqual(
      "My First Post Ever!"
    );
  });

  it("outputs the expected body", () => {
    const wrapper = shallow(<BlogRow item={[testItem]} />);
    expect(wrapper.find("div.post .body").text()).toEqual(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    );
  });

  it("outputs the expected date", () => {
    const wrapper = shallow(<BlogRow item={[testItem]} />);
    expect(wrapper.find("div.post .date").text()).toEqual("06/11/2017");
  });

  it("outputs the expected image src", () => {
    const wrapper = shallow(<BlogRow item={[testItem]} />);
    expect(wrapper.find("div.post .img img").prop("src")).toEqual(
      "https://media.istockphoto.com/photos/man-using-laptop-computer-picture-id590062300?s=2048x2048"
    );
  });
});
