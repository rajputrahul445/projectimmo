import React, {useState} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from "axios";
import Form from './forms/form';
import API_HOST from './API_ENDPOINTS/API_HOST';
import API_ENDPOINTS from './API_ENDPOINTS/API_ENDPOINTS';
import Header from './header';
import Footer from './footer';
AOS.init({once: true});

const Home = () => {
    const [popup, setPopup] = useState(false);
    const [floor, setfloor] = useState(false);
    const [units, setUnits] = useState(false);
    const [gewerbe, setGewerbe] = useState(false);
    const [grundstück, setGrundstück] = useState(false);
    const [stepCount, setStepCount] = useState(1);

    const [unitsValue, setUnitsValue] = useState('');
    const [constructionYear, setConstructionYear] = useState('');
    const [surface, setSurface] = useState('');
    const [room, setRoom] = useState('');
    const [floorValue, setFloorValue] = useState('');
    const [leasehold, setLeasehold] = useState('ja');
    const [divisionDeclaration, setDivisionDeclaration] = useState('ja');
    const [developmentPossible, setDevelopmentPossible] = useState('ja');
    const [kommentar, setKommentar] = useState('');
    const [federalState, setFederalState] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [streetHouseNumber, setStreetHouseNumber] = useState('');

    const [desiredPrice, setDesiredPrice] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [enquiryType, setEnquiryType] = useState('');

    const [files, setFiles] = useState(null);
    
    const popupHandle = (e) => {
        setPopup(!popup);
        setfloor(false);
        setUnits(false);
        setGewerbe(false);
        setGrundstück(false);
        setStepCount(1);
        setUnitsValue('');
        setConstructionYear('');
        setSurface('');
        setRoom('');
        setFloorValue('');
        setLeasehold('');
        setDivisionDeclaration('');
        setDevelopmentPossible('');
        setKommentar('');
        setFederalState('');
        setPostalCode('');
        setStreetHouseNumber('');
        setDesiredPrice('');
        setEmail('');
        setPhoneNumber('');
    }
    const houseHandle = () => {
        setfloor(true);
    }
    const unitsHandle = () => {
        setUnits(true);
    }
    const gewerbeHandle = () => {
        setGewerbe(true);
    }
    const grundstückHandle = () => {
        setGrundstück(true);
    }
    const nextStep = (e) => {
        e.preventDefault();
        setStepCount( stepCount + 1);
    }
    const backStep = (e) => {
        e.preventDefault();
        setStepCount( stepCount - 1);
    }
    const handleInputChange = (e) => {
        const {name , value} = e.target;
        if(name === "unitsValue"){
            setUnitsValue(value);
        }
        if(name === "constructionYear"){
            setConstructionYear(value);
        }
        if(name === "surface"){
            setSurface(value);
        }
        if(name === "room"){
            setRoom(value);
        }
        if(name === "floorValue"){
            setFloorValue(value);
        }
        if(name === "Erbpacht"){
            setLeasehold(value);
        }
        if(name === "Teilungserklärung"){
            setDivisionDeclaration(value);
        }
        if(name === "Bebauung"){
            setDevelopmentPossible(value);
        }
        if(name === "kommentar"){
            setKommentar(value);
        }
        if(name === "federalState"){
            setFederalState(value);
        }
        if(name === "postalCode"){
            setPostalCode(value);
        }
        if(name === "streetHouseNumber"){
            setStreetHouseNumber(value);
        }

        if(name === "desiredPrice"){
            setDesiredPrice(value);
        }
        if(name === "email"){
            setEmail(value);
        }
        if(name === "phoneNumber"){
            setPhoneNumber(value);
        }
    }
    const formSubmit = (e) => {
        e.preventDefault();
        const postData = {
            "enquiryType" : enquiryType,
            "surface" : surface,
            "constructionYear" : constructionYear,
            "room" : room,
            "leasehold" : leasehold,
            "floors" : floorValue,
            "units" : unitsValue,
            "divisionDeclaration" : divisionDeclaration,
            "developmentPossible" : developmentPossible,
            "comment" : kommentar,
            "federalState" : federalState,
            "postalCode" : postalCode,
            "streetHouseNumber" : streetHouseNumber,
            "desiredPrice" : desiredPrice,
            "email" : email,
            "phoneNumber" : phoneNumber,
            "floorPlanFiles" : "[{\"file\" : \"image_1\"},{\"file\" : \"image_2\"},{\"file\" : \"image_3\"}]",
            "photosFiles" : "[{\"file\" : \"image_1\"},{\"file\" : \"image_2\"},{\"file\" : \"image_3\"}]",
            "attachmentFiles" : "[{\"file\" : \"image_1\"},{\"file\" : \"image_2\"},{\"file\" : \"image_3\"}]"
            
        }
        let baseURL = API_HOST.baseUrl + API_ENDPOINTS.addEnquiry;
        const headers = {
            'Content-Type': 'text/plain'
        };
        axios.post(baseURL, postData, headers )
        .then((response) => {
            console.log(response.data);
        });
        //console.log(postData)
    }
    const fileChange = (e)=> {
        let file = files;
        file[e.target.name] = e.target.files[0]
      
        setFiles(files);
      }
  return (
    <React.Fragment>
        <Header />
        {popup ? <Form popupHandle={popupHandle} floor={floor} units={units} gewerbe={gewerbe} grundstück={grundstück} stepCount={stepCount} nextStep={nextStep} backStep={backStep} formSubmit={formSubmit} handleInputChange={handleInputChange} unitsValue={unitsValue} constructionYear={constructionYear} surface={surface} room={room} floorValue={floorValue} kommentar={kommentar} federalState={federalState} postalCode={postalCode} streetHouseNumber={streetHouseNumber} desiredPrice={desiredPrice} email={email} phoneNumber={phoneNumber} divisionDeclaration={divisionDeclaration} developmentPossible={developmentPossible} fileChange={fileChange}/>: null }
        {console.log(files)}

        <section className='banner' id='start'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className="bannerText col-md-6 col-12">
                        <div className="animate__animated animate__slideInLeft">
                            <p className="bannerHeader">Wir entwickeln Ihre Immobilie.</p>
                            <p className="para">"Maximaler Mehrwert, keine Maklerprovision"</p>
                        </div>
                        <a href='/' className="greenTxt d-flex gap-30">Erstgespräch Sichern <img src="/images/right_arrow.svg" alt="arrow" /></a>
                    </div>
                    <div className="col-md-6 col-12 p-0">
                        <div className='bannerImg'>
                            <img src='/images/imondu_keyvisual-02.jpg' alt='' className='img-fluid'/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className='services'>
            <div className='container'>
                <div className='servicesInr' data-aos="fade-up" data-aos-offset="300" data-aos-duration="1000">
                    <h2>Hier geht es zur Potenzialanalyse</h2>
                    <p className='d-flex gap-30'>Lassen Sie jetzt Ihre Immobilie schätzen - 
                        <a href='/' className='greenTxt'>Kostenlos <img src="/images/right_arrow.svg" alt="arrow" /></a>
                    </p>
                    <div className='servicesList'>
                        <ul className='listInline justify-content-between mt-4'>
                            <li className='ser1' onClick={() => { popupHandle(); setEnquiryType('apartment')}} data-id='apartment'>
                                <img src='/images/Wohnung.svg' alt='' />
                                <span>Wohnung</span>
                            </li>
                            <li className='ser2' onClick={() => { popupHandle(); houseHandle(); setEnquiryType('house')}} data-id='house'>
                                <img src='/images/Ein-Haus.svg' alt='' />
                                <span>Haus</span>
                            </li>
                            <li className='ser3' onClick={() => { popupHandle(); unitsHandle(); setEnquiryType('apartment building')}}>
                                <img src='/images/Wohngebäude.svg' alt='' />
                                <span>Mehrfamilienhaus</span>
                            </li>
                            <li className='ser4' onClick={() => { popupHandle(); gewerbeHandle(); setEnquiryType('business')}}>
                                <img src='/images/Geschäft.svg' alt='' />
                                <span>Gewerbe</span>
                            </li>
                            <li className='ser5' onClick={() => { popupHandle(); grundstückHandle(); setEnquiryType('property')}}>
                                <img src='/images/Eigentum.svg' alt='' />
                                <span>Grundstück</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <section className='srvList pt-3' id='Vorteile'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 col-12' data-aos="fade-right" data-aos-offset="300" data-aos-duration="1000">
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
                    <div className='col-md-6 col-12 srvThumbnail d-flex align-items-center' data-aos="fade-left" data-aos-offset="300" data-aos-duration="1000">
                        <img src='/images/advantages_bg.png' alt='' />
                    </div>
                </div>
            </div>
        </section>
        <section className='vision' id='Vision'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 col-12' data-aos="fade-right" data-aos-offset="300" data-aos-duration="1000">
                        <div className='visionImg'>
                            <img src='/images/imondu_keyvisual-01.png' alt='' />
                        </div>
                    </div>
                    <div className='col-md-6 col-12' data-aos="fade-left" data-aos-offset="300" data-aos-duration="1000">
                        <div className='visionContent'>
                            <h2 className='heading'>Vision, Missionswerte</h2>
                            <p className='para'>Unser Ziel ist eine Win-Win-Situation. Durch unser einzigartiges Konzept erhöhen wir den Gewinn des Verkäufers, ermöglichen eine schnelle Umsetzung und schaffen gleichzeitighochwertigen Wohnraum. Werde mit IMONDU zum Immobilienvisionär</p>
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
                <h2 className='heading'>Unsere Kunden Sagen</h2>
                <div className='row'>
                    <div className='col-md-4 col-12' data-aos="fade-top" data-aos-offset="300" data-aos-duration="1000">
                        <div className='testmonialBx'>
                            <p>Ich habe mein Mehrfamilienhaus in Bad Lauchstädt über Imondu entwickeln und verkaufen lassen. Wir konnten mehr als meinen Wunschpreis erzielen und das Geschäft in wenigen Wochen abwickeln, dazu kommen nette und interessante Menschen mit denen man arbeiten will.</p>
                            <div className='d-flex gap-20'>
                                <div className='testimonialUser'>
                                    <img src='/images/client_1.png' alt='' />
                                </div>
                                <div className='testimonialUser'>
                                    <h4>Olaf S</h4>
                                    <ul className='listInline'>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 col-12' data-aos="fade-top" data-aos-offset="300" data-aos-duration="1000">
                        <div className='testmonialBx'>
                            <p>Projektes war und ich dadurch neue Erfahrungen Sammeln konnte mit Menschen die ihre gerne Teilen und Ideen für nahezu jedes Problem haben. Freue mich auf zukünftige Projekte.</p>
                            <div className='d-flex gap-20'>
                                <div className='testimonialUser'>
                                    <img src='/images/client_2.png' alt='' />
                                </div>
                                <div className='testimonialUser'>
                                    <h4>Brigitte M</h4>
                                    <ul className='listInline'>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 col-12' data-aos="fade-top" data-aos-offset="300" data-aos-duration="1000">
                        <div className='testmonialBx'>
                            <p>Das könnte fast zu meinem neuen Hobby werden. Gut gelaunte Mitarbeiter die einem helfen wirklich das beste aus seinem Objekt zu holen. Bin gespannt wo die Reise noch hingeht.</p>
                            <div className='d-flex gap-20'>
                                <div className='testimonialUser'>
                                    <img src='/images/client_3.png' alt='' />
                                </div>
                                <div className='testimonialUser'>
                                    <h4>Simon F</h4>
                                    <ul className='listInline'>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <section className='Bekannt'>
            <div className='container'>
               <div className='brandInr' data-aos="fade-top" data-aos-offset="300" data-aos-duration="1000">
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
        </section> */}
        <Footer />
    </React.Fragment>
  )
}

export default Home