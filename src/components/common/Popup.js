import React from 'react';
import { useEffect } from 'react';

function Popup(props) {
	useEffect(() => {
		document.body.style.overflowY = 'hidden';

		return () => {
			document.body.style.overflowY = 'auto';
		};
	});

	return (
		<aside className='popup'>
			<div className='con'>{props.children}</div>
			<span className='close' onClick={() => props.setOpen(false)}>
				close
			</span>
		</aside>
	);
}

export default Popup;
