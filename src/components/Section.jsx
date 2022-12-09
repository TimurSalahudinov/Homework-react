import React from 'react';
import Table from 'react-bootstrap/Table';


const MySection = ({users})=>{
return(users.map((item)=><tr key={item.id}>
<td>{item.name}</td>
<td>{item.lastName}</td>
<td>{item.age}</td>
</tr>
))};



   
export default MySection;