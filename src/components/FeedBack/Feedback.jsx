import { Title, Wrap } from 'components/Styles/Styles.styled';
import { Buttons } from './Feedback.styled';

export const Feedback =({buttonClick })=> {

  //  // встановлення дефолтного значення пропсів, ящо не задано ззовні
  //  static defaultProps = {
  //   setGood: 0,
  //   setNeutral: 0,
  //   setBad: 0,
  // };

 
    return (
      <Wrap>
        <Title>Please leave feedback</Title>
        <Buttons onClick={buttonClick}>
          <button type="button">Good</button>
          <button type="button">Neutral</button>
          <button type="button">Bad</button>
        </Buttons>
      </Wrap>
    );
}
