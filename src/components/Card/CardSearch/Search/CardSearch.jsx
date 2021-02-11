import s from "./CardSearch.module.scss";
import Autocomplete from "./Autocomplete/Autocomplete";
import {BrowserRouter, Route, Switch} from "react-router-dom";
const suggestions = [
    ["А-СОЦ-00.08-Д-2019-1", "Факультет управления"],
    ["А-ИВТ-13.11-Д-2019-1", "Факультет информационных технологий"],
    ["А-СОЦ-00.04-Д-2019-1", "Факультет социологии"],
    ["А-ИСТ-00.02-Д-2019-1", "Гуманитарый факультет"],
    ["ЖУР-Б-0-Д-2017-1", "Факультет коммуникативного менеджмента"],
    ["ЮСТ-Б-0-В-2019-1", "Юридический факультет"],
    ["Колледж РГСУ", "Колледж РГСУ"],
    ["Колледж ПТУ", "Колледж ПТУ"],
];

const teachersList = [
    ["Козырь А. А.", "Магистр Джедай"],
    ["Оловянников И. В.", "Фронтенд-мастер"],
    ["Храмов С. В.", "Мистер бэк"],
];

const students = "Начните вводить название своей группы";
const teachers = "Начните вводить свое имя";


const CardSearch = () => {

    return (
        <div className={s.card__search}>
            <svg width={32} height={33} viewBox="0 0 33 33" id="search"
                 xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M32.214 31.945l-9.258-9.628a13.042 13.042 0 003.824-9.233C26.78 5.869 20.911 0 13.696 0S.612 5.869.612 13.084s5.87 13.084 13.084 13.084a13.03 13.03 0 008.34-3.01l9.28 9.65a.622.622 0 10.898-.864zm-18.518-7.023c-6.527 0-11.837-5.31-11.837-11.838S7.169 1.246 13.696 1.246c6.528 0 11.838 5.31 11.838 11.838 0 6.527-5.31 11.838-11.838 11.838z"></path>
            </svg>
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Autocomplete placeholder={students} suggestions={suggestions} />
                </Route>
                <Route path="/schedule/sensei" >
                    <Autocomplete placeholder={teachers} suggestions={teachersList} />
                </Route>
            </Switch>
            </BrowserRouter>
        </div>
    )
}

export default CardSearch;