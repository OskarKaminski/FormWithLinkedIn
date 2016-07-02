import React, {PropTypes} from "react";

const ThankYou = ({details}) => {
    return (
        <div className="thank-you-screen">
            Thank You {details[0]}
        </div>
    );
};

export default ThankYou;