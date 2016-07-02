import React, {Component, PropTypes} from 'react'
import Form from './components/Form/Form';
import './app.css';

const App = () => {

    const questions = [
        {
            number: 1,
            label: 'Your first name'
        }, {
            number: 2,
            label: 'Your last name'
        }
    ];

    return (
        <div className='app'>
            <Form questions={questions}></Form>
        </div>
    )

};

export default App;