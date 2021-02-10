import s from "./CardTable.module.scss";

const CardTable = () => {
    return (
        <>
            <div className={`${s.schedule__tableWrapper} ${s.tableWrap}`}>
                <table style={{paddingBottom: '29px'}}>
                    <thead>
                    <tr>
                        <th>Время</th>
                        <th className={s.table__auditory}>Аудитория
                            <svg width={24} height={24} viewBox="0 0 24 24" id="pin" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c4.793 0 8.692 3.9 8.692 8.692 0 5.948-7.778 14.68-8.11 15.048a.783.783 0 01-1.164 0c-.332-.368-8.11-9.1-8.11-15.048C3.308 3.899 7.208 0 12 0zm0 13.065a4.378 4.378 0 004.373-4.373A4.378 4.378 0 0012 4.319a4.378 4.378 0 00-4.373 4.373A4.378 4.378 0 0012 13.065z"></path></svg>
                        </th>
                        <th>Тип занятия</th>
                        <th style={{paddingLeft: "38px"}}>Дисциплина</th>
                        <th>Преподаватель</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className={s.table__divider}>
                        <td colSpan={5} className={s.table__dividerCell}>22.03.2020 Понедельник</td>
                    </tr>
                    <tr>
                        <td data-label="Время">8:30 - 10:00</td>
                        <td data-label="Аудитория"><a href={"#"}>ВП8-404</a></td>
                        <td data-label="Тип занятия">Лекция</td>
                        <td data-label="Дисциплина">Управление государственными и муниципальными
                            услугами и заказами
                        </td>
                        <td data-label={"Преподаватель"}>Рябова Татьяна Михайловна
                            <span className={s.table__teacher}> к.соц.н. </span>
                        </td>
                    </tr>
                    <tr>
                        <td data-label="Время">8:30 - 10:00</td>
                        <td data-label="Аудитория"><a href={"#"}>ВП8-404</a></td>
                        <td data-label="Тип занятия">Лекция</td>
                        <td data-label="Дисциплина">Управление государственными и муниципальными
                            услугами и заказами
                        </td>
                        <td data-label={"Преподаватель"}>Рябова Татьяна Михайловна
                            <span className={s.table__teacher}> к.соц.н.</span>
                        </td>
                    </tr>
                    <tr>
                        <td data-label="Время">8:30 - 10:00</td>
                        <td data-label="Аудитория"><a href={"#"}>ВП8-404</a></td>
                        <td data-label="Тип занятия">Лекция</td>
                        <td data-label="Дисциплина">Управление государственными и муниципальными
                            услугами и заказами
                        </td>
                        <td data-label={"Преподаватель"}>Рябова Татьяна Михайловна
                            <span className={s.table__teacher}> к.соц.н.</span>
                        </td>
                    </tr>
                    <tr>
                        <td data-label="Время">8:30 - 10:00</td>
                        <td data-label="Аудитория"><a href={"#"}>ВП8-404</a></td>
                        <td data-label="Тип занятия">Лекция</td>
                        <td data-label="Дисциплина">Управление государственными и муниципальными
                            услугами
                            и заказами
                        </td>
                        <td data-label={"Преподаватель"}>Рябова Татьяна Михайловна
                            <span className={s.table__teacher}> к.соц.н.</span>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default CardTable;