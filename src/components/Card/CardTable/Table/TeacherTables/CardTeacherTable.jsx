import s from "./CardTeacherTable.module.scss";

const dataTeacher = [
    {
        time: '8:30 - 10:00',
        auditory: 'DG-404',
        type: 'Лекция',
        discipline: 'Что-то важное',
        group: 'ЮСТ-Б-2-В-2017-1',
        groupName: 'к.соц.н',
        date: '01.04.2021',
        id: `${Math.floor(Math.random() * 100)}`
    },
    {
        time: '12:30 - 21:00',
        auditory: 'DG-414',
        type: 'Семинар',
        discipline: 'Что-то менее важное',
        group: 'ЮСТ-Б-2-В-2017-1',
        groupName: 'к.соц.н',
        date: '01.04.2021',
        id: `${Math.floor(Math.random() * 100)}`
    }
];

let tableTemplate;

function makeColumns(row) {
    return (
        <>

            <td data-label="Время">{row.time}</td>
            <td data-label="Аудитория">{row.auditory}</td>
            <td data-label="Тип занятия">{row.type}</td>
            <td data-label="Дисциплина">{row.discipline}</td>
            <td data-label="Преподаватель">{row.group} <span className={s.table__teacher}>{row.groupName}</span></td>
        </>)

}

tableTemplate = dataTeacher.map((row, i) => {
    return (
        <tbody key={i}>
        <tr className={s.table__divider}>
            <td colSpan={5}>{row.date}</td>
        </tr>
        <tr>{makeColumns(row)}</tr>
        </tbody>
    )
})


const CardTeacherTable = ({props}) => {
    return (
        <>
            <div className={`${s.schedule__tableWrapper} ${s.tableWrap}`}>
                <table style={{paddingBottom: '29px'}}>
                    <thead>
                    <tr>
                        <th>Время</th>
                        <th className={s.table__auditory}>Аудитория
                            <svg width={24} height={24} viewBox="0 0 24 24" id="pin" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12 0c4.793 0 8.692 3.9 8.692 8.692 0 5.948-7.778 14.68-8.11 15.048a.783.783 0 01-1.164 0c-.332-.368-8.11-9.1-8.11-15.048C3.308 3.899 7.208 0 12 0zm0 13.065a4.378 4.378 0 004.373-4.373A4.378 4.378 0 0012 4.319a4.378 4.378 0 00-4.373 4.373A4.378 4.378 0 0012 13.065z"/>
                            </svg>
                        </th>
                        <th>Тип занятия</th>
                        <th style={{paddingLeft: "38px"}}>Дисциплина</th>
                        <th>Группа</th>
                    </tr>
                    </thead>
                    <>
                        {tableTemplate}
                    </>
                </table>
            </div>
        </>
    );
}

export default CardTeacherTable;