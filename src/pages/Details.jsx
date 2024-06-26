import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import dayjs from "dayjs";
import Delete from "../components/popups/delete";
const Details = () => {
  const { id } = useParams();

  const url = "http://localhost:4000";
  const [data, setData] = useState({});
  useEffect(() => {
    const func = async () => {
      const res = await fetch(`${url}/course/${id}`);
      const course = await res.json();
      setData(course);
      //   console.log(typeof data.createdAt);
    };
    func();
  }, [id]);
  return (
    <div className="p-2 rounded-lg">
      <div className="bg-dark p-8 flex justify-center">
        <Delete id={id} />
        <div className="space-y-4 w-fit items-center">
          <img className="h-64 rounded-lg" src={`${data.thumbnail}`} />
          <div className="text-white bg-base rounded-lg text-center">
            {data.name}
          </div>
          <div className="text-white bg-base rounded-lg text-center">
            {data.author}
          </div>
          <div className="text-white bg-base rounded-lg text-center">
            {data.description}
          </div>
          <div className="text-white bg-base rounded-lg text-center">
            {dayjs(data.createdAt).format("YYYY-MM-DD")}
          </div>
          <div>
            <button
              onClick={() => document.getElementById("delete").showModal()}
              className="btn bg-danger text-white w-full"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
