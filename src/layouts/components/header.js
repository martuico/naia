import React from 'react'
import fontawesome from '@fortawesome/fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import { faCoffee, faCog, faSpinner, faQuoteLeft, faSquare, faCheckSquare } from '@fortawesome/fontawesome-free-solid'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

fontawesome.library.add(brands, faCoffee, faCog, faSpinner, faQuoteLeft, faSquare, faCheckSquare)

export default class MainHeader extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark main-navbar-bg">
        <a href="javascript:void(0);" className="navbar-toggler-2">
          <span className="navbar-toggler-icon"></span>
        </a>
        <ol className="navbar-nav navbar-nav bread">
          <li className="breadcrumb-item active"><a href="#">Dashboard</a></li>
        </ol>
        <a href="/" className="navbar-brand mx-auto">CLOUDCraft</a>
        <form className="form-inline my-2 my-lg-0 search-top">
          <div className="input-group input-group-sm">
            <div className="input-group-prepend">
              <button className="btn btn-outline-secondary dropdown-toggle" type="button">Search By</button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <a className="dropdown-item" href="#">Something else here</a>
                <div role="separator" className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Separated link</a>
              </div>
            </div>
            <input type="text" className="form-control" />
            <div className="input-group-append">
              <span className="input-group-text">
                <FontAwesomeIcon icon="search" />
              </span>
            </div>
          </div>
        </form>
        <ul className="navbar-nav navbar-nav flex-row ml-5">
          <li className="nav-item">
            <a href="javascript:void(0);" className="nav-link p-2">
              <FontAwesomeIcon icon="envelope" />
            </a>
          </li>
          <li className="nav-item">
            <a href="javascript:void(0);" className="nav-link p-2">
              <FontAwesomeIcon icon="bell" />
              <span className="badge badge-pill badge-notification badge-success">1</span>
            </a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Terry Lee
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
        </ul>
      </nav>
    );
  }
}