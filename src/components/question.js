import React, { Component } from 'react';

class Question extends Component {
    
    render(){
        let {currentQuestion, questionNo} = this.props
        //API call resturn res with special characters, this escapes them
        let question = currentQuestion && currentQuestion.question.replace(/&quot;/g, '"').replace(/&#039;/g, '"')
        
        return(
            <div className="question"> 
                <span>Q:{questionNo}</span>
                <div>{question}</div>
            </div>
        )
    }
    }
      

export default Question;