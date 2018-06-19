import React from 'react'
import { Table } from 'reactstrap';


export default class AllNotesTable extends React.Component {
  constructor(props) {
    super(props);
    this.columns = props.columns
  }

  render(){

    const columns = this.columns.map((wd) =>
      <th>{wd.title}</th>
    )

    return(
      <Table responsive striped hover>
        <thead>
          <tr>
            {columns}
          </tr>
        </thead>
        <tbody>
          <tr></tr>
        </tbody>
      </Table>
    )
  }
}