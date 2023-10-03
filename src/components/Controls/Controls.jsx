import { Title, Wrap } from 'components/Styles/Styles.styled';
import { Buttons } from './Controls.styled';
import { Component } from 'react';

export class Feedback extends  Component {
  render() {
    return (
      <Wrap>
        <Title>Please leave feedback</Title>
        <Buttons>
          <button type="button">Good</button>
          <button type="button">Neutral</button>
          <button type="button">Bad</button>
        </Buttons>
      </Wrap>
    );
  }
}
