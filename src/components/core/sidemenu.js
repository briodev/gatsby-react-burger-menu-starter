import React from "react";
import { stack as Menu } from "react-burger-menu";
import styled from "@emotion/styled"
import { css } from "@emotion/core"

const MenuStyle = styled.div`

    overflow: auto;

  
  /* Individual item */
  .bm-item {
    display: inline-block;
  
    /* Our sidebar item styling */
    text-decoration: none;
    margin-bottom: 10px;
    color: #d1d1d1;
    transition: color 0.2s;
  }
  
  /* Change color on hover */
  .bm-item:hover {
    color: white;
  }
  
  /* The rest copied directly from react-burger-menu docs */
  
  /* Position and sizing of burger button */
  .bm-burger-button {
    position: fixed;
    width: 36px;
    height: 30px;
    right: 36px;
    top: 36px;
  }
  /* Remove blue outline on click in Chrome */
    a:focus,
    button:focus,
    input:focus,
    textarea:focus {
    outline: none;
    }
  
  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    background: #111;
  }
  
  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    position: fixed;
    height: 24px;
    width: 24px;
    left: 6px;
    top: 36px;
  }
  
  /* Color/shape of close button cross */
  .bm-cross {
    background: #bdc3c7;
  }
  
  /* General sidebar styles */
  .bm-menu {
    background: rgba(0, 0, 0, 0.9);
    padding: 2.5em 1.5em 0;
    font-size: 1.75em;
  }
  
  /* Morph shape necessary with bubble or elastic */
  .bm-morph-shape {
    fill: #373a47;
  }
  
  /* Wrapper for item list */
  .bm-item-list {
    color: #000;
  }
  
  /* Styling of overlay */
  .bm-overlay {
    background: rgba(255, 255, 255, 0.3);
  }

`

const menuItem = css`
  color: white;
  padding: .25em;
  text-decoration: none;
  margin-bottom: 10px;
  color: #d1d1d1;
  transition: color 0.2s;
`

export default props => {
    return (

        <MenuStyle>
            <Menu disableAutoFocus right {...props}>
                <a css={menuItem} href="/">
                Home
                </a>
        
                <a css={menuItem} href="/burgers">
                Burgers
                </a>
        
                <a css={menuItem} href="/pizzas">
                Pizzas
                </a>
        
                <a css={menuItem} href="/desserts">
                Desserts
                </a>
            </Menu>

        </MenuStyle>
       
    )
  };