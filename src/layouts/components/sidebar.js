import React from 'react'
import fontawesome from '@fortawesome/fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import { faCoffee, faCog, faSpinner, faQuoteLeft, faSquare, faCheckSquare } from '@fortawesome/fontawesome-free-solid'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

fontawesome.library.add(brands, faCoffee, faCog, faSpinner, faQuoteLeft, faSquare, faCheckSquare)

export default class MainSideBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="bd-sidebar">
        <nav className="nav flex-column">
          <a className="nav-link active" href="#">
            <span className="text-icon">
              <FontAwesomeIcon icon={['fab', 'microsoft']} />
            </span>
          </a>
          <a className="nav-link" href="#">
            <span className="text-icon">
              <FontAwesomeIcon icon="calendar" />
            </span>
          </a>
          <a className="nav-link" href="#">
            <span className="text-icon">
              <FontAwesomeIcon icon="notes-medical" />
            </span>
          </a>
          <a className="nav-link" href="#">
            <span className="text-icon">
              <FontAwesomeIcon icon="money-check-alt" />
            </span>
          </a>
          <a className="nav-link" href="#">
            <span className="text-icon">
              <FontAwesomeIcon icon="wrench" />
            </span>
          </a>
        </nav>
      </div>
    )
  }
}