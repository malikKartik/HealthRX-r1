import * as React from 'react';
import {PureComponent} from 'react';

const ICON = `m 14.473641,11.125485 c 0,3.106602 -2.518398,5.625 -5.6249996,5.625 -3.1066017,0 -5.625,-2.518398 -5.625,-5.625 0,-3.1066013 2.5183983,-5.6249996 5.625,-5.6249996 3.1066016,0 5.6249996,2.5183983 5.6249996,5.6249996 z`;

let pinStyle = {
  fill: '#0d0',
  stroke: 'none'
};

export default class Pin extends PureComponent {
  render() {
    const {size = 24} = this.props;
    pinStyle = {...pinStyle,fill:this.props.color}
    return (
      <svg height={size} viewBox="0 0 24 24" style={pinStyle}>
        <path d={ICON} />
      </svg>
    );
  }
}