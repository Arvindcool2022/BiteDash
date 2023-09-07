// const About = () => <h1>about me</h1>;
import React from 'react';

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, textColor: 'red' };
    console.log(props, this.state);
  }
  render() {
    const { name, location } = this.props;
    const { count, textColor } = this.state;
    return (
      <div>
        <h2>{name} class</h2>
        <p>{location}</p>
        <h3 style={{ color: textColor }}>count : {count}</h3>
        <button
          onClick={() => {
            this.setState({
              count: count + 1
            });
          }}
        >
          increase count
        </button>
        <button
          onClick={() => {
            if (count > 0) this.setState({ count: count - 1 });
          }}
        >
          decrease count
        </button>
        <button
          onClick={() => {
            this.setState({ textColor: 'black' });
          }}
        >
          black count
        </button>
        <button
          onClick={() => {
            this.setState({ textColor: 'green' });
          }}
        >
          green count
        </button>
        <button
          onClick={() => {
            this.setState({ textColor: 'red' });
          }}
        >
          red count
        </button>
      </div>
    );
  }
}

export default UserClass;
