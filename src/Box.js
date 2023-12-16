import React from 'react'
const   Box = () => {
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
  return (
    <body>
        <center>
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
        <button value="submit" id="submit">Submit</button>
    </center>


    </body>
  )
}

export default Box;