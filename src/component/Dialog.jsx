import React, { useEffect, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import StyledBtn from './Styled-Btn';

const fadeIn = keyframes`
  from{
    opacity:0;
  }
  to{
    opacity:1;
  }
`;
const fadeOut = keyframes`
  from{
    opacity:1;
  }
  to{
    opacity:0;
  }
`;
const slideUp = keyframes`
  from{
    transform:translateY(200px);
  }
  to{
    transform:translateY(0px);
  }
`;
const slideDown = keyframes`
  from{
    transform:translateY(0px);
  }
  to{
    transform:translateY(200px);

  }
`;

// 다이얼로그 뜨면 주변 배경 검은색으로
const DarkBackground = styled.div`
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	background: rgba(0, 0, 0, 0.8);

	animation-duration: 0.25s;
	animation-timing-function: ease-out;
	animation-name: ${fadeIn};
	/* 애니메이션 끝나고 어떻게 할지 = forwards 유지 */
	animation-fill-mode: forwards;

	${(props) =>
		props.disappear &&
		css`
			animation-name: ${fadeOut};
		`}
`;
// 가운데 나타날 로그
const DialogBlock = styled.div`
	width: 320px;
	padding: 1.5rem;
	background: white;
	border-radius: 2px;
	h3 {
		margin: 0;
		font-size: 1.5rem;
	}
	p {
		font-size: 1.125rem;
	}

	animation-duration: 0.25s;
	animation-timing-function: ease-out;
	animation-name: ${slideUp};
	/* 애니메이션 끝나고 어떻게 할지 = forwards 유지 */
	animation-fill-mode: forwards;

	${(props) =>
		props.disappear &&
		css`
			animation-name: ${slideDown};
		`}
`;

const ButtonGroup = styled.div`
	margin-top: 3rem;
	display: flex;
	justify-content: flex-end;
`;
// 상속 받아서 덮어쓰기
const ShortMarginBtn = styled(StyledBtn)`
	& + & {
		margin-left: 0.5rem;
	}
`;

const Dialog = ({
	title,
	children,
	confirmText,
	cancelText,
	visible,
	onCancle,
	onConfirm,
}) => {
	// 애니메이션 종료를 위한 상태들
	const [animate, setAnimate] = useState(false);
	const [localVisible, setlocalVisible] = useState(visible);

	useEffect(() => {
		// visible true => false
		if (localVisible && !visible) {
			setAnimate(true);
			setTimeout(() => setAnimate(false), 250);
		}
		setlocalVisible(visible);
	}, [localVisible, visible]);

	if (!localVisible && !animate) return null;

	return (
		<DarkBackground disappear={!visible}>
			<DialogBlock disappear={!visible}>
				<h3>{title}</h3>
				<p>{children}</p>

				<ButtonGroup>
					<ShortMarginBtn color="pink" onClick={onConfirm}>
						{confirmText}
					</ShortMarginBtn>
					<ShortMarginBtn onClick={onCancle}>{cancelText}</ShortMarginBtn>
				</ButtonGroup>
			</DialogBlock>
		</DarkBackground>
	);
};

Dialog.defaultProps = {
	confirmText: '확인',
	cancelText: '취소',
};

export default Dialog;
