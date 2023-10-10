import { Component } from 'react';
import { FeedbackOption } from './FeedBack/Feedback';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    let { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    let { good, neutral, bad } = this.state;
    const percent = Math.ceil((good * 100) / (good + neutral + bad));
    if (!percent) {
      return 0;
    } else return percent;
  };

  buttonClick = value => {
    this.setState(prevState => {
      return {
        [value]: prevState[value] + 1,
      };
    });
  };

  titleStatistic = 'Statistics';

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title= 'Please leave feedback'>
          <FeedbackOption
            buttonClick={this.buttonClick}
            options={Object.keys(this.state)}
          />
        </Section>
        <Section title = 'Statistics'>
          {good + neutral + bad > 0 ? (
          <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positiveFeedback={this.countPositiveFeedbackPercentage()}
              />            
          ) : (
            <Notification message ='There is no feedback'/>
          )}
        </Section>
      </>
    );
  }
}
