import React from 'react';
import App from './App';
import * as renderer from "react-test-renderer";

function handleDOMMocks(element) {
	if (element.type === 'video') {
	  return {
		addEventListener: jest.fn()
	  };
	}
	return null;
  }
describe("App test", () => {
	test("App renders as expected", () => {
		const options = {
			createNodeMock: handleDOMMocks
		};
		const component = renderer.create(
			<App />,
			options
		);
		expect(component.toJSON()).toMatchSnapshot();
	});
});
