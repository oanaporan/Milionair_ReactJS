import React, { Component } from 'react';

class Answers extends Component {
    render(){
        let {currentQuestion, chooseAnswer, selectedAnswer } = this.props
        //API call resturn res with special characters, this escapes them
        let correct = currentQuestion && currentQuestion.correct_answer.replace(/&quot;/g, '"').replace(/&#039;/g, '"');
        
        return(
            <div className="answers-container">
                {currentQuestion && currentQuestion.incorrect_answers.map(answer => (
                    <button 
                            className={"answer " + (selectedAnswer ? (answer === currentQuestion.correct_answer ? 
                                "right" :"wrong"): "")}
                            key={answer} 
                            onClick={() => chooseAnswer(answer)}>{answer}</button>
                ))}
                <button 
                        className={"answer " + (selectedAnswer ? "right" : "")}
                        onClick={() => chooseAnswer(currentQuestion.correct_answer)}
                        >{correct}</button>
            </div>
        )
    }
}

export default Answers;