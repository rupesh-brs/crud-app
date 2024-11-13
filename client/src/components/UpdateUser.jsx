import React from 'react';
import axios from 'axios';
import { useParams,useNavigate,useEffect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
 function UpdateUser() {
  const {id} = useParams()
  const [name, setName] = useState('');  // Initialize with empty string
    const [email, setEmail] = useState('');  // Initialize with empty string
    const [age, setAge] = useState('');  // Initialize with empty string
    const navigate = useNavigate();
    useEffect(() => {
      axios.get('http://localhost:5000/getUser'+id)
        .then(result => {
          console.log(result);  
          setUsers(result.data);  
        })
        .catch(err => console.error(err));
    }, []);
  


  return (
    <div className='d-flex vh-100 bg-black justify-content-center align-items-center'>
      <div className="w-50 bg-white rounded p-3">
       <form>
            <h3>Update User</h3>
            <div className="mb-2">
                <label htmlFor="">Name</label>
                <input type="text" name="" id="" placeholder='Enter Name' className='form-control'/>
            </div>
            <div className="mb-2">
                <label htmlFor="">Email</label>
                <input type="text" name="" id="" placeholder='Enter Email' className='form-control'/>
            </div>
            <div className="mb-2">
                <label htmlFor="">Age</label>
                <input type="text" name="" id="" placeholder='Enter Age' className='form-control'/>
            </div>
            <button className='btn btn-success'>Update</button>
       </form>
      </div>
    </div>
    
  )
}
export default UpdateUser;