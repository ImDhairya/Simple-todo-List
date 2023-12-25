// import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "./List.css";

export const List = ({ todoList, handleDelete }) => {
  return (
    <ul className="list">
      {todoList.map((listItem) => (
        <li key={listItem.id}>
          <span>{listItem.item}</span>
          <span className="actions">
            {/* <div>
              <button className="iec">done </button>   
            </div> */}
            <div>
              <button className="iec" onClick={ () => handleDelete(listItem.id)} >Delete </button>
            </div>
          </span>
        </li>
      ))}
    </ul>
  );
};

export default List;
