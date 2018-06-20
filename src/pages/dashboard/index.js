import React, { Component } from 'react'
import Widget from './components/widget'
import AllNotesTable from './components/allnotesTable'

const widgets_list = [
  {
    icon: 'calendar',
    title: 'Today`s Appoinment',
    total: 9
  },
  {
    icon: 'clipboard-check',
    title: 'Task',
    total: 26
  },
  {
    icon: 'comment-alt',
    title: 'Messages',
    total: 10
  },
  {
    icon: 'sticky-note',
    title: 'Notes',
    total: 6
  },
  {
    icon: 'comment-alt',
    title: 'Billing Messages',
    total: 11
  },
  {
    icon: 'user-md',
    title: 'Nurse To-dos',
    total: 8
  },
  {
    icon: 'flask',
    title: 'Outside Labs',
    total: 13
  }
];
const widgets_list2 = [
  {
    icon: 'vials',
    title: 'Lab Results',
    total: 0
  },
  {
    icon: 'hospital-alt',
    title: 'Inside Diagnostic',
    total: 74
  },
  {
    icon: 'file-medical',
    title: 'Diagnostic Results',
    total: 10
  },
  {
    icon: 'user-friends',
    title: 'Referrals',
    total: 6
  },
  {
    icon: 'medkit',
    title: 'Medicines',
    total: 11
  },
  {
    icon: 'stethoscope',
    title: 'Screening To-dos',
    total: 8
  },
  {
    icon: 'file-medical',
    title: 'Screening Results',
    total: 13
  }
];

const widgetCardStyle = {
  maxWidth: '166px', marginLeft: '5px', marginRight: '5px'
}

const tabsCardStyle = {

}
class App extends Component {
  render() {
    let x = 1, y = 99
    const widgets = widgets_list.map((wd, i) =>
      <div className="col-2 pl-1 pr-1" key={i} style={widgetCardStyle}>
        <Widget widget={wd}></Widget>
      </div>
    )
    const widgets_2 = widgets_list2.map((wd, i) =>
      <div className="col-2 pl-1 pr-1" key={i} style={widgetCardStyle}>
        <Widget widget={wd} key={Math.random()}></Widget>
      </div>
    )
    return (
      <div>
        <div className="row mb-2">
          {widgets}
        </div>
        <div className="row mb-3">
          {widgets_2}
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="card text-center tabCard">
              <div className="card-header tabHeaderCard">
                <ul className="nav nav-tabs card-header-tabs">
                  <li className="nav-item">
                    <a className="nav-link active" href="#">All Notes</a>
                  </li>
                </ul>
              </div>
              <div className="card-body tabContentCard">
                <AllNotesTable></AllNotesTable>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
