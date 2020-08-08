import * as React from 'react';
import {PureComponent} from 'react';

const ICON = `M 24.082031 0.0625 L 21.4375 1.265625 C 21.265625 1.34375 21.109375 1.449219 20.976562 1.582031 L 16.664062 5.898438 L 1.816406 4.117188 C 1.546875 4.085938 1.277344 4.175781 1.085938 4.371094 L 0.261719 5.195312 C -0.179688 5.632812 -0.0429688 6.375 0.523438 6.628906 L 11.164062 11.398438 L 8.109375 14.453125 L 2.773438 14.453125 C 2.539062 14.453125 2.3125 14.546875 2.148438 14.710938 L 1.703125 15.160156 C 1.257812 15.601562 1.40625 16.351562 1.976562 16.597656 L 6.480469 18.527344 L 8.410156 23.027344 C 8.652344 23.601562 9.40625 23.746094 9.84375 23.304688 L 10.292969 22.855469 C 10.460938 22.6875 10.550781 22.464844 10.550781 22.230469 L 10.550781 16.894531 L 13.605469 13.839844 L 18.378906 24.480469 C 18.628906 25.046875 19.371094 25.183594 19.808594 24.746094 L 20.636719 23.917969 C 20.828125 23.726562 20.917969 23.457031 20.886719 23.1875 L 19.105469 8.339844 L 23.417969 4.027344 C 23.550781 3.894531 23.660156 3.738281 23.738281 3.566406 L 24.941406 0.921875 C 25.195312 0.375 24.632812 -0.1875 24.082031 0.0625 Z M 24.082031 0.0625 `;

let pinStyle = {
  fill: '#0d0',
  stroke: 'none'
};

export default class Pin extends PureComponent {
  render() {
    const {size = 24} = this.props;
    pinStyle = {...pinStyle,fill:this.props.color}
    return (
      <svg height={size} viewBox="0 0 24 24" style={pinStyle} x={size/2} y={size/2}
      transform={`rotate(0) rotate(${this.props.angle})`}>
        <path d={ICON} />
      </svg>
    );
  }
}