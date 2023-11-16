import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image'
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
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
import ml1 from '../public/img/ml1.jpg';
import ml2 from '../public/img/ml2.jpg';
import Translator from '../public/img/translatorApp.jpg';
import kurban1 from '../public/img/kurban1.jpg';
import kurban2 from '../public/img/kurban2.jpg';
import kurban3 from '../public/img/kurban3.jpg';

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
    <div className='body font-sans text-sm bg-slate-900'>
      <Head>
        <title>Portofolio Febyk</title>
      </Head>
      <Navbar title="Febyk Alek Satria">
        <div className="nav__menu font-semibold " id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item"><a href="#home" className="nav__link no-underline text-white">Home</a></li>
            <li className="nav__item"><a href="#about" className="nav__link no-underline text-white">About</a></li>
            <li className="nav__item"><a href="#skills" className="nav__link no-underline text-white">Skills</a></li>
            <li className="nav__item"><a href="#Work" className="nav__link no-underline text-white">Work</a></li>
            <li className="nav__item"><a href="#Achievement" className="nav__link no-underline text-white">Achievement</a></li>
            <li className="nav__item"><a href="#contact" className="nav__link no-underline text-white">Contact</a></li>
          </ul>
        </div>
      </Navbar>

      {/* <!-- Home --!> */}
      <section className="home bd-grid font-bold" id="home">
        <div className="home__data">
          <h2 className="my-10 text-5xl font-bold text-white">{"Hi,I'am"} <span className="text-sky-400 font-bold">Febyk</span><br /> Frontend<br />
            Developer</h2>

          <a target='blank' href="https://drive.google.com/file/d/1IAnj7JiQUomWYnZGZYoIKmtGRMN0nkQw/view?usp=sharing"
            className="bg-sky-500 text-white font-bold text-lg md:text-xl mb-6 px-8 py-3 shadow-md rounded-3xl no-underline">Download CV</a>
        </div>

        <div className="home__social">
          <a target='_blank' href="https://www.linkedin.com/in/febykaleksatria/" className="home__social-icon"><BsLinkedin /> </a>
          <a target='_blank' href="https://github.com/FebykAlekSatria" className="home__social-icon"> <BsGithub /></a>
          <a target='_blank' href="https://www.instagram.com/string_sout/" className="home__social-icon"><RiInstagramFill /></a>
          <a target='_blank' href="https://wa.me/+6281373107544" className="home__social-icon"><IoLogoWhatsapp /></a>
        </div>

        <div className="home__img pt-5">
          <Image src={Profil} alt="" />
        </div>
      </section>

      {/* <!-- ABOUT --!> */}
      <section className="about section " id="about">
        <h2 className="font-bold text-3xl text-center mb-10 text-sky-400">About</h2>

        <div className="about__container">
          <figure className="w-10/12 lg:w-8/12 lg:flex bg-slate-800 shadow-md rounded-xl p-8 md:p-0 mx-auto">
            <Image className="w-40 h-40 lg:w-72 lg:h-auto rounded-full lg:rounded-none mx-auto bg-cover"
              src={About} alt="profil" />
            <div className="pt-6 md:p-8 space-y-4 sm:text-center md:text-justify ">
              <blockquote>
                <p className="text-white">
                  “Saya Febyk Alek Satria lulusan Teknik Informatika Universitas Sriwijaya. Saya memiliki ketertarikan dan kemampuan di bidang frontend dan web
                  developer. Sebelumnya saya telah bekerja pada saat masih menjadi mahasiswa pada perusahaan strartup lokal yang ada di Palembang. Saya dapat membangun sebuah website dengan teknologi terbaru dan saya senang untuk memperlajari hal baru.”.
                </p>
              </blockquote>
              <figcaption className="font-medium">
                <div className="text-sky-400 font-bold">
                  Febyk Alek Satria
                </div>
                <div className="text-white">
                  Fresh Greduate | Frontend Developer | Web Developer
                </div>
              </figcaption>
            </div>
          </figure>
        </div>
      </section>

      {/* <!-- SKILL --!> */}

      <section className="skills section text-sm" id="skills">

        <h2 className="font-bold text-3xl text-center text-sky-400">Skills</h2>


        <div className="md:grid md:grid-cols-2 lg:grid-cols-3 px-4 rounded-lg">
          <Skills title="Pemograman">
            <hr className="text-white mb-2" />
            <p className="text-white mb-2">Java</p>
            <p className="text-white mb-2">JavaScript</p>
            <p className="text-white mb-2">Python</p>
            <p className="text-white mb-2">Dart</p>
            <p className="text-white mb-2">PHP</p>
            <p className="text-white mb-2">HTML</p>
            <p className="text-white mb-2">CSS</p>
          </Skills>

          <Skills title="Framework/Library">
            <hr className="text-white mb-2" />
            <p className="text-white mb-2">React JS/Next JS</p>
            <p className="text-white mb-2">Node JS</p>
            <p className="text-white mb-2">Flutter</p>
            <p className="text-white mb-2">Express JS</p>
            <p className="text-white mb-2">Codeigniter</p>
            <p className="text-white mb-2">Laravel</p>
            <p className="text-white mb-2">Flask</p>
            <p className="text-white mb-2">Tailwind</p>
            <p className="text-white mb-2">Bootstrap</p>
            <p className="text-white mb-2">Chakra UI</p>
          </Skills>
          <Skills title="Database">
            <hr className="text-white mb-2" />
            <p className="text-white mb-2">MySQL</p>
            <p className="text-white mb-2">SQLite</p>
          </Skills>
        </div>
      </section>

      {/* <!-- Work --!> */}
      <section className="about section" id="Work">
        <h2 className="font-bold text-3xl text-center text-sky-400">Work</h2>
        <div className="px-10  md:px-8 md:flex item-center w-full">

          <div className="mx-auto lg:grid grid-cols-2 gap-12">

            {/* <div className="min-h-72 w-full py-6 flex flex-col justify-center sm:py-12 font-sm">
              <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                </div>
                <div className="relative px-4 py-10 bg-slate-800 shadow-lg sm:rounded-3xl sm:p-20 text-white">
                  <div className="max-w-md mx-auto">
                  </div>
                </div>
              </div>
            </div> */}

            <Works
              title="Translator"
              description="Translator digunakan untuk menejermahkan dari berbagai bahasa ke bahasa yang diinginkan."
              image={Translator}
              lang=" Javascript "
              framework=" Next JS "
              api=" API IBM Cloud "
              database=" IBM Cloud "
              css=" Chacra UI "
              statusWork="Personal"
              status="Done"
              statusRepo="repository is public"
              link="https://github.com/FebykAlekSatria/translator"
            >
              <div>
                <CarouselSkills
                  image1={Translator}
                  image2={Translator}
                  image3={Translator}
                />
              </div>
            </Works>


            <Works
              title="Digifile"
              desc="Sistem penyimpanan secara digital untuk membantu mempermudah dan mengamankan file perusahaan. PWA ini dikembangkan dengan beberapa teknologi terbaru :"
              lang=" JavaScript "
              framework=" React Js"
              css=" Tailwind"
              api=" API Go-lang"
              database=" PostgreSql"
              statusWork="Part-Time"
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
              title="Web-Cat"
              desc="Web-Cat berfungsi untuk mengevaluasi pengetahuan dari instansi PGRI yang ada di SUMSEL. Web ini dikembangkan dengan beberapa teknologi terbaru :"
              lang=" PHP "
              framework=" CodeIgniter"
              css=" Boostrap"
              api=" PHP"
              database=" MySql"
              statusWork="Part-Time"
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
              title="Blog Review"
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
              title="Website Kurban"
              desc="Website kurban digunakan untuk pencataan data kurban yang ada pada suatu masjid, terdapat beberapa fitur yang dapat digunakan antara lain seperti tabungan kurban, transaksi kurban, laporan kurban, distribusi kurban, dan lainnya."
              lang=" PHP "
              framework=" Laravel"
              css=" Boostrap"
              api=" Laravel"
              database=" Mysql"
              statusWork="Freelancer"
              status="Done"
              statusRepo="repository is private"
              link="https://github.com/FebykAlekSatria/qurban"
            >
              <div>
                <CarouselSkills
                  image1={kurban1}
                  image2={kurban2}
                  image3={kurban3}
                />
              </div>
            </Works>

            <Works
              title="QnA"
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
            <Works
              title="Detection Class"
              desc="Sebuah projek PWA untuk melalakukan preprocessing data selanjutnya dilakukan Training dan pengujian, 
              perangkat lunak digunakan untuk menyelesaikan penelitian pribadi saya dalam topik machine learning Web ini dikembangkan dengan beberapa
              teknologi terbaru :"
              lang=" JavaScript & Python "
              framework=" Next Js"
              css=" Chakra UI"
              api=" Flask"
              database=" Statis"
              statusWork="Personal"
              status="Done"
              statusRepo="repository is public"
              link="https://github.com/FebykAlekSatria/web_ml"
            >
              <div>
                <CarouselSkills
                  image1={ml1}
                  image2={ml2}
                  image3={ml1}
                />
              </div>
            </Works>

          </div>
        </div>
      </section >

      {/* <!-- ARCHIeVMENT --!> */}
      < section className="work section" id="Achievement" >
        <h2 className="font-bold text-3xll text-center mb-10 text-sky-400">Achievement</h2>

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
      </section >


      <footer className="footer">
        <section className="contact section" id="contact">
          <h2 className="font-bold text-3xl text-center uppercase">Contact</h2>
          <div className="footer__social flex">
          </div>
          <a href="mailto:febykaleksatria@gmail.com"
            role="button"
            className="px-4 py-2 rounded-full bg-slate-900 no-underline text-sky-400 font-bold">Kirim Surel</a>
        </section>
        <p>2022 copyright</p>
      </footer>

    </div >
  )
}