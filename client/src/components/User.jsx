import { useState,useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function User() {
  // Sample users array with one user
  const [users, setUsers] = useState([])
  useEffect(() => {
    axios.get('http://localhost:5000')
      .then(result => {
        console.log(result.data);  
        setUsers(result.data);  
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="d-flex vh-100 bg-black justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <Link to="/create" className="btn btn-success">Add+ </Link>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            
            {
             users.map((user, index) => {

              return <tr key={user.email || index}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>
                <Link to={`/update${user._id}`} className="btn btn-success">Update</Link>
                <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
             })
}
          </tbody>
        </table>
      </div>
    </div>
  );
}
