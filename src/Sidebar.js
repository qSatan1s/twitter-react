import React from 'react';
import './Sidebar.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import SidebarOption from './SidebarOption';
export default function Sidebar() {
  return (
    <div className='sidebar'>
      <TwitterIcon />
      <SidebarOption />
      <SidebarOption />
      <SidebarOption />
      <SidebarOption />
    </div>
  );
}
