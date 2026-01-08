export default function Ex() {
    const paragraphe = <p>bonjour</p>;
    const listeSimple = (
  <ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
    <li>React</li>
    <li>NodeJS</li>
  </ul>
  
);
const technologies = ["t1", "t2", "t3", "t4", "t5"];

const listeAvecMap = (
  <ul>
    {technologies.map((tech, index) => (
      <li key={index}>{tech}</li>
    ))}
  </ul>
);
const styleListe = {
  listStyle: "none",
  color: "blue",
  position : "absolute",
  top : "50px",
  left : "50px"
};

const listeStylée = (
  <ul style={styleListe}>
    {technologies.map((tech, index) => (
      <li key={index}>{tech}</li>
    ))}
  </ul>
);

    return (
        <div>
            <ListeElements elements={technologies} color="green" />
        </div>
    );
}
function ListeElements(props) {
  return (
    <ul>
      {props.elements.map((el, index) => (
        <li key={index}>{el}</li>
      ))}
    </ul>
  );
}
function Element({ value, color }) {
  return <li style={{ color: color }}>{value}</li>;
}

function ListeElements2({ elements, color }) {
  return (
    <ul>
      {elements.map((el, index) => (
        <Element key={index} value={el} color={color} />
      ))}
    </ul>
  );
}

function ListeElements3({ elements, color, hideFirstItem }) {
  return (
    <ul>
      {elements.map((el, index) => {
        if (hideFirstItem && index === 0) return null;

        return <Element key={index} value={el} color={color} />;
      })}
    </ul>
  );
}

function MultipleElements() {
  return (
    <React.Fragment>
      <h2>Liste des technologies</h2>
      <p>Voici quelques frameworks populaires</p>
    </React.Fragment>
  );
}

function Message() {
  return (
    <p>
      Ceci est un composant React
      écrit sur plusieurs lignes
      avec return correctement utilisé.
    </p>
  );
}