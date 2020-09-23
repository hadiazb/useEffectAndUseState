import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
	root: {
		display: 'block',
		height: '100vh',
		padding: '50px 30px 0',
		background:
			'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
		borderRadius: 3,
		border: 0,
		color: 'white',
		boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
	},
	title: {
		width: '100%',
		height: '50px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		textAlign: 'center',
		fontSize: '25px',
		fontWeight: 300,
	},
	number: {
		paddingLeft: 10,
		fontWeight: 700,
	},
	add: {
		width: '100%',
		height: '50px',
		color: 'rgba(255, 255, 255, 1)',
		border: '2px solid rgba(255, 255, 255, .8)',
		borderRadius: '25px',
	},
});
