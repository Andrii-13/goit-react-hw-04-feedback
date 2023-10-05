import { Component } from 'react';
import { FeedbackOption } from './FeedBack/Feedback';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    // this.props.setGood - встановлення початкового значення
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positive: 0,
  };

  countTotalFeedback = () => {
    let { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    let { good, neutral, bad } = this.state;
    const percent = Math.ceil((good * 100) / (good + neutral + bad));
    if (!percent) {return 0;}else
    return percent;
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
        <FeedbackOption
          title="Please leave feedback"
          buttonClick={this.buttonClick}
        />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          PositiveFeedback={this.countPositiveFeedbackPercentage()}
          title="Statistics"
          message="There is no feedback"
        />
      </>
    );
  }
}
