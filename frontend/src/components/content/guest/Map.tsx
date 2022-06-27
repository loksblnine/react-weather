import React, {useEffect} from 'react';
import {useAppDispatch} from "../../../hooks";

const Map = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {

  }, []);


  // if (false) {
  //   return <Spinner animation="grow"/>;
  // }
  return (
    <div className="container">
      this is map container
    </div>
  );
};

export default Map;