/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { PanelBody, SelectControl } from '@wordpress/components';

import apiFetch from '@wordpress/api-fetch';
import { useState, useEffect } from '@wordpress/element';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {

	const { category } = attributes;
	const [options, setOptions]	= useState( null );
	
	console.log( 'Categor', attributes );

	useEffect( () => {
		apiFetch( { path: '/wp/v2/categories' } ).then(
			( result ) => {
				const categories = result.map( ( single_cat ) => {
					return {
						'label' : single_cat.name,
						'value' : single_cat.id
					}
				});

				setOptions( categories );
			}
		)
	}, []);

	return (
		<>
			<InspectorControls>
				<PanelBody title="Settings" initialOpen={true}>
					<SelectControl 
						label="Select category"
						value={category}
						options={options}
						onChange={ (value) => {
							console.log('valor', value);
							setAttributes( { category: parseInt( value ) } )
						}} />
				</PanelBody>
			</InspectorControls>
			<div { ...useBlockProps() }>
				Esto es el render
			</div>
		</>
	);
}
