"use client";
import Image from "next/image";
import Main from "../components/Main";
import flower from "../../public/images/flower.png";
import flowerSecond from "../../public/images/flowerSecond.png";
import Attendance from "../components/Attendance";
import Date from "../components/Date";
import toi from "../../public/images/toi.png";
import toi2 from "../../public/images/toi2.png";
import Social from "../components/social";
import insta from "../../public/images/insta.png";
import gis from "../../public/images/gis.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import form from "../../public/images/form.png";
import heart from "../../public/images/heart.png";
import Calendar from "@/components/Calendar";
import ToiBagdarlamasi from "../components/ToiBagdarlamasi";
import Map from "@/components/Map";

export default function Home() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    return (
        <div className="flex flex-col text-center ">
            <Main />
            <Image
                width={250}
                height={250}
                className="mx-auto mt-[-20px]"
                src={flower}
                alt="logo"
            />
            <div
                className="mt-[-150px] text-center text-2xl leading-normal"
                data-aos="fade-up"
            >
                <p>Құрметті ағайын-туыс</p>
                <p> бауырлар,</p>
                <p>құда-жекжат, нағашылар,</p>
                <p>бөле-жиендер,дос-жарандар, көршілер</p>
                <p>және әріптестер!</p>
            </div>
            <Image
                className="mx-auto mt-[-40px] mb-5"
                src={flowerSecond}
                alt="logo"
                width={100}
                height={100}
            />

            <div
                className="mt-[-50px] text-2xl text-center leading-normal"
                data-aos="fade-up"
            >
                <p>Cіз(дер)ді ұлымыз</p>
                <h2 className="text-4xl font color ">Ғалымжан</h2>
                <p>мен келініміз</p>
                <h2 className="text-4xl color font">Шынардың</h2>
                <p>үйлену тойына арналған</p>
                <p>салтанатты ақ</p>
                <p>дастарханымыздың</p>
                <p>Қадірлі қонағы болуға</p>
                <p>шақырамыз</p>
            </div>
            <Image
                className="mx-auto mt-[-50px]"
                src={flowerSecond}
                alt="logo"
                width={140}
                height={140}
            />
            <div
                className="mt-[-50px] text-3xl leading-relaxed color text-center font"
                data-aos="fade-up"
            >
                <p>Той салтанаты:</p>
                <p>2 тамыз 2024 жыл</p>
                <p>Сағат 16:00 басталады</p>
            </div>

            <Calendar />

            <Image
                className="mx-auto mt-[-30px]"
                src={flowerSecond}
                alt="logo"
                width={150}
                height={150}
            />

            <div
                className="mt-[-50px] text-3xl leading-relaxed font"
                data-aos="fade-up"
            >
                <h2>Той иелері:</h2>
                <h2 className="color">Амангелді - Құралай</h2>
            </div>

            <p className="mt-[50px] text-2xl">Тойға дейін:</p>
            <Date />

            <div
                className="mt-10 text-4xl leading-relaxed font"
                data-aos="fade-up"
            >
                <p>Мекен-жайымыз:</p>
                <p className="color">Теміртау қаласы</p>
                <p>9-й Микрорайон,98a</p>
                <p className="color">Тойбастар</p>
                <p >Мейрамханасы</p>
            </div>

            <div className="flex justify-center gap-10">
                <a href="https://www.instagram.com/toibastar_restoran_temirtau/">
                    <Image
                        className="mt-5 mb-10"
                        height={50}
                        width={50}
                        src={insta}
                        alt="Instagram"
                    />
                </a>
                <a href="https://2gis.kz/karaganda/firm/70000001056305233">
                    <Image
                        className="mt-5 mb-10 gis"
                        height={50}
                        width={50}
                        src={gis}
                        alt="GIS"
                    />
                </a>
            </div>
            <Map/>

            {/* <ToiBagdarlamasi /> */}
            <Attendance />

            <h2 className="mt-5  text-3xl color font">Байбосыновтар әулеті </h2>
            <p className="text-2xl leading-relaxed mb-10 color font">
                сіздерді күтеді!
            </p>
        </div>
    );
}
