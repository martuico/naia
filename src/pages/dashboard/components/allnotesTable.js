import React from 'react'
import TableComponent from '../../../components/Table/simpleTable'
import axios from 'axios'

export default class AllNotesTable extends React.Component {
  state = {
    tableData: {
      columns: [],
      rows: []
    }
  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    axios.get(`http://ehrwebpreprod.naiacorp.net/api/Notes/GetAllNoteTypes`)
          .then((res) => {
            this.setState({
              tableData: {
                columns: ['Id', 'Name', 'Description', 'CreatedDate'],
                rows: res.data
              }
            })
          })
  }

  render(){
    return(
      <TableComponent data={this.state.tableData}></TableComponent>
    )
  }
}
