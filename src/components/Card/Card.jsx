import CardTabs from "./CardTabs/Tab/CardTabs";

const Card = (props) => {
    return (
        <>
            <CardTabs
                teachersList={props.dropdown.teachersList}
                suggestions={props.dropdown.suggestions}
                data={props.table.data}
                teachers={props.search.teachers}
                students={props.search.students}
            />
        </>
    )
};

export default Card;