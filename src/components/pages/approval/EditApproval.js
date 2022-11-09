import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";
import Header from "../../Header";
import Sidebar from "../../Sidebar";
import Footer from "../../Footer";
import {
  getOrderDetails,
  deliverOrder,
} from "../../../redux/actions/OrderActions";
import { ORDER_UPDATE_RESET } from "../../../redux/constants/OrderConstants";
import { toast } from "react-toastify";
import { ToastObjects } from "../../../redux/actions/toastObject";
import "./order.css";

const EditApproval = ({ match }) => {
  const orderId = match.params.id;
  const [submitted, setSubmitted] = useState(false);
  const [isApproved, setIsApproved] = useState(false);
  const dispatch = useDispatch();

  const {
    userLogin: {
      userInfo: { data },
    },
  } = useSelector((state) => state);
  const orderDetails = useSelector((state) => state.orderDetails);
  const { loading, error, order } = orderDetails;

  console.log("order", order);

  useEffect(() => {
    if (order._id !== orderId) {
      dispatch(getOrderDetails(orderId));
    }
  }, [order, dispatch, orderId]);

  const approveHandler = (e) => {
    e.preventDefault();
    const status = !order.isApproved ? "Approved" : "Not";
    setIsApproved(status);
  };
  console.log(order);

  return (
    <>
      <div className="container-scroller">
        <Header />
        <div className="container-fluid page-body-wrapper">
          <Sidebar />
          <div className="main-panel">
            <div className="content-wrapper">
              <div className="row">
                <div className="col-12 grid-margin">
                  <div className="card">
                    <div className="card-body">
                      <div className="clearfix mb-4">
                        <h4 className="float-left">
                          {" "}
                          <h7>Orders greater than Rs.100,000 /=</h7>
                        </h4>
                        <Link
                          to="/approval"
                          className="btn btn-outline-primary float-right"
                        >
                          Back to Approvals
                        </Link>
                      </div>
                      <form className="form-sample clear-fix">
                        <div className="card">
                          <h5 className="card-header">
                            <div className="float-left">
                              <span>
                                <i className="fa fa-calendar"></i>
                                <b>{moment(order.createdAt).format("llll")}</b>
                              </span>
                              <br />
                              <small>Order ID: {order._id}</small>
                            </div>
                            <div className="float-right">
                              {order.isDelivered ? (
                                <span className="btn btn-success me-2 cursor-auto">
                                  Approved on{" "}
                                  {moment(order.deliveredAt).format("llll")}
                                </span>
                              ) : (
                                <>
                                  {loading ? (
                                    ""
                                  ) : (
                                    <button
                                      className="btn btn-danger me-2"
                                      onClick={approveHandler}
                                    >
                                      Mark as Approved
                                    </button>
                                  )}
                                </>
                              )}
                            </div>
                          </h5>

                          <div className="card-body">
                            <div className="row">
                              <div className="col-sm-5">
                                <div className="card">
                                  <div className="card-body main-lable">
                                    <article className="icontext align-items-start">
                                      <span className="icon icon-sm rounded-circle alert-success">
                                        <i className="text-success fa fa-user" />
                                      </span>
                                      <div className="text">
                                        <h5 className="card-title mb-2">
                                          Customer
                                        </h5>
                                        <p className="mb-1">
                                          {order.shippingAddress &&
                                            order.shippingAddress
                                              .customer_name}{" "}
                                          <br />
                                          <a href="mailto:{data[0].email}">
                                            {data[0].email}
                                          </a>
                                        </p>
                                      </div>
                                    </article>
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-4">
                                <div className="card">
                                  <div className="card-body main-lable">
                                    <article className="icontext align-items-start">
                                      <span className="icon icon-sm rounded-circle alert-success">
                                        <i className="text-success fa fa-bell " />
                                      </span>
                                      <div className="text">
                                        <h5 className="card-title mb-2">
                                          Status Approval
                                        </h5>
                                        {/* <p className="mb-1">
                                          Pay method: {order.paymentMethod}
                                        </p> */}
                                        <p className="mb-1">
                                          Status:{" "}
                                          {isApproved ? (
                                            <span className="badge badge-pill badge-success">
                                              Approved
                                            </span>
                                          ) : (
                                            <span className="badge badge-pill badge-danger">
                                              NotApproved
                                            </span>
                                          )}
                                        </p>
                                      </div>
                                    </article>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row mt-4">
                              {(order.orderItems && order.orderItems.length) >
                              0 ? (
                                <div className="col-sm-12">
                                  <table className="table">
                                    <thead className="thead-light">
                                      <tr>
                                        <th scope="col">Product</th>
                                        <th scope="col">Unit Price</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col" className="text-end">
                                          Total
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {order.orderItems.map((item) => (
                                        <tr key={item._id}>
                                          <td>
                                            <div className="itemside">
                                              <div className="left">
                                                <img
                                                  src={item.image}
                                                  alt={item.name}
                                                  className="img-xs"
                                                />
                                              </div>
                                              <div className="info">
                                                {item.name}
                                              </div>
                                            </div>
                                          </td>
                                          <td>Rs. {item.price}</td>
                                          <td>{item.qty}</td>
                                          <td className="text-end">
                                            Rs. {item.price * item.qty}
                                          </td>
                                        </tr>
                                      ))}
                                      <tr>
                                        <td colSpan="4">
                                          <article className="float-right">
                                            <dl className="dlist">
                                              <dt>Total:</dt>
                                              <dd>
                                                <b className="h5">
                                                  Rs.{" "}
                                                  {order.itemsPrice.toFixed(2)}
                                                </b>
                                              </dd>
                                            </dl>
                                          </article>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              ) : (
                                <div className="text-center">
                                  No Item Available
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default EditApproval;
