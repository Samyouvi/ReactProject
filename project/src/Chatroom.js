import React from 'react'
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default ({ name, message }) =>
<Table striped bordered hover>
<tbody>
  <tr>
    <td><strong>{name}</strong> said : </td>
  </tr>
  <tr>
    <td>{message}</td>
  </tr>
</tbody>
</Table>

//new Intl.DateTimeFormat('fr-FR', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(this.props.line_1)}