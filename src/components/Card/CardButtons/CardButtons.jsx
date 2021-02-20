import {Tab, Tabs} from "../CardTabs/CardWeeks/CardWeeks";

let date = new Date();

function getWeeksInMonth(month, year) {
    date.toLocaleDateString('ru-RU');
    let currentMonth = date.getMonth() + 3;
    currentMonth < 10 ? currentMonth = '0' + currentMonth : currentMonth = '';

    let currentYear = date.getFullYear();
    let weeks = [],
        firstDate = new Date(year, month, 1),
        lastDate = new Date(year, month + 1, 0),
        numDays = lastDate.getDate();

    let start = 1;
    let end = 8 - firstDate.getDay();
    let finish = end < 10 ? '0' + end : end + '';
    while (start <= numDays) {
        weeks.push({
            start: (`${start < 10 ? start = '0' + start : start}.${currentMonth}.${currentYear}`),
            end: `${end < 10 ? finish : end}.${currentMonth}.${currentYear}`
        });

        start = end + 1;
        end = end + 7;
        if (end > numDays)
            end = numDays;
    }
    return weeks.slice(0, 4);
}

let dateArray = Object.values(getWeeksInMonth(date.getMonth(), date.getFullYear()));

const CardButtons = (props) => {
    const dateItem = dateArray.map((item, id) =>
        <Tab date={`${item.start}`} key={id} tabName={`${item.start} - ${item.end}`} label={`${item.start} - ${item.end}`}>
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