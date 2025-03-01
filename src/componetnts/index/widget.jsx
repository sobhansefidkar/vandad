
function Widget() {
    const widgets = [
        { img: "../../images/cat3.png", text: "رایانه و تکنولوژی" },
        { img: "../../images/cat3.png", text: "رایانه و تکنولوژی" },
        { img: "../../images/cat3.png", text: "رایانه و تکنولوژی" },
        { img: "../../images/cat3.png", text: "رایانه و تکنولوژی" },
        { img: "../../images/cat3.png", text: "رایانه و تکنولوژی" },
        { img: "../../images/cat3.png", text: "رایانه و تکنولوژی" },
    ]
    return (
        <div className="widget w-full h-auto flex justify-center">
            <div className="widget-container w-full max-w-[1000px] h-full flex">
                <ul className="widget-scroller w-full h-full flex justify-between items-center overflow-x-auto overflow-y-hidden">
                    {widgets.map((item, i) => {
                        return (
                            <li key={i} className=" lgmax:min-w-[150px]  flex flex-col items-center justify-center">
                                <img src={item.img} alt="" />
                                <span className=" text-xs">{item.text}</span>
                            </li>
                        )
                    })
                    }
                </ul>
            </div>
        </div>
    );
}

export default Widget;