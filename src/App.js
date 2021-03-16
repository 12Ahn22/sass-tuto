import Button from './component/Button';
import './App.scss';
import CheckBox from './component/CheckBox';
import { useState } from 'react';

function App() {
	const [check, setCheck] = useState('');
	const onChange = (e) => {
		setCheck(e.target.checked);
	};

	return (
		<div>
			<CheckBox checked={check} onChange={onChange}>
				다음 약관에 모두 동의
			</CheckBox>
		</div>
	);
}

export default App;

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
