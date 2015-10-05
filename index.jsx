/** @jsx React.DOM */

var MyComponent = React.createClass({
  render: function(){
    return (
      <h1>Hello , {this.props.name}</h1>
    );
  }
});

React.render(
        <MyComponent name="Developers"/>,
        document.getElementById('content')
);

module.exports =  index;