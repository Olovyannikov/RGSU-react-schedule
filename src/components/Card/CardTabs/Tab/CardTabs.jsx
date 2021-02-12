
import {LinkedTabs, Tab} from "../LinkedTabs/LinkedTabs";

const CardTabs = (props) => {
    return (
        <LinkedTabs route={''}>
            <Tab label={"students"} tabName={"Расписание занятий"}>
                <p>Upcoming events goes here</p>
            </Tab>
            <Tab label={"sensei"} tabName={"Расписание преподавателей"}>
                <p>Your past events</p>
            </Tab>
            <Tab label={"traffic"} tabName={"Загруженость аудиторий"}>
            <p>Your past events</p>
        </Tab>
        </LinkedTabs>
    );
}

export default CardTabs;