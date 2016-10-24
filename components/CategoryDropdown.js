import React from 'react';
import { browserHistory } from 'react-router';
import { DropdownButton, MenuItem } from 'react-bootstrap';

class CategoryDropdown extends React.Component{
  constructor(props){
    super(props);
    this.state =  {
      data: []
    }
  }
  componentDidMount() {
    fetch('../../json/categories.json')
      .then(function(response) {
        return response.json()
      }).then(function(json) {
        this.setState({data: json});
      }.bind(this)).catch(function(ex) {
        console.log('parsing failed', ex)
      });
  }
  render() {
    var data = this.state.data;
    var dropDownItem = Object.keys(data).map(function(key) {
      return (
        <MenuItem key={ key } eventKey={ key }>
          { data[key].name }
        </MenuItem>
      );
    });
    return (
      <DropdownButton onSelect={ function (key) { browserHistory.push('/category/' + key) }} title="Browse apps by category" id="browse-apps-category">
        { dropDownItem }
      </DropdownButton>
    );
  }
};

export default CategoryDropdown;
