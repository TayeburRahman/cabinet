import React from 'react';
import Navbar from './Navbar';
import './style.css';



const Cabinet =[
 
  {
    'name':"Abid Cabinet",
    'key':'01'
  },
  {
    'name':"Aminul Cabinet",
    'key':'02'
  },
  {
    'name':"Tayeb Cabinet",
    'key':'03'
  },
  {
    'name':"Asad Cabinet",
    'key':'04'
  },
  {
    'name':"User5 Cabinet",
    'key':'05'
  },
  {
    'name':"User6 Cabinet",
    'key':'06'
  },
  {
    'name':"User7 Cabinet",
    'key':'07'
  },
  {
    name:"User8 Cabinet",
    'key':'08'
  },
  {
    name:"User9 Cabinet",
    'key':'09'
  },
]

function ControlCabinets() {
   
 const handleSubmit = data => {
   console.log(data)
  };
  

  return (
         <div className='row d-grid gridStyle'>
           <div className='backgroundTop pt-5'>
             <h3>Control Cabinets</h3>
           </div> 
           <div className=''>
           <Navbar></Navbar> 
           <div className='d-grid gridStyle hightInput '>
             <div className='pt-5'
              style={{
               width:'50%'
             }}
             > 
               <form onClick={handleSubmit} className='textLeft'>
                 <div className="mb-3">
                   <label for="exampleInputEmail1" className="form-label">Cabinets</label>
                      <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                        <option selected>Select Your Cabinet</option>
                        {
                          Cabinet.map((cabinet, idx) =>(
                            <option value={cabinet.name}>{cabinet.name}</option>
                          ))
                        } 
                      </select>
                  </div>
                 <div className="mb-3">
                   <label for="exampleInputPassword1" className="form-label">Password</label>
                   <input type="password" placeholder='Password' className="form-control pt-2 pb-2" id="exampleInputPassword1"/>
                 </div>
                 
                 <button type="submit" className="btn btn-primary ps-5 pe-5">Open</button>
               </form>
             </div>
           </div>
           </div>
         </div>
  );
};
 

export default ControlCabinets
