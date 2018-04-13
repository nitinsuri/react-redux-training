import Home from "./Home";
import {mount} from "enzyme";
import React from "react";

describe("Home tests ", () => {

    it("default test", () => {
        let wrapper = mount (<Home />);
        
        let homeInst = wrapper.instance();
        expect(homeInst.state.counter).toBe(0);

        console.log(wrapper.text());

        console.log(wrapper.html());

        expect(wrapper.text()).toContain(0);

        expect(wrapper.find("button").length).toBe(2);
        expect(wrapper.find("div").length).toBe(1); 
    });
});