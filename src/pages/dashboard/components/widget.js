import React from 'react'
import fontawesome from '@fortawesome/fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import { faCoffee, faCog, faSpinner, faQuoteLeft, faSquare, faCheckSquare } from '@fortawesome/fontawesome-free-solid'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

fontawesome.library.add(brands, faCoffee, faCog, faSpinner, faQuoteLeft, faSquare, faCheckSquare)

const styles = {
  calendarText: {
    fontSize: '18px',
    color: '#4284dd'
  },
  cardBodyMain: {
    padding: '0.7rem'
  }
}

export default class Widget extends React.Component {
  constructor(props) {
    super(props);
    this.widget = props.widget
  }

  render() {
    return (
      <div className="card widget-card">
        <div className="card-body" style={styles.cardBodyMain}>
          <div className="row">
            <div className="col-2 pr-2">
              <span className="align-middle" style={styles.calendarText}>
                <FontAwesomeIcon icon={this.widget.icon}></FontAwesomeIcon>
              </span>
            </div>
            <div className="col-7 pl-2"><h6 className="card-subtitle align-middle">{this.widget.title}</h6></div>
            <div className="col-3 text-right"><h6 className="card-subtitle align-middle">{this.widget.total}</h6></div>
          </div>
        </div>
        <div className="card-body card-actions">
          <a href="#" className="btn btn-sm btn-outline-success card-link">View</a>
          <a href="#" className="btn btn-sm btn-outline-success card-link">Add</a>
        </div>
      </div>
    )
  }
}