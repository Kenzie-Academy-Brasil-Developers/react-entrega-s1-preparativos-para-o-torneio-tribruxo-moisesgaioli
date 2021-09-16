import "./styles.css";


function Home ({ validatePersonRandom }) {


    

    return (
        <div className="home-container">
            <h1 className="home-title" > Torneio tribruxo </h1>

            <p className="home-text"> Clique no botão para encontrar os feiticeiros! </p>

            <button className="btn btn-home" onClick={validatePersonRandom} > Começar! </button>
        </div>
    )
}

export default Home;