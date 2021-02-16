import s from './CardButtons.module.scss';
import React, { useState, useCallback } from "react";
import {Tab, Tabs} from "../CardTabs/CardWeeks/CardWeeks";

let date = new Date();

function getWeeksInMonth(month, year) {
    let currmonth = date.getMonth() + 1;
    currmonth < 10 ? currmonth = '0' + currmonth : currmonth = '';

    let curryear = date.getFullYear();
    let weeks = [],
        firstDate = new Date(year, month, 1),
        lastDate = new Date(year, month + 1, 0),
        numDays = lastDate.getDate();

    let start = 1;
    let end = 8 - firstDate.getDay();
    while (start <= numDays) {
        start < 10 ? start = '0' + start : start = start + '';
        weeks.push({start: (`${start}.${currmonth}.${curryear}`), end: `${end}.${currmonth}.${curryear}`});
        start = end + 1;
        end = end + 7;
        if (end > numDays)
            end = numDays;
    }
    return weeks;
}

function today() {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    return `${year}-${month}-${day}`
}

let dateArray = Object.values(getWeeksInMonth(date.getMonth(), date.getFullYear()));



const CardButtons = (props) => {
    const dateItem = dateArray.map((item, id) =>
        <Tab tabName={`${item.start} - ${item.end}`} label={`${item.start} - ${item.end}`}>
            {props.table}
        </Tab>
    );
    return (
        <Tabs>
            {dateItem}
        </Tabs>
    )
};

export default CardButtons;