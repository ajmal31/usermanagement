import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { BASE_URL } from '../../URLS/urls'
import { Link } from 'react-router-dom'




function AHome() {

    const [users,setUsers]=useState([])
    const[count,setCount]=useState(0)
    const [users1,setUsers1]=useState([])

    useEffect(()=>{
        console.log('enter use EFfect');

        axios.get(BASE_URL+'getUsers').then((response)=>{
          
             console.log('all userss client side')
            console.log(response.data)
            //  setUsers(response.data)
            setUsers(response.data)
            setUsers1(response.data)
             console.log('state users',users)
            console.log('new sate',users1)
        }).then(()=>{
          console.log(users)
        })
    },[count])

    const removeUser=(id)=>{
        axios.get(BASE_URL+`removeUser/${id}`).then((response)=>{
            console.log('user deleted or not',response)
            setCount(count+1)
        })
    }

    
  return (
   
    <div>
    
    {
     
           <>  
             <table >
               <thead>
                 <tr>
                   <th >ID</th>
                   <th >Name</th>
                   <th>Email</th>
                   <th>Role</th>
                 </tr>
               </thead>
               <tbody >
                 {users.map((element,index) => (
                   <tr key={element._id} >
                     <td>{index+1}</td>
                     <td>{element.userName}</td>
                     <td>{element.email}</td>
                     {/* {element.position === 'user' ? (
                       <td>
                        
                           <button className="btn btn-primary">make admin</button>
                        
                       </td>
                     ) : (
                       <td>
                         
                           <button className="btn btn-danger">remove admin</button>
                         
                       </td>
                     )} */}
                     <td>
                       <Link to={`/admin/editUser/${element._id}`}>
                       
                         <button>edit user</button>
                         </Link>
                     </td>
                     <td>
                      
                       
                         <button onClick={()=>removeUser(element._id)}>remove user</button>
                        
                     </td>
                   </tr>
                 ))}
               </tbody>
             </table>
             <Link  to={'/admin/addUser'} ><h3>add user</h3></Link>
             </>
          
         
    
    }
 
   
 </div>
  )
}

export default AHome
