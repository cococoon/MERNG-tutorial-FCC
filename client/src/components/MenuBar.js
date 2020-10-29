import React, { Component, useState } from "react";
import { Menu, Segment } from "semantic-ui-react";

function MenuBar() {
  const [activeItem, setActiveItem] = useState("");

  handleItemClick = (e, { name }) => setActiveItem({ activeItem: name });

  const { activeItem } = this.state;

  return (
    <Menu pointing secondary>
      <Menu.Item
        name="home"
        active={activeItem === "home"}
        onClick={handleItemClick}
      />
      <Menu.Item
        name="messages"
        active={activeItem === "messages"}
        onClick={handleItemClick}
      />
      <Menu.Item
        position="right"
        name="login"
        active={activeItem === "login"}
        onClick={handleItemClick}
      />
      <Menu.Menu position="right">
        <Menu.Item
          name="register"
          active={activeItem === "register"}
          onClick={handleItemClick}
        />
      </Menu.Menu>
    </Menu>
  );
}

export default MenuBar;
