import { useEffect, useState } from 'react';
import { IconButton, Toolbar } from '@mui/material';
import { AppBar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SideDrawer from "./SideDrawer.tsx";

//header
export const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [headerShow, setHeaderShow] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setHeaderShow(true);
    } else {
      setHeaderShow(false);
    }
  };

  const toggleDrawer = (value: boolean) => {
    setDrawerOpen(value);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <AppBar
        position="fixed"
        style={{
          backgroundColor: headerShow ? '#2f2f2f' : 'transparent',
          boxShadow: 'none',
          padding: '10px 0px',
        }}
      >
        <Toolbar>
          <div className="header_logo">
            <div className="font_righteous header_logo_venue">The Venue</div>
            <div className="header_logo_title">Musical Events</div>
          </div>
          <IconButton
            aria-label="Menu"
            color="inherit"
            onClick={() => toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <div> {/* Wrap the content in a div or React.Fragment */}
        <SideDrawer open={drawerOpen} onClose={(value: boolean) => toggleDrawer(value)} />
      </div>
    </>
  );
};

export default Header;