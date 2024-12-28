import { ReactNode } from "react";

interface Card {
  // con la propiedad de children se puede agregar el componente CardBody al componente Card en App.tsx
  children: ReactNode;
}

function Card(props: Card) {
  const { children } = props;

  const width = {
    width: "350px",
  };
  return (
    <div className="card" style={width}>
      <div className="card-body"> {children}</div>
    </div>
  );
}

interface CardBodyProps {
  title: string;
  text?: string; // con el signo de pregunta(text?) se indica que una propiedad opcional
}

export function CardBody(props: CardBodyProps) {
  const { title, text } = props;
  return (
    <>
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
    </>
  );
}

export default Card;
