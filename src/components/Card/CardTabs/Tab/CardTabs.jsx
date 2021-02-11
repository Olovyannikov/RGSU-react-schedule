import s from './CardTabs.module.scss';
import {NavLink} from "react-router-dom";

const CardTabs = () => {
    return (
        <ul className={`${s.card__schedule} ${s.scheduleTabs}`}>
            <li className={`${s.schedule__item} ${s.schedule__item_active}`}>
                <svg width={22.4} height={24} viewBox="0 0 24 24" id="calendar"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M22.8 1.6H20V.4a.4.4 0 00-.4-.4h-2.8a.4.4 0 00-.4.4v1.2H7.6V.4a.4.4 0 00-.4-.4H4.4a.4.4 0 00-.4.4v1.2H1.2a.4.4 0 00-.4.4v21.6a.4.4 0 00.4.4h21.6a.4.4 0 00.4-.4V2a.4.4 0 00-.4-.4zM17.2.8h2v2.4h-2V.8zM4.8.8h2v2.4h-2V.8zM1.6 2.4H4v1.2a.4.4 0 00.4.4h2.8a.4.4 0 00.4-.4V2.4h8.8v1.2a.4.4 0 00.4.4h2.8a.4.4 0 00.4-.4V2.4h2.4V6H1.6V2.4zm0 20.8V6.8h20.8v16.4H1.6z"></path>
                    <path
                        d="M15.2 9.2H4.4v11.6h15.2V9.2h-4.4zm-2.8.8h2.8v2.8h-2.8V10zm2.8 6.4h-2.8v-2.8h2.8v2.8zm-6.4-2.8h2.8v2.8H8.8v-2.8zm0-3.6h2.8v2.8H8.8V10zm-3.6 0H8v2.8H5.2V10zm0 3.6H8v2.8H5.2v-2.8zM8 20H5.2v-2.8H8V20zm3.6 0H8.8v-2.8h2.8V20zm3.6 0h-2.8v-2.8h2.8V20zm3.6 0H16v-2.8h2.8V20zm0-3.6H16v-2.8h2.8v2.8zm0-6.4v2.8H16V10h2.8z"></path>
                </svg>
                <NavLink className={`${s.schedule__link} ${s.schedule__link_active}`} to={"/"}>Расписание
                    занятий</NavLink>
            </li>
            <li className={s.schedule__item}>
                <svg height={24} width={24} viewBox="0 0 24 24" id="user"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M24 12c0-6.617-5.383-12-12-12S0 5.383 0 12a11.97 11.97 0 003.895 8.84l-.011.01.389.328c.025.021.053.039.078.06a12.043 12.043 0 00.853.643c.233.161.472.313.716.458l.16.092c.268.153.541.296.821.428l.062.028a11.86 11.86 0 002.902.918l.08.015c.316.054.636.098.96.127l.118.01c.322.026.647.043.977.043.327 0 .65-.017.97-.043l.121-.009c.321-.03.638-.072.95-.125l.082-.015a11.892 11.892 0 002.862-.897l.1-.045a12.104 12.104 0 001.671-.955c.08-.055.16-.113.24-.17.191-.139.38-.281.562-.43.04-.033.084-.061.124-.095l.4-.333-.012-.01A11.969 11.969 0 0024 12zM.873 12C.873 5.864 5.864.873 12 .873 18.136.873 23.127 5.864 23.127 12a11.1 11.1 0 01-3.748 8.318 3.257 3.257 0 00-.39-.234l-3.694-1.847a.967.967 0 01-.538-.87v-1.29c.086-.106.176-.225.27-.357a8.89 8.89 0 001.141-2.235c.553-.263.91-.813.91-1.435v-1.547a1.59 1.59 0 00-.387-1.034V7.433c.023-.227.103-1.505-.822-2.56-.804-.917-2.106-1.382-3.869-1.382-1.763 0-3.065.465-3.87 1.382-.924 1.055-.844 2.333-.82 2.56v2.036a1.59 1.59 0 00-.388 1.033v1.547c0 .48.216.929.585 1.231a8.199 8.199 0 001.35 2.788v1.263a.974.974 0 01-.508.855L4.9 20.067c-.11.06-.219.13-.328.208A11.1 11.1 0 01.873 12zm17.655 9.003c-.153.11-.308.218-.466.32a10.934 10.934 0 01-.848.502 11.126 11.126 0 01-1.664.717l-.055.02c-.274.09-.55.171-.831.24l-.003.001c-.282.07-.569.128-.857.175l-.023.005c-.271.044-.544.076-.818.1l-.146.01c-.271.021-.543.034-.817.034-.277 0-.552-.013-.827-.034l-.142-.01a11.271 11.271 0 01-.825-.102l-.037-.007a11.075 11.075 0 01-1.697-.424l-.051-.017a11.26 11.26 0 01-.813-.311l-.006-.003a11.4 11.4 0 01-.744-.356c-.032-.017-.064-.032-.095-.05a11.2 11.2 0 01-.846-.503c-.198-.13-.394-.265-.584-.407l-.058-.046.042-.023 3.45-1.882c.593-.324.962-.945.962-1.62v-1.573l-.1-.121c-.01-.01-.954-1.159-1.31-2.713l-.04-.172-.149-.097a.723.723 0 01-.335-.607v-1.547c0-.203.086-.392.243-.534l.144-.13v-2.43l-.004-.057c-.001-.01-.13-1.06.609-1.903.631-.72 1.712-1.084 3.213-1.084 1.495 0 2.573.362 3.206 1.076.738.834.617 1.903.616 1.911l-.004 2.488.144.13c.157.142.243.33.243.534v1.547a.729.729 0 01-.515.687l-.217.067-.07.216a8.075 8.075 0 01-1.089 2.196 5.393 5.393 0 01-.321.414l-.108.123v1.614c0 .704.39 1.336 1.02 1.65l3.695 1.848.07.036c-.047.035-.095.068-.142.102z"></path>
                </svg>
                <NavLink className={s.schedule__link} to={"/schedule/sensei"}>Расписание преподавателей</NavLink>
            </li>
            <li className={s.schedule__item}>
                <svg height={24} width={24} viewBox="0 0 24 24" id="layers"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M19.783 9.585L24 7.175 12 .36 0 7.175l4.217 2.41L0 11.979l4.217 2.41L0 16.783l12 6.856 12-6.856-4.217-2.394L24 11.979l-4.217-2.394zM12 1.365l10.235 5.812L12 13.025 1.765 7.177 12 1.365zm-6.9 8.723l6.9 3.943 6.901-3.943 3.334 1.894L12 17.829 1.765 11.981l3.334-1.893zm17.136 6.698L12 22.634 1.765 16.786l3.334-1.894L12 18.835l6.901-3.943 3.334 1.894z"></path>
                </svg>
                <NavLink className={s.schedule__link} to={"/traffic"}>Загруженность аудиторий</NavLink>
            </li>
        </ul>
    );
}

export default CardTabs;