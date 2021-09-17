
export default function EducationCard(props) {
    return React.createElement(
        "div",
        { "class": "card shadow-sm" },
        React.createElement(
            "div",
            { "class": "card-body" },
            React.createElement(
                "div",
                { "class": "experience-label " },
                React.createElement(
                    "h5",
                    { "class": "card-title" },
                    props.title
                )
            ),
            React.createElement(
                "p",
                { "class": "education-card-text" },
                React.createElement("img", { src: props.imgSrc, alt: "map pin icon" }),
                "Santa Monica College"
            ),
            React.createElement(
                "p",
                { "class": "education-card-text" },
                "2013-2016"
            )
        )
    );
}