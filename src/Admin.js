import React from 'react'

const  Admin= ()=>{
      return(
        <div className='container-fluid' id="main">
            <div className="row">
                <div className="col-12">
                    <h2>Bank:</h2>
                    <div className="accordion" id="accordionExample1">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                             <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{backgroundColor: "cornsilk"}}>
                                Short description of grievance
                            </button>
                            </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample1">
                            <div className="accordion-body" style={{backgroundColor:"teal"}}>
                              
                                 <div className="container" id="1">
                                     <div className="row">
                                         <div className="col-6">
                                        <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1" style={{marginRight:"40px"}}>
                                             Forward
                                        </button>
                                        <div className="collapse" id="collapseExample1" >
                                            <div className="card card-body" style={{backgroundColor: "#c2edda"}}>
                                            <div class="dropdown">
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
    To
  </a>

  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><a class="dropdown-item" href="#">Manager</a></li>
    <li><a class="dropdown-item" href="#">other</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                      <button className="btn btn-danger" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample1" style={{marginRight:"40px"}}>
                                        Reject/Discard
                                        </button>
                                   <div className="collapse" id="collapseExample2" >
                                       <div className="card card-body" style={{backgroundColor: "#c2edda"}}>
                                       <textarea rows="4" cols="10" style={{backgroundColor: "#c2edda"}}></textarea>
                                       </div>
                                   </div>
                                    </div> 
                                </div>
                            </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{backgroundColor: "cornsilk"}}>
                              Short description of grievance
                        </button>
                      </h2>
                      <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample1">
                        <div className="accordion-body" style={{backgroundColor: "teal"}}>
                            <div className="container" id="2">
                                <div className="row">
                                    <div className="col-6">
                                        <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1" style={{marginRight:"40px"}}>
                                            Forward
                                       </button>
                                       <div className="collapse" id="collapseExample1">
                                           <div className="card card-body" style={{backgroundColor: "#c2edda"}}>
                                           <div class="dropdown">
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
    To
  </a>

  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><a class="dropdown-item" href="#">Manager</a></li>
    <li><a class="dropdown-item" href="#">other</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
                                           </div>
                                       </div>
                                    </div>
                                    <div className="col-6">
                                      <button className="btn btn-danger" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample1" style={{marginRight:"40px"}}>
                                        Reject/Discard
                                   </button>
                                   <div className="collapse" id="collapseExample2">
                                       <div className="card card-body" style={{backgroundColor: "#c2edda"}}>
                                         <textarea rows="4" cols="10" style={{backgroundColor: "#c2edda"}}></textarea>
                                       </div>
                                   </div>
                                    </div>
            
                                </div>
                                </div>
                            </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{backgroundColor: "cornsilk"}}>
                              Short description of grievance
                        </button>
                      </h2>
                      <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample1">
                        <div className="accordion-body" style={{backgroundColor: "teal"}}>
                           <div className="container" id="3">
                                <div className="row">
                                    <div className="col-6">
                                        <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample3" style={{marginRight:"40px"}}>
                                             Forward
                                        </button>
                                        <div className="collapse" id="collapseExample3">
                                            <div className="card card-body" style={{backgroundColor: "#c2edda"}}>
                                            <div class="dropdown">
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
    To
  </a>

  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><a class="dropdown-item" href="#">Manager</a></li>
    <li><a class="dropdown-item" href="#">other</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                      <button className="btn btn-danger" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample4" aria-expanded="false" aria-controls="collapseExample3" style={{marginRight:"40px"}}>
                                        Reject/Discard
                                   </button>
                                   <div className="collapse" id="collapseExample4">
                                       <div className="card card-body" style={{backgroundColor: "#c2edda"}}>
                                       <textarea rows="4" cols="10" style={{backgroundColor: "#c2edda"}}></textarea>
                                       </div>
                                   </div>
                                    </div> 
                                </div>
                           </div>
                        </div>
                      </div>
                    </div>
                </div>
                <h2>ATM</h2>
                <div className="accordion" id="accordionExample2">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingFour">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour" style={{backgroundColor: "cornsilk"}}>
                             Short description of grievance
                        </button>
                      </h2>
                      <div id="collapseFour" className="accordion-collapse collapse show" aria-labelledby="headingFour" data-bs-parent="#accordionExample2">
                        <div className="accordion-body" style={{backgroundColor: "teal"}}>
                            <div className="container" id="4">
                                <div className="row">
                                    <div className="col-6">
                                        <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample4" aria-expanded="false" aria-controls="collapseExample4" style={{marginRight:"40px"}}>
                                             Forward
                                        </button>
                                        <div className="collapse" id="collapseExample4">
                                            <div className="card card-body" style={{backgroundColor: "#c2edda"}}>
                                                                                          <div class="dropdown">
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
    To
  </a>

  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><a class="dropdown-item" href="#">Manager</a></li>
    <li><a class="dropdown-item" href="#">other</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                      <button className="btn btn-danger" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample5" aria-expanded="false" aria-controls="collapseExample4" style={{marginRight:"40px"}}>
                                        Reject/Discard
                                   </button>
                                   <div className="collapse" id="collapseExample5">
                                       <div className="card card-body" style={{backgroundColor: "#c2edda"}}>
                                       <textarea rows="4" cols="10" style={{backgroundColor: "#c2edda"}}></textarea>
                                       </div>
                                   </div>
                                    </div> 
                                </div>
                            </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingFive">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive" style={{backgroundColor: "cornsilk"}}>
                             Short description of grievance
                        </button>
                      </h2>
                      <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample2">
                        <div className="accordion-body" style={{backgroundColor: "teal"}}>
                            <div className="container" id="5">
                                <div className="row">
                                    <div className="col-6">
                                        <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample5" aria-expanded="false" aria-controls="collapseExample5" style={{marginRight:"40px"}}>
                                             Forward
                                        </button>
                                        <div className="collapse" id="collapseExample5">
                                            <div className="card card-body" style={{backgroundColor: "#c2edda"}}>
                                            <div class="dropdown">
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
    To
  </a>

  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><a class="dropdown-item" href="#">Manager</a></li>
    <li><a class="dropdown-item" href="#">other</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                      <button className="btn btn-danger" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample6" aria-expanded="false" aria-controls="collapseExample5" style={{marginRight:"40px"}}>
                                        Reject/Discard
                                   </button>
                                   <div className="collapse" id="collapseExample6">
                                       <div className="card card-body" style={{backgroundColor: "#c2edda"}}>
                                       <textarea rows="4" cols="10" style={{backgroundColor: "#c2edda"}}></textarea>
                                       </div>
                                   </div>
                                    </div> 
                                </div>
                            </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingSix">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix" style={{backgroundColor: "cornsilk"}}>
                               Short description of grievance
                        </button>
                      </h2>
                      <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample2">
                        <div className="accordion-body" style={{backgroundColor: "teal"}}>
                            <div className="container" id="6">
                                <div className="row">
                                    <div className="col-6">
                                        <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample6" aria-expanded="false" aria-controls="collapseExample6" style={{marginRight:"40px"}}>
                                             Forward
                                        </button>
                                        <div className="collapse" id="collapseExample6">
                                            <div className="card card-body" style={{backgroundColor: "#c2edda"}}>
                                            <div class="dropdown">
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
    To
  </a>

  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><a class="dropdown-item" href="#">Manager</a></li>
    <li><a class="dropdown-item" href="#">other</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>  
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                      <div className="row">
                                        <div className="col-6">
                                            <button className="btn btn-danger" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample7" aria-expanded="false" aria-controls="collapseExample6" style={{marginRight:"40px"}}>
                                                 Reject/Discard
                                            </button>
                                            <div className="collapse" id="collapseExample7">
                                                <div className="card card-body" style={{backgroundColor: "#c2edda"}}>
                                                  <textarea rows="4" cols="10" style={{backgroundColor: "#c2edda"}}></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                        </div>
                      </div>
                    </div>
                </div>

            </div>
            
        </div>

    </div>


    )
}
export default Admin;

