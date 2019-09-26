<?php
	require_once 'vendor/autoload.php';
	require_once 'config/config.php';
	require_once 'lib/vimeo.php';

	function getMoreVideos()
	{
		if ($_SERVER['REQUEST_METHOD'] == 'GET') {
			$uri = '/videos/' . $_GET['id'];
			$vimeo = new Vimeo;
			$videos = $vimeo->request('/users/backstabbersproduction/videos?fields=uri,name,pictures.sizes,tags&sort=date&per_page=50');
			$i = 0;
			$indexes = array();
			$videosArr = array();
			while ($i < 4) {
				$randIndex = rand(0, count($videos['body']['data']) - 1);
				if (!in_array($randIndex, $indexes) && $videos['body']['data'][$randIndex]['uri'] !== $uri) {
					$indexes[$i] = $randIndex;
					$videosArr[$i] = $videos['body']['data'][$randIndex];
					$i++;
				}
			}

			return json_encode($videosArr);
		}
	}

	echo getMoreVideos(); 