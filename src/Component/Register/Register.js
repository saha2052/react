import {React,useState} from 'react';
import axios from 'axios';
import './register.css';
const Register=()=>{
  const [field,setField]=useState({
    flds: []
  })
  const [user,setUser]=useState({
      firstname:'',
      lastname:'',
      phone:'',
      address:[],
      
    })
    // console.log(field);
    // console.log(user);

const  handleText = i => e => {
    let flds = [...field.flds]
    flds[i] = e.target.value
    //console.log(flds);
    setField({
        flds
    })

    //console.log(flds);
    setUser({
        ...user,
        address:flds
        
    })
//console.log(user);
  }

const handleChange=(e)=>{
e.preventDefault();
setUser({
    ...user,
    [e.target.name]:e.target.value
})
}

 const handleDelete = i => e => {
    e.preventDefault()
    let flds = [
      ...field.flds.slice(0, i),
      ...field.flds.slice(i + 1)
    ]
    setField({
        flds
    })
console.log(flds);
    setUser({
        ...user,
        address:flds
        
    })
    console.log(user);
  }

 const addBox = e => {
    e.preventDefault()
    let flds = field.flds.concat([''])
    
    setField({
      flds
    })
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post(`https://jsonplaceholder.typicode.com/users`,user).then(

       res=>{
      
        console.log(res);
        alert('Data Save Sucess');
          
       }
       ).catch(
           error=>{
               console.log(error);
           }
       )
  }


    return(
        <>
    <div className="container d-flex justify-content-center align-items-center">
    <div className="card">
        <div className="row">
            <div className="col-md-6">
                <div className="form">
                    <form onSubmit={handleSubmit}>
                    <h2>Registration</h2>
                    <div className="inputbox mt-3"> <span>First Name</span>
                     <input type="text" placeholder="First Name" value={user.firstname} onChange={handleChange} name="firstname" className="form-control" /> </div>
                    <div className="inputbox mt-3"> <span>Last Name</span>
                     <input type="text" placeholder="Last Name" value={user.lastname} onChange={handleChange} name="lastname" className="form-control" /> </div>
                    <div className="inputbox mt-3"> <span>Phone</span> 
                    <input type="text" placeholder="Phone" name="phone" value={user.phone} onChange={handleChange} className="form-control" /> </div>
                    {/* <div className="inputbox mt-3"> 
                    <span>Address</span> 
                    <input type="text"  name="address" onChange={handleChange} className="form-control" /> 
                    </div> */}

                    {field.flds.map((fld, index) => (
                        <div key={index} >
                        
                        <div  className="inputbox mt-3"> 
                        <span>Address</span> 
                        <input type="text" onChange={handleText(index)} name="" className="form-control" /> 
                        </div>
                        <button className="btn btn-danger" onClick={handleDelete(index)}>X</button><br/>
                        </div>
                        
                    ))}

                    <button className="btn btn-primary" onClick={addBox} >+ ADD Address</button>
                    <br/><br/><br/>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="text-right"> 
                        <button type="submit" className="btn btn-success register btn-block">Register</button> </div> 
                        
                    </div>
                    </form>
                </div>
            </div>
            <div className="col-md-6">
                <div className="text-center mt-5"> 
                <img src="https://i.imgur.com/98GXnDD.png" style={{width:400}} /> 
                </div>
            </div>
        </div>
    </div>
</div>
        </>
    )
}

export default Register;