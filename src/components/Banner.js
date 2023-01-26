// import css file 
// adding sass https://create-react-app.dev/docs/adding-a-sass-stylesheet
import '../styles/Banner.css'
import logo from '../assets/logo.png' //import img

// add style with the attribute 'className' in <div> *Styling <div> for the accesibility
// pour faire le test rapidment(/className est conseillé pour le code) <div style={{color:"black, textAlign:"right",padding:32,borderBottom:"solid 3px black"}}></div>
function Banner() {
    const title = "La maison jungle"
    return (
        <div className="lmj-banner"> 
            <img src={logo} alt="La maison jungle" className="lmj-logo" /> 
            <h1 className="lmj-title">{title}</h1>
        </div>
    )
}
export default Banner
