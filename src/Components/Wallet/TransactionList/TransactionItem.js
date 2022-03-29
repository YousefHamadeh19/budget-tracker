import "./TransactionItem.css";

const TransactionItem = (props) => {
  const obj = props.items;
  return (
    <div className="transaction-item">
      <img src={`${obj.image}`} />

      <div className="transaction-item-description">
        <p className="title">{obj.title}</p>
        <p className="description">{obj.date}</p>
      </div>

      <p className="transaction-amount">{`$ ${obj.amount}`}</p>
    </div>
  );
};

export default TransactionItem;
