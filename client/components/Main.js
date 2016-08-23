import React from 'react';
import { Link } from 'react-router';

import Nav from './Nav'

const Main = React.createClass({
	render() {
		return (
			<div>
        <Nav {...this.props} />
				{React.cloneElement(this.props.children, this.props)}
			</div>
		)
	}
});

export default Main;
