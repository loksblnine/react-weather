import React, {useEffect} from 'react';
import {Route, Routes, useNavigate} from "react-router-dom";

import NotFound from "./content/errorPages/404";

import {guestRoutes} from "../utils/constants";
import {useAppDispatch} from "../hooks";
import {setUserStartPosition} from "../store/actions/mapActions";

const AppRouter = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setUserStartPosition())
    navigate('/map');
  }, []);

  return (
    <Routes>
      {guestRoutes.map(({path, Component}) =>
        <Route path={path} element={Component} key={path}/>
      )}
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  );
};

export default AppRouter;