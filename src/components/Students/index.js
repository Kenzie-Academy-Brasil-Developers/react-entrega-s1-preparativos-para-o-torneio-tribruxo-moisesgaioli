import Card from "../Card";
import "./styles.css";



function Students ({ personRandom, setPage, validatePersonRandom }) {

    const pageBack = () => {
        setPage(true);
    }

    return (
        
        <>
        <section className="card-container">
            {personRandom.map((elem, index) => <Card key={index} elem={elem} /> )}
        </section>
        
        <div className="container-btn">
            <button className="btn btn-again" onClick={validatePersonRandom} > Tentar novamente </button>
        </div>
        <button className="btn btn-back" onClick={pageBack}> Voltar </button>
        </>
    ) 
}


export default Students;