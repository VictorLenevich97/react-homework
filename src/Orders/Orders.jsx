import { useSelector } from "react-redux";
import styles from "./orders.css";
import {
  orderDelete,
  orderEdit,
  orderEditSuccsess,
} from "../store/ordersStore/ordersSlise";
import { useDispatch } from "react-redux";
import { EditForm } from "../EditForm/EditForm";
import { Order } from "../Components/Order/Order";

export const Orders = () => {
  const { ordersList } = useSelector((store) => store);
  const dispatch = useDispatch();

  const date = new Date().toLocaleDateString();
  function deleteOrder(e) {
    const id = e.target.id;
    dispatch(orderDelete(ordersList.filter((item) => item.id !== id)));
  }

  function editOrder(e) {
    const id = e.target.id;
    dispatch(orderEditSuccsess(id));
  }

  return (
    <ul className="order">
      {ordersList.map(({ id, price, name, status, isEdit }) => {
        return (
          <li className="order_item" key={id}>
            {isEdit ? (
              <>
                <EditForm date={date} price={price} name={name} />
                <div className="order_buttons">
                  <button
                    id={id}
                    onClick={(e) => editOrder(e)}
                    className="order_editBtn"
                  >
                    Ok
                  </button>
                  <button
                    id={id}
                    onClick={(e) => deleteOrder(e)}
                    className="order_deleteBtn"
                  >
                    Delete
                  </button>
                </div>
              </>
            ) : (
              <>
                {" "}
                <Order name={name} date={date} price={price} status={status} />
                <div className="order_buttons">
                  <button
                    onClick={() => dispatch(orderEdit((id = { id })))}
                    className="order_editBtn"
                  >
                    Edit
                  </button>
                  <button
                    id={id}
                    onClick={(e) => deleteOrder(e)}
                    className="order_deleteBtn"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </li>
        );
      })}
    </ul>
  );
};
