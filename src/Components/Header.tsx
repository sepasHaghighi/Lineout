import Logo from "./Logo";


type HeaderProps = {
    menu: boolean
    back: boolean
    logoColor?: "black"
}
export default function Header(props:HeaderProps) {
    return (
        <nav className="w-full flex flex-row justify-center items-center p-8 pt-4 ">
            <a href="" className={`flex flex-row items-center ${!props.back ? 'invisible' : ''}`} onClick={(e) => {
                e.preventDefault();
                window.history.back();
            }}>
                <span className="material-symbols-rounded ">
                    arrow_back
                </span>
            </a>
            <section className="w-full flex justify-center">
                <Logo size="small" logoColor={props.logoColor}/>
            </section>
            <span className={`material-symbols-rounded ${!props.menu ? 'invisible' : ''}`}>
                menu
            </span>
        </nav>
    )
}