import React, { Fragment, useEffect, useState } from "react";
import MetaData from "../layout/MetaData";
import { useDispatch, useSelector } from "react-redux";
import { Button, Typography } from "@material-ui/core";
import { Link, useParams } from "react-router-dom";
import { useAlert } from "react-alert";
import Sidebar from "./Sidebar";
import Loader from "../layout/Loader/Loader";
import {
  clearErrors,
  getOrderDetails,
  updateOrder,
} from "../../actions/orderAction";
import { AccountTree } from "@material-ui/icons";
import { UPDATE_ORDER_RESET } from "../../constants/orderConstants";
import "./processOrder.css";

const ProcessOrder = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const alert = useAlert();
  const { error, loading, order } = useSelector((state) => state.orderDetails);
  const { error: updateError, isUpdated } = useSelector((state) => state.order);
  const [status, setStatus] = useState("");

  const updateOrderSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("status", status);

    dispatch(updateOrder(id, myForm));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (updateError) {
      alert.error(updateError);
      dispatch(clearErrors());
    }
    if (isUpdated) {
      alert.success("Order updated successfully");
      dispatch({ type: UPDATE_ORDER_RESET });
    }
    dispatch(getOrderDetails(id));
  }, [dispatch, error, id, alert, isUpdated, updateError]);

  return (
    <Fragment>
      <MetaData title="Process Order" />
      <div className="dashboard">
        <Sidebar />
        <div className="newProductContainer">
          {loading ? (
            <Loader />
          ) : (
            <div
              className="confirmOrderPage"
              style={{
                display: order.orderStatus === "Delivered" ? "block" : "grid",
              }}
            >
              <div>
                <div className="confirmShippingArea">
                  <Typography>Shipping Info</Typography>
                  <div className="orderDetailsContainerBox">
                    <div className="subOrderDetailsContainerBox">
                      <p>Name:</p>
                      <span> {order && order.user && order.user.name}</span>
                    </div>
                    <div className="subOrderDetailsContainerBox">
                      <p>Phone:</p>
                      <span>
                        {order &&
                          order.shippingInfo &&
                          order.shippingInfo.phoneNo}
                      </span>
                    </div>
                    <div className="subOrderDetailsContainerBox">
                      <p>Address:</p>
                      <span>
                        {order &&
                          order.shippingInfo &&
                          `${order.shippingInfo.address} , ${order.shippingInfo.city} , ${order.shippingInfo.state} ,${order.shippingInfo.pinCode}, ${order.shippingInfo.country}`}
                      </span>
                    </div>
                  </div>

                  <Typography>Payment</Typography>
                  <div className="orderDetailsContainerBox">
                    <div className="subOrderDetailsContainerBox1">
                      <p
                        className={
                          order &&
                          order.paymentInfo &&
                          order.paymentInfo.status === "succeeded"
                            ? "greenColor"
                            : "redColor"
                        }
                      >
                        {order &&
                        order.paymentInfo &&
                        order.paymentInfo.status === "succeeded"
                          ? "Paid"
                          : "Not Paid"}
                      </p>
                    </div>
                    <div className="subOrderDetailsContainerBox">
                      <p>Amount :</p>
                      <span>{order && order.totalPrice}</span>
                    </div>
                  </div>
                  <Typography>Order Status</Typography>
                  <div className="orderDetailsContainerBox">
                    <div className="subOrderDetailsContainerBox1">
                      <p
                        className={
                          order &&
                          order.paymentInfo &&
                          order.paymentInfo.status === "succeeded"
                            ? "greenColor"
                            : "redColor"
                        }
                      >
                        {order && order.orderStatus}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="confirmCartItems">
                  <Typography>Your Cart Items:</Typography>
                  <div className="confirmCartItemsContainer">
                    {order &&
                      order.orderItems &&
                      order.orderItems.map((item) => (
                        <div
                          key={item.product}
                          className="subConfirmCartItemsContainer"
                        >
                          <img src={item.image} alt="Product" />
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                          <span>
                            {item.quantity} x {item.price} Tk ={" "}
                            <b>{item.quantity * item.price} Tk</b>
                          </span>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: order.orderStatus === "Delivered" ? "none" : "block",
                }}
              >
                <form
                  className="updateProductForm"
                  onSubmit={updateOrderSubmitHandler}
                >
                  <h1>Process Order</h1>

                  <div>
                    <AccountTree />
                    <select onChange={(e) => setStatus(e.target.value)}>
                      <option value={""}>Choose Category</option>
                      {order && order.orderStatus === "Processing" && (
                        <option value={"Shipped"}>Shipped</option>
                      )}
                      {order && order.orderStatus === "Shipped" && (
                        <option value={"Delivered"}>Delivered</option>
                      )}
                    </select>
                  </div>

                  <Button
                    id="createProductBtn"
                    type="submit"
                    disabled={
                      loading ? true : false || status === "" ? true : false
                    }
                  >
                    Process
                  </Button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default ProcessOrder;
