import React, { Component } from 'react';
import Loader from '../../components/Loader/Loader'; // the 'loading' logo component
import Footer from '../../components/Footer/Footer'; // footer component
import MoreWorksThumb from './MoreWorksThumb/MoreWorksThumb'; // thumbnail component for the 'more works' section
import '@vimeo/player'; // vimeo player sdk

class Work extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			workId: this.props.match.params.workId, // video vimeo id
			video: '', // video data
			moreVideos: [] // array of random videos for the 'more works' section
		};
		// bind method to state to be able to set state
		this.fetchVideos = this.fetchVideos.bind(this);
	}

	// request video data to back-end, then back-end requests using Vimeo API, more explanation on PHP code
	fetchVideos() {
		window.scrollTo(0, 0); // window scrolls to top before loading video

		// request video data by requesting to back-end with video id as parameter
		fetch(`http://www.b0221.com/backstabbers-react-test/php/getVideo.php?id=${this.state.workId}`, {
            method: 'get', // get request
        })
        .then(response => response.json()) // parse video data to object
        .then(res => {
        	this.setState({
        		video: res.body // video data as js object
        	});
        });

        // request videos for 'more videos' section with video id as parameter so back-end can exclude current loaded video
        fetch(`http://www.b0221.com/backstabbers-react-test/php/getMoreVideos.php?id=${this.state.workId}`, {
            method: 'get',
        })
        .then(response => response.json())
        .then(res => {
        	this.setState({
        		moreVideos: res
        	});
        });
	}

	componentDidMount() {
		this.fetchVideos(); // fetch videos after component loads
	}

	// if user clicks one of the 'more videos', component updates with the id of the clicked video, then requests new video data
	componentDidUpdate(prevProps) {
		if (this.props.match.params.workId !== prevProps.match.params.workId) {
			this.setState({ workId: this.props.match.params.workId, video: '' }, () => {
				this.fetchVideos();
	        });
		}
	}

	render() {
		
		const { name, description, tags } = this.state.video; // destructure video data
		const tagsList = (tags) ? tags.map(tag => tag.name).join(', ') : ''; // arrange the video tags from array of tags
		const MoreWorksList = this.state.moreVideos.map(video => { // map the 'more videos' videos from data
			let id = video.uri.replace(/\/videos\//, '');
			return <MoreWorksThumb key={id} {...video} id={id} />
		});

		// while video data is loading show the 'loader' component
		if (this.state.video === '') {
			return (
				<Loader />
			);
		// load component if video data is loaded
		} else {
			return (
				<div className="flex--container">
		            <main className="main">
		                <div className="container">

		                    <div className="single--work--text">
		                    	<div className="single--work--title--cont">
		                    		<h2 className="single--work--title">{name}</h2>
		                        	<span className="single--work--tags">{tagsList}</span>
		                    	</div>
		                        <p className="single--work--body">{(description) ? description : ''}</p>
		                    </div>	

		                    <div className="work--video">
		                    	<iframe src={`https://player.vimeo.com/video/${this.state.workId}`} width={1920} height={1080} frameBorder={0} allow="autoplay; fullscreen" title={name}></iframe>
		                    </div>

		                    <h3 className="more--text">More Projects</h3>

		                    <div className="more--container">
		                        {MoreWorksList}
		                    </div>

		                </div>
		            </main>

		            <Footer />
		        </div>
			);
		}
	}
}

export default Work;