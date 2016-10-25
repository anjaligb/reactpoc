import React from 'react';
import { connect } from 'react-redux';
import CardsPagination from '../components/cards-pagination/CardsPagination.js';

import {loadApps} from '../actions/appActions';

class Home extends React.Component{
  constructor(props){
    super(props);
    this.state =  {
      data: [this.props]
    }
  }
  componentDidMount() {
  /*  fetch('../../json/all.json')
      .then(function(response) {
        return response.json()
      }).then(function(json) {
        this.setState({data: json});
      }.bind(this)).catch(function(ex) {
        console.log('parsing failed', ex)
      }); */
 //dispatch(loadApps());
  }
  render() {
  /*  const {dispatch, appCardsList} = this.props;
    console.log("appCardsList",appCardsList);
    return(
      <div>
        <h1>All Apps</h1>
        <CardsPagination data={appCardsList} />
      </div>
    );*/
  return null;
  }
};

export default Home;

