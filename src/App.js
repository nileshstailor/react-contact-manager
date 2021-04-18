import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import ContactListPage from './pages/contact-list-page';
import ContactFormPage from './pages/contact-form-page';

// often referred to as the layout template for single page application

const App = () => {
  return (
    <Container>
      <div className="ui two item menu">
        <NavLink className="item" activeClassName="active" exact to="/">
          Contacts List
        </NavLink>
        <NavLink className="item" activeClassName="active" exact to="/contacts/new">
          Add Contact
        </NavLink>
      </div>
      <Route exact path="/" component={ContactListPage} />
      <Route path="/contacts/new" component={ContactFormPage} />
      <Route path="/contacts/edit" component={ContactFormPage} />
    </Container>
  );
};

export default App;