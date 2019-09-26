<?php
	require_once 'vendor/autoload.php'; // load libraries
	require_once 'config/config.php'; // load config
	require_once 'lib/vimeo.php'; // load vimeo class

	function getAllVideos()
	{
		$vimeo = new Vimeo;
		// request data of 100 videos from the client's vimeo account, data includes the id, and thumbnail, data is sorted by date uploaded
		$videos = $vimeo->request('/users/backstabbersproduction/videos?fields=uri,name,pictures.sizes,tags&sort=date&per_page=100');
		// return as json
		return json_encode($videos);
	}

	echo getAllVideos();
