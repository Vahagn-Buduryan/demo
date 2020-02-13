import React,{useState}  from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/home';
import User from './components/user';
import Login from './components/login';
import Signup from './components/signup';
import './styles/App.css';
import Logo from './styles/logo_d.png';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
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
  const [lng, setLng] = React.useState('');



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
              <InputLabel id="simple-select-label">Eng</InputLabel>
              <Select
                labelId="simple-select-label"
                id="simple-select"
                value={lng}
                onChange={handleChange}
              >
          <MenuItem value={'EN'}>Eng</MenuItem>
          <MenuItem value={"RUS"}>Rus</MenuItem>
          <MenuItem value={'AM'}>AM</MenuItem>
        </Select>
      </FormControl>
            <button onClick={()=>toggle===false?setToggle(true):setToggle(false)} className={'login'}>Log in</button>
            <button onClick={()=>showRegister===false?setRegister(true):setRegister(false)} className={'register'}>Registration</button>
          </ul>
          </nav>
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/user' component={User} />
              <Route path='/login' component={Login} />
              <Route path='/signup' component={Signup}/>
          </Switch>
        </div>
      </Router>
       {toggle===true?
        <Login/>:null 
       }
         {showRegister===true?
        <Signup/>:null 
       }
      </div>
    );
  }


export default App;
