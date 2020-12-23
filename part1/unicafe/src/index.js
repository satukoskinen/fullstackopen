import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Header = ({ text }) =>
	<div><h1>{text}</h1></div>

const Button = ({ handleClick, text }) =>
	<button onClick={handleClick}>{text}</button>

const Statistic = (props) => {
	return (
		<tr>
			<td>{props.name}</td>
			<td>{props.value}</td>
		</tr>
	)
}

const Statistics = (props) => {
	const sum = props.good + props.neutral + props.bad
	const average = (props.good * 1 + props.neutral * 0 + props.bad * (-1)) / sum

	if (sum === 0) {
		return (
			<div>No feedback given</div>
		)
	}

	return (
		<div>
			<table>
			<Statistic name="good" value={props.good} />
			<Statistic name="neutral" value={props.neutral} />
			<Statistic name="bad" value={props.bad} />
			<Statistic name="all" value={sum} />
			<Statistic name="average" value={average} />
			<Statistic name="positive" value={props.good / sum * 100} />
			</table>
		</div>
	)
}

const App = () => {
	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)

	return (
		<div>
			<Header text="give feedback" />
			<Button handleClick={() => setGood(good + 1)} text="good" />
			<Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
			<Button handleClick={() => setBad(bad + 1)} text="bad" />
			<Header text="statistics" />
			<Statistics good={good} neutral={neutral} bad={bad} />
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'));
