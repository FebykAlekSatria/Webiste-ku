import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Confusion from '../component/confusion';

export default function Klasifikasi() {
    const [loadingPre, setLoadingPre] = useState(false)
    const [loadingTFIDF, setLoadingTFIDF] = useState(false)
    const [loadingBest, setLoadingBest] = useState(false)
    const [loadingTrain, setLoadingTrain] = useState(false)
    const [score, setScore] = useState([], [])
    const [mean, setMean] = useState([])
    const [confusion, setConfusion] = useState([[], []])
    const [kernel, setKernel] = useState("")
    const [c, setC] = useState("")
    const [gamma, setGamma] = useState("")
    const [prepocessing, setPrepocessing] = useState([])
    const [file, setFile] = useState("")
    const url = "http://10.9.68.255:5000/"


    // const
    const hendleUpload = () => {
        axios.post(url + "upload", {
            file: file
        })
    }
    const handlePrepocessing = () => {
        setLoadingPre(true)
        axios.post(url + "prepocessing")
            .then(function (res) {
                // console.log(res.data.)
                setPrepocessing(res.data.data)
                setLoadingPre(false)
            }).catch(function (e) {
                console.log(e)
                setLoadingPre(false)
            })
    }

    const handleBest = () => {
        setLoadingBest(true)
        axios.post(url + "best")
            .then(function (res) {
                console.log(res)
                setC(res.data.c)
                setKernel(res.data.kernel)
                setGamma(res.data.gamma)
                setLoadingBest(false)
            }).catch(function (e) {
                console.log(e)
                setLoadingBest(false)
            })
    }

    const handleTraining = () => {
        setLoadingTrain(true)
        axios.post(url + "training", {
            kernel: kernel,
            c: c,
            gamma: gamma
        })
            .then(function (res) {
                console.log(res)
                setConfusion(res.data.confusion)
                setScore(res.data.score)
                setMean(res.data.means)
                setLoadingTrain(false)
            }).catch(function (e) {
                console.log(e)
                setLoadingTrain(false)
            })
    }

    return (
        <div className="min-h-72 py-6 flex flex-col justify-center sm:py-12">
            <div className="w-10/12 relative py-3 sm:mx-auto">
                <div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                </div>
                <div className="relative px-4 py-10 bg-slate-800 text-white shadow-lg sm:rounded-3xl text-sm">
                    <h4 className='text-center font-semibold'>{'Training DATA'}</h4>
                    <div className='m-2 flex space-x-2'>
                        <input className="focus:shadow-md p-2 w-10/12 focus:outline-none rounded-lg bg-slate-900 text-white"
                            type='file'
                            placeholder="Masukkan nama anda"
                            onChange={(e) => setFile(e.target.value)}
                            autoFocus={true}
                        />

                        <button className="bg-sky-400 h-10 text-white font-semibold px-3 py-3 shadow-md rounded-lg">Kirim</button>


                    </div>
                    <div className='px-2 mb-2 space-x-2'>
                        {
                            file == '' ?
                                <button disabled className="bg-red-400 text-white font-semibold text-xs px-3 py-2 shadow-md rounded-3xl no-underline">Prepocessing</button>

                                :
                                <button onClick={handlePrepocessing} className="bg-sky-400 text-white font-semibold text-xs mb-4 px-3 py-2 shadow-md rounded-3xl no-underline">Prepocessing</button>
                        }
                        {loadingPre ?
                            <>
                                <Spinner animation="border" variant='info' size="sm" />
                                <Spinner animation="border" variant='info' size='sm' />
                            </> : null}
                        {
                            prepocessing == '' ? null :
                                <div>
                                    <p className='font-bold'>Prepocessing :</p>
                                    <p>- Case Folding</p>
                                    <p>- Penghapusan tanda baca dan angka </p>
                                    <p>- Filtering/Stopwords </p>
                                    <p>- Tokenizing</p>
                                    <p>- Stemming</p>
                                </div>
                        }

                        {
                            prepocessing == '' ? null :
                                <div className='bg-slate-900 rounded-xl p-4'>
                                    <p>*sample random</p>
                                    <p className=''>data mentah: <br />
                                        data 1 : {prepocessing[0]} <br />
                                        data 2 : {prepocessing[1]}
                                    </p>
                                    <p className='text-sky-400'>data prepocessing: <br />
                                        data 1 : [{prepocessing[2]}] <br />
                                        data 2 : [{(prepocessing[3])}]
                                    </p>
                                </div>

                        }
                    </div>
                    <div className='p-2 mb-2'>
                        {
                            prepocessing == '' ?
                                <button disabled className="bg-red-400 text-white font-semibold text-xs px-3 py-2 shadow-md rounded-3xl no-underline">Download TFIDF</button>

                                :

                                <a href={url + 'tfidf'} target='_blank' className="bg-sky-400 text-white font-semibold text-xs mb-4 px-3 py-2 shadow-md rounded-3xl no-underline">Download TFIDF</a>
                        }
                    </div>
                    <div className='px-2 mb-2'>
                        {
                            prepocessing == '' ?
                                <button className="bg-red-400 text-white font-semibold text-xs mb-2 px-3 py-2 shadow-md rounded-3xl no-underline" disabled>Tentukan best_params</button>

                                :
                                <div>
                                    <p className='font-bold'>Params :</p>
                                    <p>- Kernel dilatih : Linear, Sigmoid, rbf</p>
                                    <p>- C dilatih : 1, 10 </p>
                                    <p>- Gamma dilatih : 1, 0.1, 0.01</p>
                                    <button onClick={handleBest} className="bg-sky-400 text-white font-semibold text-xs mb-4 px-3 py-2 shadow-md rounded-3xl no-underline">Tentukan best_params</button>
                                    {loadingBest ?
                                        <>
                                            <Spinner animation="border" variant='info' size="sm" />
                                            <Spinner animation="border" variant='info' size='sm' />
                                        </> : null}
                                </div>
                        }

                        {c == "" ? null :
                            <div className='bg-slate-900 rounded-xl p-4'>
                                <i className='text-sky-400'>Best Params : <br />
                                    Kernel : {kernel}, C : {c}, Gamma : {gamma}
                                </i>
                            </div>
                        }
                    </div>
                    <div className='px-2 mb-2'>
                        {c == "" ?
                            <button disabled className="bg-red-400 text-white font-semibold text-xs px-3 py-2 shadow-md rounded-3xl no-underline">Training & Peforma</button>

                            :
                            <div>
                                <p className='font-bold'>Trainig :</p>
                                <p>- Metode : SVM</p>
                                <p>- Kernel : {kernel} </p>
                                <p>- C : {c}</p>
                                <p>- Gamma : {gamma}</p>
                                <p>- KFold : 10</p>
                                <button onClick={handleTraining} className="bg-sky-400 text-white font-semibold text-xs mb-4 px-3 py-2 shadow-md rounded-3xl no-underline">Training & Peforma</button>
                                {loadingTrain ?
                                    <>
                                        <Spinner animation="border" variant='info' size="sm" />
                                        <Spinner animation="border" variant='info' size='sm' />
                                    </> : null}
                            </div>
                        }
                        <div className='flex space-x-2 flex-wrap bg-slate-900 rounded-xl'>
                            {
                                score.map((data, index) => {
                                    return (
                                        <Confusion
                                            key={index}
                                            tn={confusion[index][0]}
                                            fp={confusion[index][1]}
                                            fn={confusion[index][2]}
                                            tp={confusion[index][3]}
                                            index={score[index][0]}
                                            accuracy={score[index][1]}
                                            precision={score[index][2]}
                                            recall={score[index][3]}
                                            f1={score[index][4]}
                                            times={score[index][5]}
                                        />
                                    )
                                })
                            }

                        </div>
                        {
                            mean == "" ? null :
                                <div>
                                    <div className='border rounded-lg p-2 mb-4'>
                                        <p className='font-bold'>Persamaan :</p>
                                        <p>Accurasy = (TP+TN) / (TP+FP+FN+TN)</p>
                                        <p>Precision = (TP) / (TP + FP) </p>
                                        <p>Recall = TP / (TP + FN)</p>
                                        <p>F1 = (2 * Recall * Precision) / (Recall + Precision)</p>
                                    </div>
                                    <p className='font-bold'>Peforma Klasifikasi(mean) :</p>
                                    <p>Accurasy : {mean[1]} <br />
                                        Precision : {mean[2]} <br />
                                        Recall : {mean[3]} <br />
                                        F1 : {mean[4]}<br />
                                        waktu komputasi : {mean[5]}
                                    </p>
                                </div>
                        }
                    </div>
                </div>

            </div>
        </div >
    )
}