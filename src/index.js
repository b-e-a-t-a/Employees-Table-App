import React from 'react';
import ReactDOM from 'react-dom';
import employees from './data/data.json';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const EmployeeRow = ({id, firstName, lastName, dateOfBirth, company, note}) => (
	<tr>
		<td>{id}</td>
		<td>{firstName}</td>
		<td>{lastName}</td>
		<td>{dateOfBirth}</td>    
		<td>{company}</td>
		<td>{note}</td>      
	</tr>
);

class EmployeeTable extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			employees: employees,
		};
	}

	render() {
		
		const rows = this.state.employees.map((rowData) => <EmployeeRow key={rowData.id} {...rowData} />);

		return (
			<div>
				<table className="table table-striped">
	        		<thead className="table-info">
	        			<th>Id</th>
	        			<th>First Name</th>
	        			<th>Last Name</th>
	        			<th>Date of Birth</th>
	        			<th>Company</th>
	        			<th>Note</th>
	        		</thead>
			        <tbody>
			          {rows}
			        </tbody>
	      		</table>
			</div>
		);		
	}
}

ReactDOM.render(<EmployeeTable/>, document.getElementById('root'));