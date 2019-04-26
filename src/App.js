import React, { Component } from 'react';
import * as zoomAPI  from './zoomAPI';
import Question from './components/question';
import Answers from './components/answers';
import Next from './components/next';

import './App.css';
import Group4 from './assets/Group4.png'

class App extends Component {
  state = {
    questions : [],
    questionNo : 1,
    currentQuestion : null,
    currentQuestionIndex : 0,
    selectedAnswer : null,
    answers : []
  }

  componentDidMount() {
    zoomAPI.get().then((questions) => {
      this.setState(state => ({
        questions : questions,
        currentQuestion : questions[this.state.currentQuestionIndex]
      }))
      // this.getAllAnswers();
    })
    .catch(console.log("There was an error while trying to fetch the data")); 
  }

  //TO DO
  // getAllAnswers= () => {
  //   let {currentQuestion, answers } = this.state
  //   if (answers === []) {
  //     let all = currentQuestion && currentQuestion.wrong_answers.concat([currentQuestion && currentQuestion.right_answer])
  //     this.setState({ answers : all })
  //   }
  // }
  
  chooseAnswer = (answer) => {
        this.setState({ selectedAnswer : answer })
      }

  nextQuestion = () => {
    //Check if the current question was last on array, if true run startOver fn.
    if(this.state.currentQuestionIndex === this.state.questions.length ||
      this.state.questionNo === this.state.questions.length) {
          this.startOver();
    } else {
      //if the current question was not last, choose next in array
      this.setState(state => ({
        currentQuestion : this.state.questions[this.state.currentQuestionIndex+1],
        currentQuestionIndex : this.state.currentQuestionIndex+1,
        questionNo : this.state.questionNo + 1,
        selectedAnswer: null,
      }))
    }
  
  }

  startOver = () => {
    window.alert('Game Over! Would you like to give it another try?');
      this.setState({
        currentQuestion : this.state.questions[0],
        currentQuestionIndex : 0,
        questionNo : 1,
        selectedAnswer: null
      })
    }

  render(){
      
    return (
      <div className="App">
        <header className="App-header">
          <img src={Group4} className="App-logo" alt="logo" />
        </header>

        <div className="container">
            <Question currentQuestion = {this.state.currentQuestion}
                      questionNo = {this.state.questionNo}/>
            <Answers currentQuestion = {this.state.currentQuestion} 
                     chooseAnswer = {this.chooseAnswer}
                     selectedAnswer = {this.state.selectedAnswer}/>
              <Next questions={this.state.questions}
                    currentQuestion={this.state.currentQuestion}
                    nextQuestion={this.nextQuestion}
                    selectedAnswer={this.state.selectedAnswer}
                    questionNo={this.state.questionNo}/>
        </div>
       
        <footer className="App-footer">
        </footer>
      </div>
    );
  }

  }
  

export default App;
