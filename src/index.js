function liveTime(){

var heading = React.createElement('h1', {}, 'Help Queue');
var app = React.createElement('div', {}, greeting, clock);



// first we are telling it what to render 'greeting' in this case. next we tell it where to render it.

ReactDOM.render(
  app,
  document.getElementById('react-app-root')
);

}
