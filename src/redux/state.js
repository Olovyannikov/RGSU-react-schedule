let state = {
    dropdown: {
        suggestions : [
            {group: "А-СОЦ-00.08-Д-2019-1", faculty: " Факультет управления"},
            {group: "А-ИВТ-13.11-Д-2019-1", faculty: " Факультет информационных технологий"},
            {group: "А-СОЦ-00.04-Д-2019-1", faculty: " Факультет социологии"},
            {group: "А-ИСТ-00.02-Д-2019-1", faculty: " Гуманитарый факультет"},
            {group: "ЖУР-Б-0-Д-2017-1", faculty: " Факультет коммуникативного менеджмента"},
            {group: "ЮСТ-Б-0-В-2019-1", faculty: " Юридический факультет"},
            {group: "Колледж РГСУ", faculty: " Колледж РГСУ"},
            {group: "Колледж ПТУ", faculty: " Колледж ПТУ"},
        ],
        teachersList : [
            {teacher: "Козырь А. А.", graduate: " Магистр Джедай"},
            {teacher: "Оловянников И. В.", graduate: " Фронтенд-мастер"},
            {teacher: "Храмов С. В.", graduate: " Мистер бэк"},
        ],
    },
    table: {
        data : {
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
        },
    },
    search: {
        students : "Начните вводить название своей группы",
        teachers : "Начните вводить свое имя",
    }
}

export default state;