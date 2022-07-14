import React from 'react'

const Contact = () => {
  return (
    <React.Fragment>
        <section className='contactBanner'>
            <div className='container'>
                <div className='contactBannerBx'>
                    <h1>Kontaktiere Uns</h1>
                    <p className='para'>Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
                </div>
            </div>
        </section>
        <section className='contectInfo'>
            <div className='container'>
                <div className='d-flex gap-20 align-items-center'>
                    <img src='/images/location_icon.svg' alt='' />
                    <p className='para m-0'>Bavariafilmpl. 7, 82031 Grünwald</p>
                </div>
                <div className='d-flex gap-20 align-items-center'>
                    <img src='/images/phone_icon.svg' alt='' />
                    <p className='para m-0'>+49 17080 80162</p>
                </div>
                <div className='d-flex gap-20 align-items-center'>
                    <img src='/images/mail_icon.svg' alt='' />
                    <p className='para m-0'>Info@imandu.de</p>
                </div>
            </div>
        </section>
        <section className='contactForm'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-7 col-12'>
                        <div className='contactFormInr'>
                            <h2 className='heading'>Sende eine Nachricht</h2>
                            <div className='row'>
                                <div className='col-md-6 col-12'>
                                    <div class="form-floating mb-3">
                                        <input type="text" class="form-control" id="floatingInput" placeholder='Gib deinen Namen ein'/>
                                        <label for="floatingInput">Name</label>
                                    </div>
                                </div>
                                <div className='col-md-6 col-12'>
                                    <div class="form-floating mb-3">
                                        <input type="email" class="form-control" id="floatingInput" placeholder='Geben Sie Ihr Email Adresse ein'/>
                                        <label for="floatingInput">Email Adresse</label>
                                    </div>
                                </div>
                                <div className='col-md-12 col-12'>
                                    <div class="form-floating mb-3">
                                        <input type="text" class="form-control" id="floatingInput" placeholder='Gib deine Nachricht ein'/>
                                        <label for="floatingInput">Nachricht</label>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className=''>
                                    <input type='checkbox' name='' id='term'/>
                                    <label htmlFor='term'>Ich akzeptier die Datenschutzerklärung</label>
                                </div>
                                <button className='greenBtn'>SENDEN</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-5 col-12'>
                        <div className='map'>
                            <iframe title="location_map" class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=416&amp;height=435&amp;hl=en&amp;q=Bavariafilmpl. 7, 82031 Grünwald&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className='infoDetails'>
            <div className='container'>
                <div className='row d-flex justify-content-end'>
                    <div className='col-md-6 col-12'>
                        <div className='infoDetailsBx'>
                            <h2>Wir beraten Sie gerne in</h2>
                            <h3>einem persönlichen Gespräch am Telefon,</h3>
                            <h4>erreichen uns von</h4>
                            <p><span className='greenTxt'>Montag bis Freitag von </span>8:00–20:00 Uhr</p>
                            <p><span className='greenTxt'>und an Samstagen von </span>9:00–18:00 Uhr</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </React.Fragment>
  )
}

export default Contact