import NavItems from "./Components/NavItems";
import FormSearch from "./Components/FormSearch";
import navItemsList from "./navItemsList";
import { Carousel } from "flowbite-react";

import banner from "./assets/img/banner.jpg";
import emDestaqueImg1 from "./assets/img/resorts/emDestaque/TivoliEcoresortImg1.png";
import emDestaqueImg2 from "./assets/img/resorts/emDestaque/TivoliEcoresortImg2.png";
import emDestaqueImg3 from "./assets/img/resorts/emDestaque/TivoliEcoresortImg3.png";
import shadowImg from "./assets/img/resorts/image-shadow.png";
import resort1Img from "./assets/img/resorts/resort-1.png";
import resort2Img from "./assets/img/resorts/resort-2.png";
import resort3Img from "./assets/img/resorts/resort-3.png";
import resort4Img from "./assets/img/resorts/resort-4.png";
import whatsappIcon from "./assets/img/redesSociais/whatsapp-icon.png";
import facebookIcon from "./assets/img/redesSociais/facebook-icon.png";
import instagramIcon from "./assets/img/redesSociais/instagram-icon.png";
import twitterIcon from "./assets/img/redesSociais/twitter-icon.png";

function App() {
    return (
        <div className="bg-gray-50 text-gray-600 ">
            {/*---- header ----*/}
            <NavItems items={navItemsList} />

            {/*---- /header ----*/}

            {/*---- banner ----*/}
            <div
                style={{
                    backgroundImage: `url(${banner})`,
                    height: "409px",
                    backgroundSize: "100% 409px",
                }}
            >
                <div
                    className="h-full "
                    style={{
                        backgroundColor: "rgba(23, 25, 30, 0.5)",
                    }}
                >
                    <div className="container h-full mx-auto px-4 flex flex-col items-center justify-center">
                        <div className="text-center">
                            <h1 className="text-gray-200 text-bold text-3xl mb-2">
                                Quais os melhores resorts para conhecer?
                            </h1>
                            <p className="text-green-100">
                                Escolha o estado e cidade que acharemos apenas
                                os melhores para você!
                            </p>
                        </div>

                        <div className="mt-7">
                            <FormSearch />
                        </div>
                    </div>
                </div>
            </div>

            {/*---- /banner ----*/}

            {/*---- featured resort----*/}
            <div className="flex justify-center">
                <div className="flex flex-col sm:flex-row items-center justify-center px-8 py-14 sm:space-y-0  sm:space-x-4 max-w-5xl">
                    <div className="sm:w-2/4 order-last sm:order-first">
                        <div className="text-xs text-gray-400 font-medium ">
                            <h2>RESORT EM DESTAQUE</h2>
                            <h3 className="text-2xl text-gray-900">
                                Ecoresort Praia do Forte Bahia
                            </h3>
                            <div>
                                <p className="mt-1">Resort 5 estrelas</p>
                                <div className="hidden md:inline-block space-y-4 mt-4">
                                    <p>
                                        Officia commodo et excepteur aliqua sint
                                        ad nostrud eiusmod qui occaecat veniam
                                        aute sint ut.Lorem voluptate do do
                                        cillum Lorem aliquip id magna
                                        exercitation.Aliquip anim officia qui
                                        sunt deserunt officia fugiat laboris
                                        consequat culpa anim.
                                    </p>
                                    <p>
                                        Ullamco amet deserunt est laboris
                                        cupidatat sint.Ipsum sint laboris
                                        consectetur eiusmod quis elit
                                        exercitation consequat.Eiusmod nisi qui
                                        quis irure cillum fugiat ex.Veniam
                                        laboris non amet irure nulla incididunt.
                                    </p>
                                </div>
                            </div>

                            <button className="flex md:w-auto items-center mt-3 text-sm text-yellow-900 bg-yellow-500 font-medium px-3 py-2 rounded hover:text-yellow-700">
                                Solicitar Reserva
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-4 h-4 ml-1"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="h-56 w-11/12 pb-4 sm:pb-0">
                        <Carousel
                            className="duration-700"
                            slideInterval={5000}
                            leftControl=" "
                            rightControl=" "
                        >
                            <img
                                className="h-full"
                                src={emDestaqueImg1}
                                alt="TivoliEcoresort imagem 1"
                            />
                            <img
                                className="h-full"
                                src={emDestaqueImg2}
                                alt="TivoliEcoresort imagem 2"
                            />
                            <img
                                className="h-full"
                                src={emDestaqueImg3}
                                alt="TivoliEcoresort imagem 3"
                            />
                        </Carousel>
                    </div>
                </div>
            </div>

            {/*---- /featured resort----*/}

            {/*---- resorts grid----*/}
            <div>
                <div className="container mx-auto px-6 max-w-5xl">
                    <div>
                        <h2 className="text-2xl text-gray-500 font-semibold text-center mb-8">
                            Conheça mais resorts
                        </h2>
                        <div className="grid grid-cols-4 grid-rows-2 gap-6 sm:h-72">
                            <div className="relative col-span-4 sm:col-span-2 md:row-span-2 rounded overflow-hidden h-56 sm:h-auto">
                                <img
                                    className="absolute bottom-0"
                                    src={shadowImg}
                                    alt="Sombra da imagem"
                                />
                                <h3 className="absolute bottom-0 pl-4 pb-1 text-white text-lg sm:text-sm font-bold">
                                    Beach Park Resort
                                </h3>
                                <img
                                    className="w-full h-full object-cover "
                                    src={resort1Img}
                                    alt="Imagem do Beach Park Resort"
                                />
                            </div>

                            <div className="relative col-span-4 sm:col-span-2 rounded overflow-hidden h-56 sm:h-auto">
                                <img
                                    className="absolute bottom-0"
                                    src={shadowImg}
                                    alt="Sombra da imagem"
                                />
                                <h3 className="absolute bottom-0 pl-4 pb-1 text-white text-lg sm:text-sm font-bold">
                                    Salinas Maragogi All Inclusive Resort
                                </h3>
                                <img
                                    className="w-full h-full object-cover"
                                    src={resort2Img}
                                    alt="Imagem do Resort Salinas Maragogi"
                                />
                            </div>

                            <div className="relative col-span-4 sm:col-span-2 md:col-span-1 rounded overflow-hidden h-56 sm:h-auto">
                                <img
                                    className="absolute bottom-0"
                                    src={shadowImg}
                                    alt="Sombra da imagem"
                                />
                                <h3 className="absolute bottom-0 pl-4 pb-1 text-white text-lg sm:text-sm font-bold">
                                    Grand Palladium Imbassai Resort And Spa
                                </h3>
                                <img
                                    className="w-full h-full object-cover"
                                    src={resort3Img}
                                    alt="Imagem do Resort e Spa Grand Palladium Imbassai Resort"
                                />
                            </div>

                            <div className="relative col-span-4 sm:col-span-2 md:col-span-1 rounded overflow-hidden h-56 sm:h-auto">
                                <img
                                    className="absolute bottom-0"
                                    src={shadowImg}
                                    alt="Sombra da imagem"
                                />
                                <h3 className="absolute bottom-0 pl-4 pb-1 text-white text-lg sm:text-sm font-bold">
                                    Arraial d'Ajuda Eco
                                </h3>
                                <img
                                    className="w-full h-full object-cover"
                                    src={resort4Img}
                                    alt="Imagem do Resort Arraial d'Ajuda Eco"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*---- /resorts grid----*/}

            {/*---- form search ----*/}
            <div className="px-4 py-20">
                <FormSearch />
            </div>

            {/*---- /form search ----*/}

            {/*---- footer ----*/}
            <div className="border-t border-gray-200">
                <div className="container mx-auto py-4 px-8 flex items-center justify-between max-w-5xl">
                    <a href="#" className="text-xl text-gray-400 font-black">
                        LOGO
                    </a>
                    <div className="flex items-center space-x-3">
                        <a href="#">
                            <img
                                src={facebookIcon}
                                className="h-5 w-5"
                                alt="Facebook"
                            ></img>
                        </a>
                        <a href="#">
                            <img
                                src={instagramIcon}
                                className="h-5 w-5"
                                alt="Instagram"
                            ></img>
                        </a>
                        <a href="#">
                            <img
                                src={twitterIcon}
                                className="h-5 w-5"
                                alt="Twitter"
                            ></img>
                        </a>
                        <a href="#">
                            <img
                                src={whatsappIcon}
                                className="h-5 w-5"
                                alt="WhatsApp"
                            ></img>
                        </a>
                    </div>
                </div>
            </div>

            {/*---- /footer ----*/}
        </div>
    );
}

export default App;
