import { Link } from "react-router-dom";
import Header from "../../Header";
import Sidebar from "../../Sidebar";
import Footer from "../../Footer";
import { useDispatch, useSelector } from "react-redux";
import { deleteOrder } from "../../../redux/actions/OrderActions";

const Order = (props) => {
  //   const orderId = match.params.id;
  //   const orderDetails = useSelector((state) => state.orderDetails);
  //   const { order } = orderDetails;
  let {
    _id,
    title,
    image,
    totalPrice,
    isPaid,
    isApproved,
    orderItems,
    createdAt,
    isDelivered,
    shippingAddress: { customer_name },
    user_info: [{ email }],
  } = props.order;

  const orderDate = new Date(createdAt);
  const localOrderDate = orderDate.toLocaleString("en-US");

  const dispatch = useDispatch();

  const deletehandler = (id) => {
    if (window.confirm("Are you sure want to delete order?")) {
      dispatch(deleteOrder(id));
    }
  };
  return (
    <>
      <tr>
        {/* <td>{customer_name}</td>
        <td>{email}</td> */}
        <td>{_id}</td>
        <td>{localOrderDate}</td>
        <td>Rs. {totalPrice / 100}</td>
        {/* <td>{isPaid ? "Yes" : "No" }</td> */}
        <td>{isApproved ? "Approved" : "NotApproved"}</td>
        <td>
          <Link
            to={`/approval/edit/${_id}`}
            className="text-success"
            title="View"
          >
            <i className="fa fa-edit"></i>
          </Link>
          <Link to="#" title="Delete" onClick={() => deletehandler(_id)}>
            <i className="fa fa-trash"></i>
          </Link>
        </td>
      </tr>
    </>
  );
};

export default Order;
