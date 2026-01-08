import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

export default function Manoir(props) {
    let age = props.age;
    let name = props.name;
    return (
        <div>
            <h1>Manoir Personnel </h1>
            <p>Nom du propriétaire : {name}</p>
            <p>Âge : {calc(age)} ans</p>
        </div>
    );
}
function calc(age) {
    let birth = age.split("-");
    age = new Date().getFullYear() - birth[0];
    if (new Date().getMonth() + 1 < birth[1] ) {
        age--;
    }
    return age;
}


