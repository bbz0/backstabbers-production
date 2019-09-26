import React, { Component } from 'react';

class ContactForm extends Component {

    // init state where props are parameters for the email message, response is the feedback from the back-end
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            subject: '',
            message: '',
            nameRes: '',
            emailRes: '',
            subjectRes: '',
            messageRes: '',
            backEndRes: '',
        }
        // bind methods to set state
        this.handleChange = this.handleChange.bind(this);
        this.validateSubmit = this.validateSubmit.bind(this);
    }

    // handles text input and binds them to props in state
    handleChange(event) {
        if (event.target.name !== 'message' && event.target.value.length <= 255) {
            this.setState({ [event.target.name]: event.target.value });
        } else if (event.target.name === 'message' && event.target.value.length <= 500) {
            this.setState({ [event.target.name]: event.target.value });
        }
    }

    // validate form submission
    validateSubmit(event) {
        // prevent 'default' form submission
        event.preventDefault();

        let errCount = 0; // error count
        let { name, email, subject, message } = this.state;

        // tests name length and if it's alphabet characters only
        if (name.length <= 255 && name.length > 0 && /(?:[a-zA-Z.\s])+/g.test(name)) {
            this.setState({ nameRes: '' });
        } else {
            this.setState({ nameRes: 'invalid name' });
            errCount++;
        }

        // tests email subject length and if it's alphabet characters only
        if (subject.length <= 255 && name.length > 0 && /(?:[a-zA-Z.\s])+/g.test(subject)) {
        } else {
            this.setState({ subjectRes: 'invalid subject name' });
            errCount++;
        }

        // tests email address length and if it's a valid email address format
        if (email.length <= 255 && email.length > 0 && /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
        } else {
            this.setState({ emailRes: 'invalid email' });
            errCount++;
        }

        // tests email message length
        if (message.length <= 500) {
        } else {
            this.setState({ messageRes: 'invalid message' });
            errCount++;
        }

        // send email parameters to back-end if there are no errors
        if (errCount === 0) {
            // empty input fields
            this.setState({
                name: '',
                email: '',
                subject: '',
                message: '',
            });
            // send request to back-end
            fetch(`http://www.b0221.com/backstabbers-react-test/php/email.php?name=${name}&subject=${subject}&email=${email}&message=${message}`, {
                method: 'POST'
            })
            // parse response to json
            .then(response => response.json())
            // display response
            .then(res => {
                this.setState({ response: res });
            });
        }
    }

    render() {

        const { toggleContactForm } = this.props;
        const { nameRes, emailRes, subjectRes, messageRes } = this.state;

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
                            <span>{ (nameRes) ? nameRes : '' }</span>
                        </div>
                        <div className="text--input">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange} required />
                            <span>{ (emailRes) ? emailRes : '' }</span>
                        </div>
                        <div className="text--input">
                            <label htmlFor="subject">Subject</label>
                            <input type="text" id="subject" name="subject" value={this.state.subject} onChange={this.handleChange} required />
                            <span>{ (subjectRes) ? subjectRes : '' }</span>
                        </div>
                        <div className="text--input">
                            <label htmlFor="message">Query</label>
                            <textarea id="message" name="message" value={this.state.message} onChange={this.handleChange} required />
                            <span>{ (messageRes) ? messageRes : '' }</span>
                        </div>
                        <input className="submit--button" type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        );
    }
}

export default ContactForm;