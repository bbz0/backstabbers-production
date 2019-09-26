import React, { Component } from 'react';

class ContactForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            subject: '',
            message: '',
            response: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.validateSubmit = this.validateSubmit.bind(this);
    }

    handleChange(event) {
        if (event.target.name !== 'message' && event.target.value.length <= 255) {
            this.setState({ [event.target.name]: event.target.value });
        } else if (event.target.name === 'message' && event.target.value.length <= 500) {
            this.setState({ [event.target.name]: event.target.value });
        }
    }

    validateSubmit(event) {
        event.preventDefault();

        let errCount = 0;
        let { name, email, subject, message } = this.state;
        if (name.length <= 255 && name.length > 0 && /(?:[a-zA-Z.\s])+/g.test(name)) {
        } else {
            errCount++;
        }

        if (subject.length <= 255 && name.length > 0 && /(?:[a-zA-Z.\s])+/g.test(subject)) {
        } else {
            errCount++;
        }

        if (email.length <= 255 && email.length > 0 && /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
        } else {
            errCount++;
        }

        if (message.length <= 500) {
        } else {
            errCount++;
        }

        if (errCount === 0) {
            this.setState({
                name: '',
                email: '',
                subject: '',
                message: '',
            });
            fetch(`http://www.b0221.com/backstabbers-react-test/php/email.php?name=${name}&subject=${subject}&email=${email}&message=${message}`, {
                method: 'POST'
            })
            .then(response => response.json())
            .then(res => {
                this.setState({ response: res });
            });
        }
    }

    render() {

        const { toggleContactForm } = this.props;

        return (
            <div className="contact--modal">
                <div className="contact--form">
                    <button onClick={toggleContactForm} className="close--button">
                        <i className="fa fa-times" aria-hidden="true"></i>
                    </button>

                    <h1>Contact us</h1>
                    <h4 className="form--message">{this.state.response}</h4>

                    <form className="email--form" onSubmit={this.validateSubmit}>
                        <div className="text--input">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" value={this.state.name} onChange={this.handleChange} required />
                            <span></span>
                        </div>
                        <div className="text--input">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange} required />
                        </div>
                        <div className="text--input">
                            <label htmlFor="subject">Subject</label>
                            <input type="text" id="subject" name="subject" value={this.state.subject} onChange={this.handleChange} required />
                        </div>
                        <div className="text--input">
                            <label htmlFor="message">Query</label>
                            <textarea id="message" name="message" value={this.state.message} onChange={this.handleChange} required />
                        </div>
                        <input className="submit--button" type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        );
    }
}

export default ContactForm;