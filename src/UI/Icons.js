import "./Icons.css";
import AddIcon from "@mui/icons-material/Add";
import SendIcon from "@mui/icons-material/Send";
import PaymentIcon from "@mui/icons-material/Payment";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  icon: {
    color: "#498F89",
    borderRadius: 50,
    border: "1px",
    fontSize: 45,
  },
});
const Icons = (props) => {
  const classes = useStyles();
  return (
    <>
      <div className="icons">
        <AddIcon className={classes.icon} />
        <PaymentIcon className={classes.icon} />
        <SendIcon className={classes.icon} />
      </div>
      <div className="list">
        <p>Add</p>
        <p>Pay</p>
        <p>Send</p>
      </div>
    </>
  );
};

export default Icons;
