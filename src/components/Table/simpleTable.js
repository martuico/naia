import React from 'react'

export default class TableComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    var dataColumns = this.props.data.columns;
    var dataRows = this.props.data.rows;

    var tableHeaders = (<thead>
      <tr>
        {dataColumns.map(function (column,i) {
          return <th key={i}>{column}</th>;
        })}
      </tr>
    </thead>);

    var tableBody = dataRows.map(function (row,i) {
      return (
        <tr key={i}>
          {dataColumns.map(function (column, ii) {
            return <td key={ii}>{row[column]}</td>;
          })}
        </tr>);
    });

    console.log(dataRows)

    return (
      <table className="table table-bordered table-hover" width="100%">
        {tableHeaders}
        <tbody>
          {tableBody}
        </tbody>
      </table>
    )
  }
}
