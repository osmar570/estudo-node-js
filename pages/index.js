import {useState} from 'react';

function Home(){
    return (
        <div><a href="http://www.facebook.com/osmar570">Ó o amor da sua vida</a>
                <Contador />
                </div>)
                
}

function Contador() {
    const [Contador,setContador] = useState(10);

    function adicionarContador(){
        setContador(Contador + 1);
    }

    return(
        <div>
            <div>{Contador}</div>
            <button onClick={adicionarContador}>Contador</button>
        </div>
    )
}

export default Home