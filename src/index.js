

var heading = React.createElement('h1', {}, 'Help Queue');
var ticketLocation = React.createElement('h2', {}, "3B");
var ticketNames = React.createElement('h2', {}, "Miguel and Monica");
var ticketIssue = React.createElement('h2', {}, "app doesn't work");
var app = React.createElement('div', {}, heading, ticketLocation, ticketNames, ticketIssue);



// first we are telling it what to render 'greeting' in this case. next we tell it where to render it.

ReactDOM.render(
  app,
  document.getElementById('react-app-root')
);
