/**
 * External dependencies
 */
import { render } from '@testing-library/react';

/**
 * Internal dependencies
 */
import GcbImageControl from '../image';

jest.mock( '@wordpress/api-fetch', () => {
	return jest.fn( () => {
		return Promise.resolve( {
			json: () => Promise.resolve( {} ),
		} );
	} );
} );

// @todo: remove this when the console warning no longer appears.
// Expected mock function not to be called but it was called with:
// ["wp.components.DropZoneProvider is deprecated. Note: wp.component.DropZone no longer needs a provider. wp.components.DropZoneProvider is safe to remove from your code."]
// Core still has an older components file, so removing the provider now crashes the editor.
console.warn = jest.fn(); /* eslint-disable-line no-console */

/**
 * Gets the props for the tested component.
 *
 * @return {Object} The props to pass to the component.
 */
const getProps = () => ( {
	field: {
		label: 'This is an example label',
		help: 'This is some help text',
		default: 'https://example.com/image.jpg',
	},
	getValue: jest.fn(),
	onChange: jest.fn(),
	instanceId: '85811934-a952-4cc1-8fca-01b825c11cfe',
} );

test( 'image control', () => {
	const props = getProps();
	const { getByText } = render( <GcbImageControl { ...props } /> );

	expect( getByText( props.field.label ) ).toBeInTheDocument();
	expect( getByText( props.field.help ) ).toBeInTheDocument();
} );
