import axios from 'axios'
import React, { Component } from 'react'

import ErrorMessage from './ErrorMessage'
import Questions from './Questions'
import Results from './Results'
import Welcome from './Welcome'

const DEFAULT_STATE = {
  answers: [],
  congressmen: [],
  fetchError: false
}

class Quiz extends Component {
  constructor () {
    super()
    this.state = DEFAULT_STATE

    // Binding methods to `this`
    this.startGame = this.startGame.bind(this)
    this.storeAnswers = this.storeAnswers.bind(this)
  }

  startGame () {
    // I feel pretty bad about this, but hey! it's a very little app...
    axios.get(this.props.apiUrl)
      .then((response) => {
        const congressmen = response.data
        this.setState({ ...DEFAULT_STATE, congressmen })
      })
      .catch((error) => {
        this.setState({ fetchError: true })
      })
  }

  getCurrentComponent () {
    const { answers, congressmen, fetchError } = this.state
    const { apiUrl } = this.props
    if (fetchError) {
      return (
        <ErrorMessage
          tryAgainFn={this.startGame}
        />
      )
    } else if (congressmen[0]) {
      // Data fetched...
      if (answers[0]) {
        // ... and game finished:
        return (
          <Results
            answers={answers}
            congressmen={congressmen}
            playAgainFn={this.startGame}
          />
        )
      } else {
        // ... start game:
        return (
          <Questions
            apiUrl={apiUrl}
            congressmen={congressmen}
            storeAnswersFn={this.storeAnswers}
          />
        )
      }
    } else {
      // No data fetched, game hasn't started:
      return (
        <Welcome
          startGameFn={this.startGame}
        />
      )
    }
  }

  render () {
    const currentComponent = this.getCurrentComponent()
    return (
      <section>
        {currentComponent}
      </section>
    )
  }

  storeAnswers (answers) {
    this.setState({ answers })
  }
}

export default Quiz