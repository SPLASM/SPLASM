import React from 'react';
import $ from 'jquery';

// when this is rendered it will look something like this:
// <Edit field="picture">
//   Add your picture here (prompt message accessed by props.children)
// </Edit>

class Edit extends React.Component {
	constructor(props) {
		super(props);
		//I'm not sure if I need this line or not
		this.editProf = this.editProf.bind(this);
	}

	editProf() {
		const change = prompt(this.props.children);
		$.ajax({
			url: '/edit',
			type: 'PUT',
			data: {
				field: this.props.field,
				change: change
			},
			success: (result) => {
				console.log('result from PUT req: ', result);
			},
			error: (err) => {
				console.error(err);
			}
		});
	}

	render() {
		return (
			<div>
			  <button type="button" onClick={this.editProf}>Edit</button>
			</div>
		);
	}
}

export default Edit;