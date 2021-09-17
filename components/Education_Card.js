
function Education_Card(props){
    return(
        <div class="card shadow-sm">
            <div class="card-body">
                <div class="experience-label ">
                    <h5 class="card-title">{props.title}</h5>
                </div>
                <p class="education-card-text"><img src="resources/icons/map-pin.svg" alt="map pin icon" />
                     Santa Monica College</p>
                <p class="education-card-text">2013-2016</p>
            </div>
        </div>
    );
}

export default Education_Card;
