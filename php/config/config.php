<?php
	header('Access-Control-Allow-Origin: *');
	header('Access-Control-Allow-Methods: GET, POST');
	header('Access-Control-Allow-Headers: X-Requested-With');

	$dotenv = Dotenv\Dotenv::create(dirname(__DIR__));
	$dotenv->load();

	define('CLIENT_ID', getenv('CLIENT_ID'));
	define('CLIENT_SECRET', getenv('CLIENT_SECRET'));
	define('ACCESS_TOKEN', getenv('ACCESS_TOKEN'));
	define('SENDGRID_API_KEY', getenv('SENDGRID_API_KEY'));
	define('TO_EMAIL', getenv('TO_EMAIL'));