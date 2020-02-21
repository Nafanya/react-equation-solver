import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Header from "@vkontakte/vkui/dist/components/Header/Header";
import List from "@vkontakte/vkui/dist/components/List/List";

const Home = ({ id, go }) => (
	<Panel id={id}>
		<PanelHeader>Калькулятор уравнений</PanelHeader>

		<Group header={<Header mode="secondary">Уравнения</Header>}>
			<List>
				<Cell expandable onClick={() => this.setState({ activePanel: 'quadratic' })}>Квадратичные уравнения</Cell>
			</List>
		</Group>

	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Home;
