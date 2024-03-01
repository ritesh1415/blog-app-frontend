import React from 'react';
import { Box, AppBar, Toolbar, Button, Typography, Tabs, Tab } from '@mui/material';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../Redux/Store';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  let isLogin = useSelector((state) => state.isLogin);
  isLogin = localStorage.getItem("userId");

  const dispatch = useDispatch();
  const Navigate = useNavigate();
  console.log(isLogin);
  const [value, setValue] = useState(); // Corrected here

  const handle = () => {
    try {
      dispatch(authActions.logout());
      alert("logout successfully");
      Navigate("/login");
      localStorage.clear();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant='h4'>My blog App</Typography>
          {isLogin && (
            <Box display={'flex'} marginLeft={'auto'} marginRight={'auto'}>
              <Tabs textColor='inherit' value={value} onChange={(e, val) => setValue(val)}>
                <Tab label="blogs" component={Link} to="/blogs" />
                <Tab label="my blog" component={Link} to="/myblogs" />
                <Tab label="create Blog" component={Link} to="/create" />
              </Tabs>
            </Box>
          )}
          <Box display={'flex'} marginLeft={'auto'}>
            {!isLogin && (
              <>
                <Button sx={{ margin: 1, color: 'white' }} component={Link} to="/login">
                  Login
                </Button>
                <Button sx={{ margin: 1, color: 'white' }} component={Link} to="/register">
                  Register
                </Button>
                             </>
            )}
            {isLogin && (
              <Button onClick={handle} sx={{ margin: 1, color: 'white' }}>
                Logout
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
