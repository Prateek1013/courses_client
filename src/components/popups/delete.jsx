import { useNavigate } from "react-router-dom";
const Delete = (props) => {
  const { id } = props;
  const navigate = useNavigate();
  const deleteHandler = async () => {
    const url = "http://localhost:4000";
    const res = await fetch(`${url}/course/${id}`, { method: "DELETE" });
    navigate("/");
  };
  return (
    <dialog id="delete" className="modal">
      <div className="modal-box bg-dialog flex flex-col items-center w-72">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg py-4">
          Are you sure you want to delete?
        </h3>
        <form method="dialog">
          <div className="flex gap-4 items-center">
            <button onClick={deleteHandler} className="btn btn-primary">
              Delete
            </button>
            <button className="btn btn-primary">Cancel</button>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default Delete;
