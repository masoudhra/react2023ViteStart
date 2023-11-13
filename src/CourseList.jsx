// List rendering
function CourseList() {
  const courses = [
    { id: 1, name: "React" },
    { id: 2, name: "Javascropt" },
    { id: 3, name: "Next.js" },
    { id: 4, name: "Node.js" },
  ];

  return (
    <div>
      <h3>Course List</h3>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>{course.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default CourseList;
