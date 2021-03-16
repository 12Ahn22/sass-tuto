import React from 'react';
import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';

//
const colorStyles = css`
	/* 색상 */
	${({ theme, color }) => {
		const selectedColor = theme.palette[color];
		return css`
			background: ${selectedColor};
			&:hover {
				background: ${lighten(0.1, selectedColor)};
			}
			&:active {
				background: ${darken(0.1, selectedColor)};
			}
		`;
	}}
`;

const sizes = {
	large: {
		height: '3rem',
		fontSize: '1.25rem',
	},
	medium: {
		height: '2.25rem',
		fontSize: '1rem',
	},
	small: {
		height: '1.8rem',
		fontSize: '0.8rem',
	},
};

const sizeStyles = css`
	// 크기
	${({ size }) => css`
		height: ${sizes[size].height};
		font-size: ${sizes[size].fontSize};
	`}
`;

// styled컴포넌트로 컴포넌트 만들기
const StyledButton = styled.button`
	/* 공통 스타일 */
	display: inline-flex;
	outline: none;
	border: none;
	border-radius: 4px;
	color: #fff;
	font-weight: bold;
	padding-left: 1rem;
	padding-right: 1rem;
	cursor: pointer;
	align-items: center;

	/* 색상 */
	${colorStyles}

	/* 크기 */
  ${sizeStyles}

	/* etc */
	& + & {
		margin-left: 1rem;
	}
`;

const StyledBtn = ({ children, color, size, ...rest }) => {
	return (
		<StyledButton color={color} size={size} {...rest}>
			{children}
		</StyledButton>
	);
};
StyledBtn.defaultProps = {
	color: 'blue',
	size: 'medium',
};
export default StyledBtn;
