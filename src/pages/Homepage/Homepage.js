import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import HeroContent from './HeroContent/HeroContent'; // component that contains main hero text and call to action
import FooterContent from '../../components/Footer/FooterContent/FooterContent'; // footer text 'content' component
import Loader from '../../components/Loader/Loader'; // the 'loading' logo component
import videoBg from './bg.mp4';
import './animations.css';

class Homepage extends Component {

    render() {
        // loadLogo, siteLoaded are props from the main App component
        const loadLogo = (this.props.loadLogo) ? <Loader /> : ''; // component will fade out if false
        const heroContent = (this.props.siteLoaded) ? <HeroContent /> : ''; // components will fade in if true
        const footerContent = (this.props.siteLoaded) ? <FooterContent /> : '';

        return (
            <main className="main--index">
                <div className="bg--overlay"></div>
                <video autoPlay muted loop className="main--bg">
                    <source src={videoBg} type="video/mp4" />
                </video>
                <div className="main--content">
                    <div className="container">
                        <div className="hero--content">
                            <CSSTransitionGroup // CSS animation transition to display elements
                            transitionName="whitelogo" // animation class name
                            transitionLeaveTimeout={500} // the component fades out for 0.5 seconds
                            >
                                {loadLogo}
                            </CSSTransitionGroup>
                            <CSSTransitionGroup
                            transitionName="herocontent"
                            transitionEnterTimeout={500}>
                                {heroContent}
                            </CSSTransitionGroup>
                        </div>
                        <CSSTransitionGroup
                        transitionName="herocontent"
                        transitionEnterTimeout={500}>
                            {footerContent}
                        </CSSTransitionGroup>
                    </div>
                </div>
            </main>
        );
    }
}	

export default Homepage;