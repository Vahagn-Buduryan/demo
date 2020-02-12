import React, { useState } from 'react';
import { Link, withRouter ,Redirect} from 'react-router-dom';
import firebase from '../firebase';
import '../styles/signup.css';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
// import MuiDialogActions from '@material-ui/core/DialogActions';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput from '@material-ui/core/OutlinedInput';

import User from "./user"

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <Button aria-label="close" className={classes.closeButton} onClick={onClose}>
         x
        </Button>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
	root: {
	  padding: theme.spacing(2),
	},
  }))(MuiDialogContent);
  
//   const DialogActions = withStyles(theme => ({
// 	root: {
// 	  margin: 0,
// 	  padding: theme.spacing(1),
// 	},
//   }))(MuiDialogActions);



function Register(props) {
	
	const [values, setValues] = React.useState({
		
		showPassword: false,
	  });

	const [open, setOpen] = React.useState(true);

	const handleClose = () => {
		setOpen(false);
	  };
	
	  const handleMouseDownPassword = event => {
		event.preventDefault();
	  };

	  const handleClickShowPassword = () => {
		setValues({ ...values, showPassword: !values.showPassword });
	  };

	const [name, setName] = useState('');
	const [surname,setSurname] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [user, setUser] = useState(false);

	if(user===true){
		return <Link  to ={`/user/${name}`}
		 component={User}
		/>
	}

	return (
		<Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
			<DialogTitle id="customized-dialog-title" onClose={handleClose}>
				Registration
			</DialogTitle>
			<DialogContent dividers>
                <form  onSubmit={e => e.preventDefault() && false } className='form'>
						<TextField id="outlined-basic" label="Name" value={name} variant="outlined" onChange={e => setName(e.target.value)} className={'input'}/>
						<TextField id="outlined-basic" label="Surname" value={surname} variant="outlined" onChange={e => setSurname(e.target.value)} className={'input'}/>
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
								onMouseDown={handleMouseDownPassword}
								edge="end"
								>
								{values.showPassword ? <Visibility /> : <VisibilityOff />}
								</IconButton>
							</InputAdornment>
							}
							labelWidth={70}
						/>
						<div className='terms'>
						<Checkbox
							value="primary"
							inputProps={{ 'aria-label': 'primary checkbox' }}
							color='primary'
						/>
						<p>I agree to the terms and conditions</p>
						</div>
					<Button
						type="submit"
						variant="contained"
						color="primary"
						onClick={onRegister}
						component={Link}
						>
						Register
          			</Button>
					  </form>
					  </DialogContent>
					  <Link to={'/Login'} className="nav-link">Allready have an account?</Link>
					  </Dialog>
	)

	async function onRegister() {
		try {
			await firebase.register(name, email, password);
			props.history.replace('/User');
			setUser(true);
		} catch(error) {
			alert(error.message);
			setUser(false);
		}
	}
	
}

export default withRouter(Register); 