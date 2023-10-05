import { Wrap } from 'components/Styles/Styles.styled';
import { Resp } from './Statistics.styled';
import { Section } from 'components/Section/Section';
import { Notification } from 'components/Notification/Notification';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  PositiveFeedback,
  title,
  message,
}) => {
  return (
    <Wrap>
      <Section title={title} />
      {good + neutral + bad > 0 ? (
        <Resp>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {total}</p>
          <p>Positive feedback: {PositiveFeedback}%</p>
        </Resp>
      ) : (
        <Notification message={message} />
      )}
    </Wrap>
  );
};
