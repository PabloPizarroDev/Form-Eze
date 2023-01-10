import { motion } from "framer-motion";
import React from "react";
import { useState } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavContainer = styled(motion.div)`
  width: 100vw;
  z-index: 6;
  position: fixed;
  top: ${(props) => (props.click ? "0" : "-5rem")};

  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.5s ease;

  @media (max-width: 40em) {
    top: ${(props) => (props.click ? "0" : `calc(-50vh - 4rem)`)};
  }
`;
const MenuItems = styled(motion.ul)`
  position: relative;
  height: 5rem;
  background-image: linear-gradient(
    45deg,
    #0e0d0d 0%,
    #5c5c5c 99%,
    #c7c5c5 100%
  );
  color: #fff;
  list-style: none;

  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  padding: 0 10rem;

  @media (max-width: 40em) {
    flex-direction: column;
    padding: 2rem 0;
    height: 50vh;
  }
`;

const MenuBtn = styled.li`
  background-image: linear-gradient(
    45deg,
    #0e0d0d 0%,
    #5c5c5c 99%,
    #c7c5c5 100%
  );
  list-style-type: style none;
  color: #fff;
  width: 15rem;
  height: 2.5rem;
  clip-path: polygon(0 0, 100% 1%, 80% 100%, 20% 100%);
  cursor: pointer;

  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1em;
  font-weight: 600;
  text-transform: uppercase;

  cursor: pointer;

  @media (max-width: 40em) {
    width: 10rem;
    height: 2rem;
  }
`;

const MenuItem = styled(motion.li)`
  text-transform: uppercase;
  color: #fff;
  cursor: pointer;

  @media (max-width: 40em) {
    flex-direction: column;
    padding: 0.5rem 0;
  }
`;

const NavBar = () => {
  const [click, setClick] = useState(false);
  const { scroll } = useLocomotiveScroll();

  const handleScroll = (id) => {
    let elem = document.querySelector(id);
    setClick(!click);
    scroll.scrollTo(elem, {
      offset: "-100",
      duration: "200",
      easing: [0.25, 3.3, 3.25, 1.3],
    });
  };
  return (
    <NavContainer
      click={click}
      initial={{
        y: "-100%",
      }}
      animate={{
        y: 0,
      }}
      transition={{
        duration: 1,
        delay: 2,
      }}
    >
      <MenuItems
        drag="y"
        dragConstraints={{
          top: 0,
          bottom: 70,
        }}
        dragElastic={0.05}
        dragSnapToOrigin
      >
        <MenuBtn onClick={() => setClick(!click)}>Menu</MenuBtn>
        <MenuItem
          as={Link}
          to="/"
          onClick={() => handleScroll("/")}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
        >
          Home
        </MenuItem>
        <MenuItem
          as={Link}
          to="/about"
          onClick={() => handleScroll("/about")}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
        >
          Sobre Nosotros
        </MenuItem>
        <MenuItem
          as={Link}
          to="/servicios"
          onClick={() => handleScroll("/servicios")}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
        >
          Nuestros Servicios
        </MenuItem>
        <MenuItem
          onClick={() => handleScroll("#contacto")}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
        >
          Contacto
        </MenuItem>
        <MenuItem
          as={Link}
          to="/usuario"
          onClick={() => handleScroll("/usuario")}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
        >
          Login
        </MenuItem>
        <MenuItem
          as={Link}
          to="/crearcuenta"
          onClick={() => handleScroll("/crearcuenta")}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
        >
          New User
        </MenuItem>
      </MenuItems>
    </NavContainer>
  );
};

export default NavBar;
