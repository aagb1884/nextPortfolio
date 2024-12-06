'use client'
import { useState } from "react";

const [activeTab, setActiveTab] = useState("tab1");
const [showForm, setShowForm] = useState(false);

const navigate = useNavigate();  

const executeScroll = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const goToContactForm = (ref) => {
    navigate('/');
    executeScroll(ref);
    setShowForm(true);
  };
  
  const goToTab = (ref, tab) => {
    navigate('/');
    setActiveTab(tab);
    executeScroll(ref);
  };