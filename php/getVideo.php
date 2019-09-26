<?php
	require_once 'vendor/autoload.php';
	require_once 'config/config.php';
	require_once 'lib/vimeo.php';

	function getVideo()
	{
		if ($_SERVER['REQUEST_METHOD'] == 'GET') {
			$vimeo = new Vimeo;
			$video = $vimeo->request('/users/backstabbersproduction/videos/' . $_GET['id'] . '?fields=uri,name,description,tags');
			return json_encode($video);
		}
	}

	echo getVideo(); 