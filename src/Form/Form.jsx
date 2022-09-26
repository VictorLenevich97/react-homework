import styles from "./form.css";
import {
  orderCreate,
  ordersListCreate,
} from "../store/ordersStore/ordersSlise";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { useRef } from "react";

export const Form = () => {
  let { ordersList, order } = useSelector((store) => store);
  const dispatch = useDispatch();
  const nameRef = useRef(null);
  const priceRef = useRef(null);

  localStorage.setItem("ordersList", JSON.stringify(ordersList));
  const handleSubmit = (e) => {
    e.preventDefault();
    priceRef.current.value = "";
    nameRef.current.value = "";
  };

  const handleChange = (e) => {
    const el = e.target.name;
    const value = e.target.value;

    dispatch(
      orderCreate({
        ...order,
        id: uuidv4(),
        status: "In progress",
        [el]: value,
      })
    );
  };

  const pushOrder = () => {
    if (order.price && order.name !== "") {
      dispatch(ordersListCreate([...ordersList, order]));
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <p className="form__name">Order</p>
      <label>
        <p className="form__item">Name:</p>
        <input
          className="form__input"
          type="text"
          name="name"
          ref={nameRef}
          onChange={(e) => handleChange(e)}
        />
      </label>
      <label>
        <p className="form__item">Price:</p>
        <input
          className="form__input"
          type="text"
          name="price"
          ref={priceRef}
          onChange={(e) => handleChange(e)}
        />
      </label>
      <button className="form__button" onClick={pushOrder}>
        Submit
      </button>
    </form>
  );
};
