import { Title, Wrap } from 'components/Styles/Styles.styled';
import { Resp } from './Statistics.styled';

export const Statistics = ({good, neutral, bad}) => {
 

  return (
    <Wrap>
      <Title>Statistics</Title>
      <Resp >
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
      </Resp>
    </Wrap>
  );
};
