/**
 * External dependencies
 */
import React from 'react';

/**
 * The NoteAdd icon.
 *
 * @return {React.ReactElement} The NoteAdd icon.
 */
const NoteAdd = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
		>
			<path fill="none" d="M0 0h24v24H0V0z" />
			<path d="M13 11h-2v3H8v2h3v3h2v-3h3v-2h-3zm1-9H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z" />
		</svg>
	);
};

export default NoteAdd;