import React from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../models/Contact'

const ContactComponet = ({contact}) => {
  return (
    <div>
        <h2>
          Nombre: { contact.name }
        </h2>
        <h3> 
          Apelido: { contact.lastname }
        </h3>
        <h4>
          Email: { contact.email }
        </h4>
        <h5>
          Estado: { contact.status ? 'Conectado' : 'Desconectado' }
        </h5>
    </div>
  )
}

ContactComponet.propTypes = { 
  contact: PropTypes.instanceOf(Contact)
}

export default ContactComponet