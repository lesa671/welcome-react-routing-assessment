import React from 'react'


function Display(props) {

    
    let category = "loading"
    if (props.data.category) {
        category = props.data.category.title
    }

    return (
        < div className="Display" >
            <strong>Score:</strong> {props.score} <br />
            <strong>Category:</strong> {category} <br />
            <strong>Question:</strong> {props.data.question} <br />
            <strong>Point Value:</strong> {props.data.value} <br />

            <form onSubmit={props.handleSubmit}>
                <div>
                    <label htmlFor='guess'>Your answer</label>
                    <input
                        type="text"
                        guess='guess'
                        value={props.guess}
                        onChange={props.handleGuess}
                    />
                </div>

                <button>Submit</button>

            </form>
        </div >
    )
}


export default Display