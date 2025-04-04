import React from 'react';
import Svg, { Path } from 'react-native-svg';

export const HomeIcon = ({ color = '#fff', size = 24 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M3 9L12 2L21 9V20H15V14H9V20H3V9Z"
      fill={color}
    />
  </Svg>
);

export const GridIcon = ({ color = '#fff', size = 24 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M3 3H9V9H3V3ZM3 15H9V21H3V15ZM15 3H21V9H15V3ZM15 15H21V21H15V15Z"
      fill={color}
    />
  </Svg>
);

export const ReportIcon = ({ color = '#fff', size = 24 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M3 3H21V21H3V3ZM5 5V19H19V5H5ZM9 9H11V17H9V9ZM13 7H15V17H13V7Z"
      fill={color}
    />
  </Svg>
);

export const ProfileIcon = ({ color = '#fff', size = 24 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12ZM4 20C4 16.6863 6.68629 14 10 14H14C17.3137 14 20 16.6863 20 20H4Z"
      fill={color}
    />
  </Svg>
);
