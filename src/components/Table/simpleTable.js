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

// var TableComponent = React.createClass({
//   render: function() {
//     // Data
//     var dataColumns = this.props.data.columns;
//     var dataRows = this.props.data.rows;

//     var tableHeaders = (<thead>
//           <tr>
//             {dataColumns.map(function(column) {
//               return <th>{column}</th>; })}
//           </tr>
//       </thead>);

//     var tableBody = dataRows.map(function(row) {
//       return (
//         <tr>
//           {dataColumns.map(function(column) {
//             return <td>{row[column]}</td>; })}
//         </tr>); });

//     // Decorate with Bootstrap CSS
//     return (<table className="table table-bordered table-hover" width="100%">
//         {tableHeaders}
//         {tableBody}
//       </table>) }
// });

// export default TableComponent
/*
// Example Data
var tableData = {
  columns: ['Service', 'Cost/Unit', 'Unit', 'Units Requested'],
  rows: [{
    'Service': 'Veterinary Assitance',
    'Cost/Unit': 50,
    'Unit': '1 Hour',
    'Units Requested': 12
  }, {
    'Service': 'Veterinary Assitance',
    'Cost/Unit': 50,
    'Unit': '1 Hour',
    'Units Requested': 12
  }, {
    'Service': 'Veterinary Assitance',
    'Cost/Unit': 50,
    'Unit': '1 Hour',
    'Units Requested': 12
  }, {
    'Service': 'Veterinary Assitance',
    'Cost/Unit': 50,
    'Unit': '1 Hour',
    'Units Requested': 12
  }, {
    'Service': 'Veterinary Assitance',
    'Cost/Unit': 50,
    'Unit': '1 Hour',
    'Units Requested': 12
  }, {
    'Service': 'Veterinary Assitance',
    'Cost/Unit': 50,
    'Unit': '1 Hour',
    'Units Requested': 12
  }, {
    'Service': 'Veterinary Assitance',
    'Cost/Unit': 50,
    'Unit': '1 Hour',
    'Units Requested': 12
  }, {
    'Service': 'Veterinary Assitance',
    'Cost/Unit': 50,
    'Unit': '1 Hour',
    'Units Requested': 12
  }, {
    'Service': 'Veterinary Assitance',
    'Cost/Unit': 50,
    'Unit': '1 Hour',
    'Units Requested': 12
  }, {
    'Service': 'foo',
    'Unit': null,
    'Cost/Unit': undefined,
    'Units Requested': 42
  }]
};
*/
// ReactDOM.render(
//   <TableComponent data = {tableData} />,
//   document.getElementById('table-component'));