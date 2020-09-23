import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	root: {
		display: 'block',
		background:
			'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
		borderRadius: 3,
		border: 0,
		color: 'white',
		height: '100vh',
		padding: '0 30px',
		boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
	},
	bottomOne: {
		height: 50,
		margin: '10px 0',
		boxShadow: '0 0px 2px 2px rgba(0, 0, 0, .3)',
	},
	bottomTwo: {
		height: 50,
		margin: '10px 0',
		boxShadow: '0 0px 2px 2px rgba(0, 0, 0, .3)',
	},
	bottomThree: {
		height: 50,
		width: '100%',
		color: 'rgba(255, 255, 255, 1)',
		margin: '10px 0',
		boxShadow: '0 0px 5px 5px rgba(0, 0, 0, .3)',
		fontSize: '20px',
		textShadow: '0 0px 12px rgba(0, 0, 0, 1)',
		borderRadius: 25,
		border: '2px solid rgba(255, 255, 255, .8)',
		backgroundColor: 'rgba(0, 0, 0, .5)',
	},
});

export const ButtonTest = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Button
				variant='text'
				color='primary'
				fullWidth={true}
				className={classes.bottomTwo}
			>
				Click
			</Button>
			<Button
				variant='contained'
				color='primary'
				fullWidth={true}
				className='.MuiButton-text MuiButton-textPrimary '
			>
				Click
			</Button>
			<Button
				variant='contained'
				color='primary'
				fullWidth={true}
				className={classes.bottomOne}
			>
				Click
			</Button>

			<Button className={classes.bottomThree}>Click</Button>
		</div>
	);
};
