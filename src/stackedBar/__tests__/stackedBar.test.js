import React from 'react';
import { mount } from 'enzyme';
import StackedBar from '../';

// TODO: StackedBar-spec
describe('StackedBar  plot', () => {
  const data = [
    { 地区: '华东', 细分: '公司', 销售额: 1454715.807999998 },
    { 地区: '华东', 细分: '消费者', 销售额: 2287358.261999998 },
    { 地区: '中南', 细分: '公司', 销售额: 1335665.3239999984 },
    { 地区: '中南', 细分: '消费者', 销售额: 2057936.7620000008 },
    { 地区: '东北', 细分: '公司', 销售额: 834842.827 },
    { 地区: '东北', 细分: '消费者', 销售额: 1323985.6069999991 },
    { 地区: '华北', 细分: '公司', 销售额: 804769.4689999995 },
    { 地区: '华北', 细分: '消费者', 销售额: 1220430.5610000012 },
    { 地区: '西南', 细分: '公司', 销售额: 469341.684 },
    { 地区: '西南', 细分: '消费者', 销售额: 677302.8919999995 },
    { 地区: '西北', 细分: '公司', 销售额: 253458.1840000001 },
    { 地区: '西北', 细分: '消费者', 销售额: 458058.1039999998 },
  ];

  it('初始化以及销毁', () => {
    const config = {
      forceFit: true,
      title: { visible: true, text: '百分比堆叠条形图' },
      data,
      yField: '地区',
      xField: '销售额',
      label: { visible: true },
      stackField: '细分',
    };
    const ref = React.createRef();
    mount(<StackedBar {...config} chartRef={ref} />);
    expect(ref.current).not.toBeNull();
    const canvas = ref.current.getCanvas();
    expect(canvas.destroyed).toBe(false);
    ref.current.destroy();
    expect(canvas.destroyed).toBe(true);
  });
});
