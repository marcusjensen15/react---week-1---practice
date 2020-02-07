var greeting = React.createElement('h1', {}, 'Hello, World!');

// first we are telling it what to render 'greeting' in this case. next we tell it where to render it.

ReactDOM.render(
greeting,
  document.getElementById('react-app-root')
);
