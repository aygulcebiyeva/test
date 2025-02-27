import React from 'react';

import Table from 'react-bootstrap/Table';
import { useQuery } from '@tanstack/react-query';

export const Students =() =>{
    const{}= useQuery({
        queryKey : "GetStudetList",
        queryFn : "studentService"
    })

    return(    

    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Point</th>

        </tr>
      </thead>

    </Table>

  );
}