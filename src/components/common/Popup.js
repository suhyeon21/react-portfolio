import React from 'react';

function Popup({ children, setOpen }) {
	return (
		<aside className='popup'>
			<div className='con'>{children}</div>
			<span className='close' onClick={() => setOpen(false)}>
				close
			</span>
		</aside>
	);
}

export default Popup;
