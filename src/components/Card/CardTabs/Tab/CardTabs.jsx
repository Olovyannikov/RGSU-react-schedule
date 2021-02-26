import React from "react";
import Autocomplete from "../../CardSearch/Search/Autocomplete/Autocomplete";
import CardButtons from "../../CardButtons/CardButtons";
import CardTable from "../../CardTable/Table/CardTable";
import CardTeacherTable from "../../CardTable/Table/TeacherTables/CardTeacherTable";
import {LinkedTabs, Tab} from "../LinkedTabs/LinkedTabs";
import {calendarIcon, layersIcon, userIcon} from "./icons";

const CardTabs = (props) => {
    return (
        <LinkedTabs route={''}>
            <Tab key={"Расписание занятий"} label={"students"} tabName={"Расписание занятий"} svg={calendarIcon()}>
                <Autocomplete placeholder={props.students} suggestions={props.suggestions}/>
                 <CardButtons  table={<CardTable props={props.data}/>}/>

            </Tab>
            <Tab key={"Расписание преподавателей"} label={"sensei"} tabName={"Расписание преподавателей"}  svg={userIcon()}>
                <Autocomplete placeholder={props.teachers} suggestions={props.teachersList}/>
                <CardButtons table={<CardTeacherTable />}/>
            </Tab>
            <Tab key={"Загруженность аудиторий"} label={"traffic"} tabName={"Загруженость аудиторий"}  svg={layersIcon()}>
                <p>Your past events</p>
            </Tab>
        </LinkedTabs>
    );
}

export default CardTabs;