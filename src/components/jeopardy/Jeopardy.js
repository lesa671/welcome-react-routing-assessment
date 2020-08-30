import React, { Component } from 'react';
import Display from '../display/Display'
//import our service
import JeopardyService from "../../jeopardyService";

class Jeopardy extends Component {
    //set our initial state and set up our service as this.client on this component
    constructor(props) {
        super(props);
        this.client = new JeopardyService();
        this.state = {
            submitted: false,
            data: {
                "id": null,
                "answer": "",
                "question": "",
                "value": null,
                "airdate": "",
                "created_at": "",
                "updated_at": "",
                "category_id": null,
                "game_id": null,
                "invalid_count": null,
                "category": {
                    "id": null,
                    "title": "",
                    "created_at": "",
                    "updated_at": "",
                    "clues_count": null
                }
            },
            score: 0,
            guess: ''
        }
    }

    //get a new random question from the API and add it to the data object in state
    getNewQuestion() {
        return this.client.getQuestion().then(result => {
            this.setState({
                data: result.data[0]
            })
        })
    }
    //when the component mounts, get a the first question
    componentDidMount() {
        this.getNewQuestion();
    }


    handleGuess = (event) => {
        let guess = this.state.guess
        guess = event.target.value

        this.setState({ guess })
    };

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({
            submitted: true,
        });
    };

    resetFormRightAnswer = (event) => {
        this.setState({
            submitted: false,
            data: {
                "id": null,
                "answer": "",
                "question": "",
                "value": null,
                "airdate": "",
                "created_at": "",
                "updated_at": "",
                "category_id": null,
                "game_id": null,
                "invalid_count": null,
                "category": {
                    "id": null,
                    "title": "",
                    "created_at": "",
                    "updated_at": "",
                    "clues_count": null
                }
            },
            score: (this.state.score + this.state.data.value),
            guess: ''
        })
        this.getNewQuestion()
    };


    resetFormWrongAnswer = (event) => {
        this.setState({
            submitted: false,
            data: {
                "id": null,
                "answer": "",
                "question": "",
                "value": null,
                "airdate": "",
                "created_at": "",
                "updated_at": "",
                "category_id": null,
                "game_id": null,
                "invalid_count": null,
                "category": {
                    "id": null,
                    "title": "",
                    "created_at": "",
                    "updated_at": "",
                    "clues_count": null
                }
            },
            score: (this.state.score - this.state.data.value),
            guess: ''
        })
        this.getNewQuestion()
    };


    //display the results on the screen
    render() {

        if (this.state.submitted) {
            // if (this.state.guess == this.state.data.answer) {
            if (this.state.data.answer.toLowerCase().includes(this.state.guess.toLowerCase())) {

                return (
                    <div>
                        <div>
                            <label htmlFor="answer">Answer</label>
                            <input
                                type="text"
                                answer='answer'
                                value={this.state.data.answer}
                            />
                        </div>
                        <p>
                            Correct! That adds {this.state.data.value} points to your score.
                        </p>
                        <button onClick={this.resetFormRightAnswer}>Next Question</button>
                    </div>
                );

            } else {

                return (
                    <div>
                        <div>
                            <label htmlFor="answer">Answer</label>
                            <input
                                type="text"
                                answer='answer'
                                value={this.state.data.answer}
                            />
                        </div>
                        <p>
                            Sorry no. That subtracts {this.state.data.value} points from your score.
                        </p>
                        <button onClick={this.resetFormWrongAnswer}>Next Question</button>
                    </div>
                )
            }
        }

        return (
            <div className='Jeopardy'>
                <Display />
                <strong>Score:</strong> {this.state.score} <br />
                <strong>Category:</strong> {this.state.data.category.title} <br />
                <strong>Question:</strong> {this.state.data.question} <br />
                <strong>Value:</strong> {this.state.data.value} <br />

                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor='guess'>Your answer</label>
                        <input
                            type="text"
                            guess='guess'
                            value={this.state.guess}
                            onChange={this.handleGuess}
                        />
                    </div>

                    <button>Submit</button>

                </form>
            </div>
        );
    }
}

export default Jeopardy;

// Help from Eric Schwartz demo