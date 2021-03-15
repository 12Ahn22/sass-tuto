import React from 'react';
// scss
import './Button.scss';
// classname을 관리하는 라이브러리
import classNames from 'classnames';

// size : large, medium, small
const Button = ({ children, size }) => {
	return <button className={classNames('button', size)}>{children}</button>;
};

// 디폴트 props
Button.defaultProps = {
	size: 'medium',
};
export default Button;
