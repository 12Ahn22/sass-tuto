import React from 'react';
// scss
import './Button.scss';
// classname을 관리하는 라이브러리
import classNames from 'classnames';

// size : large, medium, small
// color : blue, pink, gray
const Button = ({
	children,
	size,
	color,
	outline,
	fullWidth,
	className,
	...rest
	// onClick,
	// onMouseMove,
	// ...rest로 나머지 props를 받아온다
}) => {
	console.log(rest);
	return (
		<button
			className={classNames(
				'button',
				size,
				color,
				{ outline, fullWidth },
				className
			)}
			{
				// rest객체 안에 있는 모든 것을 여기에 설정한다는 뜻
				...rest
				// {...rest : ...rest}
			}
		>
			{children}
		</button>
	);
};

// 디폴트 props
Button.defaultProps = {
	size: 'medium',
	color: 'blue',
};
export default Button;
