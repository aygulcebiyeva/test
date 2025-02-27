import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import { Form } from "react-router-dom";
import { Students } from "./Student";
import { initialValue } from "./personaldata";





function App() {
  const [inputValue, setInputValue] = useState(initialValue);

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App"> 
        <BrowserRouter>
          <div>
            <nav>
              <ul>
                <li><a href="/">Form</a></li>
                <li><a href="/teacher">Teacher</a></li>
                <li><a href="/students">Students</a></li>
              </ul>
            </nav>

            <Routes>
              <Route path="/" element={<Form inputValue={inputValue} setInputValue={setInputValue} />} /> 
              <Route path="/teacher" element={<Teacher data={inputValue} />} />  
              <Route path="/students" element={<Students data={inputValue} />} />  
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </QueryClientProvider>
  );
}

export default App;
