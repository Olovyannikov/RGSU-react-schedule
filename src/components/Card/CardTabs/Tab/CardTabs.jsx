import {LinkedTabs, Tab} from "../LinkedTabs/LinkedTabs";
import Autocomplete from "../../CardSearch/Search/Autocomplete/Autocomplete";
import CardButtons from "../../CardButtons/CardButtons";
import {calendarIcon, layersIcon, userIcon} from "./icons";
import React from "react";

import CardTable from "../../CardTable/Table/CardTable";
import CardTeacherTable from "../../CardTable/Table/TeacherTables/CardTeacherTable";


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

const dataTeachers = {

}

const students = "Начните вводить название своей группы";
const teachers = "Начните вводить свое имя";

const CardTabs = (props) => {
    return (
        <LinkedTabs route={''}>
            <Tab key={"Расписание занятий"} label={"students"} tabName={"Расписание занятий"} svg={calendarIcon()}>
                <Autocomplete placeholder={students} suggestions={suggestions}/>
                <CardButtons table={<CardTable />}/>
            </Tab>
            <Tab key={"Расписание преподавателей"} label={"sensei"} tabName={"Расписание преподавателей"}  svg={userIcon()}>
                <Autocomplete placeholder={teachers} suggestions={teachersList}/>
                <CardButtons table={<CardTeacherTable />}/>
            </Tab>
            <Tab key={"Загруженность аудиторий"} label={"traffic"} tabName={"Загруженость аудиторий"}  svg={layersIcon()}>
                <p>Your past events</p>
            </Tab>
        </LinkedTabs>
    );
}

export default CardTabs;