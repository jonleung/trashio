var Person = React.createClass({
  render: function() {
    return(
      <li>{this.props.children}</li>
    )
  }
});


var People = React.createClass({
  render: function() {
    var addPerson = function(personName) {
      return (
          <Person> {personName} </Person>
        
        );
    }
    return <ul>{this.props.people.map(addPerson)} </ul>;
  } 
  
});


var Trashio = React.createClass({
  getInitialState: function() {
    return {
      people: ['Jonathan', 'Andrea', "Rolando", "Zach", "Andrea2"],
      personIndex: 0 
    }
  },
  render: function() {
    return (
      <div>
        <People people={this.state.people}/>
      </div>
    )
    
    
  }
});





React.render(
  <Trashio />,
  document.getElementById('container')
);
