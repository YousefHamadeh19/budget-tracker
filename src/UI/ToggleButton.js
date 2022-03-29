import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { makeStyles } from "@material-ui/core";
import { useState } from "react";
import "./ToggleButton.css";

const useStyles = makeStyles({
  toggleGroup: {
    width: 300,
    height: 30,
    padding: 5,
    backgroundColor: "#F4F6F6",
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    marginBottom: "25px",
  },
  togglebtn: {
    height: 25,
    width: 150,
    "&:hover": {
      backgroundColor: "black",
    },
  },
});

export default function ColorToggleButton() {
  const classes = useStyles();
  const [TransactionSelected, setTransactionSelected] = useState(true);
  const [BillsSelected, setBillsSelected] = useState(false);

  console.log(
    `Rendered transaction ${TransactionSelected} bills ${BillsSelected}`
  );

  const toggleBillsBackground = (e) => {
    console.log(
      `In toggle bills transaction ${TransactionSelected} bills ${BillsSelected}`
    );
    if (TransactionSelected === true && BillsSelected === false) {
      setTransactionSelected(false);
      setBillsSelected(true);
    }
    return e.currentTarget.value;
  };

  const toggleTransactionBackground = (e) => {
    if (TransactionSelected === false && BillsSelected === true) {
      setTransactionSelected(true);
      setBillsSelected(false);
    }
    console.log(
      `In toggle transaction transaction ${TransactionSelected} bills ${BillsSelected}`
    );

    return e.currentTarget.value;
  };

  return (
    <div className="icons-container">
      <ToggleButtonGroup
        sx={{ borderRadius: 50 }}
        className={`${classes.toggleGroup} css-1uokg2p-MuiToggleButtonGroup-root`}
        exclusive
      >
        <ToggleButton
          className={`${classes.togglebtn}
        MuiToggleButtonGroup-grouped:not(:last-of-type)
        ${TransactionSelected === true ? "selected" : "not-selected"}
        `}
          sx={{
            borderRadius: 50,
            fontSize: 12,
            fontWeight: "bold",
            borderColor: "transparent",
            backgroundColor: TransactionSelected ? "#FFFFFF" : "#F4F6F6",
          }}
          onClick={toggleTransactionBackground}
          value="Transaction"
        >
          Transaction
        </ToggleButton>
        <ToggleButton
          className={`${classes.togglebtn}
        MuiToggleButtonGroup-grouped:not(:first-of-type)
        ${BillsSelected === true ? "selected" : "not-selected"}
        `}
          sx={{
            borderRadius: 50,
            fontSize: 12,
            fontWeight: "bold",
            borderColor: "transparent",
          }}
          onClick={toggleBillsBackground}
          value="Upcoming Bills"
        >
          Upcoming Bills
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}
