import React from 'react';
import ReactDOM from 'react-dom';
import employees from './data/data.json';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

class EmployeeTable extends React.Component {
	render() {
		return (
			<div> Employees App
			</div>
		);		
	}
}

ReactDOM.render(<EmployeeTable/>, document.getElementById('root'));