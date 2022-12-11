const ContactItem = (props) =>{
    return (
        <section className="contact-item">
            <div className="p1">
                <h3>Name : {props.name}</h3>
                <div className="img-div">
                    <img src= {props.imgurl} alt="" />
                </div>
            </div>
            <div className="p2">
                <p>Email : {props.email}</p>
                <p>Mobile No : {props.mobile}</p>
                <p>profession : {props.profession}</p>
            </div>
            
        </section>
    )
}
export default ContactItem;