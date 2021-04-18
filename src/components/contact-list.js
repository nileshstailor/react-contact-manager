import React from 'react';
import { Card } from 'semantic-ui-react';
import ContactCard from './contact-cord';

// const ContactList = ({ contacts }) => {
//     const list = () => {
//         return contacts.map(contact => {
//             return (
//                 <li key={contact._id}>
//                     {contact.name.first} {contact.name.last}
//                 </li>
//             );
//         });
//     };
//     return ( 
//         <div>
//             <ul>{list()}</ul>
//         </div>
//     )
// }

const ContactList = ({ contacts }) => {
    const cards = () => {
        return contacts.map(contact => {
            return <ContactCard key={contact._id} contact={contact} />;
        });
    };
    return <Card.Group>{cards()}</Card.Group>
}
export default ContactList;