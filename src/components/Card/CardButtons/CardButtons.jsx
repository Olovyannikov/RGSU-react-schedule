import {Tab, Tabs} from "../CardTabs/CardWeeks/CardWeeks";

let date = new Date();

function getWeeksInMonth(month, year) {
    date.toLocaleDateString('ru-RU');
    let currmonth = date.getMonth() + 3;
    let day = date.getDay();
    let days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
    let currDay = days[day];
    currmonth < 10 ? currmonth = '0' + currmonth : currmonth = '';

    let curryear = date.getFullYear();
    let weeks = [],
        firstDate = new Date(year, month, 1),
        lastDate = new Date(year, month + 1, 0),
        numDays = lastDate.getDate();

    let start = 1;
    let end = 8 - firstDate.getDay();
    let finish = end < 10 ? '0' + end : end + '';
    while (start <= numDays) {
        weeks.push({
            start: (`${start < 10 ? start = '0' + start : start}.${currmonth}.${curryear}`),
            end: `${end < 10 ? finish : end}.${currmonth}.${curryear}`
        });

        start = end + 1;
        end = end + 7;
        if (end > numDays)
            end = numDays;
    }
    return weeks.slice(0, 4);
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
        <Tab key={id} tabName={`${item.start} - ${item.end}`} label={`${item.start} - ${item.end}`}>
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