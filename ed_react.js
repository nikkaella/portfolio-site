function Divider() {
    return React.createElement(
        "div",
        { className: "row justify-content-center" },
        React.createElement("img", { className: "divider", src: "resources/Divider B.svg", alt: "divider" })
    );
}

function EducationCard(props) {
    return React.createElement(
        "div",
        { className: "col-md-6" },
        React.createElement(
            "div",
            { className: "card shadow-sm" },
            React.createElement(
                "div",
                { className: "card-body" },
                React.createElement(
                    "div",
                    { className: "experience-label " },
                    React.createElement(
                        "h5",
                        { className: "card-title" },
                        props.title
                    )
                ),
                React.createElement(
                    "p",
                    { className: "education-card-text" },
                    React.createElement("img", { className: "mapIcon", src: "resources/icons/map-pin.svg", alt: "map pin icon" }),
                    props.school
                ),
                React.createElement(
                    "p",
                    { className: "education-card-text" },
                    props.years
                )
            )
        )
    );
}

function Education() {
    return React.createElement(
        "div",
        null,
        React.createElement(Divider, null),
        React.createElement(
            "section",
            { id: "education" },
            React.createElement(
                "div",
                { className: "container-sm" },
                React.createElement(
                    "h2",
                    { className: "education-title" },
                    "Education"
                ),
                React.createElement(
                    "div",
                    { className: "row g-4" },
                    React.createElement(EducationCard, { title: "B.S. in Computer Science", school: "University of California, Davis", years: "2016-2019" }),
                    React.createElement(EducationCard, { title: "UC Education Abroad Program", school: "Lund University, Sweden", years: "Spring 2018" }),
                    React.createElement(EducationCard, { title: "Computer Science Program", school: "Santa Monica College", years: "2013-2016" })
                )
            )
        )
    );
}

ReactDOM.render(React.createElement(Education, null), document.getElementById('ed_react'));