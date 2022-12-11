import React from 'react';
import Table from 'react-bootstrap/Table';


const MySection = ({users})=>{
return(users.map((item)=>
<Table striped bordered hover variant="dark">
<tbody>
<tr key={item.id}>
<td>{item.name}</td>
<td>{item.lastName}</td>
<td>{item.age}</td>
</tr>
</tbody>
    </Table>

))}




  
    
  
export default MySection;