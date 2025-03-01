
function services() {
    const topImages = [
        { id: 1, image: "../../images/1 (7).webp" },
        { id: 2, image: "../../images/1 (5).webp" },
        { id: 3, image: "../../images/1 (2).webp" },
        { id: 4, image: "../../images/1 (3).webp" },
        { id: 5, image: "../../images/1 (2).webp" },
    ]
    const bottomImages = [
        { id: 1, image: "../../images/1 (7).webp" },
        { id: 2, image: "../../images/1 (3).webp" },
        { id: 3, image: "../../images/1 (6).webp" },
        { id: 4, image: "../../images/1 (7).webp" },
        { id: 5, image: "../../images/1 (2).webp" },
    ]

    return (
        <>
            <div className="gallery h-[500px] overflow-hidden mdmin:mt-10 max-w-[1100px]">
                <div className="gallery-containe w-full h-full">
                    <div className="top-images w-full max-w-[1000px] h-1/2 flex gap-4 p-2">
                        {
                            topImages.map((item, i) => {
                                return (
                                    <img key={i} className=" max-w-[364px] rounded-lg" src={item.image} alt="" />
                                )
                            })
                        }
                    </div>
                    <div className="bottom-images w-full max-w-[1000px] h-1/2 flex gap-4 p-2">
                        {
                            bottomImages.map((item, i) => {
                                return (
                                    <img key={i} className=" max-w-[364px] rounded-lg" src={item.image} alt="" />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default services;