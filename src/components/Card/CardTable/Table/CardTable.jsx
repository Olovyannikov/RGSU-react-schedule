import s from "./CardTable.module.scss";

const data = {
    days: [
        {
            date: '01.04.2021',
            db: [
                {
                    teacher: 'LOL',
                    teacherJob: 'Emperor',
                    time: '8:30 - 10:00',
                    type: 'YYT',
                    discipline: 'Захват Явин VI',
                    auditory: 'Явин VI',
                },
                {
                    teacher: '123',
                    teacherJob: 'Emperor',
                    time: '8:30 - 10:00',
                    type: 'Практика',
                    discipline: 'Захват Явин VI',
                    auditory: 'Явин VI',
                }
            ]
        },
        {
            date: '02.04.2021',
            db: [
                {
                    teacher: 'Татьяна Иванова',
                    teacherJob: 'Emperor',
                    time: '8:30 - 10:00',
                    type: 'Практика',
                    discipline: 'Захват Явин VI',
                    auditory: 'Явин VI',
                },
                {
                    teacher: 'LOL',
                    teacherJob: 'Emperor',
                    time: '8:30 - 10:00',
                    type: 'Практика',
                    discipline: 'Захват Явин VI',
                    auditory: 'Явин VI',
                }
            ]
        }
    ]
}

//renderTable

const renderTableData = () => {
    return data.days.map((day, index) => {
        const {date, db} = day
        return (
            <>
                <tr className={s.table__divider}>
                    <td colSpan={5}>{date}</td>
                </tr>
                {db.map((database, i) => (
                    <tr key={i}>
                        <td key={database.time} data-label="Время">{database.time}</td>
                        <td key={database.auditory} data-label="Аудитория">{database.auditory}</td>
                        <td key={database.type} data-label="Аудитория">{database.type}</td>
                        <td key={database.discipline} data-label="Аудитория">{database.discipline}</td>
                        <td key={database.teacher} data-label="Аудитория">{database.teacher} <span
                            className={s.table__teacher}>{database.teacherJob}</span></td>
                    </tr>
                ))}

            </>
        )
    })
}

const CardTable = () => {
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
                        <th>Преподаватель</th>
                    </tr>
                    </thead>
                    <tbody>
                    {renderTableData()}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default CardTable;