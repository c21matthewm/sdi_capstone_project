import React, { useContext, useState, useEffect } from 'react';
import { Select, MenuItem, InputLabel, Box, Typography } from '@mui/material';
import { userContext } from '../App';
import './ReportList.css';
import { NavBar } from '../NavBar/NavBar';
import ReportTableData from './ReportTableData';
import BarsDataset from './BarChart';

function ReportList() {

  const { reports, joinedReports, setJoinedReports } = useContext(userContext)
  const [selectedFilter, setSelectedFilter] = useState('Date')
  const [filteredReports, setFilteredReports] = useState([])

  useEffect(() => {
    setFilteredReports(joinedReports
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
        }
      })
      .sort((a, b) => selectedFilter === "Date" || "" ? new Date(b.time) - new Date(a.time) : 0))
  }, [selectedFilter, joinedReports]);

  return (
    <div>
      <NavBar />
      <div className="report-flex">
        <Typography className="report-title" variant="h5" gutterBottom>Reports Page</Typography>
      </div>

      <div className="reports_page">

        <Box className="report_view" component="section" sx={{ boxShadow: 3, p: 2, border: '1px solid grey' }}>

          <InputLabel id="filter-label">Filter By: </InputLabel>
          <Select id="filter"
            value={selectedFilter}
            name="not_sure"
            onChange={(e) => setSelectedFilter(e.target.value)}
            style={{ height: '30px' }}
          >
            <MenuItem value="Date">Date / Time</MenuItem>
            <MenuItem value="current">Current</MenuItem>
            <MenuItem value="archived">Archived</MenuItem>
          </Select>
          <ReportTableData tableData={filteredReports} />
        </Box>
        <Box className="metric_view" component="section" sx={{ boxShadow: 3, p: 2, border: '1px solid grey' }}>
          <BarsDataset />
        </Box>
      </div>
    </div>
  );
}

export default ReportList;