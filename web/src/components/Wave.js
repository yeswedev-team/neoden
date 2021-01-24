/* eslint-disable no-plusplus */
import React, { useEffect } from 'react';
import Wave from 'react-wavify';

const Wavify = (props) => {
  const { bgcolor, direction } = props;

  let windowWidth = 0;

  if (typeof window !== 'undefined') {
    windowWidth = window.innerWidth;
  }

  const [width, setWidth] = React.useState(windowWidth);
  const breakpoint = 1280;

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener('resize', handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener('resize', handleResizeWindow);
    };
  }, []);

  return (
    <Wave
      className={`${direction === 'down' ? 'wave-down' : 'wave-up'}`}
      fill={bgcolor}
      paused={width < breakpoint}
      options={{
        height: 20,
        amplitude: 20,
        speed: 0.15,
        points: 5,
      }}
    />
  );
};

export default Wavify;
