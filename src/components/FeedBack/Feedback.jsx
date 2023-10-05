import { Wrap } from 'components/Styles/Styles.styled';
import { Buttons } from './Feedback.styled';
import { Section } from 'components/Section/Section';

export const FeedbackOption =({buttonClick, title})=> {

    return (
      <Wrap>
        <Section title={title}/>
        <Buttons onClick={buttonClick}>
          <button type="button">Good</button>
          <button type="button">Neutral</button>
          <button type="button">Bad</button>
        </Buttons>
      </Wrap>
    );
}
