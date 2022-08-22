import { useEffect } from 'react';

function Popup({ children, setOpen }) {
	useEffect(() => {
		document.body.style.overflowY = 'hidden';

		return () => {
			document.body.style.overflowY = 'auto';
		};
	}, []);
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
