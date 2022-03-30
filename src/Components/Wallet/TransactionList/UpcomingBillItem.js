import "./TransactionItem.css";

const TransactionItem = (props) => {
  const obj = props.info;
  return (
    <div className="transaction-item">
      <img src={`${obj.image}`} />

      <div className="transaction-item-description">
        <p className="title">{obj.title}</p>
        <p className="description">{obj.date}</p>
      </div>

      <button className="pay-btn">{`$ ${obj.amount}`}</button>
    </div>
  );
};

export default TransactionItem;
