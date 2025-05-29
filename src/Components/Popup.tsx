import Button from "./Button"
type PopupProps = {
    message: string
    description: string
    buttonText: string
    buttonAction: () => void
    secondButton: boolean
    secondaryButtonText?: string
    secondaryButtonAction?: () => void
}

export default function Popup(props: PopupProps) {
    return (
        <div className="w-screen h-screen fixed inset-0 bg-black/50 flex justify-center items-center">
            <div className="bg-white rounded-xl w-[350px] flex flex-col gap-6 p-4">
                {/* Popup texts */}
                <section className="flex flex-col justify-start">
                    <h2 className="popup-text">{props.message}</h2>
                    <h3>{props.description}</h3>
                </section>
                {/* Popup button */}
                <section className="flex flex-col items-center gap-4">
                    <Button text={props.buttonText} disabled={false} onClick={() => props.buttonAction()} />
                    {props.secondButton && <a href="" onClick={() => props.secondaryButtonAction!()}>{props.secondaryButtonText}</a>}
                </section>
            </div>
        </div>
    )
}