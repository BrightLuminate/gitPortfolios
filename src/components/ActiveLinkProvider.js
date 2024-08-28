import React, { createContext, useContext, useState } from 'react';

// Create a Context for the active link
const ActiveLinkContext = createContext();

export const useActiveLink = () => {
  return useContext(ActiveLinkContext);
};

const ActiveLinkProvider = ({ children }) => {
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (section) => {
    setActiveLink(section);
  };

  return (
    <ActiveLinkContext.Provider value={{ activeLink, handleLinkClick }}>
      {children}
    </ActiveLinkContext.Provider>
  );
};

export default ActiveLinkProvider;
