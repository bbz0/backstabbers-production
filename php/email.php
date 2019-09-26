<?php
	require_once 'vendor/autoload.php';
	require_once 'config/config.php';
	require_once 'lib/sendgrid.php';

	function handleEmailSend() {
		if ($_SERVER['REQUEST_METHOD'] == 'POST') {
			$_GET = filter_input_array(INPUT_GET, FILTER_SANITIZE_STRING);

			$errCount = 0;
			$name = $_GET['name'];
			$subject = $_GET['subject'];
			$email = $_GET['email'];
			$message = $_GET['message'];

			if (strlen($name) > 0 && strlen($name) <= 255 && preg_match('/(?:[a-zA-Z.\s])+/', $name)) {
				$name = ucwords(trim(substr(strip_tags($name), 0, 255)));
			} else {
				$errCount++;
			}

			if (strlen($subject) > 0 && strlen($subject) <= 255 && preg_match('/(?:[a-zA-Z.\s])+/', $subject)) {
				$subject = ucwords(trim(substr(strip_tags($subject), 0, 255)));
			} else {
				$errCount++;
			}

			if (strlen($email) > 0 && strlen($email) <= 255 && preg_match('/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/', $email)) {
				$email = ucwords(trim(substr(strip_tags($email), 0, 255)));
			} else {
				$errCount++;
			}

			if (strlen($message) > 0 && strlen($message) <= 500) {
				$message = ucwords(trim(substr(strip_tags($message), 0, 500)));
			} else {
				$errCount++;
			}

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