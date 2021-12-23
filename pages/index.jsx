import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image'
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { useState } from 'react';
import Navbar from '../component/navbar';
import Skills from '../component/portofolio/skills';
import Works from '../component/portofolio/work';
import CarouselSkills from '../component/portofolio/carousel';

import Profil from '../public/img/Profil.png'
import About from '../public/img/profil2.jpg'
import Digifile1 from '../public/img/Digifile.jpg';
import Digifile2 from '../public/img/Digifile2.jpg';
import Digifile3 from '../public/img/Digifile3.jpg';
import CAT1 from '../public/img/CAT.JPG';
import CAT2 from '../public/img/CAT2.JPG';
import CAT3 from '../public/img/CAT3.JPG';
import qna1 from '../public/img/qna1.jpg';
import qna2 from '../public/img/qna2.jpg';
import Review1 from '../public/img/review.jpg';
import Review2 from '../public/img/review2.jpg';

import Sertifikat1 from '../public/img/sertifikat3.jpg';
import Sertifikat2 from '../public/img/sertifikat4.png';
import Sertifikat3 from '../public/img/sertifikat6.png';
import Sertifikat4 from '../public/img/sertifikat5.jpg';
import Sertifikat5 from '../public/img/PPI.jpg';
import Sertifikat6 from '../public/img/WSEEC.jpg';
import Sertifikat7 from '../public/img/work1.jpeg';
import Sertifikat8 from '../public/img/sertifikat2.jpg';
import Sertifikat9 from '../public/img/IYSA.jpg';
import Sertifikat10 from '../public/img/IICYMS.jpg';
import Head from 'next/head';




