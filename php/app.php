<?php
	require_once 'vendor/autoload.php';
	require_once 'config/config.php';
	require_once 'lib/vimeo.php';

	function getAllVideos()
	{
		$vimeo = new Vimeo;
		$videos = $vimeo->request('/users/backstabbersproduction/videos?fields=uri,name,pictures.sizes,tags&sort=date&per_page=100');
		return json_encode($videos);
	}

	echo getAllVideos();
