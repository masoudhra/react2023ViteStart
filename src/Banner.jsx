

function Banner(props) {
  const {title, description, numOfStudents} = props  
  return (
    <div>
        <hr />
        <h1>{title}</h1>
        <p>{description}</p>
        <span>{numOfStudents}</span>
        <hr />
    </div>
  )
}

export default Banner