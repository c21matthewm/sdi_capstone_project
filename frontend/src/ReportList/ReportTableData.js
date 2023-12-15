import React, { useState, useContext } from "react";
import { Box, Table, TableRow, TableCell, TableHead, TableBody, TableContainer } from "@mui/material";
import ArchiveButtonToggle from "./ArchiveButtonToggle";

export const ReportTableData = ({ tableData }) => {

    return (
        <Box sx={{ width: '100%' }}>
            <TableContainer>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Report ID</TableCell>
                            <TableCell align="right">Satellite Name</TableCell>
                            <TableCell align="right">Status</TableCell>
                            <TableCell align="right">Description</TableCell>
                            <TableCell align="right">Time</TableCell>
                            <TableCell align="right">Archive</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tableData.map((report) => (
                            <TableRow
                                key={report.reportID}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {report.reportID}
                                </TableCell>
                                <TableCell align="right">{`Insight ${report.satelliteID}`}</TableCell>
                                <TableCell align="right">{report.status}</TableCell>
                                <TableCell align="right">{report.reason}</TableCell>
                                <TableCell align="right">{report.time}</TableCell>
                                <TableCell align="right"><ArchiveButtonToggle report={report} /></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}

export default ReportTableData;