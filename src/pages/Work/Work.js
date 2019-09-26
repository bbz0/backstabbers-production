import React, { Component } from 'react';
import Loader from '../../components/Loader/Loader';
import Footer from '../../components/Footer/Footer';
import MoreWorksThumb from './MoreWorksThumb/MoreWorksThumb';
import '@vimeo/player';

class Work extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			workId: this.props.match.params.workId,
			video: '',
			moreVideos: []
		};
		this.fetchVideos = this.fetchVideos.bind(this);
	}

	fetchVideos() {
		window.scrollTo(0, 0);
		fetch(`http://www.b0221.com/backstabbers-react-test/php/getVideo.php?id=${this.state.workId}`, {
            method: 'get',
        })
        .then(response => response.json())
        .then(res => {
        	this.setState({
        		video: res.body
        	});
        });

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
		this.fetchVideos();
	}

	componentDidUpdate(prevProps) {
		if (this.props.match.params.workId !== prevProps.match.params.workId) {
			this.setState({ workId: this.props.match.params.workId, video: '' }, () => {
				this.fetchVideos();
	        });
		}
	}

	render() {

		const { name, description, tags } = this.state.video;
		const tagsList = (tags) ? tags.map(tag => tag.name).join(', ') : '';
		const MoreWorksList = this.state.moreVideos.map(video => {
			let id = video.uri.replace(/\/videos\//, '');
			return <MoreWorksThumb key={id} {...video} id={id} />
		});

		if (this.state.video === '') {
			return (
				<Loader />
			);
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