function CourseCard(props) {
    const {data: {name, description}} = props
  return (
    <li>
      <h4>{name}</h4>
      <p>{description}</p>
    </li>
  );
}

export default CourseCard;
