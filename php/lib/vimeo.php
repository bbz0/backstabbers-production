<?php
	// class that uses Vimeo's PHP library
	class Vimeo
	{	
		// api keys
		private $clientId = CLIENT_ID;
		private $clientSecret = CLIENT_SECRET;
		private $accessToken = ACCESS_TOKEN;

		private $client;

		public function __construct()
		{
			$this->client = new Vimeo\Vimeo($this->clientId, $this->clientSecret, $this->accessToken);
		}
		
		// send API request
		public function request($req)
		{
			try {
				$response = $this->client->request($req);
				return $response;
			} catch (Exception $e) {
				return 'Error';
			}
		}
	}