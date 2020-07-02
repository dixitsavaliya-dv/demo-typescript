import React from 'react';
import './App.css';
import Header from './pages/header/header';
import Footer from './pages/footer/footer'; 
import createRoutes from './route/route';

class App extends React.Component {
  render() {;
    return (
      <div className="App">
        <Header />
        {createRoutes}
        <Footer />
      </div>
    );
  }
}

export default App;
