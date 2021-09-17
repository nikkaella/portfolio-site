function Divider(){
    return(
        <div className="row justify-content-center">
            <img className="divider" src="resources/Divider B.svg" alt="divider" />
        </div>
    );
}

function EducationCard(props){
    return(
        <div className="col-md-6">
            <div className="card shadow-sm">
                <div className="card-body">
                    <div className="experience-label ">
                        <h5 className="card-title">{props.title}</h5>
                    </div>
                    <p className="education-card-text"><img className="mapIcon" src="resources/icons/map-pin.svg" alt="map pin icon" />
                        {props.school}</p>
                    <p className="education-card-text">{props.years}</p>
                </div>
            </div>
        </div>
    );
}

function Education(){
    return(
        <div>
        <p>hi</p>
            <Divider />
            <section id="education">
                <div className="container-sm">
                    <h2 className="education-title">Education</h2>
                    <div className="row g-4">
                        <EducationCard title="B.S. in Computer Science" school="University of California, Davis" years="2016-2019" />
                        <EducationCard title="UC Education Abroad Program" school="Lund University, Sweden" years="Spring 2018" />
                        <EducationCard title="Computer Science Program" school="Santa Monica College" years="2013-2016" />
                    </div>
                </div>
            </section>
        </div>
    );
}

ReactDOM.render( <Education />, document.getElementById('ed_react'));