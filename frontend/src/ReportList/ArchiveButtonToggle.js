import React, { useState, useContext } from "react";
import { Button } from "@mui/material";
import ArchiveIcon from "@mui/icons-material/Archive";
import UnarchiveIcon from "@mui/icons-material/Unarchive";

export const ArchiveButtonToggle = ({ report }) => {
    const [toggle, setToggle] = useState(report.archived);

    const toggleArchive = () => {
        fetch(`http://localhost:8080/reports/archived/${report.reportID}`, {
            method: "PATCH",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                archived: !toggle,
            }),
        }).then(() => {
            setToggle(!toggle);
        }).catch((err) => {
            console.log(err);
        });
    };

    return (
        <Button
            variant="contained"
            color={toggle ? "secondary" : "primary"}
            startIcon={toggle ? <UnarchiveIcon /> : <ArchiveIcon />}
            className="add"
            onClick={() => {
                toggleArchive();
            }}
        >
            {toggle ? "Unarchive" : "Archive"}
        </Button>
    );
};

export default ArchiveButtonToggle;