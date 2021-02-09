import s from "./Students.module.scss";

const Students = () => {
    return (

        <main className='main'>
            <section className={`main__card ${s.card}`}>
                <div className={`${s.card__container} container`}>
                    <div className={s.card__wrapper}>
                        <div className={s.card__stack}>
                            <ul className={`${s.card__schedule} ${s.scheduleTabs}`}>
                                <li className={s.schedule__item}>
                                    <a className={`${s.schedule__link} ${s.schedule__link_active}`} href={"#"}>Расписание
                                        занятий</a>
                                </li>
                                <li className={s.schedule__item}>
                                    <a className={s.schedule__link} href={"#"}>Расписание преподавателей</a>
                                </li>
                                <li className={s.schedule__item}>
                                    <a className={s.schedule__link} href={"#"}>Загруженность аудиторий</a>
                                </li>
                            </ul>
                            <div className={s.card__search}>
                                <svg width={32} height={33} viewBox="0 0 33 33" id="search"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M32.214 31.945l-9.258-9.628a13.042 13.042 0 003.824-9.233C26.78 5.869 20.911 0 13.696 0S.612 5.869.612 13.084s5.87 13.084 13.084 13.084a13.03 13.03 0 008.34-3.01l9.28 9.65a.622.622 0 10.898-.864zm-18.518-7.023c-6.527 0-11.837-5.31-11.837-11.838S7.169 1.246 13.696 1.246c6.528 0 11.838 5.31 11.838 11.838 0 6.527-5.31 11.838-11.838 11.838z"></path>
                                </svg>
                                <input type="text" className={`${s.card__input}`}
                                       placeholder='Начните вводить название своей группы'/>
                                <ul className={s.card__dropdown} style={{display: "none"}}>
                                    <li className={s.card__dropitem}>
                                        <span className={s.groupName}>ЮСТ-Б-2-В-2017-1 (ИП)</span>
                                        <span className={s.groupFaculty}>Факультет психологии</span>
                                    </li>
                                    <li className={s.card__dropitem}>
                                        <span className={s.groupName}>ЛИН-М-1-В-2018-1</span>
                                        <span className={s.groupFaculty}>Факультет информационных технологий</span>
                                    </li>
                                    <li className={s.card__dropitem}>
                                        <span className={s.groupName}>СЕД-Б-02-В-2019-2</span>
                                        <span
                                            className={s.groupFaculty}>Факультет коммуникативного менеджмента</span>
                                    </li>
                                </ul>

                                <div className={s.schedule__table}>
                                    <div className={`${s.schedule__tableWrapper} ${s.tableWrap}`}>
                                        <table style={{paddingBottom: '29px'}}>
                                            <thead>
                                            <tr>
                                                <th>Время</th>
                                                <th className={s.table__auditory}>Аудитория</th>
                                                <th>Тип занятия</th>
                                                <th>Дисциплина</th>
                                                <th>Преподаватель</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr className={s.table__divider}>
                                                <td className={s.table__dividerCell}>22.03.2020 Понедельник</td>
                                            </tr>
                                            <tr>
                                                <td data-label="Время">8:30 - 10:00</td>
                                                <td data-label="Аудитория"><a href={"#"}>ВП8-404</a></td>
                                                <td data-label="Тип занятия">Лекция</td>
                                                <td data-label="Дисциплна">Управление государственными и муниципальными
                                                    услугами и заказами
                                                </td>
                                                <td data-label={"Преподаватель"}>Рябова Татьяна Михайловна
                                                    <span className={"table__teacher"}> к.соц.н. </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td data-label="Время">8:30 - 10:00</td>
                                                <td data-label="Аудитория"><a href={"#"}>ВП8-404</a></td>
                                                <td data-label="Тип занятия">Лекция</td>
                                                <td data-label="Дисциплна">Управление государственными и муниципальными
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
                                                <td data-label="Дисциплна">Управление государственными и муниципальными
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
                                                <td data-label="Дисциплна">Управление государственными и муниципальными
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
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Students;