import React from 'react';
import Video from './Video';
import * as renderer from "react-test-renderer";

const renderPropComponent = (state) => (
	<div> mockComponent {state.currentTime} </div>
);

function handleDOMMocks(element) {
	if (element.type === 'video') {
	  return {
		addEventListener: jest.fn()
	  };
	}
	return null;
  }

describe("Video component tests", () => {
	test("Video component renders as expected", () => {
		const options = {
			createNodeMock: handleDOMMocks
		};
		const component = renderer.create(
			<Video renderProp={renderPropComponent}/>,
			options
		);
		expect(component.toJSON()).toMatchSnapshot();
	});

	test("updatePlayerState returns the expected state", () => {
		const spy = jest.fn();
		const component = new Video({ renderProp: renderPropComponent });
		component.setState = spy;
		component._video = {
			currentTime: 23.123456
		}
		component.updatePlayerState();
		expect(spy).toHaveBeenCalledWith({"currentTime": "23.12"});
	});
});
