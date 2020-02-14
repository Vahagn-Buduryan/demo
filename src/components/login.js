
import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import firebase from '../firebase';
import '../styles/signup.css';
// import Button from '@material-ui/core/Button';;
// import MuiDialogActions from '@material-ui/core/DialogActions';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput from '@material-ui/core/OutlinedInput';

import '../styles/login.css'

function  Login({isOpen,onRegister,handleClose,history}) {

//   const history=useHistory()

//   let toRegister = () =>  history.push('./signup');


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

	const [values, setValues] = useState({
		
		showPassword: false,
	  });


	//   const handleMouseDownPassword = event => {
	// 	event.preventDefault();
	//   };

	  const handleClickShowPassword = () => {
		setValues({ ...values, showPassword: !values.showPassword });
	  };

 

  

  return (
    <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={isOpen}>
			<DialogTitle id="customized-dialog-title" onClose={handleClose}>
				Log in
			</DialogTitle>
			<DialogContent dividers>
                <form  onSubmit={e => e.preventDefault() && false } className='form'>
						<TextField id="outlined-basic" label="E-mail or Phone Number "value={email} variant="outlined" onChange={e => setEmail(e.target.value)} className={'input'}/>
					
						<OutlinedInput
						className={'input'}
							label='Password'
							id="outlined-adornment-password"
							type={values.showPassword ? 'text' : 'password'}
							value={values.password}
							onChange={e=>setPassword(e.target.value)}
							endAdornment={
							<InputAdornment position="end">
								<IconButton
								aria-label="toggle password visibility"
								onClick={handleClickShowPassword}
								edge="end"
								>
								{values.showPassword ? <Visibility /> : <VisibilityOff />}
								</IconButton>
							</InputAdornment>
							}
							labelWidth={70}
						/>
					<Button
						type="submit"
						variant="contained"
						color="primary"
						onClick={login}
						component={Link}
						>
						Log in
          			</Button>
					  </form>
					  </DialogContent>
					  <a onClick={onRegister} className="nav-link">Whant to register?</a>
					  </Dialog>
  );
  async function login() {
	try {
		await firebase.login(email, password);
		history.push('/user');
	} catch(error) {
		alert(error.message)
	}

}

}

export default Login;