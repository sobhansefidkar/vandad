import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function Costumer() {
    const costumers = [
        { name: "سایاهو", type: "قراردادی", phone: "09018619939", img: "../../images/logo (1).webp" },
        { name: "تولید نور", type: "قراردادی", phone: "09019109939", img: "../../images/logo (2).webp" },
        { name: "سایاهو", type: "قراردادی", phone: "09015006639", img: "../../images/logo (3).webp" },
        { name: "سایاهو", type: "پروژه ای", phone: "09011239939", img: "../../images/logo (4).webp" },
        { name: "سایاهو", type: "قراردادی", phone: "09017309939", img: "../../images/logo (5).webp" },
        { name: "سایاهو", type: "قراردادی", phone: "09015909939", img: "../../images/logo (6).webp" },
        { name: "سایاهو", type: "قراردادی", phone: "09017409939", img: "../../images/logo (7).webp" },
        { name: "سایاهو", type: "قراردادی", phone: "09017369269", img: "../../images/logo (8).webp" },
        { name: "سایاهو", type: "قراردادی", phone: "09658709939", img: "../../images/logo (9).webp" },
        { name: "سایاهو", type: "قراردادی", phone: "09017422648", img: "../../images/logo (10).webp" },
        { name: "سایاهو", type: "قراردادی", phone: "09018509951", img: "../../images/logo (11).webp" },
        { name: "سایاهو", type: "قراردادی", phone: "09017409369", img: "../../images/logo (12).webp" },
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        draggable: true,
        arrows: true,
        autoplay: 4000,
        responsive: [
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: false
                },
            },
        ],
    };
    return (
        <div className="contractCostumers w-full h-auto flex justify-center my-10">
            <div className="contractCostumers-container w-full h-full flex flex-col items-center">
                <div className=" flex justify-center">
                    <h2 className=" px-3 py-2 border-b border-gray-400 text-2xl">مشتریان ما</h2>
                </div>
                <div className=" w-full h-96 rounded-md py-4 pb-7 flex justify-center items-center max-w-[1100px]">
                    <div className='carousel-container mdmax:w-full w-[93%]'>
                        <Slider {...settings}>
                            {
                                costumers.map((item, i) => {
                                    return (
                                        <div key={i} className=" duration-500 mdmax:max-w-[90%] mdmax:ml-[5%] max-w-[400px] external:max-w-[300px] external:ml-10 lgmin:ml-14 min-h-[250px] bg-white snap-center rounded-lg">
                                            <div className=" w-full flex justify-center ">
                                                <img src={item.img} alt="" />
                                            </div>
                                            <div className=" w-full px-4 flex flex-col gap-3">
                                                <p className=" text-xs text-end"> شرکت : {item.name} </p>
                                                <p className=" text-xs text-end"> نوع شراکت : <span className=' text-red-500'>{item.type}</span> </p>
                                                <p className=" text-xs text-end"> شماره تماس : {item.phone} </p>

                                                <div className=" w-full flex justify-center">
                                                    <button
                                                        className="overflow-hidden translate-y-[10px] w-32 p-2 h-12 bg-gray-800 text-white border-none rounded-md text-sm font-bold cursor-pointer relative z-10 group"
                                                    >
                                                        اطلاعات بیشتر
                                                        <span
                                                            className="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-right"
                                                        ></span>
                                                        <span
                                                            className="absolute w-36 h-32 -top-8 -left-2 bg-gray-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-right"
                                                        ></span>
                                                        <span
                                                            className="absolute w-36 h-32 -top-8 -left-2 bg-gray-700 rotate-12 transform scale-x-0 group-hover:scale-x-50 transition-transform group-hover:duration-1000 duration-500 origin-right"
                                                        ></span>
                                                        <span
                                                            className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-[50%] translate-x-[-50%] z-10"
                                                        >
                                                            برو
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Costumer;