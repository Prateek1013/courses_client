import { useEffect, useState } from "react";
import Card from "../components/Card";
const Home = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    const func = async () => {
      const res = await fetch("http://localhost:4000/courses");
      const data = await res.json();
      setCourses(data);
    };
    func();
  }, []);
  return (
    <div>
      {courses.map((course) => (
        <Card key={course._id} course={course}/>
      ))}
    </div>
  );
};

export default Home;
