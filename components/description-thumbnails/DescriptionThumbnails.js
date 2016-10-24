import React from 'react';
require("./thumbnails.less");

class DescriptionThumbnails extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      data: [],
      selected: 0
    }
  }
  updateProps(prop) {
    this.setState({ data: prop.data });
  }
  componentWillReceiveProps(nextProps) {
    this.updateProps(nextProps);
  }
  handleClick(i, e) {
    this.state.selected = i;
    this.props.onImageClick(i);
  }
  render() {
    console.log('AppCardImages', this.props);
    var imageNodes = this.state.data.map(function(image, index) {
      var selected = (index == this.state.selected) ? ' selected' : '';
      return (
        <div key={ index } className="col-sm-6">
          <div className={ 'thumbnail thumbnail-description' + selected } onClick={ this.handleClick.bind(this, index) }>
            <img src={ image.url } alt={ image.title } title={ image.title } />
          </div>
        </div>
      );
    }, this);
    return (
      <div className="col-sm-5">
        <div className="row">
          { imageNodes }
        </div>
      </div>
    );
  }
};

export default DescriptionThumbnails;
