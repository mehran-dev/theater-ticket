import React from 'react';
import './App.css';
import Layout from './layouts/Layout/Layout';
import { Route } from 'react-router';
import { Switch } from 'react-router-dom';
import Login from './components/containers/Login/Login';
import Reserved from './components/containers/Reseved/Reseved';
import Home from './components/containers/Home/Home';
import Dashboard from './components/containers/Dashboard/Dashboard';








function App() {
  return (

    <Layout >
      <div style={{ minHeight: "100vh" }}>
        سایر کامپوننت ها


        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/" exact component={Home} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/reserved" exact component={Reserved} />
        </Switch>

      </div>

    </Layout>

  );
}

export default App;
