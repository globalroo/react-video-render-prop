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
	test("App renders playerStatsPanel component as expected", () => {
		const app = new App();
		const component = app.playerStatsPanel({currentTime: 0})
		const renderedComponent = renderer.create(
			component
		);
		expect(renderedComponent.toJSON()).toMatchSnapshot();
	});
});
