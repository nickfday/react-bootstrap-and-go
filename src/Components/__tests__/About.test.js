import React from "react";
import ReactDom from "react-dom";
import About from "../About";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

// it("renders without crashing", () => {
//   const div = document.createElement("div");
//   ReactDom.render(<About />, div);
// });

describe("<About />", () => {
  //Test view
  it("renders a div with class wrapper", () => {
    const wrapper = shallow(<About />);
    expect(wrapper.find("div.about").length).toEqual(1);
  });
});
