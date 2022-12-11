import data from '../data';
import ContactItem from './ContactItem'
const contactFun = (contact)=>{
 return <ContactItem
  name = {contact.name}
  imgurl={contact.imgurl}
  email ={ contact.email}
  mobile = {contact.mobile}
  profession = {contact.profession}
  />
}
const contacts = data.map(contactFun);
const Contacts =()=>{
    return (
        <section className="contacts-section">
            <div className="container contacts-container">
              {contacts}
            </div>
        </section>
       
    );
}
export default Contacts;