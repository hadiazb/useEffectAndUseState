import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import { useStyles } from './style';

export const Contador = () => {
	const classes = useStyles();
	const [count, setCount] = useState(0);
	const [loading, setLoading] = useState(true);

	const add = () => {
		setCount(count + 1);
	};
	const change = (n) => {
		if (n % 2 === 0) {
			setLoading(true);
		} else {
			setLoading(false);
		}
	};

	useEffect(() => {
		document.title = `Clicked ${count}`;
		change(count);
		console.log(`Render ${count}`);
	}, [count]);

	return (
		<div className={classes.root} id='contenedor'>
			<h4 className={classes.title}>
				The count is in{' '}
				<span className={classes.number}> {count} </span>
			</h4>
			<Button onClick={add} className={classes.add}>
				Add
			</Button>
			{loading ? <h4>Like</h4> : <h4>Dislike</h4>}
		</div>
	);
};
