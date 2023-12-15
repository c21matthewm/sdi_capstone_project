
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React, { useContext, useState, useEffect } from 'react';
import { Select, MenuItem, InputLabel, Divider, TextField, Box , Button, OutlinedInput, Typography } from '@mui/material';
// import ArchiveIcon from '@mui/icons-material/Archive';
import ArchiveButtonToggle from './ArchiveButtonToggle';
import { userContext } from '../App';
// import PieCenterLabel from './PieChart';
import './ReportList.css';
import MixedBarChart from './ProblemMetric'
import { NavBar } from '../NavBar/NavBar';
import SatelliteDropDown from './SatelliteDropDown';
import ReportTableData from './ReportTableData';

function ReportList() {

  const {satellites, reports, setReports, userUID}= useContext(userContext)
  const [selectedFilter, setSelectedFilter] = useState('')
  const [searchValue, setSearchValue] = useState('')
  const [filteredReports, setFilteredReports] = useState([])

  useEffect(() => {
    setFilteredReports(reports
      .filter((report) => {
        switch (selectedFilter) {
          case 'Date':
            return true;
          case 'current':
            return report.archived === false
          case 'archived':
            return report.archived === true
          default:
            return true;
        }})
      .sort((a, b) => selectedFilter === "Date" ? new Date(b.time) - new Date(a.time) : 0))
  }, [selectedFilter, reports]);

  return (
    <div>
      <NavBar/>
      <div className="report-flex">
       <Typography className="report-title" variant="h5" gutterBottom>Reports Page</Typography>
      </div>

      <div className="reports_page">

        <div className="report_view">


          <InputLabel>Search: </InputLabel>
            <TextField id='search'
                      variant="outlined"
                      value={searchValue}
                      onChange={(e) => setSearchValue(e.target.value)}
                      />
          <Divider />

          <InputLabel id="filter-label">Filter By: </InputLabel>
            <Select id="filter"
                    value={selectedFilter}
                    name="not_sure"
                    onChange={(e) => setSelectedFilter(e.target.value)}
                    style={{height: '30px'}}
            >
              <MenuItem value="">None</MenuItem>
              <MenuItem value="Date">Date / Time</MenuItem>
              <MenuItem value="current">Current</MenuItem>
              <MenuItem value="archived">Archived</MenuItem>
            </Select>
            <ReportTableData tableData={filteredReports} />
            {/* <Box sx={{ margin: '20px 0' }}>
              {reports
                .filter((report) => {
                  switch (selectedFilter) {
                    case 'Date':
                      return true;
                    case 'current':
                      return report.archived === false
                    case 'archived':
                      return report.archived === true
                    default:
                      return true;
                  }})
                .sort((a, b) => selectedFilter === "Date" ? new Date(b.time) - new Date(a.time) : 0)

                .map((report) => (
                  <Box key={report.reportID} sx={{ mb: 2 }}>
                    <b>Satellite: </b> {`Insight ${report.satelliteID}`}
                    <br />
                    <b>Status: </b> {`${report.status}`}
                    <br />
                    <b>Description: </b> {`${report.reason}`}
                    <br />
                    <b>Time: </b> {`${report.time}`}
                    <br />
                    <ArchiveButtonToggle report={report} />
                  </Box>
              ))
              }
            </Box> */}
          </div>

          <div className="metric_view">

            < MixedBarChart/>
            {/* <section>
              <h3 style={{ display: 'flex'}}>Satellite Status</h3>
              <SatelliteDropDown/>
            </section> */}
          </div>
      </div>
    </div>
  );
}

export default ReportList;