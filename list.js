/** @jsx React.DOM */

var FilteredList = React.createClass({
  filterList: function(event){
    var updatedList = this.state.initialItems;
    updatedList = updatedList.filter(function(item){
      return item.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1;
    });
    this.setState({items: updatedList});
  },
  getInitialState: function(){
     return {
       initialItems: [
         "Compro Auto",
         "Vendo Auto",
         "Compro Moto",
         "Vendo Moto",
         "Vedita Casa",
         "Affitto Casa",
         "Cerco Lavoro",
         "Offro Lavoro",
         "Animali",
         "Bricolage",
         "Hobby",
         "Professionali"
       ],
       items: []
     }
  },
  componentWillMount: function(){
    this.setState({items: this.state.initialItems})
  },
  render: function(){
    return (
      <div className="filter-list">
        <input type="text" placeholder="Search" onChange={this.filterList}/>
      <List items={this.state.items}/>
      </div>
    );
  }
});

var List = React.createClass({
  render: function(){
    return (
      <ul>
      {
        this.props.items.map(function(item) {
          return <li key={item}>{item}</li>
        })
       }
      </ul>
    )  
  }
});

React.render(<FilteredList/>, document.getElementById('content'));