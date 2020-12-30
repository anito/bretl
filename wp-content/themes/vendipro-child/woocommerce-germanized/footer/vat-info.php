<?php
/**
 * Footer global tax info
 *
 * @author 		Vendidero
 * @package 	WooCommerceGermanized/Templates
 * @version     1.0
 */

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly
?>
<?php if ( get_option('woocommerce_gzd_small_enterprise') != 'yes' ) : ?>
	<p class="footer-info vat-info"><?php echo ( get_option( 'woocommerce_tax_display_shop' ) == 'incl' ) ? __( 'All prices incl. VAT.', 'woocommerce-germanized' ) : __( 'All prices excl. VAT.', 'woocommerce-germanized' ) ?> zzgl. <span><a href="/versand/" style="text-decoration: underline !important;"> Versand</a></span></p>
	<p class="footer-info sale-info">Copyright &copy; <?php echo date('Y'); ?>&nbsp;<span>CGD Sokatsch</span><sup>&reg;</sup>
        <span class="">Design by </span><span class="powered-by-webpremiere"><a href="https://webpremiere.de"  target="_blank"><img class="logo" src="https://files.webpremiere.de/f/a4015838ca4941d3a90f/?dl=1" alt="WebPremiere"></a><sup>&reg;</sup></span>
	</p>
<?php else : ?>
	<p class="footer-info vat-info"><?php echo wc_gzd_get_small_business_notice(); ?></p>
<?php endif; ?>