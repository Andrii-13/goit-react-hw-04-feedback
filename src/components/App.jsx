import { Component } from 'react';
import { Feedback } from './FeedBack/Feedback';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    // this.props.setGood - встановлення початкового значення
    good: 0,
    neutral: 0,
    bad: 0,
  };

  buttonClick = e => {
      if (e.target.nodeName !== 'BUTTON') {
        return;
      }
      switch (e.target.textContent) {
        case 'Good':
          this.setState(prevState => ({ good: prevState.good + 1 }));
          break;
        case 'Neutral':
          this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
          break;
        case 'Bad':
          this.setState(prevState => ({ bad: prevState.bad + 1 }));
          break;
        default:
      }
    };

  render() {
    return (
      <>
        <Feedback
        buttonClick={this.buttonClick}/>
        <Statistics good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}/>
      </>
    );
  }
}