export default function Login() {

  return (
    <div className='body'>
      <Head>
        <title>Portofolio Febyk</title>
      </Head>
      <Navbar title="Febyk Alek Satria">
        <div className="nav__menu font-semibold" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item"><a href="#home" className="nav__link no-underline">Home</a></li>
            <li className="nav__item"><a href="#about" className="nav__link no-underline">About</a></li>
            <li className="nav__item"><a href="#skills" className="nav__link no-underline">Skills</a></li>
            <li className="nav__item"><a href="#Work" className="nav__link no-underline">Work</a></li>
            <li className="nav__item"><a href="#Achievement" className="nav__link no-underline">Achievement</a></li>
            <li className="nav__item"><a href="#contact" className="nav__link no-underline">Contact</a></li>
          </ul>
        </div>
      </Navbar>

      {/* <!-- Home --!> */}
      <section className="home bd-grid font-bold" id="home">
        <div className="home__data">
          <h1 className="home__title">{"Hi,I'am"} <span className="text-sky-400 font-semibold">Febyk</span><br /> Frontend<br />
            Developer</h1>

          <a href="https://drive.google.com/file/d/1u-cF2MOQGy1GNlnQO5vv4ULWp952IPQj/view?usp=sharing"
            className="bg-sky-500 text-white font-semibold text-lg md:text-xl mb-6 px-8 py-3 shadow-md rounded-3xl no-underline">Download CV</a>
        </div>

        <div className="home__social">
          <a href="www.linkedin.com/in/febykaleksatria" className="home__social-icon"><BsLinkedin /> </a>
          <a href="" className="home__social-icon"> <BsGithub /></a>
          <a href="https://www.instagram.com/string_sout/" className="home__social-icon"><RiInstagramFill /></a>
          <a href="https://wa.me/+6281373107544" className="home__social-icon"><IoLogoWhatsapp /></a>
        </div>

        <div className="home__img pt-5">
          <Image src={Profil} alt="" />
        </div>
      </section>

      {/* <!-- ABOUT --!> */}
      <section className="about section " id="about">
        <h2 className="font-bold text-5xl text-center uppercase mb-10">About</h2>

        <div className="about__container">
          <figure className="w-10/12 lg:w-8/12 lg:flex bg-white shadow-md rounded-xl p-8 md:p-0 mx-auto">
            <Image className="w-40 h-40 lg:w-72 lg:h-auto rounded-full lg:rounded-none mx-auto"
              src={About} alt="profil" />
            <div className="pt-6 md:p-8 md:text-center lg:text-left space-y-4">
              <blockquote>
                <p className="text text-base text-gray-700">
                  “Saya mahasiswa S1 Teknik Informatika UNSRI, memiliki komitmen untuk
                  menyelesaikan masalah dalam suatu pekerjaan, selama berkuliah
                  saya memeiliki beberapa penghargaan regional, nasional maupun internasional. Selama
                  berkuliah saya bekerja sebagai <i>Freelancer</i> pengembangan web khususnya di bidang
                  <b>Frontend
                    Developer</b>. Saya juga berpengalaman
                  dibidang desain dengan beberapa penghargaan yang saya dapatkan dengan menggunakan
                  Photoshop.”
                </p>
              </blockquote>
              <figcaption className="font-medium">
                <div className="text-sky-400 font-bold">
                  Febyk Alek Satria
                </div>
                <div className="text-color">
                  Mahasiswa | Frontend Developer | Indonesia
                </div>
              </figcaption>
            </div>
          </figure>
        </div>
      </section>

      {/* <!-- SKILL --!> */}

      <section className="skills section" id="skills">

        <h2 className="font-bold text-5xl text-center">SKILLS</h2>


        <div className="md:grid md:grid-cols-2 lg:grid-cols-3 bg-white px-4 md:py-8 md:px-8 md:m-16 rounded-lg">
          <Skills title="Pemograman">
            <hr className="text-gray-600 mb-2" />
            <p className="text-gray-600 text-base mb-2">Java</p>
            <p className="text-gray-600 text-base mb-2">JavaScript</p>
            <p className="text-gray-600 text-base mb-2">PHP</p>
            <p className="text-gray-600 text-base mb-2">HTML</p>
            <p className="text-gray-600 text-base mb-2">CSS</p>
          </Skills>

          <Skills title="Framework/Library">
            <hr className="text-gray-600 mb-2" />
            <p className="text-gray-600 text-base mb-2">React JS/Next JS</p>
            <p className="text-gray-600 text-base mb-2">Node JS</p>
            <p className="text-gray-600 text-base mb-2">Express JS</p>
            <p className="text-gray-600 text-base mb-2">Codeigniter</p>
            <p className="text-gray-600 text-base mb-2">Laravel</p>
            <p className="text-gray-600 text-base mb-2">Tailwind</p>
            <p className="text-gray-600 text-base mb-2">Boostrap</p>
          </Skills>
          <Skills title="Database">
            <hr className="text-gray-600 mb-2" />
            <p className="text-gray-600 text-base mb-2">MySQL</p>
            <p className="text-gray-600 text-base mb-2">SQLite</p>
          </Skills>
        </div>
      </section>

      {/* <!-- Work --!> */}
      <section className="about section" id="Work">
        <h2 className="font-bold text-5xl text-center uppercase">Work</h2>
        <div className="px-10  md:px-8 md:flex item-center w-full">
          <div className="mx-auto lg:grid grid-cols-2 gap-20">

            <Works
              desc="Sistem penyimpanan secara digital untuk membantu mempermudah dan mengamankan file perusahaan. PWA ini dikembangkan dengan beberapa teknologi terbaru :"
              lang=" JavaScript "
              framework=" React Js"
              css=" Tailwind"
              api=" API Go-lang"
              database=" PostgreSql"
              statusWork="Freelancer"
              status="Done"
              statusRepo="repository is private"
              link="https://github.com/FebykAlekSatria/DIGIFILE"
            >
              <div>
                <CarouselSkills
                  image1={Digifile1}
                  image2={Digifile2}
                  image3={Digifile3}
                />
              </div>
            </Works>

            <Works
              desc="Web-Cat berfungsi untuk mengevaluasi pengetahuan dari instansi PGRI yang ada di SUMSEL. Web ini dikembangkan dengan beberapa teknologi terbaru :"
              lang=" PHP "
              framework=" CodeIgniter"
              css=" Boostrap"
              api=" PHP"
              database=" MySql"
              statusWork="Freelancer"
              status="Done"
              statusRepo="repository is private"
              link="https://github.com/FebykAlekSatria/ProjectWEBCAT"
            >
              <div>
                <CarouselSkills
                  image1={CAT1}
                  image2={CAT2}
                  image3={CAT3}
                />
              </div>
            </Works>

            <Works
              desc="Blog Reviwer merupakan sebuah website untuk meriview barang untuk menarik pembeli. Web ini dikembangkan dengan beberapa teknologi terbaru :s"
              lang=" PHP "
              framework=" Laravel"
              css=" Boostrap"
              api=" PHP"
              database=" Mysql"
              statusWork="Personal"
              status="Done"
              statusRepo="repository is private"
              link="https://github.com/FebykAlekSatria/Affilate-program-LARAVEL"
            >
              <div>
                <CarouselSkills
                  image1={Review1}
                  image2={Review2}
                  image3={Review2}
                />
              </div>
            </Works>

            <Works
              desc="QNA merupakan tempat dimana kita mempertanyakan sesuatu kepada orang dan
              orang akan menjawabnya tanpa edentitas ataupun dengan edentitas
              sebenarnya. Web ini dikembangkan dengan beberapa
              teknologi terbaru :"
              lang=" JavaScript "
              framework=" Next Js"
              css=" Tailwind dan Boostrap"
              api=" Express Js"
              database=" MySql"
              statusWork="Personal"
              status="Process"
              statusRepo="repository is private"
              link="https://github.com/FebykAlekSatria/QNA_JS"
            >
              <div>
                <CarouselSkills
                  image1={qna1}
                  image2={qna2}
                  image3={qna1}
                />
              </div>
            </Works>

          </div>
        </div>
      </section>

      {/* <!-- ARCHIeVMENT --!> */}
      <section className="work section" id="Achievement">
        <h2 className="font-bold text-5xl text-center uppercase mb-10">Achievement</h2>

        <div className="work__container bd-grid">
          <div className="work__img">
            <Image src={Sertifikat1} alt="" />
          </div>
          <div className="work__img">
            <Image src={Sertifikat2} alt="" />
          </div>
          <div className="work__img">
            <Image src={Sertifikat3} alt="" />
          </div>
          <div className="work__img">
            <Image src={Sertifikat4} alt="" />
          </div>
          <div className="work__img">
            <Image src={Sertifikat5} alt="" />
          </div>
          <div className="work__img">
            <Image src={Sertifikat6} alt="" />
          </div>
        </div>
        <div className="work__container bd-grid">
          <div className="work__img">
            <Image src={Sertifikat7} alt="" />
          </div>
          <div className="work__img">
            <Image src={Sertifikat8} alt="" />
          </div>
          <div className="work__img">
            <Image src={Sertifikat9} alt="" />
          </div>
          <div className="work__img">
            <Image src={Sertifikat10} alt="" />
          </div>
        </div>
        <br />
      </section>


      <footer className="footer">
        <section className="contact section" id="contact">
          <h2 className="font-bold text-5xl text-center uppercase">Contact</h2>
          <p className="footer__title">Febyk Alek Satria</p>
          <div className="footer__social flex">
          </div>
          <a href="mailto:febykaleksatria@gmail.com"
            role="button"
            className="px-4 py-2 rounded-full bg-white no-underline text-neutral-800 font-bold">Kirim Surel</a>
        </section>
        <p>2021 copyright</p>
      </footer>

    </div >
  )
}