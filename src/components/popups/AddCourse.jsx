import { useState } from "react";

const AddCourse = () => {
  const [data, setData] = useState({
    thumbnail: "",
    name: "",
    author: "",
  });
  const url = "http://localhost:4000";
  const [loading, setLoading] = useState(false);
  const handleAddCourse = async () => {
    console.log(data);
    setLoading(true);
    const res = await fetch(`${url}/course`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    // const dat = await res.json();
    setLoading(false);
    alert("course Added");
  };

  return (
    <dialog id="add-course" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Add Course</h3>
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <form method="dialog">
          <div className="flex flex-col gap-4">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Thumbnail</span>
              </div>
              <input
                onChange={(e) => {
                  setData({ ...data, thumbnail: e.target.value });
                }}
                className="input input-bordered w-full"
                type="text"
                required
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Name</span>
              </div>
              <input
                onChange={(e) => {
                  setData({ ...data, name: e.target.value });
                }}
                className="input input-bordered w-full"
                type="text"
                required
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Author</span>
              </div>
              <input
                onChange={(e) => {
                  setData({ ...data, author: e.target.value });
                }}
                className="input input-bordered w-full"
                type="text"
                required
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Description</span>
              </div>
              <input
                onChange={(e) => {
                  setData({ ...data, description: e.target.value });
                }}
                className="input input-bordered w-full"
                type="text"
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Created At</span>
              </div>
              <input
                onChange={(e) => {
                  setData({ ...data, createdAt: e.target.value });
                }}
                className="input input-bordered w-full"
                type="date"
              />
            </label>
            <button
              onClick={handleAddCourse}
              className="btn btn-sm btn-primary"
              type="submit"
            >
              {loading && (
                <span className="loading loading-bars loading-xs"></span>
              )}
              Add
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default AddCourse;
