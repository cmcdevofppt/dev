import redcar from '../.././assets/redcar.jpg'
import greencar from '../.././assets/greencar.jpg'
import bluecar from '../.././assets/bluecar.jpg'
import yellowcar from '../.././assets/yellowcar.jpg'
import purplecar from '../.././assets/purplecar.jpg'
import Card from "./Card";

let cards = [
    {
        logo: redcar,
        title: "Audi R26 Concept",
        descrption: "Audi R26 Concept, 2025, 5K, 8K, Dark red",
        user: {name:"John Doe", avatar:"avatar.jpg"},
        likes: 4.5 + "K",
        background: "red"
    },
    {
        logo: greencar,
        title: "Ferrari",
        descrption: "Ferrari 296 GTB, Green car, 5K, 8K",
        user: {name:"Jane Smith", avatar:"avatar.jpg"},
        likes: 2654,
        background: "green"
    },
    {
        logo: bluecar,
        title: "Aston Martin",
        descrption: "Aston Martin DB12 S, 8K, 2025, 5K",
        user: {name:"Alex Berd", avatar:"avatar.jpg"},
        likes: 1 + "K",
        background: "blue"
    },
    {
        logo: yellowcar,
        title: "Ferrari SF90",
        descrption: "Ferrari SF90, Mansory, 5K, Yellow cars",
        user: {name:"Alex Berd", avatar:"avatar.jpg"},
        likes: 5489 ,
        background: "yellow"
    },
    {
        logo: purplecar,
        title: "Lamborghini Revuelto",
        descrption: "Lamborghini Revuelto, Purple aesthetic",
        user: {name:"Alex Berd", avatar:"avatar.jpg"},
        likes: 5 + "K",
        background: "purple"
    }
];

export default function Cards(){
    return(
        <div className='grid md:grid-cols-3 xl:grid-cols-5 w-screen p-5 m-0 gap-2'>
            {
                cards.map((card, index) => (
                    <Card 
                        key={index}
                        logo={card.logo}
                        title={card.title}
                        descrption={card.descrption}
                        user={card.user}
                        likes={card.likes}
                        background={card.background} />
                ))}

        </div>
    )
}