import "./Footer.css";
import { makeStyles } from "@material-ui/core";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import BarChartIcon from "@mui/icons-material/BarChart";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
const useStyles = makeStyles({
  icon: {
    color: "#B5B5B5",
    borderRadius: 50,
    border: "0.5px",
    fontSize: 50,
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <div className="footer">
      <HomeOutlinedIcon className={classes.icon} />
      <BarChartIcon className={classes.icon} />
      <AccountBalanceWalletOutlinedIcon className={classes.icon} />
      <PersonOutlineOutlinedIcon className={classes.icon} />
    </div>
  );
};

export default Footer;
