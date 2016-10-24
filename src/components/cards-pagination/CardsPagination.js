import React from 'react';
import { Link } from 'react-router';
import AppCardComp from '../cards/Cards.js';

/*
class Pagination extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      page: this.props.page
    };
  }

  handleClick(i, e) {
    e.preventDefault();
    this.setState({page: i});
    this.props.onPageClick(i);
  }
  render() {
    var pages = [];
    var activeClass = '';
    pages.push(<li key="p"><a href="#" onClick={ this.handleClick.bind(this, 1) } aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>);
    for(var i = 1; i < this.props.pages + 1; i++){
      if(i > (this.state.page - 4) && i < (this.state.page + 4)) {
        activeClass = (i == this.state.page) ? 'active' : '';
        pages.push(<li key={ i } className={ activeClass }><a href="#" onClick={ this.handleClick.bind(this, i) }>{ i }</a></li>);
      }
    }
    pages.push(<li key="n"><a href="#" onClick={ this.handleClick.bind(this, this.props.pages) } aria-label="Next"><span aria-hidden="true">&raquo;</span></a></li>);
    return (
      <nav aria-label="Cards navigation">
        <ul className="pagination">
          { pages }
        </ul>
      </nav>
    );
  }
};
*/
class CardsPagination extends React.Component{
 /* constructor(props) {
    super(props);
    this.state = {
      page: 1,
      paginated: []
    };
  }

  updateProps(prop) {
    this.setState({ paginated: prop.data.slice(0, 8) });
  }
  componentWillReceiveProps(nextProps) {
    this.updateProps(nextProps);
  }
  handlePageClick(page) {
    this.setState({page: page});
    this.setState({ paginated: this.props.data.slice((page - 1) * 8, page * 8) });
  }*/
  render() {
    console.log("pros",this.props);
   // var pages = (this.props.data.length / 8) + ((this.props.data.length % 8 == 0) ? 0 : 1);
    return (
      <div>
        <AppCardComp data={ this.props} />

      </div>
    );
  }
};

export default CardsPagination;
