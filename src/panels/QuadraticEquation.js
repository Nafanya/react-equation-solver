import React from 'react';
import PropTypes from "prop-types";
import PanelHeaderButton from "@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton";
import {platform, IOS} from "@vkontakte/vkui";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Div from "@vkontakte/vkui/dist/components/Div/Div";
import Input from "@vkontakte/vkui/dist/components/Input/Input";
import FormLayout from "@vkontakte/vkui/dist/components/FormLayout/FormLayout";
import FormStatus from "@vkontakte/vkui/dist/components/FormStatus/FormStatus";

import MathJax from 'react-mathjax';
import MathJaxProvider from "react-mathjax/lib/Provider";

const osName = platform();

class QuadraticEquation extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            a: 2,
            b: 4,
            c: -3,
            error: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(value, id) {
        let error = false;
        if (isNaN(value)) {
            error = "Не число"
        }
        const newState = {
            ...this.state
        };
        newState[id] = value;

        const [a, b, c] = [newState.a, newState.b, newState.c];
        const d = b * b - 4 * a * c;
        if (d < 0) {
            error = 'Дискриминант меньше 0'
        }

        newState.d = d;
        newState.error = error;

        this.setState(newState);
        // console.log('new state: ' + JSON.stringify(this.state));
    }

    roundNumber(x) {
        return Math.round( x * 100 + Number.EPSILON ) / 100;
    }

    render() {
        console.log('new state: ' + JSON.stringify(this.state));
        const [a, b, c, error] = [this.state.a, this.state.b, this.state.c, this.state.error];
        const d = b * b - 4 * a * c;
        const sqrtD = this.roundNumber(Math.sqrt(d));
        const isDZero = Math.abs(d) < Number.EPSILON;
        const x1 = this.roundNumber(-b + Math.sqrt(d)) / (2*a);
        const x2 = this.roundNumber(-b - Math.sqrt(d)) / (2*a);

        return (
            <Panel id={this.props.id}>
                <PanelHeader
                    left={<PanelHeaderButton onClick={this.props.go} data-to="home">
                        {osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
                    </PanelHeaderButton>}
                >
                    Квадратное уравнение
                </PanelHeader>
                <FormLayout>
                    <Input type='number' defaultValue='2' onInput={e => this.handleChange(e.target.value, 'a')}/>
                    <Input type='number' defaultValue='-4' onInput={e => this.handleChange(e.target.value, 'b')}/>
                    <Input type='number' defaultValue='3' onInput={e => this.handleChange(e.target.value, 'c')}/>
                    {error &&
                    <FormStatus header="Дискриминант меньше 0" mode="error">
                        Дискриминант меньше 0, действительных корней нет
                    </FormStatus>
                    }
                </FormLayout>
                {!error &&
                <Div>
                    <MathJax.Provider>
                        <p>Решение:</p>
                        <MathJax.Node formula={"x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}."} />
                        <p>Найдём дискриминант:</p>
                        <MathJax.Node formula={"D = b^2 - 4ac"} />
                        <MathJax.Node formula={`D = ${b}^2 - 4\\cdot${a}\\cdot${c} = ${d}`} />
                        <MathJax.Node formula={`\\sqrt{D} = ${sqrtD}`} />
                        <p>Дискриминант не отрицателен, найдём корни:</p>
                        <MathJax.Node formula={`x_1 = {-b + \\sqrt{D} \\over{2a}} = {-${b} + ${sqrtD}\\over{${a*2}}} = ${x1}`} />
                        <MathJax.Node formula={`x_2 = {-b - \\sqrt{D} \\over{2a}} = {-${b} - {${sqrtD}} \\over{${a*2}}} = ${x2}`} />
                    </MathJax.Provider>
                </Div>
                }
            </Panel>
        );
    }
}

QuadraticEquation.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
};

export default QuadraticEquation;