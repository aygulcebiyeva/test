import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.scss';
import Form from "./components/Forms";
import Teacher from "./components/Teacher";
import Students from "./components/Students";

const initialValue = {
  firstname: "",
  lastname: "",
  email: "",
 specialty:"",
 profession:"",
 point:"", 
};



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
