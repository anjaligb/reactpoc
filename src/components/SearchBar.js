import React from 'react';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';
import Typeahead from 'react-bootstrap-typeahead';

class DropDownMenu extends React.Component{
  render() {
    var dropDownItem = this.props.data.map(function(item) {
      return (
        <li key={ item.id }>
          <Link to={ '/app/' + item.id }>
            <div className="media">
              <div className="media-left media-middle">
                <img height="50" className="media-object" src={ 'https://images.appcenter.intuit.com/Content/images/AppCards' + item.img } />
              </div>
              <div className="media-body">
                <h4 className="media-heading">{ item.name }</h4>
                <div>{ item.tagline }</div>
              </div>
            </div>
          </Link>
        </li>
      );
    });
    return (
      <ul className="dropdown-menu hide" role="menu">
        { dropDownItem }
      </ul>
    );
  }
};

class SearchBar extends React.Component{
constructor(props){
   super(props);
    this.state =  {
       query: '',
        data: []
      }
  }
  componentDidMount() {
    fetch('../../json/my.json')
      .then(function(response) {
        return response.json()
      }).then(function(json) {
        this.setState({data: json});
      }.bind(this)).catch(function(ex) {
        console.log('parsing failed', ex)
      });
  }
  _handleChange(query) {
    if (query.length) {
      if (query[0].customOption) {
        browserHistory.push('/search/' + query[0].name);
      } else {
        browserHistory.push('/app/' + query[0].id);
      }
    }
  }
  render() {
    return (
      <Typeahead
        labelKey="name"
        allowNew={true}
        onChange={this._handleChange}
        options={this.state.data}
      />
    );
  }
};

export default SearchBar;
