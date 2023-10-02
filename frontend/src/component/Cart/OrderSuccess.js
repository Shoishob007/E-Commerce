import { Typography } from "@material-ui/core";
import { CheckCircle } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import "./OrderSuccess.css";

const OrderSuccess = () => {
  return (
    <div className="orderSuccess">
      <CheckCircle />
      <Typography>Your Order has been Placed Successfully</Typography>
      <Link to="/orders">Your Orders</Link>
    </div>
  );
};

export default OrderSuccess;
