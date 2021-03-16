import Button from './component/Button';
import './App.scss';
import CheckBox from './component/CheckBox';
import { useState } from 'react';
import StyledBtn from './component/Styled-Btn';
// styled-component
// ThemeProvider
import styled, { ThemeProvider } from 'styled-components';
import Dialog from './component/Dialog';

// const Circle = styled.div`
// 	width: 5rem;
// 	height: 5rem;
// 	background: ${(props) => props.color};
// 	border-radius: 50%;
// 	${(props) =>
// 		props.huge &&
// 		css`
// 			width: 10rem;
// 			height: 10rem;
// 		`}
// `;

const AppBlock = styled.div`
	width: 512px;
	margin: 0 auto;
	margin-top: 4rem;
	border: 1px solid #000;
	padding: 1rem;
`;

const BtnGroup = styled.div`
	& + & {
		margin-top: 1rem;
	}
`;

const palette = {
	blue: '#228be6',
	pink: '#f06595',
	gray: '#496057',
};
function App() {
	const [dialog, setDialog] = useState(false);

	const onClick = () => {
		setDialog(true);
	};

	const onConfirm = () => {
		console.log('확인');
		setDialog(false);
	};
	const onCancle = () => {
		console.log('취소');
		setDialog(false);
	};

	return (
		<>
			<ThemeProvider theme={{ palette }}>
				<AppBlock>
					<BtnGroup>
						<StyledBtn size="large" onClick={onClick}>
							삭제
						</StyledBtn>
						<StyledBtn color="pink">BUTTON</StyledBtn>
						<StyledBtn size="small" color="gray">
							BUTTON
						</StyledBtn>
					</BtnGroup>
				</AppBlock>

				<Dialog
					title="정말로 삭제하나요?"
					visible={dialog}
					onConfirm={onConfirm}
					onCancle={onCancle}
				>
					데이터를 정말로 삭제하시겠습니까?
				</Dialog>
			</ThemeProvider>
		</>
	);
}

export default App;

// const [check, setCheck] = useState('');
// 	const onChange = (e) => {
// 		setCheck(e.target.checked);
// 	};

// return (
// 		<div>
// 			<CheckBox checked={check} onChange={onChange}>
// 				다음 약관에 모두 동의
// 			</CheckBox>
// 		</div>
// 	);

// return (
// 		<div className="App">
// 			<div className="buttons">
// 				<Button size="large" color="pink">
// 					Button
// 				</Button>
// 				<Button size="small" color="gray">
// 					Button
// 				</Button>
// 				<Button>Button</Button>
// 				<Button outline>Button</Button>
// 				<Button outline fullWidth>
// 					Button
// 				</Button>

// 				<Button
// 					color="pink"
// 					fullWidth
// 					onClick={() => {
// 						console.log('click');
// 					}}
// 					onMouseMove={() => {
// 						console.log('마우스 무브');
// 					}}
// 					className="customized-btn"
// 				>
// 					Button
// 				</Button>
// 			</div>
// 		</div>
// 	);
