<?php
	class SendgridClient
	{
		private $apiKey = SENDGRID_API_KEY;
		private $toEmail = TO_EMAIL;
		private $sendgrid;
		private $email;

		public function __construct()
		{
			$this->email = new \SendGrid\Mail\Mail();
			$this->sendgrid = new \SendGrid($this->apiKey);
		}

		public function sendEmail($from, $subject, $name, $message)
		{
			$this->email->setFrom('bpquery@backstabbersproduction.com', $name);
			$this->email->setReplyTo($from);
			$this->email->setSubject($subject);
			$this->email->addTo($this->toEmail, 'Backstabbers Production');
			$this->email->addContent('text/plain', $message);

			try {
				$response = $this->sendgrid->send($this->email);
				return $response;
			} catch (Exception $e) {
				return $e->getMessage();
			}
		}
	}