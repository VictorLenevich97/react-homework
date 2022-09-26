import { orderEdit } from "../store/ordersStore/ordersSlise";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

export const EditForm = ({ date, name, price }) => {
  let { order } = useSelector((store) => store);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const el = e.target.name;
    const value = e.target.value;

    dispatch(
      orderEdit(
        order?.status
          ? {
              ...order,
              [el]: value,
              id: uuidv4(),
            }
          : {
              ...order,
              [el]: value,
              id: uuidv4(),
              status: "In Progress",
            }
      )
    );
  };

  return (
    <form className="editForm" onSubmit={handleSubmit}>
      <p>
        <input
          onChange={(e) => {
            handleChange(e);
          }}
          name="name"
          className="order_input"
          type="text"
          defaultValue={name}
        />
      </p>
      <p>
        <input
          className="order_input"
          type="text"
          name="price"
          defaultValue={price}
          onChange={(e) => {
            handleChange(e);
          }}
        />
      </p>
      <p className="order_date">Date: {date}</p>
      <select
        name="status"
        onChange={(e) => {
          handleChange(e);
        }}
        className="order_select"
      >
        <option>In Progress</option>
        <option>Done</option>
      </select>
    </form>
  );
};
