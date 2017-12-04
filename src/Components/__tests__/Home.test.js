import React from "react";
import ReactDom from "react-dom";
import Home from "../Home";
import { shallow, mount, render, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("<Home />", () => {
  //Test view
  it("renders an editor area", () => {
    const editor = shallow(<Home />);
    expect(editor.find("div.home").length).toEqual(1);
  });

  // Test Markup
  it("renders the home output", () => {
    const editor = shallow(<Home />);
    const expectedOutput =
      '<div class="home"><h1>Welcome</h1><p>React Web App is a simple web starter kit using react-create-app with bootstrap 4 beta and a number of react components to give a comfortable starting point.</p><p>This aims to save developers time when they wish to quickly spin-up a web app and get to work rather than have to carry out the repetitive chore of setting up. This can obviously be forked and customised to the developers requirements.</p><p>It can be used as an example of how to consume components and give developers new to react a stepping stone so they don&#x27;t give up before they have started.</p><p>At timeof writing it is simply a web app with a Bootstrap v4 beta theme and navigable using React Router v4. In the near future I plan to add a basic blog component fed by a restful API.</p><p><a href="https://github.com/nickfday/react-bootstrap-and-go" target="_blank" rel="noopener noreferrer">Github Repo</a></p></div>';
    const realOutput = editor.find("div.home").html();
    expect(realOutput.indexOf(expectedOutput > -1));
  });
});
