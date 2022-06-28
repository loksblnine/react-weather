import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import {useNavigate} from "react-router-dom";
import './header.css';

const Header = () => {
  const navigate = useNavigate();

  return (
    <Navbar>
      <Container>
        <Nav className="ml-auto" style={{color: 'white'}}>
          <button onClick={() => navigate('/map')}
                  className="btn btn-xl"
          >
            Open Map
          </button>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;