const Topbar = () => {
  return (
    <div className="bg-dark rounded-xl flex items-center justify-center">
      <div className="text-white text-2xl text-center p-4 w-full">Courses</div>
      <div className="flex justify-end p-4">
        <button
          onClick={() => document.getElementById("add-course").showModal()}
          className="btn btn-primary btn-sm"
        >
          Add course
        </button>
      </div>
    </div>
  );
};

export default Topbar;
