import React from 'react'

function Payment() {
  return (
    <>
    <div className="flex-col lg:flex lg:flex-row p-5">
        <div className='w-full h-96 p-2 bg-gradient-to-b from-[#cbf8f8] to-white border-solid border-2 border-black lg:w-1/2 lg:bg-gradient-to-b'>
            <h1 className="font-bold text-3xl lg:text-4xl mb-4">
            Special VIP offer
            </h1>
            <ul className='text-lg mb-4'>
            <li><i className='fa-solid fa-list-check mr-2'></i> enjoy our 24hours cleaning service</li> 
            <li><i className='fa-solid fa-list-check mr-2'></i> Automatic billing</li>
            <li><i className='fa-solid fa-list-check mr-2'></i> effective and efficient check out</li>
            <li><i className='fa-solid fa-list-check mr-2'></i> Laundry service for all family members</li>
            </ul>
            <p className='text-lg break-words'>Subscribe to our VIP plan now for just <b className='bg-[#54d2d2] px-2 font-xl'>$200/month</b> to enjoy the above benefit</p>
        </div>      
        <div className="w-full mt-4 lg:w-1/2 lg:mt-0 ">
            <div className="col-lg-6 mx-auto w-full lg:w-4/5">
                <div className="card ">
                    <div className="card-header">
                        <div className="bg-white shadow-sm pt-4 pl-2 pr-2 pb-2">
                            <ul role="tablist" className="nav bg-light nav-pills rounded nav-fill mb-3">
                                <li className="nav-item"> <a data-toggle="pill" href="#credit-card" className="nav-link "> <i className="fas fa-credit-card mr-2"></i> Credit Card </a> </li>
                                <li className="nav-item"> <a data-toggle="pill" href="#paypal" className="nav-link "> <i className="fab fa-paypal mr-2"></i> Paypal </a> </li>
                            </ul>
                        </div>
                    
                        <div className="tab-content">
                            <div id="credit-card" className="tab-pane fade show active pt-3">
                                <form role="form" onsubmit="event.preventDefault()">
                                    <div className="form-group"> <label for="username">
                                            <h6>Card Owner</h6>
                                        </label> <input type="text" name="username" placeholder="Card Owner Name" required className="form-control "/> </div>
                                    <div className="form-group"> <label for="cardNumber">
                                            <h6>Card number</h6>
                                        </label>
                                        <div className="input-group"> <input type="number" name="cardNumber" placeholder="Valid card number" className="form-control " required/>
                                            <div className="input-group-append"> <span className="input-group-text text-muted"> <i className="fab fa-cc-visa mx-1"></i> <i className="fab fa-cc-mastercard mx-1"></i> <i className="fab fa-cc-amex mx-1"></i> </span> </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-8">
                                            <div className="form-group"> <label><span className="hidden-xs">
                                                        <h6>Expiration Date</h6>
                                                    </span></label>
                                                <div className="input-group"> <input type="month" placeholder="MM" name="" className="form-control" required/></div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="form-group mb-4"> <label data-toggle="tooltip" title="Three digit CV code on the back of your card">
                                                    <h6>CVV <i className="fa fa-question-circle d-inline"></i></h6>
                                                </label> <input type="number" required className="form-control"/> </div>
                                        </div>
                                    </div>
                                    <div className="card-footer"> <button type="button" className="text-[#54d2d2]"> Confirm Payment </button> </div>
                                </form>
                            </div>
                        </div>
                        <div>Or make payment using paypal</div>
                        <div id="paypal" className="">
                            <h6 className="pb-2">Select your paypal account type</h6>
                            <div className="form-group "> 
                                <label className="radio-inline"> 
                                    <input type="radio" name="optradio" checked/> Domestic 
                                </label>
                                <div className="radio-inline"/> 
                                    <input type="radio" name="optradio" className="ml-5"/>International 
                                </div>
                            </div>
                            <p> <button type="button" className=" bg-[#54d2d2] text-white px-2 rounded-4"><i className="fab fa-paypal mr-2"></i> Log into my Paypal</button> </p>
                            <p className="text-muted"> Note: After clicking on the button, you will be directed to a secure gateway for payment. After completing the payment process, you will be redirected back to the website to view details of your order. </p>
                        </div>
                    
                    </div>
                </div>
            </div>
    </div>
    <hr />
    </>
  )
}

export default Payment;