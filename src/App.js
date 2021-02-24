import './assets/scss/index.scss';
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";
import Chatbots from "./components/Chatbots/Chatbots";
import {Route, BrowserRouter} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <Header/>
            <main className='main'>
                <section className={`main__card card`}>
                    <div className={`card__container container`}>
                        <div className={`card__stack`}>
                            <Route exact path="/" render={props => <Card {...props} />} />
                            <Route path="/helpers" render={props => <Chatbots {...props}/>}/>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
