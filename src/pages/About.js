import UserClass from './UserClass';
import User from './user';
const About = () => {
  return (
    <div className="container">
      <h1>About Us</h1>
      <User name={'Arvind'} location={'chennai'} />
      <UserClass name={'Arvind'} location={'chennai'} />
    </div>
  );
};

export default About;
