import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Card } from "./Card";

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Card />
      <Footer />
    </div>
  )
}

export default App;