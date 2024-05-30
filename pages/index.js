import EventList from './EventList.js';
import AboutPage from './AboutPage.js';

export default (main) => {
  const home = () => new EventList(main);
  const About = () => new AboutPage(main);


  return {
    home,
    About
  };
};
