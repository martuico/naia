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
    total: 11
  },
  {
    icon: 'flask',
    title: 'Outside Labs',
    total: 11
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
    total: 11
  },
  {
    icon: 'file-medical',
    title: 'Screening Results',
    total: 11
  }
];

const widgetCardStyle = {
  maxWidth: '166px', marginLeft: '5px', marginRight: '5px'
}

const tabsCardStyle = {

}
class App extends Component {
  render() {
    const widgets = widgets_list.map((wd) =>
      <div className="col-2 pl-1 pr-1" style={widgetCardStyle}>
        <Widget widget={wd} key={wd}></Widget>
      </div>
    )
    const widgets_2 = widgets_list2.map((wd) =>
      <div className="col-2 pl-1 pr-1" style={widgetCardStyle}>
        <Widget widget={wd} key={wd}></Widget>
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
            <div class="card text-center tabCard">
              <div class="card-header tabHeaderCard">
                <ul class="nav nav-tabs card-header-tabs">
                  <li class="nav-item">
                    <a class="nav-link active" href="#">All Notes</a>
                  </li>
                </ul>
              </div>
              <div class="card-body tabContentCard">
                <AllNotesTable columns={[{title: 'Patient Name'}, {title: 'Description'}, {title: 'Date'}, {title: 'Chart Location'}, { title: 'Reason Code'}, { title: 'Actions' }]}></AllNotesTable>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
