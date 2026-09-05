export default function TaskInput() {
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Add a new task..."
      />
      <button className="btn btn-primary" type="button">
        Add
      </button>
    </div>
  );
}