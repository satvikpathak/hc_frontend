import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { SignedIn, UserButton } from "@clerk/clerk-react";
import Chatbot from './components/Chatbot/Chatbot.jsx';

function App() {
  return (
    <>
      <div className="overflow-x-hidden text-stone-300 antialiased">
        <div className="fixed inset-0 -z-10 ">
          <div className="relative h-full w-full bg-black">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
            <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
          </div>
        </div>
      </div>
      <Header >
         <div className="flex items-center gap-2 lg:gap-4">
         
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </Header>
      <Chatbot />
      <Outlet /> {/* This will render the nested routes */}
      <Footer />
    </>
  );
}

export default App;
