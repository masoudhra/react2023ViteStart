

function Banner(props) {
    
  return (
    <div>
        <hr />
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <span>{props.numOfStudents}</span>
        <hr />
    </div>
  )
}

export default Banner