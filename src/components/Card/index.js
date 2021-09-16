import "./styles.css";


function Card ({ elem }) {


    const house = () => {

        if(elem.house === "Gryffindor") {
            return elem.house.toLowerCase();
        }

        if(elem.house === "Slytherin") {
            return elem.house.toLowerCase();
        }

        if(elem.house === "Hufflepuff") {
            return elem.house.toLowerCase();
        }

        if(elem.house === "Ravenclaw") {
            return elem.house.toLowerCase();
        }
    }

    return (
        
        <div className="card">
            <img className={`card-img ${house()}`} src={elem.image} alt={elem.name} ></img>
            <h3 className="person-name"> {elem.name} </h3>
            <p className={`house ${house()}`}> {elem.house} </p>
        </div>
        
    )

}


export default Card;
