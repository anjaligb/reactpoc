import React from 'react';
import AppCardBoxComp from '../components/cards/Cards.js';

class Search extends React.Component{
  constructor(props){
    super(props);
    this.state =  {
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
  render() {
    return(
      <div>
        <h1>Search: { this.props.params.query }</h1>
        <AppCardBoxComp data={ this.state.data } />
      </div>
    );
  }
};

export default Search;
