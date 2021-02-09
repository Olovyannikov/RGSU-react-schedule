import f from './Footer.module.scss';

const Footer = () => {
    return (
        <footer>
            <div className={`${f.footer__container} container`}>
                <div className={f.footer__wrapper}>
                    <a href="#" className={`${f.footer__btn} ${f.footer__btn_error} btn btn_logo`}>
                        <svg viewBox="0 0 19 17" id="bell" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M14.534 8.963v-2.78c.013-2.119-1.412-3.525-2.636-4.084a6.216 6.216 0 00-1.08-.376v-.178a1.547 1.547 0 00-3.091 0v.205a6.138 6.138 0 00-.972.351c-1.354.624-2.725 2.127-2.737 4.08v2.782c0 1.975-.697 3.669-2.072 5.035a.31.31 0 00.165.524l2.933.507c.547.094 1.05.171 1.529.235.54 1.057 1.598 1.735 2.756 1.735 1.157 0 2.216-.678 2.756-1.736.476-.063.977-.14 1.52-.234l2.934-.507a.309.309 0 00.165-.524c-1.44-1.431-2.17-3.125-2.17-5.035zM8.345 1.545a.928.928 0 011.854 0v.057a6.146 6.146 0 00-1.854.014v-.07zm.984 14.836a2.477 2.477 0 01-1.983-1.025c.69.071 1.335.107 1.98.107.646 0 1.293-.036 1.987-.108a2.478 2.478 0 01-1.984 1.026zm4.172-1.962c-.593.103-1.137.186-1.65.251h-.003c-.226.029-.447.054-.662.076h-.005a20.165 20.165 0 01-1.18.082l-.1.004c-.384.013-.763.013-1.148 0-.034 0-.069-.003-.103-.004-.16-.006-.32-.014-.484-.025l-.116-.008a20.301 20.301 0 01-.564-.048l-.02-.002a24.397 24.397 0 01-.657-.074h-.003a37.315 37.315 0 01-1.657-.252l-2.367-.409c1.23-1.407 1.854-3.102 1.854-5.047v-2.78c.01-1.68 1.202-2.978 2.377-3.52.35-.161.712-.282 1.081-.366h.01a5.62 5.62 0 012.343-.022h.012c.402.084.8.211 1.182.386 1.14.521 2.286 1.811 2.275 3.52v2.782c0 1.865.672 3.599 1.951 5.048l-2.366.408z"></path>
                            <path
                                d="M11.256 3.504c-1.198-.547-2.665-.548-3.854 0-.679.314-1.83 1.229-1.839 2.676 0 .17.137.31.308.31h.001c.17 0 .309-.136.31-.307.007-1.136.933-1.865 1.478-2.117a4.091 4.091 0 013.338 0 .31.31 0 00.258-.562zM1.484 6.272a.309.309 0 00-.437 0A3.555 3.555 0 000 8.803c0 .958.372 1.857 1.047 2.532a.308.308 0 10.437-.437 2.941 2.941 0 01-.866-2.095c0-.792.308-1.536.866-2.094a.31.31 0 000-.437z"></path>
                            <path
                                d="M2.567 10.722a.308.308 0 00.218-.528 2.03 2.03 0 010-2.867.309.309 0 10-.437-.437 2.648 2.648 0 000 3.741c.06.06.14.09.219.09zm14.93-4.45a.309.309 0 10-.437.437 2.94 2.94 0 01.866 2.094 2.94 2.94 0 01-.866 2.095.309.309 0 10.437.437 3.555 3.555 0 001.047-2.532c0-.957-.371-1.856-1.047-2.531z"></path>
                            <path
                                d="M15.76 6.89a.309.309 0 000 .437c.79.79.79 2.077 0 2.867a.309.309 0 10.436.437 2.648 2.648 0 000-3.74.309.309 0 00-.437 0z"></path>
                        </svg>
                        Сообщить об ошибке</a>
                    <span className={f.footer__descr}>
                        Версия расписания от 20.03.2020
                    </span>
                    <a href="#" className={`${f.footer__btn} ${f.footer__btn_print} btn btn_logo`}>
                        <svg viewBox="0 0 18 18" id="print" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M3.386 11.05V18h11.228v-6.95H3.386zm10.693 6.415H3.921v-5.88h10.158v5.88z"></path>
                            <path
                                d="M14.614 4.277V0H3.386v4.277H0v9.446h2.762v-.535H.535V4.812h16.93v8.376h-2.227v.535H18V4.277h-3.386zm-.535 0H3.921V.535h10.158v3.742zm-1.515 9.98H5.436v.535h7.128v-.535z"></path>
                            <path
                                d="M12.564 12.832H5.436v.534h7.128v-.534zm0 2.851H5.436v.535h7.128v-.535zm-9.802-9.98a.981.981 0 000 1.96.981.981 0 000-1.96zm0 1.426a.446.446 0 11.001-.892.446.446 0 010 .892zm6.505.713h-.534v.534h.534v-.534zm1.07 0h-.535v.534h.535v-.534zm-2.139 0h-.535v.534h.535v-.534z"></path>
                        </svg>
                        Распечатать</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;