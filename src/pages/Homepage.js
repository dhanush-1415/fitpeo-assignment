import React , {useState} from "react";
import { Grid, Typography, TextField,   Collapse,
    IconButton,
    AppBar,
    Toolbar,
    Drawer,
    List,
    ListItem,
} from "@mui/material";
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InventoryIcon from '@mui/icons-material/Inventory';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Person3Icon from '@mui/icons-material/Person3';
import AddCardIcon from '@mui/icons-material/AddCard';
import SettingsIcon from '@mui/icons-material/Settings';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from 'react-minimal-pie-chart';
import SearchIcon from '@mui/icons-material/Search';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Divider from '@mui/material/Divider';



const Home = () => {

    const [open, setOpen] = useState(false);
    

    const [Sort, setSort] = React.useState('30');

    const handleChange = (event) => {
      setSort(event.target.value);
    };

    const handleClick = () => {
      setOpen(!open);
    };

    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
      setSidebarOpen(!isSidebarOpen);
    };
  
    const closeSidebar = () => {
      setSidebarOpen(false);
    };

    const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300 , 2000 , 1833 , 1922, 1828, 2777];
    const xLabels = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
    ];

    const data = [
        { title: 'Red', value: 300, color: '#FF6384' },
        { title: 'Blue', value: 50, color: '#36A2EB' },
        { title: 'Yellow', value: 100, color: '#FFCE56' },
      ];

      const products = [
        {
          id: 1,
          img: 'https://img.freepik.com/premium-vector/blue-vector-abstract-polygonal-background_6869-1077.jpg',
          name: 'Product 1',
          description: 'Description of Product 1',
          stock: 10,
          price: 20.99,
          total: 0
        },
        {
          id: 2,
          img: 'https://img.freepik.com/premium-vector/blue-vector-abstract-polygonal-background_6869-1077.jpg',
          name: 'Product 2',
          description: 'Description of Product 2',
          stock: 5,
          price: 15.49,
          total: 0
        },
        {
          id: 3,
          img: 'https://img.freepik.com/premium-vector/blue-vector-abstract-polygonal-background_6869-1077.jpg',
          name: 'Product 3',
          description: 'Description of Product 3',
          stock: 15,
          price: 25.79,
          total: 0
        }
      ];

    return(
        <>
                <Grid>
                    <Grid container>
                    <AppBar  position='fixed' sx={{  background:'#040440', display: { md: 'none', sm: 'block' }}}>
                        <Toolbar>
                            <Grid container justifyContent='space-between' sx={{pt:0.8}}>
                                <Grid item>
                                    <Link to={`/`}>
                                    {/* <img style={{background:'black' , borderRadius:'7px'}} src="{logo}" width='60px' alt='def1'/> */}
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <IconButton
                                        color="inherit"
                                        aria-label="open drawer"
                                        edge="start"
                                        onClick={toggleSidebar}
                                        sx={{ mr: 1, display: { md: 'none' } }}
                                    >
                                        <MenuIcon sx={{color:'white'}} />
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </Toolbar>
                    </AppBar>
                        <Drawer
                        anchor="right"
                        open={isSidebarOpen}
                        onClose={closeSidebar}
                        PaperProps={{
                        style: {
                            width: '75%',
                            background: 'white',
                        },
                        }}
                    >
                        <Grid container justifyContent='space-between' alignItems='center' sx={{width:'90%' , margin:'7px auto'}}>
                            <Grid item>
                                {/* <img style={{background:'black' , borderRadius:'7px'}} src="" width='60px' alt='def1'/> */}
                            </Grid>
                            <Grid item>
                                <CloseIcon onClick={closeSidebar} />
                            </Grid>
                        </Grid>
                        <Grid item sx={{background:'#040440' , color:'white' }}>
                            <Grid container direction="column" justifyContent="space-between" sx={{height:'100%', minHeight:'100vh' }}>
                                <Grid item>
                                    <List
                                    sx={{ width: '100%', maxWidth: 290 , padding:'25px'}}
                                    component="nav"
                                    aria-labelledby="nested-list-subheader"
             
                                    >
                                    <Grid container justifyContent='space-around' sx={{maxWidth:'180px' , margin:'20px'}}>
                                        <Grid item sx={{display:'flex' , alignItems:'center'}}>
                                            <DashboardCustomizeIcon sx={{color:'white'}} />
                                        </Grid>
                                        <Grid item>
                                            <Typography sx={{fontWeight:'bold' , fontSize:'1.5rem'}}>Dashboard</Typography>
                                        </Grid>
                                    </Grid>
                                    <ListItemButton sx={{background:'#2d2d69' , borderRadius:'5px' , margin:'10px'}}>
                                        <ListItemIcon>
                                        <DashboardIcon sx={{color:'white'}}/>
                                        </ListItemIcon>
                                        <ListItemText primary="Dashboard" />
                                    </ListItemButton>
                                    <ListItemButton onClick={handleClick} sx={{ borderRadius:'5px' , margin:'10px'}}>
                                        <ListItemIcon>
                                        <InventoryIcon sx={{color:'white'}}/>
                                        </ListItemIcon>
                                        <ListItemText primary="Product" />
                                        {open ? <ExpandLess /> : <ExpandMore />}
                                    </ListItemButton>
                                    <Collapse in={open} timeout="auto" unmountOnExit>
                                        <List component="div" disablePadding>
                                        <ListItemButton sx={{ pl: 4 }}>
                                            <ListItemIcon>
                                            <InboxIcon sx={{color:'white'}}/>
                                            </ListItemIcon>
                                            <ListItemText primary="Starred" />
                                        </ListItemButton>
                                        </List>
                                    </Collapse>
                                    <ListItemButton onClick={handleClick} sx={{ borderRadius:'5px' , margin:'10px'}}>
                                        <ListItemIcon>
                                        <Person3Icon sx={{color:'white'}}/>
                                        </ListItemIcon>
                                        <ListItemText primary="Customers" />
                                        {open ? <ExpandLess /> : <ExpandMore />}
                                    </ListItemButton>
                                    <Collapse in={open} timeout="auto" unmountOnExit>
                                        <List component="div" disablePadding>
                                        <ListItemButton sx={{ pl: 4 }}>
                                            <ListItemIcon>
                                            <InboxIcon sx={{color:'white'}}/>
                                            </ListItemIcon>
                                            <ListItemText primary="Starred" />
                                        </ListItemButton>
                                        </List>
                                    </Collapse>
                                    <ListItemButton onClick={handleClick} sx={{ borderRadius:'5px' , margin:'10px'}}>
                                        <ListItemIcon>
                                        <AddCardIcon sx={{color:'white'}}/>
                                        </ListItemIcon>
                                        <ListItemText primary="Income" />
                                        {open ? <ExpandLess /> : <ExpandMore />}
                                    </ListItemButton>
                                    <Collapse in={open} timeout="auto" unmountOnExit>
                                        <List component="div" disablePadding>
                                        <ListItemButton sx={{ pl: 4 }}>
                                            <ListItemIcon>
                                            <InboxIcon sx={{color:'white'}}/>
                                            </ListItemIcon>
                                            <ListItemText primary="Starred" />
                                        </ListItemButton>
                                        </List>
                                    </Collapse>
                                    <ListItemButton onClick={handleClick} sx={{ borderRadius:'5px' , margin:'10px'}}>
                                        <ListItemIcon>
                                        <SettingsIcon sx={{color:'white'}}/>
                                        </ListItemIcon>
                                        <ListItemText primary="Promote" />
                                        {open ? <ExpandLess /> : <ExpandMore />}
                                    </ListItemButton>
                                    <Collapse in={open} timeout="auto" unmountOnExit>
                                        <List component="div" disablePadding>
                                        <ListItemButton sx={{ pl: 4 }}>
                                            <ListItemIcon>
                                            <InboxIcon sx={{color:'white'}}/>
                                            </ListItemIcon>
                                            <ListItemText primary="Starred" />
                                        </ListItemButton>
                                        </List>
                                    </Collapse>
                                    <ListItemButton onClick={handleClick} sx={{ borderRadius:'5px' , margin:'10px'}}>
                                        <ListItemIcon>
                                        <LiveHelpIcon sx={{color:'white'}}/>
                                        </ListItemIcon>
                                        <ListItemText primary="Help" />
                                        {open ? <ExpandLess /> : <ExpandMore />}
                                    </ListItemButton>
                                    <Collapse in={open} timeout="auto" unmountOnExit>
                                        <List component="div" disablePadding>
                                        <ListItemButton sx={{ pl: 4 }}>
                                            <ListItemIcon>
                                            <InboxIcon sx={{color:'white'}}/>
                                            </ListItemIcon>
                                            <ListItemText primary="Starred" />
                                        </ListItemButton>
                                        </List>
                                    </Collapse>
                                    </List>
                                </Grid>
                                <Grid item>
                                    <List>
                                        <ListItemButton onClick={handleClick} sx={{background:'#2d2d69' , borderRadius:'5px' , margin:'10px'}}>
                                            <ListItemIcon>
                                            <img src="https://writestylesonline.com/wp-content/uploads/2016/08/Follow-These-Steps-for-a-Flawless-Professional-Profile-Picture.jpg" alt="d1" width="50px" height="50px" style={{borderRadius:'50%'}} />
                                            </ListItemIcon>
                                            <ListItemText primary="Eveno" />
                                            {open ? <ExpandLess /> : <ExpandMore />}
                                        </ListItemButton>
                                        <Collapse in={open} timeout="auto" unmountOnExit>
                                            <List component="div" disablePadding>
                                            <ListItemButton sx={{ pl: 4 }}>
                                                <ListItemIcon>
                                                <InboxIcon sx={{color:'white'}}/>
                                                </ListItemIcon>
                                                <ListItemText primary="Starred" />
                                            </ListItemButton>
                                            </List>
                                        </Collapse>
                                    </List>
                                </Grid>
                            </Grid>
                        </Grid>
                        </Drawer>
                        <Grid item md={2.5} sx={{background:'#040440' , color:'white' , display:{xs:'none' ,sm:'none' , md:'flex' } }}>
                            <Grid container direction="column" justifyContent="space-between" sx={{height:'100%', minHeight:'100vh' }}>
                                <Grid item>
                                    <List
                                    sx={{ width: '100%', maxWidth: 290 , padding:'25px'}}
                                    component="nav"
                                    aria-labelledby="nested-list-subheader"
             
                                    >
                                    <Grid container justifyContent='space-around' sx={{maxWidth:'180px' , margin:'20px'}}>
                                        <Grid item sx={{display:'flex' , alignItems:'center'}}>
                                            <DashboardCustomizeIcon sx={{color:'white'}} />
                                        </Grid>
                                        <Grid item>
                                            <Typography sx={{fontWeight:'bold' , fontSize:'1.5rem'}}>Dashboard</Typography>
                                        </Grid>
                                    </Grid>
                                    <ListItemButton sx={{background:'#2d2d69' , borderRadius:'5px' , margin:'10px 0px' , maxWidth:'220px'}}>
                                        <ListItemIcon>
                                        <DashboardIcon sx={{color:'white'}}/>
                                        </ListItemIcon>
                                        <ListItemText primary="Dashboard" />
                                    </ListItemButton>
                                    <ListItemButton onClick={handleClick} sx={{ borderRadius:'5px' , margin:'10px' , maxWidth:'220px'}}>
                                        <ListItemIcon>
                                        <InventoryIcon sx={{color:'white'}}/>
                                        </ListItemIcon>
                                        <ListItemText primary="Product" />
                                        {open ? <ExpandLess /> : <ExpandMore />}
                                    </ListItemButton>
                                    <Collapse in={open} timeout="auto" unmountOnExit>
                                        <List component="div" disablePadding>
                                        <ListItemButton sx={{ pl: 4 }}>
                                            <ListItemIcon>
                                            <InboxIcon sx={{color:'white'}}/>
                                            </ListItemIcon>
                                            <ListItemText primary="Starred" />
                                        </ListItemButton>
                                        </List>
                                    </Collapse>
                                    <ListItemButton onClick={handleClick} sx={{ borderRadius:'5px' , margin:'10px'  , maxWidth:'220px'}}>
                                        <ListItemIcon>
                                        <Person3Icon sx={{color:'white'}}/>
                                        </ListItemIcon>
                                        <ListItemText primary="Customers" />
                                        {open ? <ExpandLess /> : <ExpandMore />}
                                    </ListItemButton>
                                    <Collapse in={open} timeout="auto" unmountOnExit>
                                        <List component="div" disablePadding>
                                        <ListItemButton sx={{ pl: 4 }}>
                                            <ListItemIcon>
                                            <InboxIcon sx={{color:'white'}}/>
                                            </ListItemIcon>
                                            <ListItemText primary="Starred" />
                                        </ListItemButton>
                                        </List>
                                    </Collapse>
                                    <ListItemButton onClick={handleClick} sx={{ borderRadius:'5px' , margin:'10px' , maxWidth:'220px'}}>
                                        <ListItemIcon>
                                        <AddCardIcon sx={{color:'white'}}/>
                                        </ListItemIcon>
                                        <ListItemText primary="Income" />
                                        {open ? <ExpandLess /> : <ExpandMore />}
                                    </ListItemButton>
                                    <Collapse in={open} timeout="auto" unmountOnExit>
                                        <List component="div" disablePadding>
                                        <ListItemButton sx={{ pl: 4 }}>
                                            <ListItemIcon>
                                            <InboxIcon sx={{color:'white'}}/>
                                            </ListItemIcon>
                                            <ListItemText primary="Starred" />
                                        </ListItemButton>
                                        </List>
                                    </Collapse>
                                    <ListItemButton onClick={handleClick} sx={{ borderRadius:'5px' , margin:'10px' , maxWidth:'220px'}}>
                                        <ListItemIcon>
                                        <SettingsIcon sx={{color:'white'}}/>
                                        </ListItemIcon>
                                        <ListItemText primary="Promote" />
                                        {open ? <ExpandLess /> : <ExpandMore />}
                                    </ListItemButton>
                                    <Collapse in={open} timeout="auto" unmountOnExit>
                                        <List component="div" disablePadding>
                                        <ListItemButton sx={{ pl: 4 }}>
                                            <ListItemIcon>
                                            <InboxIcon sx={{color:'white'}}/>
                                            </ListItemIcon>
                                            <ListItemText primary="Starred" />
                                        </ListItemButton>
                                        </List>
                                    </Collapse>
                                    <ListItemButton onClick={handleClick} sx={{ borderRadius:'5px' , margin:'10px' , maxWidth:'220px'}}>
                                        <ListItemIcon>
                                        <LiveHelpIcon sx={{color:'white'}}/>
                                        </ListItemIcon>
                                        <ListItemText primary="Help" />
                                        {open ? <ExpandLess /> : <ExpandMore />}
                                    </ListItemButton>
                                    <Collapse in={open} timeout="auto" unmountOnExit>
                                        <List component="div" disablePadding>
                                        <ListItemButton sx={{ pl: 4 }}>
                                            <ListItemIcon>
                                            <InboxIcon sx={{color:'white'}}/>
                                            </ListItemIcon>
                                            <ListItemText primary="Starred" />
                                        </ListItemButton>
                                        </List>
                                    </Collapse>
                                    </List>
                                </Grid>
                                <Grid item>
                                    <List>
                                        <ListItemButton onClick={handleClick} sx={{background:'#2d2d69' , borderRadius:'5px' , margin:'10px'}}>
                                            <ListItemIcon>
                                            <img src="https://writestylesonline.com/wp-content/uploads/2016/08/Follow-These-Steps-for-a-Flawless-Professional-Profile-Picture.jpg" alt="d1" width="50px" height="50px" style={{borderRadius:'50%'}} />
                                            </ListItemIcon>
                                            <ListItemText primary="Eveno" />
                                            {open ? <ExpandLess /> : <ExpandMore />}
                                        </ListItemButton>
                                        <Collapse in={open} timeout="auto" unmountOnExit>
                                            <List component="div" disablePadding>
                                            <ListItemButton sx={{ pl: 4 }}>
                                                <ListItemIcon>
                                                <InboxIcon sx={{color:'white'}}/>
                                                </ListItemIcon>
                                                <ListItemText primary="Starred" />
                                            </ListItemButton>
                                            </List>
                                        </Collapse>
                                    </List>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item md={9.5} sx={{background:'#f5f6f8' , padding:'10px 20px' , marginTop:{xs:'50px' , sm:'50px' , md:'10px'} }}>
                            <Grid container justifyContent='space-between' sx={{padding:'20px 0'}}>
                                <Grid item>
                                    <Typography sx={{fontWeight:'bold'}}>Hello Shahrukh</Typography>
                                </Grid>
                                <Grid item>
                                    <TextField
                                        id="outlined-basic"
                                        label="Search"
                                        variant="outlined"
                                        size="small"
                                        InputProps={{
                                            endAdornment: (
                                            <SearchIcon color="action" style={{ marginRight: '8px' }} />
                                            ),
                                        }}
                                        sx={{ backgroundColor: '#fafbff' , display:{xs:'none', sm:'none' , md:'flex'} }}
                                    />
                                </Grid>
                            </Grid>
                            <Grid container justifyContent="space-between" spacing={4}>
                                <Grid item xs={12} sm={6} md={3}>
                                    <Grid container justifyContent='center' sx={{padding:'15px 2px' , background:'white', borderRadius:'8px'}}>
                                        <Grid item p={2}>
                                            <CurrencyExchangeIcon style={{ color: "#00aa4c", fontSize: "48px", background: "#d8ffea", padding: "20px" , borderRadius:'50%' }} />
                                        </Grid>
                                        <Grid item p={2}>
                                            <Grid container direction='column'>
                                                <Grid>
                                                    <Typography className="typo1">Earning</Typography>
                                                </Grid>
                                                <Grid>
                                                    <Typography className="typo2">$198k</Typography>
                                                </Grid>
                                                <Grid sx={{display:'flex'}}>
                                                    <Typography className="typo3">37.8% </Typography>
                                                    <Typography className="typo4">this month</Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sm={6} md={3}>
                                    <Grid container justifyContent='center' sx={{padding:'15px 2px' , background:'white', borderRadius:'8px'}}>
                                        <Grid item p={2}>
                                            <SpeakerNotesIcon style={{ color: "#aa1cff", fontSize: "48px", background: "#e7dbff", padding: "20px" , borderRadius:'50%' }} />
                                        </Grid>
                                        <Grid item p={2}>
                                            <Grid container direction='column'>
                                                <Grid>
                                                    <Typography className="typo1">Orders</Typography>
                                                </Grid>
                                                <Grid>
                                                    <Typography className="typo2">$2.4k</Typography>
                                                </Grid>
                                                <Grid sx={{display:'flex'}}>
                                                    <Typography className="typo3">2% </Typography>
                                                    <Typography className="typo4">this month</Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sm={6} md={3}>
                                    <Grid container justifyContent='center' sx={{padding:'15px 2px' , background:'white', borderRadius:'8px'}}>
                                        <Grid item p={2}>
                                            <LocalAtmIcon style={{ color: "#0858bf", fontSize: "48px", background: "#cbf2ff", padding: "20px" , borderRadius:'50%' }} />
                                        </Grid>
                                        <Grid item p={2}>
                                            <Grid container direction='column'>
                                                <Grid>
                                                    <Typography className="typo1">Balance</Typography>
                                                </Grid>
                                                <Grid>
                                                    <Typography className="typo2">$2.4k</Typography>
                                                </Grid>
                                                <Grid sx={{display:'flex'}}>
                                                    <Typography className="typo3">2% </Typography>
                                                    <Typography className="typo4">this month</Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sm={6} md={3}>
                                    <Grid container justifyContent='center' sx={{padding:'15px 2px' , background:'white', borderRadius:'8px'}}>
                                        <Grid item p={2}>
                                            <ShoppingBagIcon style={{ color: "#d90c17", fontSize: "48px", background: "#fec1e4", padding: "20px" , borderRadius:'50%' }} />
                                        </Grid>
                                        <Grid item p={2}>
                                            <Grid container direction='column'>
                                                <Grid>
                                                    <Typography className="typo1">Total Sales</Typography>
                                                </Grid>
                                                <Grid>
                                                    <Typography className="typo2">$89k</Typography>
                                                </Grid>
                                                <Grid sx={{display:'flex'}}>
                                                    <Typography className="typo3">11% </Typography>
                                                    <Typography className="typo4">this month</Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid container justifyContent='space-between' sx={{margin:'30px 0'}}>
                                <Grid item md={8}>
                                    <Grid sx={{padding:'15px 2px' , background:'white', borderRadius:'8px'}}>
                                        <BarChart
                                            width={900}
                                            height={300}
                                            series={[
                                                { data: pData, id: 'pvId' },
                                            ]}
                                            xAxis={[{ data: xLabels, scaleType: 'band' }]}
                                        >
                                        </BarChart>
                                    </Grid>
                                </Grid>
                                <Grid item md={3.5} xs={12}>
                                    <Grid sx={{  background: 'white', borderRadius: '8px' , minHeight:'100%' , display:'flex' , justifyContent:'center' , alignItems:'center' }}>
                                    <PieChart
                                        data={data}
                                        radius={40}
                                        lineWidth={40}
                                        paddingAngle={0}
                                        startAngle={270}
                                        viewBoxSize={[100, 100]}
                                        label={() => null} 
                                    >
                                        {/* Adding text */}
                                        <text x="50" y="50" textAnchor="middle" dominantBaseline="middle" fontSize="10" fill="black">
                                            65%
                                        </text>
                                    </PieChart>
                                        
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid>
                                <Grid container>
                                    <TableContainer component={Paper}>
                                            <Grid container justifyContent='space-between' sx={{width:'97%' , margin:'0 auto' , padding:'40px 0 10px' }}>
                                                <Grid item>
                                                    <Typography sx={{fontWeight:'bold'}}>Product Sell</Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Grid container justifyContent='space-between'>
                                                        <Grid item>
                                                            <TextField
                                                                id="outlined-basic"
                                                                label="Search"
                                                                variant="outlined"
                                                                size="small"
                                                                InputProps={{
                                                                    endAdornment: (
                                                                    <SearchIcon color="action" style={{ marginRight: '8px' }} />
                                                                    ),
                                                                }}
                                                                style={{ backgroundColor: '#fafbff', minWidth:150 , maxWidth:150 }}
                                                            />
                                                        </Grid>
                                                        <Grid item>
                                                        <   FormControl fullWidth>
                                                                <InputLabel id="demo-simple-select-label">Sort</InputLabel>
                                                                <Select
                                                                    labelId="demo-simple-select-label"
                                                                    id="demo-simple-select"
                                                                    value={Sort}
                                                                    size="small"
                                                                    label="Sort"
                                                                    onChange={handleChange}
                                                                    sx={{ backgroundColor: '#fafbff', minWidth:150 , maxWidth:150}}
                                                                >
                                                                    <MenuItem value={30}>Last 30 days</MenuItem>
                                                                    <MenuItem value={20}>Last 20 days</MenuItem>
                                                                    <MenuItem value={10}>Last 10 days</MenuItem>
                                                                </Select>
                                                            </FormControl>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        <Table sx={{ minWidth: {xs:'350px', sm:'350px', md:'600px'} , overflow:'scroll' }} aria-label="simple table">
                                            <TableHead>
                                            <TableRow>
                                                <TableCell><Typography className="typo1">Product Name</Typography></TableCell>
                                                <TableCell align="right"><Typography className="typo1">Stock</Typography></TableCell>
                                                <TableCell align="right"><Typography className="typo1">Price</Typography></TableCell>
                                                <TableCell align="right"><Typography className="typo1">Total Sales</Typography></TableCell>
                                            </TableRow>
                                            </TableHead>
                                            <TableBody>
                                            {products.map((row) => (
                                                <TableRow
                                                key={row.name}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                <TableCell component="th" scope="row">
                                                    <Grid>
                                                        <Grid container spacing={2}>
                                                            <Grid item sx={{display:'flex' , alignItems:'center'}}>
                                                                <img src={row.img} alt="prodImg" width="70px" style={{borderRadius:'5px'}} />
                                                            </Grid>
                                                            <Grid item sx={{display:'flex' , alignItems:'center'}}>
                                                                <Grid container direction="column">
                                                                    <Grid item>
                                                                        <Typography sx={{fontWeight:'bolder'}}>{row.name}</Typography>
                                                                    </Grid>
                                                                    <Grid item>
                                                                        <Typography className="typo1">{row.description}</Typography>
                                                                    </Grid>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </TableCell>
                                                <TableCell align="right">{row.stock} in stock</TableCell>
                                                <TableCell align="right" sx={{fontWeight:'bolder'}}>$ {row.price.toFixed(2)}</TableCell>
                                                <TableCell align="right">{row.total}</TableCell>
                                                </TableRow>
                                            ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
        </>
    )
}

export default Home;