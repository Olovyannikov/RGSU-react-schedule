import './assets/scss/index.scss';
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";
import Chatbots from "./components/Chatbots/Chatbots";
import {Route, BrowserRouter} from "react-router-dom";

const App = (props) => {
    return (
        <BrowserRouter>
            <Header/>
            <main className='main'>
                <section className={`main__card card`}>
                    <div className={`card__container container`}>
                        <div className={`card__stack`}>
                            <Route exact path="/"
                                   render={() =>
                                       <Card
                                       dropdown={props.state.dropdown}
                                       search={props.state.search}
                                       table={props.state.table}
                                       />
                                   }
                            />
                            <Route path="/helpers" render={() => <Chatbots />}/>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
