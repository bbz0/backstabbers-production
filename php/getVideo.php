<?php
	require_once 'vendor/autoload.php'; // load libraries
	require_once 'config/config.php'; // load config
	require_once 'lib/vimeo.php'; // load vimeo class

	function getVideo()
	{
		// listen for get request
		if ($_SERVER['REQUEST_METHOD'] == 'GET') {
			$vimeo = new Vimeo;
			// request video data from client's vimeo account with the video id
			$video = $vimeo->request('/users/backstabbersproduction/videos/' . $_GET['id'] . '?fields=uri,name,description,tags');
			// return video data in json
			return json_encode($video);
		}
	}

	echo getVideo(); 