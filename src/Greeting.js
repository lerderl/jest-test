const Greeting = (props) => {
  return (
    <h1>{props.name ? ('Welcome back ' + props.name + '!') : ('Welcome!')}</h1>
  );
};

export default Greeting;
