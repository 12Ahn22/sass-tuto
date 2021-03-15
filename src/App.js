import Button from './component/Button';
import './App.scss';
function App() {
	return (
		<div className="App">
			<div className="buttons">
				<Button size="large" color="pink">
					Button
				</Button>
				<Button size="small" color="gray">
					Button
				</Button>
				<Button>Button</Button>
				<Button outline>Button</Button>
				<Button outline fullWidth>
					Button
				</Button>

				<Button
					color="pink"
					fullWidth
					onClick={() => {
						console.log('click');
					}}
					onMouseMove={() => {
						console.log('마우스 무브');
					}}
					className="customized-btn"
				>
					Button
				</Button>
			</div>
		</div>
	);
}

export default App;
