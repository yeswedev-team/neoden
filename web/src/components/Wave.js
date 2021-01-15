/* eslint-disable no-plusplus */
import React, { useRef, useEffect } from 'react';
import Paper from 'paper';
import styled from 'styled-components';

const CanvasStyles = styled.canvas`
  width: 100%;
  height: 3.125rem;
  transform: ${(props) =>
    props.reversed ? 'rotate(180deg) translateY(-100%)' : 'translateY(-100%)'};
`;

const WaveUp = (props) => {
  const canvasRef = useRef(null);

  const waveup = () => {
    let wave;
    const segmentAmount = 8;
    const waveHeight = 15;

    function initiateWave() {
      wave = new Paper.Path({
        fillColor: props.bgcolor,
        closed: true,
      });
      for (let i = 0; i <= segmentAmount; i++) {
        wave.add(
          new Paper.Point(
            (i / segmentAmount) * Paper.view.size.width,
            Paper.view.size.height
          )
        );
      }
      // Complete Shape
      wave.add(new Paper.Point(Paper.view.size.width, Paper.view.size.height));
      wave.add(new Paper.Point(0, Paper.view.size.height));
    }

    Paper.view.onFrame = function (event) {
      for (let i = 0; i <= segmentAmount; i++) {
        const segment = wave.segments[i];
        const sinus = Math.sin(event.time * 1.2 + i);
        segment.point.y = sinus * waveHeight + 25;
      }
      wave.smooth();
    };

    Paper.view.onResize = function () {
      wave.remove();
      initiateWave();
    };

    initiateWave();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    Paper.setup(canvas);
    waveup();
  }, []);

  return (
    <CanvasStyles
      width="100%"
      height="50"
      ref={canvasRef}
      {...props}
      data-paper-resize
    />
  );
};

export default WaveUp;
