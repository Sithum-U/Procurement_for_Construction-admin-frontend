import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Sidebar from '../../Sidebar';
import Header from '../../Header';
import Footer from '../../Footer';

function Approval() {

    const [items, setItems] = useState([]);
    // const dispatch = useDispatch();

    useEffect(() => {
        fetch("http://localhost:5002/cartitems")
            .then((res) => res.json())
            .then((data) => {
                setItems(data);
                //console.log(data);
            });
    }, []);

    console.log(items);
    return (
        <div className="container-scroller">
            <Header />
            <div className="container-fluid page-body-wrapper">
                <Sidebar />
                <div className="main-panel">
                    <div className="content-wrapper">
                        <div className="row">
                            <div className="col-lg-12 grid-margin stretch-card">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Accept the Order</h4>
                                        <h7>which are greater than Rs.100000</h7>
                                        <div className="card-body main-lable">
                                            <article className="icontext align-items-start">
                                                <span className="icon icon-sm rounded-circle alert-success"><i className="text-success fa fa-user" /></span>
                                                <div className="text">
                                                    <h5 className="card-title mb-2">Site Manager</h5>
                                                    {/* <p className="mb-1">{order.shippingAddress && order.shippingAddress.customer_name} <br /><a href="mailto:{data[0].email}">{data[0].email}</a></p> */}
                                                </div>
                                            </article>
                                        </div>
                                        <div className="float-right mr-5">

                                        </div>
                                        <p className="card-description">
                                        </p>
                                        <div className="table-responsive">
                                            <table className="table">
                                                <thead className="thead-light">
                                                    <tr>
                                                        <th scope="col">Title</th>
                                                        <th scope="col">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {items.data ?
                                                        items.data.map((item) => {
                                                            return (
                                                                <tr key={item._id}>
                                                                    <td>{item.name}</td>
                                                                    <td><Link
                                                                        to={`/view`}
                                                                        className="text-success"
                                                                        title="View"
                                                                    >
                                                                        <i className="fa fa-eye"></i>
                                                                    </Link>
                                                                        <i class="fa fa-trash" aria-hidden="true"></i></td>
                                                                </tr>
                                                            );
                                                        })
                                                        : <div></div>}

                                                </tbody>

                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    )
}
export default Approval;