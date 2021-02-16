import {LinkedTabs, Tab} from "../LinkedTabs/LinkedTabs";
import Autocomplete from "../../CardSearch/Search/Autocomplete/Autocomplete";
import CardButtons from "../../CardButtons/CardButtons";
import s from "../../CardButtons/CardButtons.module.scss";
import React from "react";

import CardTable from "../../CardTable/Table/CardTable";


const suggestions = [
    {group: "А-СОЦ-00.08-Д-2019-1", faculty: "Факультет управления"},
    {group: "А-ИВТ-13.11-Д-2019-1", faculty: "Факультет информационных технологий"},
    {group: "А-СОЦ-00.04-Д-2019-1", faculty: "Факультет социологии"},
    {group: "А-ИСТ-00.02-Д-2019-1", faculty: "Гуманитарый факультет"},
    {group: "ЖУР-Б-0-Д-2017-1", faculty: "Факультет коммуникативного менеджмента"},
    {group: "ЮСТ-Б-0-В-2019-1", faculty: "Юридический факультет"},
    {group: "Колледж РГСУ", faculty: "Колледж РГСУ"},
    {group: "Колледж ПТУ", faculty: "Колледж ПТУ"},
];

const teachersList = [
    {teacher: "Козырь А. А.", graduate: "Магистр Джедай"},
    {teacher: "Оловянников И. В.", graduate: "Фронтенд-мастер"},
    {teacher: "Храмов С. В.", graduate: "Мистер бэк"},
];



const students = "Начните вводить название своей группы";
const teachers = "Начните вводить свое имя";

const CardTabs = (props) => {
    return (
        <LinkedTabs route={''}>
            <Tab label={"students"} tabName={"Расписание занятий"}>
                <Autocomplete placeholder={students} suggestions={suggestions}/>
                <CardButtons table={<CardTable />}/>
            </Tab>
            <Tab label={"sensei"} tabName={"Расписание преподавателей"}>
                <Autocomplete placeholder={teachers} suggestions={teachersList}/>
                {/*<CardButtons/>*/}
            </Tab>
            <Tab label={"traffic"} tabName={"Загруженость аудиторий"}>
                <p>Your past events</p>
            </Tab>
        </LinkedTabs>
    );
}

export default CardTabs;