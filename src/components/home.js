import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({once: true});

const Home = () => {
  return (
    <React.Fragment>
        <section className='banner' id='start'>
            <div className='container-fluid'>
                <div className='row'>
                    <div class="bannerText col-md-6 col-12">
                        <div class="animate__animated animate__slideInLeft">
                            <p class="bannerHeader">Wir entwickeln Ihre Immobilie.</p>
                            <p class="para">"Maximaler Mehrwert, keine Maklerprovision"</p>
                        </div>
                        <a href='/' class="greenTxt d-flex gap-30">Sichern Sie sich das erste Treffen <img src="/images/right_arrow.svg" alt="arrow" /></a>
                    </div>
                    <div class="col-md-6 col-12 p-0">
                        <div className='bannerImg'>
                            <img src='/images/banner.png' alt='' className='img-fluid'/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className='services'>
            <div className='container'>
                <div className='servicesInr' data-aos="fade-up" data-aos-offset="300">
                    <h2>Hier geht es zur Potenzialanalyse</h2>
                    <p className='d-flex gap-30'>Lassen Sie jetzt Ihre Immobilie schätzen - 
                        <a href='/' className='greenTxt'>Frei <img src="/images/right_arrow.svg" alt="arrow" /></a>
                    </p>
                    <div className='servicesList'>
                        <ul className='listInline justify-content-between mt-4'>
                            <li className='ser1'>
                                <img src='/images/Wohnung.svg' alt='' />
                                <span>Wohnung</span>
                            </li>
                            <li className='ser2'>
                                <img src='/images/Ein-Haus.svg' alt='' />
                                <span>Ein Haus</span>
                            </li>
                            <li className='ser3'>
                                <img src='/images/Wohngebäude.svg' alt='' />
                                <span>Wohngebäude</span>
                            </li>
                            <li className='ser4'>
                                <img src='/images/Geschäft.svg' alt='' />
                                <span>Geschäft</span>
                            </li>
                            <li className='ser5'>
                                <img src='/images/Eigentum.svg' alt='' />
                                <span>Eigentum</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <section className='srvList' id='Vorteile'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 col-12' data-aos="fade-right" data-aos-offset="300">
                        <h2 className='heading mb-4'>Vorteile von IMONDO</h2>
                        <div className='d-flex gap-30 align-items-center mb-4'>
                            <div className='srvIco'>
                                <img src='/images/Bezahlbare.svg' alt='' />
                            </div>
                            <div className='srvContent'>
                                <h3>Maximaler Mehrwert</h3>
                                <p className='para mb-0'>Unser Ziel ist es mit Ihnen das Beste zu erreichen.</p>
                            </div>
                        </div>
                        <div className='d-flex gap-30 align-items-center mb-4'>
                            <div className='srvIco'>
                                <img src='/images/Schnelle.svg' alt='' />
                            </div>
                            <div className='srvContent'>
                                <h3>Volle Transparenz </h3>
                                <p className='para mb-0'>Sie haben zu jederzeit den vollen Überblick auf Alles.</p>
                            </div>
                        </div>
                        <div className='d-flex gap-30 align-items-center mb-4'>
                            <div className='srvIco'>
                                <img src='/images/Beste.svg' alt='' />
                            </div>
                            <div className='srvContent'>
                                <h3>Best Service Garantie</h3>
                                <p className='para mb-0'>Ihre Wünsche und Vorstellungen stehen im Mittelpunkt.</p>
                            </div>
                        </div>
                        <div className='d-flex gap-30 align-items-center mb-4'>
                            <div className='srvIco'>
                                <img src='/images/Keine.svg' alt='' />
                            </div>
                            <div className='srvContent'>
                                <h3>Keine Kosten</h3>
                                <p className='para mb-0'>Unser Service ist kostenfrei und von Maklerprovision ausgeschlossen.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 col-12 srvThumbnail d-flex align-items-center' data-aos="fade-left" data-aos-offset="300">
                        <img src='/images/advantages_bg.png' alt='' />
                    </div>
                </div>
            </div>
        </section>
        <section className='vision' id='Vision'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 col-12' data-aos="fade-right" data-aos-offset="300">
                        <div className='visionImg'>
                            <img src='/images/vision_bg.jpeg' alt='' />
                        </div>
                    </div>
                    <div className='col-md-6 col-12' data-aos="fade-left" data-aos-offset="300">
                        <div className='visionContent'>
                            <h2 className='heading'>Vision, Missionswerte</h2>
                            <p className='para'>Unser Ziel ist eine Win-Win-Situation. Durch unsereinzigartiges Konzept erhöhen wir denGewinn des Verkäufers, ermöglichen eine schnelle Umsetzung und schaffengleichzeitighochwertigen Wohnraum. Werde mit IMONDO zum Immobilienvisionär</p>
                        </div>
                        <div className='overflowTxt'>
                            <div className='row'>
                                <div className='col-md-6 col-12'>
                                    <div className='overflowTxtBx'>
                                        <h3>Vision</h3>
                                        <p className='para'>Wir bringen dem Markt den Maximalen Mehrwert</p>
                                    </div>
                                </div>
                                {/* <div className='col-md-6 col-12'>
                                    <div className='overflowTxtBx'>
                                        <h3>Strategischer Ort</h3>
                                        <p className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                                    </div>
                                </div> */}
                                <div className='col-md-6 col-12'>
                                    <div className='overflowTxtBx'>
                                        <h3>Mission</h3>
                                        <p className='para'>Zusammen entwickeln wir Ihr Projekt </p>
                                    </div>
                                </div>
                                <div className='col-md-6 col-12'>
                                    <div className='overflowTxtBx'>
                                        <h3>Werte</h3>
                                        <p className='para'>Entwicklung, Förderung und Nachhaltigkeit.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className='testmonial' id='Unsere'>
            <div className='container'>
                <h2>Unsere Kunden Sagen</h2>
                <div className='row'>
                    <div className='col-md-4 col-12' data-aos="fade-top" data-aos-offset="300">
                        <div className='testmonialBx'>
                            <p>Ich habe mein Mehrfamilienhaus in Bad Lauchstädt über PROJECTIMMO entwickeln und verkaufen lassen. Wir konnten mehr als meinen Wunschpreis erzielen und das Geschäft in wenigen Wochen abwickeln, dazu kommen nette und interessante Menschen mit denen man arbeiten will.</p>
                            <div className='d-flex gap-20'>
                                <div className='testimonialUser'>
                                    <img src='/images/client_1.png' alt='' />
                                </div>
                                <div className='testimonialUser'>
                                    <h4>Olaf S</h4>
                                    <ul className='listInline'>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 col-12' data-aos="fade-top" data-aos-offset="300">
                        <div className='testmonialBx'>
                            <p>Projektes war und ich dadurch neue Erfahrungen Sammeln konnte mit Menschen die ihre gerne Teilen und Ideen für nahezu jedes Problem haben. Freue mich auf zukünftige Projekte.</p>
                            <div className='d-flex gap-20'>
                                <div className='testimonialUser'>
                                    <img src='/images/client_2.png' alt='' />
                                </div>
                                <div className='testimonialUser'>
                                    <h4>Brigitte M</h4>
                                    <ul className='listInline'>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 col-12' data-aos="fade-top" data-aos-offset="300">
                        <div className='testmonialBx'>
                            <p>Das könnte fast zu meinem neuen Hobby werden. Gut gelaunte Mitarbeiter die einem helfen wirklich das beste aus seinem Objekt zu holen. Bin gespannt wo die Reise noch hingeht.</p>
                            <div className='d-flex gap-20'>
                                <div className='testimonialUser'>
                                    <img src='/images/client_3.png' alt='' />
                                </div>
                                <div className='testimonialUser'>
                                    <h4>Simon F</h4>
                                    <ul className='listInline'>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className='Bekannt'>
            <div className='container'>
               <div className='brandInr' data-aos="fade-top" data-aos-offset="300">
                    <h2 className='heading'>Bekannt Aus</h2>
                    <p className='para'>Hier gibt’s noch mehr über uns!</p>
                    <ul className='listInline brandList gap-20'>
                        <li><img src='/images/br1.png' alt='' /></li>
                        <li><img src='/images/br2.png' alt='' /></li>
                        <li><img src='/images/br3.png' alt='' /></li>
                        <li><img src='/images/br4.png' alt='' /></li>
                    </ul>
                    <img src='/images/knownfrom_img.png' alt='' className='floatImg'/>
               </div>
            </div>
        </section>
        <section className='gallery'>
            <div className='container'>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='d-block'>
                        <h2 className='heading'>Unsere Galerie</h2>
                        <p className='para'>Kann erstmal raus.</p>
                    </div>
                    <a href='/' className='greenBtn'>Galerie ansehen</a>
                </div>
            </div>
            <div className='galleryImg'>
                <img src='/images/gl1.png' alt='' />
                <img src='/images/gl2.png' alt='' />
                <img src='/images/gl1.png' alt='' />
                <img src='/images/gl2.png' alt='' />
                <img src='/images/gl1.png' alt='' />
                <img src='/images/gl2.png' alt='' />
                <img src='/images/gl1.png' alt='' />
                <img src='/images/gl2.png' alt='' />
                <img src='/images/gl1.png' alt='' />
                <img src='/images/gl2.png' alt='' />
            </div>
        </section>
    </React.Fragment>
  )
}

export default Home