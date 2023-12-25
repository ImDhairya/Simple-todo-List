// import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "./List.css";

export const List = ({ todoList, handleDelete, handleToggle, deleteAll }) => {
  return (
    <ul className="list">
      {todoList.map((listItem) => (
        <li key={listItem.id} className={listItem.done && 'done'}>
          <span>{listItem.item}</span>
          <span className="actions ">
            <div>
              <button className="iec" onClick={() => handleToggle(listItem.id)}>
                Complete{" "}
              </button>
            </div>
            <div>
              <button className="iec" onClick={() => handleDelete(listItem.id)}>
                Delete{" "}
              </button>
            </div>
          </span>
        </li>
      ))}
      <button onClick = {() =>  deleteAll()}className="butt">ClearBtn</button>
    </ul>
  );
};

export default List;
