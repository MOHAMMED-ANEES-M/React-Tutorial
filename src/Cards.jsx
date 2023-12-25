import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Cards(props) {
    return (
        <Card className={props.class} style={{ width: "18rem" }}>
            <Card.Img className="img rounded-circle" variant="top" src={props.src} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.text}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Cards;
