import React, { Component } from 'react';

class Video extends Component {
	constructor(props) {
		super(props);
		this.state = { currentTime: 0 };
		this.updatePlayerState = this.updatePlayerState.bind(this);
	}

	updatePlayerState() {
		this.setState({
			currentTime: `${this._video.currentTime.toFixed(2)}`,
		});
	}

	componentDidMount() {
		this._video.addEventListener("timeupdate", this.updatePlayerState);
		this._video.src = "https://media.w3.org/2010/05/sintel/trailer.mp4";
	}

	render() {
		return (
			<div>
				<video controls ref={(ref) => this._video = ref} />
				{this.props.renderProp(this.state)}
			</div>
		);
	}
}

export default Video;
