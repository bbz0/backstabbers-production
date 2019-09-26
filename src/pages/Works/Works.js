import React, { Component } from 'react';
import Loader from '../../components/Loader/Loader'; // the 'loading' logo component
import Footer from '../../components/Footer/Footer'; // footer component
import ErrorMessage from '../../components/Error/Error'; // error component
import WorksThumbnail from './WorksThumbnail/WorksThumbnail'; // video thumbnail component

class Works extends Component {

    constructor() {
        super();
        this.state = {
            videos: [], // array of videos from the client's vimeo portfolio
            currentTag: 'All', // set the current tag to 'All'
            tags: ['All', 'Travel', 'Food', 'Corporate'] // an array of tags to sort the list of videos
        }
        this.filterTag = this.filterTag.bind(this);
    }

    // request video data to back-end, then back-end requests using Vimeo API, more explanation on PHP code
    componentDidMount() {
        fetch(`http://b0221.com/backstabbers-react-test/php/app.php`, {
            method: 'get',
        })
        .then(response => response.json())
        .then(videos => {
            this.setState({
                videos: videos.body.data
            });
        });
    }

    // if user clicks a tag, change current selected tag
    filterTag(event) {
        this.setState({
            currentTag: event.target.innerText
        });
    }

    render() {
        // if back-end fails to retrieve data display error component
        if (!this.state.videos) {
            return <ErrorMessage />
        }

        const filteredWorks = this.state.videos.filter((video, i) => { // filter video data to show videos containing current selected tag
            if (this.state.currentTag !== 'All') {
                return video.tags.map(tag => tag.name.toLowerCase()).includes(this.state.currentTag.toLowerCase());
            } else {
                return video;
            }
        });

        const works = filteredWorks.map((video) => { // map filtered video data to thumbnail component
            let id = video.uri.replace(/\/videos\//, '');
            let tagsList = video.tags.map((tag) => {
                return tag.name;
            }).join(', ');
            return <WorksThumbnail key={id} id={id} {...video} tagsList={tagsList} />
        });

        const tagBtns = this.state.tags.map((tag) => { // map array of tags to clickable buttons
            return (
                <button key={tag} className="works--tag" onClick={this.filterTag}>
                    <h3 className="tag--name">{tag}</h3>
                </button>
            );
        });

        return (
            <div className="flex--container">
                <main className="main">
                    <div className="container">

                        <h2 className="page--title">Works</h2>

                        <div className="tags--container">
                            {tagBtns}
                        </div>

                        <div className="works--container">
                            {(this.state.videos.length < 1) ? <Loader /> : works }
                        </div>
                        
                    </div>
                </main>

                <Footer />
            </div>
        );
    }
}

export default Works;