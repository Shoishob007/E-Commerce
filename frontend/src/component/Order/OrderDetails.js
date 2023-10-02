import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrderDetails, clearErrors } from "../../actions/orderAction";
import "./OrderDetails.css";
import MetaData from "../layout/MetaData";
import Loader from "../layout/Loader/Loader";
import { Link, Typography } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { useAlert } from "react-alert";

function OrderDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const alert = useAlert();

  const { order, error, loading } = useSelector((state) => state.orderDetails);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getOrderDetails(id));
  }, [dispatch, error, id, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="Order Details" />
          <div className="orderDetailsPage">
            <div className="orderDetailsContainer">
              <Typography component="h1">
                Order #{order && order._id}
              </Typography>
              <Typography>Shipping Info</Typography>
              <div className="orderDetailsContainerBox">
                <div className="subOrderDetailsContainerBox">
                  <p>Name:</p>
                  <span> {order.user && order.user.name}</span>
                </div>
                <div className="subOrderDetailsContainerBox">
                  <p>Phone:</p>
                  <span>
                    {order.shippingInfo && order.shippingInfo.phoneNo}
                  </span>
                </div>
                <div className="subOrderDetailsContainerBox">
                  <p>Address:</p>
                  <span>
                    {order.shippingInfo &&
                      `${order.shippingInfo.address} , ${order.shippingInfo.city} , ${order.shippingInfo.state} ,${order.shippingInfo.pinCode}, ${order.shippingInfo.country}`}
                  </span>
                </div>
              </div>
              <Typography>Payment</Typography>
              <div className="orderDetailsContainerBox">
                <div className="subOrderDetailsContainerBox1">
                  <p
                    className={
                      order.paymentInfo &&
                      order.paymentInfo.status === "succeeded"
                        ? "greenColor"
                        : "redColor"
                    }
                  >
                    {order.paymentInfo &&
                    order.paymentInfo.status === "succeeded"
                      ? "Paid"
                      : "Not Paid"}
                  </p>
                </div>
                <div className="subOrderDetailsContainerBox">
                  <p>Amount :</p>
                  <span>{order.totalPrice && order.totalPrice}</span>
                </div>
              </div>
              <Typography>Order Status</Typography>
              <div className="orderDetailsContainerBox">
                <div className="subOrderDetailsContainerBox1">
                  <p
                    className={
                      order.paymentInfo &&
                      order.paymentInfo.status === "succeeded"
                        ? "greenColor"
                        : "redColor"
                    }
                  >
                    {order.orderStatus}
                  </p>
                </div>
              </div>
              <div className="orderDetailsCartItems">
                <Typography>Ordered Items :</Typography>
                <div className="orderDetailsCartItemsContainer">
                  {order.orderItems &&
                    order.orderItems.map((item) => (
                      <div
                        key={item.product}
                        className="subOrderDetailsCartItemsContainer"
                      >
                        <img src={item.image} alt="Product " />{" "}
                        <Link to={`/product/${item.product}`}>{item.name}</Link>{" "}
                        <span>
                          {item.quantity} X {item.price} Tk ={" "}
                          <b> {item.price * item.quantity} Tk</b>
                        </span>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
}

export default OrderDetails;
