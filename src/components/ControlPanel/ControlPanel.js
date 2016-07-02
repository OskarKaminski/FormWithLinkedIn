import React from 'react';
import './control-panel.css';

const ControlPanel = ({next, finish, lastQuestion}) => {

    const navigationButtons = () => {
        return (
            <div>
                <button className="form__button">
                    Previous
                </button>
                <button className="form__button" onClick={next}>
                    Next
                </button>
            </div>
        )
    };

    const finishButton = () => {
        return (
            <button className="form__button" onClick={finish}>
                Finish
            </button>
        )
    };

    return (
        <div className="control-panel">
            <div className="control-panel__button-linked-in">
                <script type="in/Login"></script>
            </div>
            {lastQuestion ? finishButton() : navigationButtons()}
        </div>
    )
};

export default ControlPanel;