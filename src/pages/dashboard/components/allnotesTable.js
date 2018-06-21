import React from 'react'
import TableComponent from '../../../components/Table/simpleTable'
import axios from 'axios'
import _ from 'lodash'
import fontawesome from '@fortawesome/fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import { faCoffee, faCog, faSpinner, faQuoteLeft, faSquare, faCheckSquare } from '@fortawesome/fontawesome-free-solid'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

fontawesome.library.add(brands, faCoffee, faCog, faSpinner, faQuoteLeft, faSquare, faCheckSquare)

export default class AllNotesTable extends React.Component {
  state = {
    tableData: {
      columns: [],
      rows: []
    },
    searchValue: '',
    type: '',
    results: {
      columns: [],
      rows:[]
    }
  }

  constructor(props) {
    super(props);
  }

  searchBox(e) {
    let results = []
    this.setState({
      searchValue: e.target.value
    }, () => {
      for (var i = 0; i < this.state.tableData.rows.length; i++) {
        console.log(this.state.tableData.rows[i][this.state.type] == this.state.searchValue, this.state.searchValue)
        if (this.state.tableData.rows[i][this.state.type] == this.state.searchValue) {
          results.push(this.state.tableData.rows[i]);
        }
      }
      this.setState({
        results: {
          columns: ['Id', 'Name', 'Description', 'CreatedDate'],
          rows: results
        }
      })
    })
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
    let table;
    if (this.state.results.rows.length > 0) {
      table = <TableComponent data={this.state.results}></TableComponent>
    } else {
      table = <TableComponent data={this.state.tableData}></TableComponent>
    }
    return(
      <div>
        <div className="form-inline ml-2">
          <label className="sr-only">Search</label>
          <div className="input-group mb-2 mr-sm-2">
            <div className="input-group-prepend">
              <select className="form-control" onChange={(e) => this.setState({ type: e.target.value})}>
                <option>--</option>
                <option value="Id">Id</option>
                <option value="Name">Name</option>
                <option value="Description">Description</option>
              </select>
            </div>
            <input type="text"
              className="form-control"
              placeholder="Search"
              onChange={e => this.searchBox(e)} />
            <div className="input-group-append">
              <div className="input-group-text">
                <FontAwesomeIcon icon="search" />
              </div>
            </div>
          </div>
        </div>
        {table}
      </div>
    )
  }
}
