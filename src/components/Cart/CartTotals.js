import React from 'react'
import {Link} from "react-router-dom";

export default function CartTotals({value}) {
    const{cartSubTotal,cartDelivery,cartTotal,clearCart} = value;
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                        <Link to ="/">
                            <button className="btn btn-outline-danger text-uppercase mb-3 px-5" type="button" onClick={() => clearCart()}>
                                clear cart
                            </button>
                        </Link>
                        <h5>
                            <span className="text-title">
                                subtotal :
                            </span>
                            <strong> Rs. {cartSubTotal} </strong>
                        </h5>
                        <h5>
                            <span className="text-title">
                                Delivery charges :
                            </span>
                            <strong> Rs. {cartDelivery} </strong>
                        </h5>
                        <h5>
                            <span className="text-title">
                                Total Amount :
                            </span>
                            <strong> Rs. {cartTotal} </strong>
                        </h5>

                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
