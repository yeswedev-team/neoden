/* eslint-disable no-plusplus */
import React, { useRef, useEffect } from 'react';
import Wave from 'react-wavify';

const Wavify = (props) => {
  const canvasRef = useRef(null);
  const { bgcolor, direction } = props;

  console.log(canvasRef.current);

  useEffect(() => {}, [canvasRef, bgcolor]);

  return (
    <Wave
      className={`${direction === 'down' ? 'wave-down' : 'wave-up'}`}
      fill={bgcolor}
      paused={false}
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
