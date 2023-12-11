// List rendering
import CourseCard from "./CourseCard";
import styles from "./CourseList.module.css"

function CourseList() {
  const courses = [
    { id: 1, name: "React", description: "This is react course" },
    { id: 2, name: "Javascript", description: "This is Javascript course" },
    { id: 3, name: "Next.js", description: "This is Next.js course" },
    { id: 4, name: "Node.js", description: "This is Node.js course" },
  ];

  return (
    <div className={styles.container}>
      <h3>Course List</h3>
      <ul>
        {courses.map((course) => (
          <CourseCard key={course.id} data={course} />
        ))}
      </ul>
    </div>
  );
}

export default CourseList;
