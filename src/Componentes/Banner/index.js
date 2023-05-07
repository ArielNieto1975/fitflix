import "./Banner.css"
import { Video } from "./video"
const Banner = () => {
    return <section className="banner" style={{backgroundImage:"url(/img/banner.png)"}} >
            <article className="info">
                <h1>FitDance</h1>
                <h3>¡Hola!</h3>
                <p>Bienvenido <b>FITFLIX</b> la plataforma de videos de FitDance! <br/>
                    ¿Te gustaría ser parte del programa de clases que hace tu vida más divertida a través de la danza? <br/>
                    ¡Creemos que sí, que tu tienes muchas ganas de bailar! <br/>
                    Es por eso que en este canal tu puedes ver nuevas coreografías y sus pasos. <br/>
                    Acompaña todos los contenidos y ¡Vive esa emoción! #FitDance</p>
            </article>
            <Video/>

    </section>
}
export default Banner