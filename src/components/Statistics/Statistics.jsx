import { Title, Wrap } from 'components/Styles/Styles.styled';
import { Resp } from './Statistics.styled';
import { Component } from 'react';

export class Statistics extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
      }
  render() {
    return (
      <Wrap>
        <Title>Statistics</Title>
        <Resp>
          <span>Good: {this.state.good}</span>
          <span>Neutral: {this.state.neutral}</span>
          <span>Bad: {this.state.bad}</span>
        </Resp>
      </Wrap>
    );
  }
}
