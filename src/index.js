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

class SearchBar extends React.Component {
 	handleChange() {
		this.props.onUserInput(this.refs.filterTextInput.value);
	}

	render() {
		return (
			<div>
        		<input 
        			type="text"
        			placeholder="Search..."
        			value={this.props.filterText}
        			ref="filterTextInput"
        			onChange={this.handleChange.bind(this)}
        		/>
			</div>
    	);
	}
}

class EmployeeTable extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			employees: employees,
			filterText: '',
		};
	}

	handleUserInput(filterText) {
    	this.setState({
    		filterText: filterText,
    	});
  	};

	render() {
		const filterText = this.state.filterText;
		
		const rows = this.state.employees.map((rowData) => {
			if ((rowData.id.toString().indexOf(filterText) && rowData.firstName.indexOf(filterText) && rowData.lastName.indexOf(filterText) && rowData.dateOfBirth.indexOf(filterText) && rowData.company.indexOf(filterText) && rowData.note.toString().indexOf(filterText)) === -1) {
				return;
			}
			return <EmployeeRow key={rowData.id} {...rowData} />
		});

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
			        	<tr>
			        		<td>
			        			<SearchBar filterText={this.state.filterText} onUserInput={this.handleUserInput.bind(this)}/>
			        		</td>
			        		<td>
			        		</td>
			        		<td>
			        		</td>
			        		<td>
			        		</td>
			        		<td>
			        		</td>
			        		<td>
			        		</td>
			        	</tr>
						{rows}
			        </tbody>
	      		</table>
			</div>
		);		
	}
}

ReactDOM.render(<EmployeeTable/>, document.getElementById('root'));