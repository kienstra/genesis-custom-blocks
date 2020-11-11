/**
 * WordPress dependencies
 */
import { useDispatch, useSelect } from '@wordpress/data';
import { useCallback } from '@wordpress/element';

const useBlock = () => {
	const editedPostContent = useSelect(
		( select ) => select( 'core/editor' ).getEditedPostContent(),
		[]
	);
	const { editPost } = useDispatch( 'core/editor' );

	const getFullBlock = useCallback( () => {
		try {
			return JSON.parse( editedPostContent );
		} catch ( error ) {
			return {};
		}
	}, [ editedPostContent ] );

	const fullBlock = getFullBlock();
	const blockNameWithNamespace = Object.keys( fullBlock )[ 0 ];
	const block = fullBlock[ blockNameWithNamespace ];

	/**
	 * Changes a field setting.
	 *
	 * @param {string} settingKey The key of the setting, like 'label' or 'placeholder'.
	 * @param {any} newSettingValue The new setting value.
	 */
	const changeBlock = useCallback( ( key, newValue ) => {
		fullBlock[ blockNameWithNamespace ][ key ] = newValue;
		editPost( { content: JSON.stringify( fullBlock ) } );
	}, [ blockNameWithNamespace, editPost, fullBlock ] );

	return { block, changeBlock };
};

export default useBlock;