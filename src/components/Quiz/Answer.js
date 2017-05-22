import React from 'react'

import CongressmanCard from './CongressmanCard'
import QuizProgress from './QuizProgress'

const Answer = ({ answer, apiUrl, congressman, currentQuestionIndex, nextQuestionFn, questionCount }) => (
  <div className="answer-container">
    <div className="logo">
      <img src="images/logo.svg" />
    </div>
    <div className="answer-choice">
        <div className="answer-status">
            {answer === congressman.side ? (
                <span className="answer-status-correct">Bien vu !</span>
            ) : (
                <span className="answer-status-incorrect">Et non !</span>
            )}
        </div>
        <CongressmanCard congressman={congressman} infosToDisplay={['photo', 'name', 'party', 'successRate']} />
    </div>
    <QuizProgress currentQuestionIndex={currentQuestionIndex} questionCount={questionCount} />
    <button className="answer-button button-playagain" onClick={nextQuestionFn}>Ok, suivant !</button>
  </div>
)

export default Answer
