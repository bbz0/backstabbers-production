<?php
	require_once 'vendor/autoload.php'; // load libraries
	require_once 'config/config.php'; // load config
	require_once 'lib/sendgrid.php'; // load vimeo class

	function handleEmailSend() {
		// listens to post request
		if ($_SERVER['REQUEST_METHOD'] == 'POST') {
			// parameters sent from front-end are stored in $_GET
			// filter and sanitize received data
			$_GET = filter_input_array(INPUT_GET, FILTER_SANITIZE_STRING);

			$errCount = 0; // error count
			$name = $_GET['name'];
			$subject = $_GET['subject'];
			$email = $_GET['email'];
			$message = $_GET['message'];

			// test name length and if it has alphabet characters
			if (strlen($name) > 0 && strlen($name) <= 255 && preg_match('/(?:[a-zA-Z.\s])+/', $name)) {
				$name = ucwords(trim(substr(strip_tags($name), 0, 255))); // further sanitize the string, strip html tags, reduce to 255 characters.
			} else {
				$errCount++;
			}

			// tests email subject length and if it's alphabet characters only
			if (strlen($subject) > 0 && strlen($subject) <= 255 && preg_match('/(?:[a-zA-Z.\s])+/', $subject)) {
				$subject = ucwords(trim(substr(strip_tags($subject), 0, 255))); // further sanitize the string
			} else {
				$errCount++;
			}

			// tests email address length and if it's a valid email address format
			if (strlen($email) > 0 && strlen($email) <= 255 && preg_match('/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/', $email)) {
				$email = ucwords(trim(substr(strip_tags($email), 0, 255))); // further sanitize the string
			} else {
				$errCount++;
			}

			// tests email message length
			if (strlen($message) > 0 && strlen($message) <= 500) {
				$message = ucwords(trim(substr(strip_tags($message), 0, 500))); // further sanitize the string
			} else {
				$errCount++;
			}

			// if there are no errors send the email query
			if ($errCount == 0) {
				$sendGridClient = new SendgridClient;
				$resposne = $sendGridClient->sendEmail($email, $subject, $name, $message);
				return 'Email Sent.';
			} else {
				return 'Error, something went wrong';
			}
		};
	}

	echo json_encode(handleEmailSend());