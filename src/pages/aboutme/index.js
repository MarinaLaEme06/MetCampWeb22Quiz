import './index.css'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Button from '../../componentes/Button';
import { useNavigate } from 'react-router';
import Breadcrumb from '../../componentes/Breadcrumb';

function AboutMe(){
    const navigate = useNavigate()
    return (
        <div className="section aboutmebackground grey is-flex is-flex-direction-column is-align-items-center">     
            <div className="text-container">
                <Breadcrumb/>                 
                <h1 className='purple-grey'>About Me</h1>
                <h2>Hola, Mi nombre es Marina!</h2>
                <p>Y este es un Quizz que hice en el  👩🏻‍💻Met Camp Web👩🏻‍💻 </p>
                <p>Cuatro sabados intensivos donde aprendimos React y con la mejor compañia de Mujeres en tecnologia(MET)</p>
                
                <div className='columns'>
                    <div className='column has-text-centered'>
                            <div className='mt-5'>
                                <a href="https://www.linkedin.com/in/marina-francalancia-0690a895/"><span className='icon-social'><FaLinkedin/></span></a>
                                <a href="https://github.com/MarinaLaEme06"><span className='icon-social'><FaGithub/></span></a>
                            </div>
                    </div>
                    <div className="column cat"></div>
                </div>
            </div>
            <Button text="Go to Quiz" onClick={()=> navigate ("/game") }/>     
        </div>

    )   
}

export default AboutMe