import styled from "styled-components";

const Div = styled.div`
color: blue;
background-color: silver;
&:hover {
  color: red;
}
@media(max-width: 1200px){
  background-color: aqua;
}
`;

function Banner(props) {
  console.log(Div);
  const { title, description, numOfStudents } = props;
  return (
    <Div>
      <hr />
      <h1>{title}</h1>
      <p>{description}</p>
      <span>{numOfStudents} students</span>
      <hr />
    </Div>
  );
}

export default Banner;
