// props: yek seri data be banner midim va dar componente baner estefade mikonim

import Header from "./Header.jsx";
import CourseList from "./CourseList.jsx";
import Banner from "./Banner.jsx";
import Counter from "./Counter.jsx";

function App() {
  return (
    <div>
      {/* <Header />
      <Banner
        title="React 2023"
        description="This is a programming website"
        numOfStudents={100}
      />
      <CourseList /> */}
      <Counter />
    </div>
  );
}

export default App;
