import s from "./Card.module.scss";
import CardTabs from "./CardTabs/Tab/CardTabs";
import CardSearch from "./CardSearch/Search/CardSearch"
import CardTable from "./CardTable/Table/CardTable";

const Card = () => {
    return (
        <>
            <CardTabs/>
            <CardSearch/>
            <CardTable/>
        </>
)
}

export default Card;