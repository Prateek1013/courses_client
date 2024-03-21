const Card = (props) => {
  const { course } = props;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img
            src={`${course.thumbnail}`}
          alt="book"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{course.name}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
