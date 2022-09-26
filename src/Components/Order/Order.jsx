export const Order = ({ name, price, date, status }) => {
  return (
    <>
      <p className="order_name">Name: {name}</p>
      <p className="order_price">Price: {price} $</p>
      <p className="order_date">Date: {date}</p>
      <p className="order_status">Status: {status}</p>
    </>
  );
};
