'use client'
import React, { createContext, useContext, useState } from 'react';
import {useRouter} from 'next/navigation';

const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
    const [showForm, setShowForm] = useState(false);
    const [activeTab, setActiveTab] = useState("tab1");
    const navigate = useRouter()

    const executeScroll = (ref) => {
        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
      };
      
  const goToContactForm = (ref) => {
    navigate.push('/');
    setShowForm(true);
    executeScroll(ref);
  };
  
  const goToTab = (ref, tab) => {
    navigate.push('/');
    setActiveTab(tab);
    executeScroll(ref);
  };

    return (
        <GlobalStateContext.Provider value={{ goToContactForm, goToTab, showForm, setShowForm, activeTab, setActiveTab }}>
            {children}
        </GlobalStateContext.Provider>
    );
};

export const useGlobalState = () => useContext(GlobalStateContext);
