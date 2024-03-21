import { useEffect, useState } from "react";
import Card from "../components/Card";
const Home = () => {
  const [courses, setCourses] = useState([]);
  const url='http://localhost:4000'
  useEffect(() => {
    const func = async () => {
      const res = await fetch(`${url}/courses`);
      const data = await res.json();
      setCourses(data);
    };
    func();
  }, []);
  return (
    <div className="grid grid-cols-2">
      {courses.map((course) => (
        <div key={course._id}>
          <Card course={course} />
        </div>
      ))}
    </div>
  );
};

export default Home;
