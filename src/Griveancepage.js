import React from 'react'
import Box from './Box';
import History from './History'



const Griveancepage = () => {
  function showb(){
    if( document.getElementById('div1').style.display ='none'){
      document.getElementById("div2").style.display='block';
    }
    if( document.getElementById('div2').style.display ='block'){
      document.getElementById("div1").style.display='none';
    }
    
  }
  function showa(){
    if( document.getElementById('div1').style.display ='block'){
      document.getElementById("div2").style.display='none';
      document.getElementById("div3").style.display='none';
      document.getElementById("div4").style.display='none';
    }
  }
  function showba(){
    if( document.getElementById('div4').style.display ='none'){
        document.getElementById("div3").style.display='block';
    }
  }
  function showatm(){
    if( document.getElementById('div4').style.display ='block'){
      document.getElementById("div3").style.display='none';
    }
  }
  function success(){
      document.write("success")
  }
  return (
      <div className='container-fluid'>
           <h1>Grievance history</h1>
      <p>
        <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
          Solved
        </button>
      </p>
      <div className="collapse" id="collapseExample">
        <div className="card card-body" style={{background:"#c2edda"}}>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Grievance History                                                  date submitted
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={{background:"teal"}}>
                       
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                         Grievance History                                                  date submitted
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={{background:"teal"}}>
                        Grievance History                                                  date submitted
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Grievance History                                                  date submitted
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={{background:"teal"}}>
                        
                    </div>
                  </div>
                </div>
              </div>
        </div>
      </div>
      <p>
        <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1">
          Unsolved
        </button>
      </p>
      <div className="collapse" id="collapseExample1">
      <div className="card card-body" style={{background:"#c2edda"}}>
          <div className="accordion" id="accordionExample1">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne1">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="true" aria-controls="collapsefour">
                    Grievance History                                                  date submitted
                  </button>
                </h2>
                <div id="collapsefour" className="accordion-collapse collapse show" aria-labelledby="headingOne1" data-bs-parent="#accordionExample1">
                  <div className="accordion-body" style={{background:"teal"}}>
                     
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo1">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                       Grievance History                                                  date submitted
                  </button>
                </h2>
                <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingTwo1" data-bs-parent="#accordionExample1">
                  <div className="accordion-body" style={{background:"teal"}}>
                      Grievance History                                                  date submitted
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree1">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                      Grievance History                                                  date submitted
                  </button>
                </h2>
                <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingThree1" data-bs-parent="#accordionExample1">
                  <div className="accordion-body" style={{background:"teal"}}>
                      
                  </div>
                </div>
              </div>
            </div>
      </div>
    </div> 
    {/* <center>
        <div className="box">
            <h1>Start a new Grievance</h1>
        </div>
        <br/>
        <input type="radio" name="tab" value="igotnone" onClick={showb}/>Bank
        <input type="radio" name="tab" value="igotnone1" onClick={showa} />ATM
        <div id="div1" className='hide'>
            <hr/>
            <input type="radio" name="tab" value="bankcards" onClick={showba} style={{"font-weight":"bold"}}/>Bankcards
            <input type="radio" name="tab" value="ATM MACHINE" onClick={showatm}/>ATM Machine
            <div className='hide' id="div3">
                <div className='container'>
                    <div className='row'>
                        <center>
                            <div className='col-3'>
                            <input className="form-control" list="datalistOptions1" id="exampleDataList1" placeholder="Select Card type"/>
                            <datalist id="datalistOptions1">
                                    <option value="Debit Card"/>
                                    <option value="Credit Card"/>
                                    <p>Card Number:</p>
                                    <textarea id="t2" rows="1" cols="20"></textarea>
                                    <p>Select expiry date</p>
                            </datalist>
                            </div>
                        </center>
                    </div>
                    <div className='row'>
                        <center>
                            <div className='col-3'>
                                <input className="form-control" list="datalistOptions2" id="exampleDataList2" placeholder="Select Year"/>
                                <datalist id="datalistOptions2">
                                            <option value="21"/>
                                            <option value="20"/>
                                            <option value="19"/>
                                            <option value="18"/>
                                            <option value="17"/>
                                            <option value="16"/>
                                            <option value="15"/>
                                            <option value="14"/>
                                            <option value="13"/>
                                            <option value="12"/>
                                            <option value="11"/>   
                                            <option value="10"/>
                                            <option value="09"/>
                                            <option value="08"/>
                                            <option value="07"/>
                                            <option value="06"/>
                                            <option value="05"/>
                                            <option value="04"/>
                                            <option value="03"/>
                                            <option value="02"/>
                                            <option value="01"/>
                                            <option value="00"/>
                                </datalist>
                            </div>
                            <div className='col-3'>
                                <br/>
                                <input className="form-control" list="datalistOptions3" id="exampleDataList3" placeholder="Select Month"/>
                                <datalist id="datalistOptions3">
                                          <option value="1"/>
                                          <option value="2"/>
                                          <option value="3"/>
                                          <option value="4"/>
                                          <option value="5"/>
                                          <option value="6"/>
                                          <option value="7"/>
                                          <option value="8"/>
                                          <option value="9"/>
                                          <option value="10"/>
                                          <option value="11"/>
                                          <option value="12"/>
                                </datalist>
                            </div>
                        </center>
                    </div>
                </div>
            </div>
            <div className='hide' id='div4'>
                <p>Enter your location:</p>
                <textarea id="t3" rows="1" cols="20"></textarea>
                <p>Describe your issue</p>
                <textarea id="t4"></textarea>
            </div>
        </div>
        <div className='hide' id='div2'>
                <hr/>
                <div className='container'>
                    <div className='row'>
                        <center>
                            <div className='col-3'>
                            <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Select Branch"/>
                            <datalist id="datalistOptions">
                                <option value="San Francisco"/>
                                <option value="New York"/>
                                <option value="Seattle"/>
                                <option value="Los Angeles"/>
                                <option value="Chicago"/>
                            </datalist>
                            </div>
                        </center>
                    </div>
                </div>
                <h3>Issue With</h3>
            <input type="radio" name="tab" value="Transfer"/> Transfer 
            <input  type="radio" name="tab" value="WithDrawal"/> Withdrawal
            <input  type="radio" name="tab" value="Others"/> Others
            <br/>
            <p>Enter your issue</p>
            <textarea rows="2" cols="100"></textarea> 
        </div>
        <br/>
        <button value="submit" id="submit" onClick={success}>Submit</button>
    </center> */}
      <form>
        <center>
        <div className="box">
            <h1>Start a new Grievance</h1>
        </div>
        <br/>
        <input type="radio" name="tab1" value="igotnone" onClick={showb}/>Bank
        <input type="radio" name="tab1" value="igotnone1" onClick={showa} />ATM
        <div id="div1" className='hide'>
            <hr/>
            <input type="radio" name="tab" value="bankcards" onClick={showba} style={{"font-weight":"bold"}}/>Bankcards
            <input type="radio" name="tab" value="ATM MACHINE" onClick={showatm}/>ATM Machine
            <div className='hide' id="div3">
                <div className='container'>
                    <div className='row'>
                        <center>
                            <div className='col-3'>
                            <input className="form-control" list="datalistOptions1" id="exampleDataList1" placeholder="Select Card type"/>
                            <datalist id="datalistOptions1">
                                    <option value="Debit Card"/>
                                    <option value="Credit Card"/>
                                    <p>Card Number:</p>
                                    <textarea id="t2" rows="1" cols="20"></textarea>
                                    <p>Select expiry date</p>
                            </datalist>
                            </div>
                        </center>
                    </div>
                    <div className='row'>
                        <center>
                            <div className='col-3'>
                                <input className="form-control" list="datalistOptions2" id="exampleDataList2" placeholder="Select Year"/>
                                <datalist id="datalistOptions2">
                                            <option value="21"/>
                                            <option value="20"/>
                                            <option value="19"/>
                                            <option value="18"/>
                                            <option value="17"/>
                                            <option value="16"/>
                                            <option value="15"/>
                                            <option value="14"/>
                                            <option value="13"/>
                                            <option value="12"/>
                                            <option value="11"/>   
                                            <option value="10"/>
                                            <option value="09"/>
                                            <option value="08"/>
                                            <option value="07"/>
                                            <option value="06"/>
                                            <option value="05"/>
                                            <option value="04"/>
                                            <option value="03"/>
                                            <option value="02"/>
                                            <option value="01"/>
                                            <option value="00"/>
                                </datalist>
                            </div>
                            <div className='col-3'>
                                <br/>
                                <input className="form-control" list="datalistOptions3" id="exampleDataList3" placeholder="Select Month"/>
                                <datalist id="datalistOptions3">
                                          <option value="1"/>
                                          <option value="2"/>
                                          <option value="3"/>
                                          <option value="4"/>
                                          <option value="5"/>
                                          <option value="6"/>
                                          <option value="7"/>
                                          <option value="8"/>
                                          <option value="9"/>
                                          <option value="10"/>
                                          <option value="11"/>
                                          <option value="12"/>
                                </datalist>
                            </div>
                        </center>
                    </div>
                </div>
            </div>
            <div className='hide' id='div4'>
                <p>Enter your location:</p>
                <textarea id="t3" rows="1" cols="20"></textarea>
                <p>Describe your issue</p>
                <textarea id="t4"></textarea>
            </div>
        </div>
        <div className='hide' id='div2'>
                <hr/>
                <div className='container'>
                    <div className='row'>
                        <center>
                            <div className='col-3'>
                            <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Select Branch"/>
                            <datalist id="datalistOptions">
                                <option value="San Francisco"/>
                                <option value="New York"/>
                                <option value="Seattle"/>
                                <option value="Los Angeles"/>
                                <option value="Chicago"/>
                            </datalist>
                            </div>
                        </center>
                    </div>
                </div>
                <h3>Issue With</h3>
            <input type="radio" name="tab" value="Transfer"/> Transfer 
            <input  type="radio" name="tab" value="WithDrawal"/> Withdrawal
            <input  type="radio" name="tab" value="Others"/> Others
            <br/>
            <p>Enter your issue</p>
            <textarea rows="2" cols="100"></textarea> 
        </div>
        <br/>
        <button value="submit" id="submit" onClick={success}>Submit</button>
    </center>

    </form>
    </div>
  )
}

export default Griveancepage;