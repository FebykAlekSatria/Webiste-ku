import 'bootstrap/dist/css/bootstrap.min.css';
import FormQuestion from '../component/form/formQuestion';
import Navbar from '../component/navbar';

export default function User() {
    return (
        <div className="">
            <Navbar title="Pengumpulan Dataset"></Navbar>
            <div className='mx-4 lg:mx-0'>
                <div className="md:grid grid-cols-2 gap-20 mt-2">
                    <div >
                        <div className="min-h-72 py-6 flex flex-col justify-center sm:py-12">
                            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                                <div
                                    className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                                </div>
                                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl ">
                                    <h3 className='text-center'>{'Pengertian "Chatbot"'}</h3>
                                    <div className='flex -mb-5'>
                                        <h1 className='text-6xl'>C</h1><p className='mt-1 text-justify'>hatbot merupakan sistem perangkat lunak yang dapat berinteraksi dengan manusia menggunakan bahasa sehari – hari (Jacobus, 2021). </p>
                                    </div>
                                    <p className='text-justify mt-1'>Chatbot merupakan sebuah layanan obrolan robot/tokoh virtual dengan kecerdasan buatan atau AI (Artificial Intelligent) yang menirukan percakapan manusia melalui pesan suara, obrolan teks ataupun keduanya.
                                        Teknologi ini sangat memungkinkan untuk bisa menjawab berbagai jenis pertanyaan ataupun masalah yang dihadapi pengguna secara cepat dan tepat.</p>

                                    <h5 className=''>Bantu saya untuk mengembangkannya</h5>
                                    <p className='text-justify mt-1'>Chatbot dibangun dengan topik atau dengan domain spesifik yaitu <b>Akademik</b>. Sehingga saat pengguna memasukkan pesan diluar kemampuan chatbot,
                                        maka <b>chatbot mungkin tidak bisa menjawab dengan benar.</b> Isi form dibawah/kanan anda untuk membantu saya, isi dengan kriteria berikut :
                                    </p>
                                    <ul>
                                        <li>1. Menggunakan PUEBI (bahasa Indonesia)</li>
                                        <li>2. Tidak lebih dari 25 suku kata</li>
                                        <li>3. Diluar domain akademik <br />

                                            <i>{'(contoh isian salah : "Berapa IPK mahasiswa dengan nim xxx?")'}<br />
                                                {'(contoh isian benar : "Siapa penemu bola lampu?")'}<br />
                                                {'(contoh isian benar : "Saya Ingin membeli pizza")'}
                                            </i>

                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="py-4 w-10/12 mx-auto my-10 mt-20 bg-white shadow rounded-3xl">
                            <h3 className='text-center'>Form Pengumpulan Dataset</h3>
                            <FormQuestion />
                        </div>
                    </div>
                </div>

            </div>
            <footer className="footer bg-blue-700 mt-10">
                <section className="contact section" id="contact">
                    <p className="footer__title">Febyk Alek Satria</p>
                    <a href="febykaleksatria.tech"
                        role="button"
                        className="px-4 py-2 rounded-full bg-white no-underline font-bold">Ingin Mengenal Febyk?</a>

                </section>
                <p>2021 copyright</p>
            </footer>

            {/* */}

        </div >
    )
}