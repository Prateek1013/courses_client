import { useNavigate } from "react-router-dom";
const Card = (props) => {
  const navigate = useNavigate();
  const { course } = props;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={`${course.thumbnail}`} alt="book" />
      </figure>
      <div className="card-body">
        <h2 className="card-title"> {course.name}</h2>
        <p> {course.author}</p>
        <div className="card-actions justify-end">
          <button onClick={()=>navigate(`/course/details/${course._id}`)} className="btn btn-primary">Details</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
