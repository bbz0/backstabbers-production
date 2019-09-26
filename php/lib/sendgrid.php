<?php
	// class to use Sendgrid PHP library
	class SendgridClient
	{
		private $apiKey = SENDGRID_API_KEY; // api key
		private $toEmail = TO_EMAIL; // email address to receive query emails
		private $sendgrid;
		private $email;

		public function __construct()
		{
			$this->email = new \SendGrid\Mail\Mail();
			$this->sendgrid = new \SendGrid($this->apiKey);
		}

		public function sendEmail($from, $subject, $name, $message)
		{
			$this->email->setFrom('bpquery@backstabbersproduction.com', $name); // set the 'from' email, and the 'name' set in the contact form
			$this->email->setReplyTo($from); // set the 'reply to' to the email address set in the contact form
			$this->email->setSubject($subject); // set email subject to the subject set in the contact form
 			$this->email->addTo($this->toEmail, 'Backstabbers Production'); // the email address to send the email to.
			$this->email->addContent('text/plain', $message); // email message format

			try {
				$response = $this->sendgrid->send($this->email); // send email
				return $response;
			} catch (Exception $e) {
				return $e->getMessage();
			}
		}
	}