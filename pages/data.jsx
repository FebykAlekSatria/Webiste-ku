import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import { useState } from 'react';
import Navbar from '../component/navbar';
import Data from '../menu/data';

export default function User() {
    const [dataset, setDataset] = useState(true)
    const [training, setTraining] = useState(false)
    const [klasifikasi, setklasifikasi] = useState(false)

    const handlePageData = () => {
        setDataset(true)
        setTraining(false)
        setklasifikasi(false)
    }
    const handlePageTrain = () => {
        setDataset(false)
        setTraining(true)
        setklasifikasi(false)
    }
    const handlePageClassifi = () => {
        setDataset(false)
        setTraining(false)
        setklasifikasi(true)
    }
    return (
        <div className="font-sans bg-slate-900">
            <Head>
                <title>Software Clasification</title>
            </Head>
            <Navbar title="Clasification">
            </Navbar>
            <div className='mx-4 lg:mx-0 pt-20'>
                <Data />

            </div>
            <footer className="footer bg-blue-700 mt-10">
                <section className="contact section" id="contact">
                    <p className="footer__title">Febyk Alek Satria</p>
                    <a href="/"
                        role="button"
                        className="px-4 py-2 rounded-full bg-slate-900 no-underline text-sky-400 font-bold">Mengenal Febyk</a>
                </section>
                <p>2021 copyright</p>
            </footer>
        </div >
    )
}