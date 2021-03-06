import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import { useState } from 'react';
import FormQuestion from '../component/form/formQuestion';
import ModalForm from '../component/modal/modal';
import Prosedure from '../public/img/Prosedure.jpg'

export default function Data() {
    const [showForm, setShowForm] = useState(false)
    return (
        <div className="font-sans bg-slate-900">
            <ModalForm show={showForm} title="TATA CARA">
                <Image src={Prosedure} alt="Prosedure" />
                <button onClick={() => setShowForm(false)} className="w-4/12 mx-auto bg-red-400 text-white font-semibold text-sm text-lg mb-6 px-6 py-2 shadow-md rounded-3xl no-underline">tutup</button>
            </ModalForm>
            <div className="md:grid grid-cols-2 gap-12">
                <div >
                    <div className="min-h-72 py-6 flex flex-col justify-center sm:py-12">
                        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                            <div
                                className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                            </div>
                            <div className="relative px-4 py-10 bg-slate-800 text-white shadow-lg sm:rounded-3xl text-sm">
                                <h4 className='text-center font-semibold'>{'Pengertian "Chatbot"'}</h4>
                                <div className='flex -mb-5'>
                                    <h1 className='text-6xl'>C</h1><p className='mt-1 text-justify'>hatbot merupakan sistem perangkat lunak yang dapat berinteraksi dengan manusia menggunakan bahasa sehari – hari (Jacobus, 2021). </p>
                                </div>
                                <p className='text-justify mt-1'>Chatbot merupakan sebuah layanan obrolan robot/tokoh virtual dengan kecerdasan buatan atau AI (Artificial Intelligent) yang menirukan percakapan manusia melalui pesan suara, obrolan teks ataupun keduanya.
                                    Teknologi ini sangat memungkinkan untuk bisa menjawab berbagai jenis pertanyaan ataupun masalah yang dihadapi pengguna secara cepat dan tepat.</p>

                                <h6 className='font-semibold'>Bantu saya untuk mengembangkannya</h6>
                                <p className='text-justify mt-1'>Chatbot dibangun dengan topik atau dengan domain spesifik yaitu <b>Akademik</b> <i>(menjawab pertanyaan seputar daftar nilai, mahasiswa, dosen)</i>. Sehingga saat pengguna memasukkan pesan diluar kemampuan chatbot,
                                    maka <b>chatbot mungkin tidak bisa menjawab dengan benar.</b> Isi form dibawah/kanan anda untuk membantu saya, isi dengan kriteria berikut :
                                </p>
                                <ul>
                                    <li>1. Menggunakan PUEBI (bahasa Indonesia)</li>
                                    <li>2. Tidak lebih dari 25 kata</li>
                                    <li>3. Diluar domain akademik <br /><br />
                                        <i className='text-red-400'>
                                            contoh domain akademik : <br />
                                            {'1. "Berapa IPK mahasiswa dengan nim xxx?"'}<br />
                                            {'2. "Siapa nama dosen pembimbing akademik mahasiswa nim xxx?"'}<br /><br />
                                        </i>
                                        <i className='text-green-400'>
                                            Contoh di luar domain akademik : <br />
                                            {'1. "Siapa penemu bola lampu?"'}<br />
                                            {'2. "Bagaiamana cara mendapatkan nilai tinggi?"'}<br />
                                            {'3. "Tolong temukan lokasi unsri"'}
                                        </i>

                                    </li>
                                </ul>
                                <button onClick={() => setShowForm(true)} className="bg-sky-400 text-white font-semibold text-sm mb-6 px-6 py-2 shadow-md rounded-3xl no-underline">Tata cara pengisian</button>
                            </div>

                        </div>
                    </div>
                </div>
                <div>
                    <div className="py-4 w-full lg:w-10/12 mx-auto my-10 mt-20 bg-slate-800 shadow rounded-3xl text-sm">
                        <h4 className='text-center font-semibold text-white'>Pengumpulan Dataset</h4>
                        <FormQuestion />
                    </div>
                </div>

            </div>
        </div >
    )
}