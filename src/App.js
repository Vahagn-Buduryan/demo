import React,{useState}  from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/home';
import User from './components/user';
import Login from './components/login';
import Signup from './components/signup';
import './styles/App.css';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import Logo from './styles/logo_d.png';

import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1.6),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


  

function App () {

  const [toggle,setToggle]=useState(false);
  const [showRegister,setRegister]=useState(false);

  const classes = useStyles();
  const [lng, setLng] = useState('Eng');



  const handleChange = event => {
    setLng(event.target.value);
  };


    return (
      <div>
    <Router>
        <div  className={'header'}>
          <nav className="navbar navbar-expand-lg navbar-light bg-ligh">
          <img src={Logo} id='logo' alt='logo'logo/>
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Events </Link></li>
            <li><Link to={'/User'} className="nav-link">User</Link></li>
            <FormControl className={classes.formControl}>
              <Select
                disableUnderline
                style={{width:'77px'}}
                labelId="simple-select-label"
                id="simple-select"
                value={lng}
                defaultValue = {'Eng'}
                onChange={handleChange}
                className={"select"}
                IconComponent={()=> <ExpandMoreRoundedIcon/>}
              >
          <MenuItem selected value={'ENG'} style={{fontSize:'16px'}}>Eng</MenuItem>
          <MenuItem value={"RUS"} style={{fontSize:'16px'}}>Rus</MenuItem>
          <MenuItem value={'AM'} style={{fontSize:'16px'}}>AM</MenuItem>
        </Select>
      </FormControl>
            <button onClick={()=>toggle===false?setToggle(true):setToggle(false)} className={'login'}>Log in</button>
            <button onClick={()=>showRegister===false?setRegister(true):setRegister(false)} className={'register'}>Registration</button>
          </ul>
          </nav>
          <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/user' component={User} />
          </Switch>
        </div>
      </Router>
       
        <Login 
        isOpen={toggle} 
        onRegister={ ()=> {setToggle(false); setRegister(true)}}
         handleClose={ ()=> setToggle(false)}
          />
        
        <Signup 
          isOpen={showRegister} 
          onLogin={ () => {setRegister(false);setToggle(true)}}
          handleClose={ ()=> setRegister(false)}
        /> 
       
      </div>
    );
  }


export default App;
