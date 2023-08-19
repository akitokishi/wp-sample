<?php
/**Load adminstrator changes for UserChoicePopup
 *
 * @package miniorange-otp-verification/helper/templates
 */

namespace OTP\Helper\Templates;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use OTP\Objects\MoITemplate;
use OTP\Objects\Template;
use OTP\Traits\Instance;

/**
 * This is the UserChoice Popup class. This class handles all the
 * functionality related to UserChoice popup functionality of the plugin. It extends the Template
 * and implements the MoITemplate class to implement some much needed functions.
 */
if ( ! class_exists( 'UserChoicePopup' ) ) {
	/**
	 * UserChoicePopup class
	 */
	class UserChoicePopup extends Template implements MoITemplate {

		use Instance;
		/**
		 * Constructor to declare variables of the class on initialization
		 **/
		protected function __construct() {
			$this->key                = 'USERCHOICE';
			$this->template_editor_id = 'customEmailMsgEditor2';
			parent::__construct();
		}

		/**
		 * This function initializes the default HTML of the PopUp Template
		 * to be used by the plugin. This function is called only during
		 * plugin activation or when user resets the templates. In Both
		 * cases the plugin initializes the template to the default value
		 * that the plugin ships with.
		 *
		 * @param string $templates - the template string to be parsed.
		 *
		 * @note: The html content has been minified Check helper/templates/templates.html
		 * @return array
		 */
		public function get_defaults( $templates ) {
			if ( ! is_array( $templates ) ) {
				$templates = array();
			}
			$pop_up_templates_request = wp_remote_get( MOV_URL . 'includes/html/userchoice.min.html' );

			if ( is_wp_error( $pop_up_templates_request ) ) {
				return $templates;
			}
			$templates[ $this->get_template_key() ] = wp_remote_retrieve_body( $pop_up_templates_request );
			return $templates;
		}
		/**
		 * This function is used to parse the template and replace the
		 * tags with the appropriate content. Some of the contents are
		 * not shown if the admin/user is just previewing the pop-up.
		 *
		 * @param string $template the HTML Template.
		 * @param string $message the message to be show in the popup.
		 * @param string $otp_type the otp type invoked.
		 * @param string $from_both does user have the option to choose b/w email and sms verification.
		 * @return mixed|string
		 */
		public function parse( $template, $message, $otp_type, $from_both ) {
			$required_scripts   = $this->getRequiredFormsSkeleton( $otp_type, $from_both );
			$extra_post_data    = $this->preview ? '' : extra_post_data();
			$extra_form_fields  = '{{EXTRA_POST_DATA}}<input type="hidden" name="option" value="miniorange-validate-otp-choice-form" />';
			$extra_form_fields .= '<input type="hidden" id="mopopup_wpnonce" name="mopopup_wpnonce" value="' . wp_create_nonce( $this->nonce ) . '"/>';

			$template = str_replace( '{{JQUERY}}', $this->jquery_url, $template );
			$template = str_replace( '{{FORM_ID}}', 'mo_validate_form', $template );
			$template = str_replace( '{{GO_BACK_ACTION_CALL}}', 'mo_validation_goback();', $template );
			$template = str_replace( '{{MO_CSS_URL}}', MOV_CSS_URL, $template );
			$template = str_replace( '{{REQUIRED_FORMS_SCRIPTS}}', $required_scripts, $template );
			$template = str_replace( '{{HEADER}}', mo_( 'Validate OTP (One Time Passcode)' ), $template );
			$template = str_replace( '{{GO_BACK}}', mo_( '&larr; Go Back' ), $template );
			$template = str_replace( '{{MESSAGE}}', mo_( $message ), $template );
			$template = str_replace( '{{BUTTON_TEXT}}', mo_( 'Send OTP' ), $template );
			$template = str_replace( '{{REQUIRED_FIELDS}}', $extra_form_fields, $template );
			$template = str_replace( '{{EXTRA_POST_DATA}}', $extra_post_data, $template );
			return $template;
		}

		/**
		 * This function is used to replace the {{REQUIRED_FORMS_SCRIPTS}} in the template
		 * with the appropriate scripts and forms. These forms and scripts are required
		 * for the popup to work.
		 *
		 * @param string $otp_type - the otp type invoked.
		 * @param string $from_both - does user have the option to choose b/w email and sms verification.
		 * @return mixed|string
		 */
		private function getRequiredFormsSkeleton( $otp_type, $from_both ) {
			$required_fields = '<form name="f" method="post" action="" id="validation_goBack_form">
				<input id="validation_goBack" name="option" value="validation_goBack" type="hidden"/>
			</form>{{SCRIPTS}}';
			$required_fields = str_replace( '{{SCRIPTS}}', $this->getRequiredScripts(), $required_fields );
			return $required_fields;
		}

		/**
		 * This function is used to replace the {{SCRIPTS}} in the template
		 * with the appropriate scripts. These scripts are required
		 * for the popup to work. Scripts are not added if the form is in
		 * preview mode.
		 */
		private function getRequiredScripts() {
			$scripts = '<style>.mo_customer_validation-modal{display:block!important}</style>';
			if ( ! $this->preview ) {
				$scripts .= '<script>function mo_validation_goback(){document.getElementById("validation_goBack_form").submit();}</script>';
			} else {
				$scripts .= '<script>$mo=jQuery;$mo("#mo_validate_form").submit(function(e){e.preventDefault();});</script>';
			}
			return $scripts;
		}
	}
}
