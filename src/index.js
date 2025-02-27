import React from 'react'
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <App />
  
);


// export const Students =() =>{
//     const{}= useQuery({
//         queryKey : "GetStudetList",
//         queryFn : "studentService"
//     })

//     return(    

//     <Table striped bordered hover>
//       <thead>
//         <tr>
//           <th>#</th>
//           <th>First Name</th>
//           <th>Last Name</th>
//           <th>Email</th>
//           <th>Point</th>

//         </tr>
//       </thead>

//     </Table>

//   );
// }



