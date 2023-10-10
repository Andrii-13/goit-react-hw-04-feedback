import { SectionBox } from "./Section.styled";

export const Section = ({ title, children }) => {
  return (
    <SectionBox>
      <h1>{title}</h1>
      {children}
    </SectionBox>
  );
};
