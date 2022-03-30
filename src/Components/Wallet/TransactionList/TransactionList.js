import "./TransactionList.css";
import TransactionItem from "./TransactionItem";
import UpcomingBillItem from "./UpcomingBillItem";
import { useState } from "react";
const TransactionList = (props) => {
  const [ListItems, setListItems] = useState([props.items]);
  var curr_list = [];
  const getListItems = () => {
    if (props.type === "Upcoming Bills") {
      curr_list = props.items.map((bill) => <UpcomingBillItem info={bill} />);
    } else {
      curr_list = props.items.map((transaction) => (
        <TransactionItem info={transaction} />
      ));
    }
    setListItems(curr_list);
  };
  getListItems();
  return <ul className="list-wrapper">{ListItems}</ul>;
};

export default TransactionList;
