import 'bootstrap/dist/css/bootstrap.min.css';
import ChatBox from '../component/form/formDeteksi';

export default function Deteksi() {
    return (
        <div className="md:grid grid-cols-2 gap-20">
            <div >
                <div className="min-h-72 py-6 flex flex-col justify-center sm:py-12">
                    <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                        <div
                            className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                        </div>
                        <div className="relative px-4 py-10 bg-slate-800 text-white shadow-lg sm:rounded-3xl text-sm">
                            <h4 className='text-center font-semibold'>{'Deteksi "OOD"'}</h4>
                            {/* <h6 className='font-semibold'>Bantu saya untuk mengembangkannya</h6> */}
                            <p className='text-justify mt-1'>Chatbot dibangun dengan topik atau dengan domain spesifik yaitu <b>Akademik</b> <i>(menjawab pertanyaan seputar daftar nilai, mahasiswa, dosen)</i>. Sehingga saat pengguna memasukkan pesan diluar kemampuan chatbot,
                                maka <b>chatbot mungkin tidak bisa menjawab dengan benar.</b> Domain pada chatbot terbagi menjadi dua yaitu in-domain(ID) dan out-of-domain(OOD). Pengertian yang mudah dipahami yaitu ID adalah kalimat yang bisa ditanggapi dan
                                OOD adalah kalimat yang tidak bisa ditanggapi dengan maksimal oleh chatbot.
                            </p>
                            <ul>
                                <li className='font-bold text-sky-500'>Contoh kalimat ID pada domain chatbot akademik :</li>
                                <i className=''>
                                    {'1. "Berapa IPK mahasiswa dengan nim 09021181823003?"'}<br />
                                    {'2. "Nama pembimbing akademik mahasiswa nim 09021181823003?"'}<br />
                                    {'3. "Tampilkan KRS mahasiswa nim 09021181823003?"'}<br /><br />
                                </i>
                                <li className='font-bold text-sky-500'>Contoh kalimat OOD pada domain chatbot akademik :</li>
                                <i className=''>
                                    {'1. "Siapa penemu bola lampu?"'}<br />
                                    {'2. "Bagaiamana cara mendapatkan nilai tinggi?"'}<br />
                                    {'3. "Tolong temukan lokasi unsri"'}
                                </i>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
            <div>
                {/* <div className="p-4 h-96 w-full lg:w-10/12 mx-auto my-10 mt-20 bg-slate-800 shadow rounded-3xl text-sm">
                            <h4 className='text-center font-semibold text-white'>Deteksi Domain Chat</h4> */}
                <ChatBox />
                {/* <div>
                                <div
                                    className="bg-slate-800 float-right w-auto mx-4 my-1 p-2 rounded-lg clearfix text-sm"
                                >
                                    <i className='float-right text-xs ml-10 mt-4'>Kamu</i>
                                </div>
                                <div
                                    className="bg-sky-500 float-left w-auto mx-4 my-1 p-2 rounded-lg clearfix text-sm"
                                >kalimat terdeteksi
                                    <i className='float-right text-xs ml-10 mt-4'>Sistem</i>
                                </div>
                            </div> */}
                {/* </div> */}
            </div>
        </div>
    )
}