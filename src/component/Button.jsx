import React from 'react';
// scss
import './Button.scss';
// classname을 관리하는 라이브러리
import classNames from 'classnames';

// size : large, medium, small
// color : blue, pink, gray
const Button = ({ children, size, color }) => {
	return (
		<button className={classNames('button', size, color)}>{children}</button>
	);
};

// 디폴트 props
Button.defaultProps = {
	size: 'medium',
	color: 'blue',
};
export default Button;
