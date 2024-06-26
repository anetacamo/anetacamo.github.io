import ReactGA from 'react-ga';

const TRACKING_ID = 'UA-75464735-2';

export const initGA = () => {
  ReactGA.initialize(TRACKING_ID);
};

export const trackingPageGA = (page) => {
  ReactGA.pageview(page);
};

export const eventGA = (categoryName, eventName) => {
  ReactGA.event({
    category: categoryName, // Required
    action: eventName, // Required
    label: 'labelName',
    value: 10,
    nonInteraction: false,
  });
};
