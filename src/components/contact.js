import React,{useState} from 'react'
import "./common.css";
import db from "../firebase.js";

const Contact = () => {

    const contactDetail = [
        {
            text: "Bavariafilmpl. 7, 82031 Grünwald",
            icon: "/images/location_icon.svg"
        },
        {
            text: "+49 17080 80162",
            icon: "/images/phone_icon.svg"
        },
        {
            text: "Info@imandu.de",
            icon: "/images/mail_icon.svg"
        },
    ];

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [note, setNote] = useState("");


    const submit = (e) => {
        db.collection("customersData").add({
            name: name,
            email: email,
            note: note
        });

        setName("");
        setEmail("");
        setNote("");
    };


    return (
        <div className='contact_page'>
            <section className='contactBanner'>
                <div className='container'>
                    <div className='contactBannerBx'>
                        <h1>Kontaktiere Uns</h1>
                        <p className='para'>Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
                    </div>
                </div>
            </section>
            <div className='contact_detail'>
                {
                    contactDetail.map((item) => <div className='contact_detail_content'>
                        <img src={item.icon} alt='' />
                        <p className='contact_icon_text'>{item.text}</p>
                    </div>)
                }
            </div>
            <div className='container'>
                <div className='contact_form_content justify-content-between'>
                    <div>
                        <p className='contact_form_content_heading'>Sende eine Nachricht</p>
                        <div className='row'>
                            <div className='col-md-6 col-12'>
                                <div class="form-floating mb-3">
                                    <input type="text" class="form-control" id="floatingInput" placeholder='Gib deinen Namen ein' value={name} onChange={(e)=>setName(e.target.value)}/>
                                    <label for="floatingInput">Name</label>
                                </div>
                            </div>
                            <div className='col-md-6 col-12'>
                                <div class="form-floating mb-3">
                                    <input type="email" class="form-control" id="floatingInput" placeholder='Geben Sie Ihr Email Adresse ein' value={email} onChange={(e)=>setEmail(e.target.value)} />
                                    <label for="floatingInput">Email Adresse</label>
                                </div>
                            </div>
                            <div className='col-md-12 col-12'>
                                <div class="form-floating mb-4 mt-5">
                                    <input type="text" class="form-control" id="floatingInput" placeholder='Gib deine Nachricht ein'value={note} onChange={(e)=>setNote(e.target.value)} />
                                    <label for="floatingInput">Nachricht</label>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between align-items-center'>
                            <div className='d-flex align-items-center gap-10'>
                                <input type='checkbox' name='' id='term'/>
                                <label htmlFor='term'>Ich akzeptier die Datenschutzerklärung</label>
                            </div>
                            <button className='greenBtn px-5 border-0' onClick={()=>submit()}>SENDEN</button>
                        </div>
                    </div>
                    <div className='map_view'>
                        <div className="gmap_canvas">
                            <iframe title='location_map' className="gmap_iframe" width="100%" frameBorder="0" scrolling="no" marginHeight={0} marginWidth={0} src="https://maps.google.com/maps?width=416&amp;height=435&amp;hl=en&amp;q=Bavariafilmpl. 7, 82031 Grünwald&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                            <a href="https://www.kokagames.com/fnf-friday-night-funkin-mods/">Friday Night Funkin Mods</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='contactContent my-5'>
                <div className='container'>
                    <div className='contactContentInr'>
                        <div className='contactContentBx'>
                            <h2>Wir beraten Sie gerne in</h2>
                            <h3>einem persönlichen Gespräch am Telefon,</h3>
                            <h4>erreichen uns von</h4>
                            <p><span className='greenTxt'>Montag bis Freitag von</span> 8:00–20:00 Uhr</p>
                            <p><span className='greenTxt'>und an Samstagen von</span> 9:00–18:00 Uhr</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact