import React, { useState} from 'react';
import View from '@vkontakte/vkui/dist/components/View/View';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import QuadraticEquation from './panels/QuadraticEquation';

const App = () => {
	const [activePanel, setActivePanel] = useState('quadratic');

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	return (
		<View activePanel={activePanel}>
			<Home id='home' go={go} />
			<QuadraticEquation id='quadratic' go={go} />
		</View>
	);
};

export default App;

