import { useCart } from "react-use-cart";
import "../cart.css"
import { Link } from "react-router-dom";


function Cart (){
    const {
        items, 
        isEmpty,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
        totalUniqueItems,
    }= useCart();

    console.log(items)

    return (
        <div>
            <section className="h-100 h-custom" style={{backgroundColor: "#eee"}}>
  <div className="container h-100 py-5">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col">
        <div className="card shopping-cart" style={{borderRadius: "15px"}}>
          <div className="card-body text-black">

            <div className="row">
              <div className="col-lg-6 px-5 py-4">

                <h3 className="mb-5 pt-2 text-center fw-bold text-uppercase">Your products</h3>
                {items.map(item=>(
                        <div className="d-flex align-items-center mb-5">
                        <div className="flex-shrink-0">
                          <img src={item.image}
                            className="img-fluid" style={{width: "150px"}} alt="Generic placeholder image"/>
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <a href="" className="float-end text-black" onClick={()=> removeItem(item.id)}><i className="fas fa-times"></i></a>
                          <h5 className="text-primary">{item.name}</h5>
                          <h6 style={{color: "#9e9e9e", Color: "white"}}></h6>
                          <div className="d-flex align-items-center">
                            <p className="fw-bold mb-0 me-5 pe-3">{item.price}$</p>
                            <div className="def-number-input number-input safari_only">
                              <button onClick={()=>updateItemQuantity(item.id, item.quantity-1)}
                                className="minus"></button>
                              <p className="quantity fw-bold text-black" min="0" name="quantity">{item.quantity}</p>
                               
                              <button onClick={()=>updateItemQuantity(item.id, item.quantity + 1)}
                                className="plus"></button>
                            </div>
                            
                          </div>
                        </div>
                      </div>
                ))}
                

                <hr className="mb-4" style={{height: "2px", backgroundColor: "#1266f1", opacity: 1}}/>

                <div className="d-flex justify-content-between px-x">
                  <p className="fw-bold">Discount:</p>
                  <p className="fw-bold">{cartTotal * 10/100 }$</p>
                </div>
                <div className="d-flex justify-content-between p-2 mb-2" style={{backgroundColor: "#e1f5fe"}}>
                  <h5 className="fw-bold mb-0">Total:</h5>
                  <h5 className="fw-bold mb-0">{cartTotal.toFixed(2)}$</h5>
                </div>

              </div>
              <div className="col-lg-6 px-5 py-4">

                <h3 className="mb-5 pt-2 text-center fw-bold text-uppercase">Payment</h3>

                <form className="mb-5">

                  <div className="form-outline mb-5">
                    <input type="text" id="typeText" className="form-control form-control-lg" size={17}
                      minlength={19} maxlength={19} />
                    <label className="form-label" for="typeText">Card Number</label>
                  </div>

                  <div className="form-outline mb-5">
                    <input type="text" id="typeName" className="form-control form-control-lg" size={17}
                       />
                    <label className="form-label" for="typeName">Name on card</label>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-5">
                      <div className="form-outline">
                        <input type="text" id="typeExp" className="form-control form-control-lg"
                          size={17}
                          minlength={19} maxlength={19}/>
                        <label className="form-label" for="typeExp">Expiration</label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-5">
                      <div className="form-outline">
                        <input type="password" id="typeText" className="form-control form-control-lg"
                           size={17}
                           minlength={19} maxlength={19} />
                        <label className="form-label" for="typeText">Cvv</label>
                      </div>
                    </div>
                  </div>

                  <button type="submit" className="btn btn-primary btn-block btn-lg">Buy now</button>

                  <h5 className="fw-bold mb-5" style={{position: "absolute", bottom: 0}}>
                    <Link to="/"><i className="fas fa-angle-left me-2"></i>Back to shopping</Link>
                  </h5>

                </form>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        </div>
    )
}

export default Cart;