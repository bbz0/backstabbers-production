<?php
	require_once 'vendor/autoload.php'; // load libraries
	require_once 'config/config.php'; // load config
	require_once 'lib/vimeo.php'; // load vimeo class

	function getMoreVideos()
	{	
		// listen for get request
		if ($_SERVER['REQUEST_METHOD'] == 'GET') {

			$uri = '/videos/' . $_GET['id']; // video uri

			$vimeo = new Vimeo;
			// request video data from the client's vimeo account
			$videos = $vimeo->request('/users/backstabbersproduction/videos?fields=uri,name,pictures.sizes,tags&sort=date&per_page=50');

			// loop that will randomly select 4 videos from the received data and store them in a new array
			$i = 0;
			$indexes = array();
			$videosArr = array();
			while ($i < 4) {
				$randIndex = rand(0, count($videos['body']['data']) - 1);
				// if data is not yet in array and not the one loaded in the current page then store data into the array
				if (!in_array($randIndex, $indexes) && $videos['body']['data'][$randIndex]['uri'] !== $uri) {
					$indexes[$i] = $randIndex;
					$videosArr[$i] = $videos['body']['data'][$randIndex];
					$i++;
				}
			}
			// return data in json
			return json_encode($videosArr);
		}
	}

	echo getMoreVideos(); 