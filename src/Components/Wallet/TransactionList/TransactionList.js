import "./TransactionList.css";
import TransactionItem from "./TransactionItem";

const TransactionList = (props) => {
  const getTransactionItems = () => {
    const transactionItems = props.items.map((data) => (
      <TransactionItem info={data} />
    ));
    return transactionItems;
  };
  var TransactionItems = getTransactionItems();
  return <ul className="list-wrapper">{TransactionItems}</ul>;
};

export default TransactionList;
