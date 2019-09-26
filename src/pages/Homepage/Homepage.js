import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import HeroContent from './HeroContent/HeroContent';
import FooterContent from '../../components/Footer/FooterContent/FooterContent';
import Loader from '../../components/Loader/Loader';
import videoBg from './bg.mp4';
import './animations.css';

class Homepage extends Component {

    render() {

        const loadLogo = (this.props.loadLogo) ? <Loader /> : '';
        const heroContent = (this.props.siteLoaded) ? <HeroContent /> : '';
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
                            <CSSTransitionGroup
                            transitionName="whitelogo"
                            transitionLeaveTimeout={500}>
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