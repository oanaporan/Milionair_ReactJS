import React, { Component } from 'react';

class Next extends Component {
    render() {
        let { questions, nextQuestion, selectedAnswer, questionNo } = this.props;
        return(
            <div className="next-container">
                <button className={(selectedAnswer ? "active-bttn" : "disabled")}
                        onClick={() => nextQuestion()}>
                    {(selectedAnswer ? "CONTINUE":"OK")}
                </button>
                
                <div className="questions-bar">
                {questions && questions.map((question, index) => (
                    <div key={index+1} 
                         className={"question-circle " + (questionNo === index+1 ? "active":"")}/>
                ))}
                </div>
            
            </div>
        )
    }
}

export default Next;