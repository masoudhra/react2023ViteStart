import { useState } from "react";
import styled from "styled-components";

const Div = styled.div`
  color: ${(props) => (props.selected ? "blue" : "red")};
  background-color: silver;

  @media (max-width: 1200px) {
    background-color: aqua;
  }
`;

function Banner(props) {
  const [selected, setSelected] = useState(true);
  const { title, description, numOfStudents } = props;
  return (
    <Div selected={selected}>
      <button onClick={() => setSelected((s) => !s)}>CHANGE</button>
      <hr />
      <h1>{title}</h1>
      <p>{description}</p>
      <span>{numOfStudents} students</span>
      <hr />
    </Div>
  );
}

export default Banner;
