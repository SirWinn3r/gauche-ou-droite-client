import axios from 'axios'
import React, { PureComponent } from 'react'

class Results extends PureComponent {
  componentDidMount () {
    const { answers, congressmen } = this.props
    const data = congressmen.map((c, i) => {
      return {
        name: c.name,
        result: c.side === answers[i] ? 'success' : 'fail'
      }
    })
    axios.post(this.props.apiUrl + '/', { data })
      .then((response) => { window.console.log(response.code) })
      .catch((error) => { window.console.log(error)})
  }

  getFormattedScore () {
    return this.getScore() + '/' + this.props.questionCount
  }

  getScore () {
    const { answers, congressmen } = this.props
    const correctAnswers = answers.filter((a, i) => (a === congressmen[i].side))
    return correctAnswers.length
  }

  render () {
    const { playAgainFn } = this.props
    return (
      <div className="results-container">
        <div className="logo">
          <img src="images/logo.svg" />
        </div>
        <div className="success-or-not">
          {this.getScore() >= 10 ? (
              <div className="validator"></div>
          ) : (
              <div className="validator error"></div>
          )}
        </div>
        <div className="results-text welcome-message-text text">Pas besoin d'envoyer "fizik" au 81212 pour savoir si tu es physionomiste, on te dit tout ici :</div>
        <div className="results-score">{this.getFormattedScore()}</div>
        <button className="results-button button-playagain" onClick={e => playAgainFn()}>I can do better, test me again!</button>
      </div>
    )
  }
}

export default Results
