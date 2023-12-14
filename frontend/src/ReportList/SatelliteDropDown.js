

import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import CircleTwoToneIcon from '@mui/icons-material/CircleTwoTone';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import CheckCircleTwoToneIcon from '@mui/icons-material/CheckCircleTwoTone';
import SatelliteAltIcon from '@mui/icons-material/SatelliteAlt';

import { userContext } from '../App';
import React, { useContext} from 'react';

function SatelliteDropDown() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  
  const allItems= useContext(userContext)

  let allSatellites= allItems.satellites

    const reportReasons = [
        {
          issue: 'Cannot Connect'
        },
        {
          issue: 'Quality is Degraded'
        },
        {
          issue: 'Blocked LOS'
        },
        {
          issue: 'Atmospheric Conditions'
        },
        {
          issue: 'Signal Latency'
        },
        {
          issue: 'Signal Interference'
        },
        {
          issue: 'Equipment Malfunction'
        },
        {
          issue: 'Power Supply Issue'
        },
        {
          issue: 'Frequency Coordination'
        }
      ];

  return (

    

        <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
        >
            {allSatellites.map((satellite, index) => {
                return(
                    <>
                        <ListItemButton onClick={handleClick}>
                            <ListItemIcon>
                                <SatelliteAltIcon />
                            </ListItemIcon>
                            <ListItemText primary={` Insight ${satellite.satelliteID} `}/>
                            <ListItemIcon>
                                <CircleTwoToneIcon fontSize='2px' color='success' />
                                <ListItemText secondary='Operational'/>
                            </ListItemIcon>
                            {open ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                {reportReasons.map(({issue}) => {
                                    return (
                                        <ListItemButton sx={{ pl: 4 }}>
                                        <ListItemIcon>
                                        <CheckCircleTwoToneIcon sx={{ color: 'green' }}/>
                                        </ListItemIcon>
                                        <ListItemText primary={issue} />
                                        </ListItemButton>
                                    )
                                })}
                            </List>
                        </Collapse>
                    </>
                )
            })}
        </List>
  );
}
export default SatelliteDropDown;