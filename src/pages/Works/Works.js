import React, { Component } from 'react';
import Loader from '../../components/Loader/Loader';
import Footer from '../../components/Footer/Footer';
import ErrorMessage from '../../components/Error/Error';
import WorksThumbnail from './WorksThumbnail/WorksThumbnail';

class Works extends Component {

    constructor() {
        super();
        this.state = {
            videos: [],
            currentTag: 'All',
            tags: ['All', 'Travel', 'Food', 'Corporate']
        }
        this.filterTag = this.filterTag.bind(this);
    }

    componentDidMount() {
        fetch(`http://b0221.com/backstabbers-react-test/php/app.php`, {
            method: 'get',
        })
        .then(response => response.json())
        .then(videos => {
            this.setState({
                videos: videos.body.data
            });
            console.log(videos);
        });
    }

    filterTag(event) {
        this.setState({
            currentTag: event.target.innerText
        });
    }

    render() {

        if (!this.state.videos) {
            return <ErrorMessage />
        }

        const filteredWorks = this.state.videos.filter((video, i) => {
            if (this.state.currentTag !== 'All') {
                return video.tags.map(tag => tag.name.toLowerCase()).includes(this.state.currentTag.toLowerCase());
            } else {
                return video;
            }
        });

        const works = filteredWorks.map((video) => {
            let id = video.uri.replace(/\/videos\//, '');
            let tagsList = video.tags.map((tag) => {
                return tag.name;
            }).join(', ');
            return <WorksThumbnail key={id} id={id} {...video} tagsList={tagsList} />
        });

        const tagBtns = this.state.tags.map((tag) => {
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
                            {(this.state.videos.length < 1) ? <Loader /> : works}
                        </div>
                        
                    </div>
                </main>

                <Footer />
            </div>
        );
    }
}

export default Works;