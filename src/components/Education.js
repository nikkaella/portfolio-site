import EducationCard from "./EducationCard";

export default function Education() {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "hello"
        ),
        React.createElement(EducationCard, { title: "Computer Science Program", imgSrc: "resources/icons/map-pin.svg" })
    );
}