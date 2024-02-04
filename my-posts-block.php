<?php
/**
 * Plugin Name:       My Posts Block
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       my-posts-block
 *
 * @package           create-block
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function my_posts_block_my_posts_block_block_init() {
	register_block_type(
		__DIR__ . '/build',
		array(
			'render_callback' => 'render_posts_by_category',
		)
	);
}
add_action( 'init', 'my_posts_block_my_posts_block_block_init' );

function render_posts_by_category( $attributes ) {

	$cat_id      = $attributes['category'];
	if ( $cat_id ) {
		$args = array(
			'cat'            => $cat_id,
			'posts_per_page' => 4,
		);
	} else {
		$args = array();
	}

	$posts_query = new WP_Query( $args );

	ob_start();

	if ( $posts_query->have_posts() ) {
		?>
		<section class="posts-related">
			<?php
			while ( $posts_query->have_posts() ) {
				$posts_query->the_post();
				?>
				<article>
					<?php the_title( '<h2>', '</h2>' ); ?>
				</article>
				<?php
			}
			?>
		</section> <!-- .posts-related -->
		<?php
	} else {
		echo '<p>There is no posts!</p>';
	}

	return ob_get_clean();
}
