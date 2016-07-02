import './form.css';
import React, {PropTypes} from "react";
import Question from '../Question/Question';
import ControlPanel from '../ControlPanel/ControlPanel';
import ThankYou from '../ThankYou/ThankYou';

class Form extends React.Component {

    constructor() {
        super();

        this.index = 0;
        this.answers = [];
        this.thankYouPopup = false;

        IN.Event.on(IN, "auth", this.getLinkedInData.bind(this));
    }

    get question() {
        return this.props.questions[this.index];
    }

    set answer(value) {
        this.answers[this.index] = value;
        this.setState({answers: this.answers})
    }

    get currentQuestionValue() {
        return this.refs.currentQuestion.refs.value.value;
    }

    clearInput() {
        this.refs.currentQuestion.refs.value.value = '';
    }

    nextQuestion() {
        this.answer = this.currentQuestionValue;
        this.clearInput();
        this.index++;
    };

    finish() {
        this.thankYouPopup = true;
        this.nextQuestion();
    }

    getLinkedInData() {
        IN.API.Raw("/people/~").result(data => {
            console.log(this);
            this.answers = [data.firstName];
            this.thankYouPopup = true;
            this.setState({answers: this.answers});
        });
    };

    renderThankYouPopup() {
        return (
            <ThankYou details={this.answers}></ThankYou>
        )
    }

    renderForm() {
        return (
            <div>
                <Question ref="currentQuestion"
                          question={this.question}> </Question>
                <ControlPanel next={this.nextQuestion.bind(this)}
                              finish={this.finish.bind(this)}
                              lastQuestion={this.index === this.props.questions.length - 1}></ControlPanel>
            </div>
        )
    }

    render() {
        return (
            <div className="form">
                {this.thankYouPopup ? this.renderThankYouPopup() : this.renderForm()}
            </div>
        );
    }

}
;

export default Form;