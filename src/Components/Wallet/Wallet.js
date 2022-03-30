import "./Wallet.css";
import image from "./TransactionList/Images/Upwork-for-Freelancers.png";
import WalletHeader from "./WalletHeader";
import Icons from "../../UI/Icons";
import ToggleButton from "../../UI/ToggleButton";
import TransactionList from "./TransactionList/TransactionList";
import { useState } from "react";

const dummy_transactions = [
  {
    title: "Upwork",
    image: image,
    date: "12",
    amount: 0,
  },
  {
    title: "Upwork",
    image: image,
    date: "12",
    amount: 0,
  },
  {
    title: "Upwork",
    image: image,
    date: "12",
    amount: 0,
  },
  {
    title: "Upwork",
    image: image,
    date: "12",
    amount: 0,
  },
  {
    title: "Upwork",
    image: image,
    date: "12",
    amount: 0,
  },
];

const dummy_bills = [
  {
    title: "Upwork-bills",
    image: image,
    date: "12",
    amount: 0,
  },
  {
    title: "Upwork-bills",
    image: image,
    date: "12",
    amount: 0,
  },
  {
    title: "Upwork-bills",
    image: image,
    date: "12",
    amount: 0,
  },
  {
    title: "Upwork-bills",
    image: image,
    date: "12",
    amount: 0,
  },
  {
    title: "Upwork-bills",
    image: image,
    date: "12",
    amount: 0,
  },
];

const Wallet = (props) => {
  const [list, setList] = useState(dummy_transactions);
  const [listType, setListType] = useState("");
  const handelToggleButton = (name) => {
    if (name === "Upcoming Bills") {
      setList(dummy_bills);
      setListType("Upcoming Bills");
    } else {
      setList(dummy_transactions);
      setListType("Transactions");
    }
  };
  return (
    <div className={`wallet ${props.className}`}>
      <WalletHeader />
      <div className="wallet-body">
        <Icons />
        <ToggleButton
          sx={{ borderRadius: "50%" }}
          handelToggle={handelToggleButton}
        />
        <TransactionList type={listType} items={list} />
      </div>
    </div>
  );
};

export default Wallet;
