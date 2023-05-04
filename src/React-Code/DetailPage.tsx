import React from 'react'
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import UploadIcon from '@mui/icons-material/Upload';
import Switch from '@mui/material/Switch';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Avatar from '@mui/material/Avatar';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

// Importing Table =============================================================================================
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

// Importing Images ============================================================================================
import background from '../Img/background.png';
import cover from '../Img/cover.png';
import poster from '../Img/poster.png';
import Girl from '../Img/Girl.png';
import Chart from '../Img/Chart.png';
import Bargraph from '../Img/Bargraph.png';

// Importing Icons =============================================================================================
import DashboardIcon from '@mui/icons-material/Dashboard';
import LanIcon from '@mui/icons-material/Lan';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import SourceIcon from '@mui/icons-material/Source';
import SettingsIcon from '@mui/icons-material/Settings';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import ErrorIcon from '@mui/icons-material/Error';
import HelpIcon from '@mui/icons-material/Help';
import OutboundSharpIcon from '@mui/icons-material/OutboundSharp';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import BusinessIcon from '@mui/icons-material/Business';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

// Importing Scatter Diagram Chart ==============================================================================
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

// Importing 7-1 architechture sass files on main.scss ==========================================================
import '../SASS/main.scss';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

// Importing Search Criteria  ===================================================================================
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

  // Importing CheckBox ===========================================================================================
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  // Importing Table ==============================================================================================
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
  function createData(
    company: string,
    description: string,
    users: string,
    lisence: string,
  ) {
    return { company, description, users, lisence };
  }
  
  const rows = [
    createData('Dialog Axiata', 'Sales CRM', '10 Users', '50%'),
    createData('Rio', 'Productions', '08 Users', '50%'),
    createData('Scope', 'Transportation', '11 Users', '50%'),
    createData('Delight', 'Calculations', '14 Users', '50%'),
    createData('Maliben', 'Stores', '22 Users', '50%'),
    createData('Maliben', 'Stores', '22 Users', '50%'),
  ];

  // Importing LinearProgress Bar =================================================================================
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? '#218907' : '#218907',
    },
  }));

  // Importing Scatter Diagram Chart ==============================================================================
  const data = [
  {
    name: "5%",
    Interest: 590,
    Allowance: 1400
  },

  {
    name: "10%",
    Interest: 868,
    Allowance: 1506
  },

  {
    name: "15%",
    Interest: 1397,
    Allowance: 989
  },

  {
    name: "20%",
    Interest: 1480,
    Allowance: 1228
  },

  {
    name: "25%",
    Interest: 1520,
    Allowance: 1100
  },

  {
    name: "30%",
    Interest: 1400,
    Allowance: 1700
  }
];

