import './question.css';
import React, {PropTypes} from "react";

class Question extends React.Component {
    render() {
        return (
            <div className="question">
                <div className="question__label-container">
                    <div className="question__number">{this.props.question.number}</div>
                    <i className="fa fa-arrow-right question__arrow" aria-hidden="true"> </i>
                    <div className="question__label">{this.props.question.label}</div>
                </div>
                <input className="question__text-input"
                       ref="value"></input>
            </div>
        );
    }
}

export default Question;