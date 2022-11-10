import React from 'react'
import { Contact } from '../models/Contact'
import ContactComponet from './ContactComponet';

const ListContactComponent = () => {

    let contact = new Contact('Wilmer', 'Uzcategui', 'wilmeruzcategui5@hotmail.com', true);
    return (
        <div>
            <ContactComponet contact= {contact}></ContactComponet>
        </div>
    )
}


export default ListContactComponent