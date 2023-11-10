// List rendering
function CourseList() {
  const courses = ["React", "Javascript", "Next.js", "Node"];

  return (
    <div>
      <h3>Course List</h3>
      <ul>
        {courses.map((course) => (
          <li>{course}</li>
        ))}
      </ul>
    </div>
  );
}

export default CourseList;
