import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Menu = forwardRef(function Menu({ buttonCaption }, ref) {
	const dialog = useRef();
	useImperativeHandle(ref, () => {
		return {
			open() {
				dialog.current.showModal();
			},
		};
	});
	return createPortal(
		<dialog className='modal' ref={dialog}>
			<form method='dialog' className='mt-4 text-right'>
				<button>{buttonCaption}</button>
			</form>
		</dialog>,
		document.getElementById("modal")
	);
});

export default Menu;
