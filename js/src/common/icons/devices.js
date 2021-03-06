/**
 * External dependencies
 */
import * as React from 'react';

/**
 * Internal dependencies
 */
import { SvgContainer } from '../components';

/**
 * The Devices icon.
 *
 * @return {React.ReactElement} The Devices icon.
 */
const Devices = () => (
	<SvgContainer>
		<path fill="none" d="M0 0h24v24H0V0z" />
		<path d="M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z" />
	</SvgContainer>
);

export default Devices;