export const DetailPage = () => {
  return (

        <Box sx={{ flexGrow: 1 }}>

            <Stack className='grid--structure' spacing={0} direction='row'>

                <Grid className='drawer--left'>
                    <Stack className='Drawer-icons' spacing={3} direction='column'>
                        {/* <Avatar className='icon-customization dashboard--icon' alt="Profile Icon" sx={{ width: 56, height: 56 }} ><DashboardIcon/></Avatar> */}
                        <div className='drawer--button-position'>
                            <Button className='dashboard--icon'>
                                <Avatar className='icon-customization icon-border--dashboard' alt="Dashboard Icon" sx={{ width: 56, height: 56 }} ><DashboardIcon/></Avatar>
                                    <Stack className='drawer--text-bar'>
                                        <div className='text-bar--dashboard'>Dashboard</div>
                                    </Stack>
                            </Button>
                        </div>
                        {/* <Avatar className='icon-customization format--icon' alt="Format Icon" sx={{ width: 56, height: 56 }} ><LanIcon/></Avatar> */}
                        <div className='drawer--button-position'>
                            <Button className='format--icon'>
                                <Avatar className='icon-customization icon-border--format' alt="Format Icon" sx={{ width: 56, height: 56 }} ><LanIcon/></Avatar>
                                    <Stack className='drawer--text-bar' spacing={0}>
                                        <div className='text-bar--format'>Forms</div>
                                    </Stack>
                            </Button>
                        </div>
                        {/* <Avatar className='icon-customization documents--icon' alt="Files Icon" sx={{ width: 56, height: 56 }} ><FileCopyIcon/></Avatar> */}
                        <div className='drawer--button-position'>
                            <Button className='documents--icon'>
                                <Avatar className='icon-customization icon-border--documents' alt="Profile Icon" sx={{ width: 56, height: 56 }} ><FileCopyIcon/></Avatar>
                                    <Stack className='drawer--text-bar' spacing={0}>
                                        <div className='text-bar--documents'>Files</div>
                                    </Stack>
                            </Button>
                        </div>
                        {/* <Avatar className='icon-customization svat--icon' alt="SVAT Icon" sx={{ width: 56, height: 56 }} ><SourceIcon/></Avatar> */}
                        <div className='drawer--button-position'>
                            <Button className='svat--icon'>
                                <Avatar className='icon-customization icon-border--svat' alt="Profile Icon" sx={{ width: 56, height: 56 }} ><SourceIcon/></Avatar>
                                    <Stack className='drawer--text-bar' spacing={0}>
                                        <div className='text-bar--svat'>SVAT Documents</div>
                                    </Stack>
                            </Button>
                        </div>
                        {/* <Avatar className='icon-customization settings--icon' alt="Settings Icon" sx={{ width: 56, height: 56 }} ><SettingsIcon/></Avatar> */}
                        <div className='drawer--button-position'>
                            <Button className='settings--icon'>
                                <Avatar className='icon-customization icon-border--settings' alt="Profile Icon" sx={{ width: 56, height: 56 }} ><SettingsIcon/></Avatar>
                                    <Stack className='drawer--text-bar' spacing={0}>
                                        <div className='text-bar--settings'>Settings</div>
                                    </Stack>
                            </Button>
                        </div>
                    </Stack>
                </Grid>

                <Grid className ='grid grid--container-grey'>

                    <Grid container className ='grid--container-white'>

                        <div className="header-container" style={{ backgroundImage:`url(${poster})`,backgroundRepeat:"no-repeat" }}>
                            <header>
                                <Stack className="header_sections" spacing={40} direction='row'>
                                    <Stack className="header--title-left" spacing={3} direction='column'>
                                        <div className="header--title title--left-row1">Admin Module</div>
                                        <div className="header--title title--left-row2">Dashboard</div>
                                        <div className="header--title title--left-row3">
                                            <Search className='search-criteria'>
                                                <SearchIconWrapper> <SearchIcon /> </SearchIconWrapper>
                                                <StyledInputBase className='input--searchbar' placeholder="Search Here...." inputProps={{ 'aria-label': 'search' }} />
                                            </Search>
                                        </div>
                                    </Stack>
                                    <Stack className="header--title-right" spacing={2} direction='column'>
                                        <div className="header--title title--right-row1">
                                            <Avatar className='profile_picture' alt="Profile Icon" src={Girl} sx={{ width: 56, height: 56 }} />
                                        </div>
                                        <div className="header--title title--right-row2">Jaqlin Gomus</div>
                                        <div className="header--title title--right-row3">jaqlin.go@abucus.com</div>
                                    </Stack>
                                </Stack>
                            </header>
                        </div>

                        <Stack className="main-container" spacing={3} direction='column'>

                            <Stack spacing={2} direction='row' className="heading" >
                                <Stack className='heading--card main--title-nonmotor'>   
                                    <Stack className='title-iconexpand--content' spacing={1} direction='row'>
                                        <Stack className='colorcard-title--text'>
                                            <div className="title-text--line1">Non-Motor</div>
                                            <div className="title-text--line2">Insurance</div>
                                        </Stack>
                                        <Stack className='icon-expand--container' spacing={1} direction='column'>
                                            <Stack className='icon-colorcard--container'>
                                                <Avatar className='nonmotor-building--icon' alt="Non-Motor Icon" sx={{ width: 56, height: 56 }}><BusinessIcon/></Avatar>
                                            </Stack>
                                            <Stack className='expand-textarrow--content' spacing={0.5} direction='row'>
                                                <Stack className='expand-text'>Expand</Stack>
                                                <Stack className='expand-forward--icon'><ArrowForwardIcon fontSize='small'/></Stack>
                                            </Stack>
                                        </Stack>
                                    </Stack>
                                </Stack>
                                <Stack className='heading--card main--title-motor'>
                                    <Stack className='title-iconexpand--content' spacing={1} direction='row'>
                                        <Stack className='colorcard-title--text'>
                                            <div className="title-text--line1">Motor</div>
                                            <div className="title-text--line2">Insurance</div>
                                        </Stack>
                                        <Stack className='icon-expand--container' spacing={1} direction='column'>
                                            <Stack className='icon-colorcard--container'>
                                                <Avatar className='motor-building--icon' alt="Motor Icon" sx={{ width: 56, height: 56 }}><DirectionsCarIcon/></Avatar>
                                            </Stack>
                                            <Stack className='expand-textarrow--content' spacing={0.5} direction='row'>
                                                <Stack className='expand-text'>Expand</Stack>
                                                <Stack className='expand-forward--icon'><ArrowForwardIcon fontSize='small'/></Stack>
                                            </Stack>
                                        </Stack>
                                    </Stack>
                                </Stack>
                                <Stack className='heading--card main--title-medical'>
                                    <Stack className='title-iconexpand--content' spacing={1} direction='row'>
                                        <Stack className='colorcard-title--text'>
                                            <div className="title-text--line1">Medical</div>
                                            <div className="title-text--line2">Insurance</div>
                                        </Stack>
                                        <Stack className='icon-expand--container' spacing={1} direction='column'>
                                            <Stack className='icon-colorcard--container'>
                                                <Avatar className='medical-building--icon' alt="Medical Icon" sx={{ width: 56, height: 56 }}><MonitorHeartIcon/></Avatar>
                                            </Stack>
                                            <Stack className='expand-textarrow--content' spacing={0.5} direction='row'>
                                                <Stack className='expand-text'>Expand</Stack>
                                                <Stack className='expand-forward--icon'><ArrowForwardIcon fontSize='small'/></Stack>
                                            </Stack>
                                        </Stack>
                                    </Stack>
                                </Stack>
                                <Stack className='heading--card main--title-customer'>
                                    <Stack className='title-iconexpand--content' spacing={1} direction='row'>
                                        <Stack className='colorcard-title--text'>
                                            <div className="title-text--line1">Customer</div>
                                            <div className="title-text--line2">Insurance</div>
                                        </Stack>
                                        <Stack className='icon-expand--container' spacing={1} direction='column'>
                                            <Stack className='icon-colorcard--container'>
                                                <Avatar className='customer-building--icon' alt="Customer Icon" sx={{ width: 56, height: 56 }}><ManageAccountsIcon/></Avatar>
                                            </Stack>
                                            <Stack className='expand-textarrow--content' spacing={0.5} direction='row'>
                                                <Stack className='expand-text'>Expand</Stack>
                                                <Stack className='expand-forward--icon'><ArrowForwardIcon fontSize='small'/></Stack>
                                            </Stack>
                                        </Stack>
                                    </Stack>
                                </Stack>
                            </Stack>

                            <Stack spacing={2} direction='row' className="heading" >
                                <Stack className='body--card main--title-graph' spacing={2} direction='column'>
                                    <Stack className='graph--card' spacing={2} direction='column'>
                                        <Stack className='main--buttons-group' spacing={2} direction='row'>
                                            <Stack className='sub--button-group' spacing={2} direction='column'>
                                                <Stack className='sub--button-complete'>
                                                    <Stack className='taskcard-title--textnumber' spacing={2} direction='row'>
                                                        <Stack className='card-title--taskcomplete' spacing={2} direction='column'>
                                                            <div className='task-title--line1'>Completed</div>
                                                            <div className='task-title--line2'>Tasks</div>
                                                        </Stack>
                                                        <Stack className='card-title--number'>37</Stack>
                                                    </Stack>
                                                </Stack>
                                                <Stack className='sub--button-todo'>
                                                    <Stack className='taskcard-title--textnumber' spacing={2} direction='row'>
                                                        <Stack className='card-title--tasktodo' spacing={2} direction='column'>
                                                            <div className='task-title--line1'>To Do</div>
                                                            <div className='task-title--line2'>Tasks</div>
                                                        </Stack>
                                                        <Stack className='card-title--number'>14</Stack>
                                                    </Stack>
                                                </Stack>
                                            </Stack>
                                            <Stack className='sub--button-create' spacing={2} direction='column' >
                                                <img className='' src={Bargraph} />
                                                <Stack className="create-team--button">Create Teams</Stack>
                                            </Stack>
                                        </Stack>
                                        {/* <Stack className='main--graph-title'>
                                            <img className='chart-box' src={Chart} />
                                        </Stack> */}
                                        <div style={{ width: "100%", height: 280 }}>
                                            <ResponsiveContainer>
                                                <ComposedChart width={500} height={400} data={data} margin={{ top: 0, right: 20, bottom: 30, left: 0 }}>
                                                    <CartesianGrid stroke="#e4ffec" />
                                                    <XAxis dataKey="name" scale="band" />
                                                    <YAxis />
                                                    <Tooltip />
                                                    <Legend />
                                                    <Area type="monotone" dataKey="Allowance" fill="#e4ffec" stroke="#218907" />
                                                    <Line type="monotone" dataKey="Interest" stroke="#9C1708" />
                                                </ComposedChart>
                                            </ResponsiveContainer>
                                        </div>
                                    </Stack>
                                </Stack>
                                <Stack className='body--card main--title-tablecards' spacing={2} direction='column'>
                                    <Stack className='title--tablecards main--title-cards' spacing={2} direction='row'>
                                        <Stack className='tablecards--card main--title-approval'>
                                            <Stack className='card-title--approveissues' spacing={2} direction='column'>
                                                <div className='approve-title--line4'>Approvals</div>
                                                <div className='approve-title--line2'>34</div>
                                                <div className='approve-title--line3'>25.03.2023</div>
                                            </Stack>
                                        </Stack>
                                        <Stack className='tablecards--card main--title-nonapproval'>
                                            <Stack className='card-title--approveissues' spacing={2} direction='column'>
                                                <div className='approve-title--line4'>Non Approvals</div>
                                                <div className='approve-title--line2'>6</div>
                                                <div className='approve-title--line3'>25.03.2023</div>
                                            </Stack>
                                        </Stack>
                                        <Stack className='tablecards--card main--title-issues'>
                                            <Stack className='card-title--approveissues' spacing={2} direction='column'>
                                                <div className='approve-title--line4'>Issues</div>
                                                <div className='approve-title--line2'>4</div>
                                                <div className='approve-title--line3'>25.03.2023</div>
                                            </Stack>
                                        </Stack>
                                    </Stack>
                                    <Stack className='title--tablecards main--title-table'>
                                        <TableContainer className='table--container' component={Paper}>
                                            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                                <TableHead>
                                                    <TableRow className='color--title-table'>
                                                        <StyledTableCell className='checkbox--title-table'><Checkbox {...label} size="small" />Company</StyledTableCell>
                                                        <StyledTableCell className='title-table--row' align="left">Description</StyledTableCell>
                                                        <StyledTableCell className='title-table--row' align="left">Users</StyledTableCell>
                                                        <StyledTableCell className='title-table--row' align="left">Licence use</StyledTableCell>
                                                        <StyledTableCell className='title-table--row' align="left"></StyledTableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {rows.map((row) => (
                                                        <StyledTableRow key={row.company}>
                                                            {/* <StyledTableCell className='company-logo-avatar' component="th" scope="row"> <div><Avatar className='profile_picture' alt="Profile Icon" src={Girl} sx={{ width: 24, height: 24 }} /></div> </StyledTableCell> */}
                                                            <StyledTableCell className='description-content--table' component="th" scope="row"> {row.company} </StyledTableCell>
                                                            <StyledTableCell className='description-content--table title-table--row' align="left">{row.description}</StyledTableCell>
                                                            <StyledTableCell className='description-content--table title-table--row' align="left">{row.users}</StyledTableCell>
                                                            <StyledTableCell className='description-content--table title-table--row' align="left"> <BorderLinearProgress className='liner-progress--table' variant="determinate" value={50} color='primary'/> {row.lisence}</StyledTableCell>
                                                            <StyledTableCell className='description-content--table title-table--row' component="th" scope="row"> <div><Radio value="b" name="radio-buttons" inputProps={{ 'aria-label': 'B' }} /></div> </StyledTableCell>
                                                        </StyledTableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    </Stack>
                                </Stack>
                            </Stack>

                        </Stack>

                        <div className="footer-container">
                            <footer>© 2010-2022 Informatics International Limited. All Rights Reserved</footer>
                        </div>

                    </Grid>

                </Grid>

                <Grid className='drawer--right'>
                    <Stack className='Drawer-icons--control' spacing={3} direction='column'>
                        <div className="notification--icon"><CircleNotificationsIcon className='right--icon-drawer'/></div>
                        <div className="error--icon"><ErrorIcon className='right--icon-drawer'/></div>
                        <div className="question--icon"><HelpIcon className='right--icon-drawer'/></div>
                        <div className="logout--icon"><OutboundSharpIcon className='right--icon-drawer'/></div>
                    </Stack>
                </Grid>

            </Stack>


            
        </Box>

  )
}
