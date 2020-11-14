/**
 * External dependencies
 */
import React from 'react';

/**
 * WordPress dependencies
 */
import { speak } from '@wordpress/a11y';
import { useEffect, useRef } from '@wordpress/element';
import { useCopyOnClick } from '@wordpress/compose';
import { __ } from '@wordpress/i18n';

/**
 * @typedef {Object} ClipboardCopyProps The component props.
 * @property {string} text The text to copy.
 */

/**
 * Copies text to the clipboard, and shows feedback on copying.
 *
 * Forked from the Gutenberg component ClipboardButton.
 *
 * https://github.com/WordPress/gutenberg/blob/50eaa95881ddc2f0f93045721f541a96bae5cfa8/packages/components/src/clipboard-button/index.js
 *
 * @param {ClipboardCopyProps} props The component props.
 * @return {React.ReactElement} Copies text to the clipboard.
 */
const ClipboardCopy = ( { text } ) => {
	const ref = useRef();
	const hasCopied = useCopyOnClick( ref, text );
	const lastHasCopied = useRef( hasCopied );

	useEffect( () => {
		if ( lastHasCopied.current === hasCopied ) {
			return;
		}

		lastHasCopied.current = hasCopied;
	}, [ hasCopied ] );

	const handleOnCopy = speak( 'Copied the text' );

	return (
		<div
			ref={ ref }
			onCopy={ handleOnCopy }
		>
			{
				hasCopied
					? __( 'Copied!', 'genesis-custom-blocks' )
					: <svg className="h-4 w-4 fill-current ml-1" fill="currentColor" viewBox="0 0 20 20"><path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z"></path><path d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z"></path></svg>
			}
		</div>
	);
};

export default ClipboardCopy;