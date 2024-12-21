import { Card } from "../../../shared/ui/CardNew";

export function Register() {
    return (
        <div>
            <Card>
                <Card.Title className="text-red-400">Hola Mundo</Card.Title>
                <Card.Body>
                    <p>Contenido de la tarjeta</p>
                </Card.Body>
                <Card.Footer>
                    <button className="border-2"> Aceptar</button>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Title>
                    <h1>Título Principal</h1>
                </Card.Title>
                <Card.Body>Contenido</Card.Body>
            </Card>
            <Card variant="bordered">
                <Card.Title>Título</Card.Title>
                <Card.Body>Contenido</Card.Body>
            </Card>
        </div>
    );
}
