import React, {useState} from "react";
import logo from './Home/organico.svg'
import "./Header.css";

interface HeaderProps {
    // title : string;
}

const Header: React.FC<HeaderProps> = (props) => {
    let [contador, setContador] = useState(0);

    function buttonClick(){
        setContador(contador + 1);
    }

    return (
        <div>
        <div className="div-logo">
            <img src={logo} width="45" />
        </div>
        <h2 className="nome">
            Ecoleta
        </h2>
        </div>
    );
}

// {/* <button onClick={buttonClick}> Aumentar contador</button>
//             <p>{contador}</p>
//             <h1>Aqui cabeçalho</h1>
//             <span>{props.title}</span> */}

export default Header;