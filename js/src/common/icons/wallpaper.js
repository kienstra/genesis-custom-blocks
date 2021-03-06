/**
 * External dependencies
 */
import * as React from 'react';

/**
 * Internal dependencies
 */
import { SvgContainer } from '../components';

/**
 * The Wallpaper icon.
 *
 * @return {React.ReactElement} The Wallpaper icon.
 */
const Wallpaper = () => (
	<SvgContainer>
		<path fill="none" d="M0 0h24v24H0V0z" />
		<path d="M4 4h7V2H4c-1.1 0-2 .9-2 2v7h2V4zm6 9l-4 5h12l-3-4-2.03 2.71L10 13zm7-4.5c0-.83-.67-1.5-1.5-1.5S14 7.67 14 8.5s.67 1.5 1.5 1.5S17 9.33 17 8.5zM20 2h-7v2h7v7h2V4c0-1.1-.9-2-2-2zm0 18h-7v2h7c1.1 0 2-.9 2-2v-7h-2v7zM4 13H2v7c0 1.1.9 2 2 2h7v-2H4v-7z" />
	</SvgContainer>
);

export default Wallpaper;
