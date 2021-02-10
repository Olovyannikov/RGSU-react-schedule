import Dropdown from "../Dropdown/Dropdown";
import s from "../CardSearch.module.scss";
import React from 'react';

const Autocomplete = () => {
    const [inputValue, setInputValue] = React.useState("");
    const [filteredSuggestions, setFilteredSuggestions] = React.useState([]);
    const [selectedSuggestion, setSelectedSuggestion] = React.useState(0);
    const [displaySuggestions, setDisplaySuggestions] = React.useState(false);

    const suggestions = [
        ["А-СОЦ-00.08-Д-2019-1", "Факультет управления"],
        ["А-ИВТ-13.11-Д-2019-1", "Факультет информационных технологий"],
        ["А-СОЦ-00.04-Д-2019-1", "Факультет социологии"],
        ["А-ИСТ-00.02-Д-2019-1", "Гуманитарый факультет"],
        ["ЖУР-Б-0-Д-2017-1", "Факультет коммуникативного менеджмента"],
        ["ЮСТ-Б-0-В-2019-1", "Юридический факультет"],
        ["Колледж РГСУ", "Колледж РГСУ"],
    ];

    const onChange = event => {
        const value = event.target.value;
        setInputValue(value);

        const filteredSuggestions = suggestions.filter(suggestion =>
            suggestion[0].toLowerCase().includes(value.toLowerCase())
            || suggestion[1].toLowerCase().includes(value.toLowerCase())
        ).slice(0, 3);

        setFilteredSuggestions(filteredSuggestions);
        setDisplaySuggestions(true);
    };

    const onSelectSuggestion = index => {
        setSelectedSuggestion(index);
        setInputValue(filteredSuggestions[index]);
        setFilteredSuggestions([]);
        setDisplaySuggestions(false);
    };

    return (
        <>
            <input autoComplete='off' id="searchInput" type="text" className={`${s.card__input}`}
                   placeholder='Начните вводить название своей группы' onChange={onChange} value={inputValue}/>
            <Dropdown
                inputValue={inputValue}
                selectedSuggestion={selectedSuggestion}
                onSelectSuggestion={onSelectSuggestion}
                displaySuggestions={displaySuggestions}
                suggestions={filteredSuggestions}
            />
        </>
    );
}

export default Autocomplete;