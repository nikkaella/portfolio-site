function Divider(){
    return(
        <div class="row justify-content-center">
            <img class="divider" src="resources/Divider B.svg" alt="divider" />
        </div>
    );
}

function EducationCard(props){
    return(
        <div class="col-md-6">
            <div class="card shadow-sm">
                <div class="card-body">
                    <div class="experience-label ">
                        <h5 class="card-title">{props.title}</h5>
                    </div>
                    <p class="education-card-text"><img src="resources/icons/map-pin.svg" alt="map pin icon" />
                        {props.school}</p>
                    <p class="education-card-text">{props.years}</p>
                </div>
            </div>
        </div>
    );
}

function Education(){
    return(
        <div>
            <Divider />
            <section id="education">
                <div class="container-sm">
                    <h2 class="education-title">Education</h2>
                    <div class="row g-4">
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