/** @jsx React.DOM */

var MyComponent = React.createClass({
  render: function(){
    return (
      <h1>Hello , Psicolabili</h1>
    );
  }
});

React.render(
        <MyComponent />,
        document.getElementById('content')
);

module.exports =  index;