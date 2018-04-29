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
			isSortedAsc: false,
		};
		this.compareBy.bind(this);
		this.sortBy.bind(this);
	}

	handleUserInput(filterText) {
		this.setState({
			filterText: filterText,
		});
	}
	compareBy(key) {
		return function (a, b) {
			if (a[key] < b[key]) return -1;
			if (a[key] > b[key]) return 1;
			return 0;
		};
	}
	uncompareBy(key) {
		return function (a, b) {
			if (a[key] > b[key]) return -1;
			if (a[key] < b[key]) return 1;
			return 0;
		};
	}
	sortBy(key) {
		let newEmployees = [...this.state.employees];
		this.state.isSortedAsc ? newEmployees.sort(this.uncompareBy(key)) : newEmployees.sort(this.compareBy(key));
		this.setState({
			employees: newEmployees,
			isSortedAsc: !this.state.isSortedAsc
		});
	}

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
						<th onClick={() => this.sortBy('id')} >Id {' \u2193'}{' \u2191'}</th>
						<th onClick={() => this.sortBy('firstName')}>First Name {' \u2193'}{' \u2191'}</th>
						<th onClick={() => this.sortBy('lastName')}>Last Name {' \u2193'}{' \u2191'}</th>
						<th onClick={() => this.sortBy('dateOfBirth')}>Date of Birth {' \u2193'}{' \u2191'}</th>
						<th onClick={() => this.sortBy('company')}>Company {' \u2193'}{' \u2191'}</th>
						<th onClick={() => this.sortBy('note')}>Note {' \u2193'}{' \u2191'}</th>
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