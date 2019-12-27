import React, { useContext, useEffect } from 'react';
import { Line, LineConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ConfigContext, ErrorBoundary } from '../base';

export interface LineConfig extends G2plotProps {
  chartRef?: React.MutableRefObject<Line | undefined>;
}

const TechLine: React.FC<LineConfig> = (props: LineConfig) => {
  const { chartRef, ...rest } = props;

  const { chart, container } = useChart<Line, LineConfig>(Line, rest);

  useEffect(() => {
    if (chartRef) {
      chartRef.current = chart.current;
    }
  }, [chart.current]);

  return <div ref={container} />;
};

export default (props: LineConfig) => {
  const config = useContext(ConfigContext);
  return (
    <ErrorBoundary>
      <TechLine {...config} {...props} />
    </ErrorBoundary>
  );
};