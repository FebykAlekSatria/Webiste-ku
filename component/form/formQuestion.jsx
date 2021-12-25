import axios from "axios"
import { useEffect, useState } from "react";
import { IoSend } from "react-icons/io5";
import { BsPlusLg } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { VscLoading } from "react-icons/vsc";
import { Button } from "react-bootstrap";
import ModalForm from "../modal/modal";
import ReCAPTCHA from "react-google-recaptcha";


const FormQuestion = () => {
    const [question, setQuestion] = useState([{ quest: "" }])
    const [name, setName] = useState("")
    const [title, setTitle] = useState("TERIMAKASIH")
    const [pesan, setPesan] = useState("Anda telah membantu dan mempermudah saya dalam menyelesaikan penelitian ini")
    const [show, setShow] = useState(false)
    const [validation, setValidation] = useState(true)
    const [captcha, setCaptcha] = useState(false)

    const handleShowModal = () => {
        setTimeout(() => {
            location.reload()
        }, 5000);
    }

    const handleChange = (i, e) => {
        const _question = [...question];
        _question[i].quest = e.target.value;
        setQuestion(_question);
    }
    const handleAdd = () => {
        const _question = [...question];
        _question.push({ quest: '' });
        setQuestion(_question);
    }
    const handleRemove = (i) => {
        const _question = [...question];
        _question.splice(i, 1);
        setQuestion(_question);
    }
    const handleSubmit = () => {
        if (name != '') {
            question.map((quest, i) => {
                if (quest.quest === '') {
                    setValidation(false)
                } else {
                    setShow(true)
                    axios.post('https://api-data-febyk.herokuapp.com/', {
                        id: parseInt(Math.ceil(Math.random() * Date.now()).toPrecision(13).toString().replace(".", "")),
                        nama: name,
                        pesan: quest.quest,
                        kelas: "OOD",
                        keterangan: "Setuju"
                    })
                        .then(function (res) {
                            console.log(res);
                            if (res.data.message == "Create Data") {
                                handleShowModal();
                            }
                            else {
                                setTitle("MAAF");
                                setPesan("Jangan ada data yang kosong atau jaringan anda tidak stabil, saya harap anda ingin memperbaikinya")
                                setTimeout(() => {
                                    setShow(false)
                                }, 5000);
                            }
                        })
                        .catch(function (error) {
                            console.log(error);
                            setTitle("MAAF");
                            setPesan("Jangan ada data yang kosong atau jaringan anda tidak stabil, saya harap anda ingin memperbaikinya")
                            setTimeout(() => {
                                setShow(false)
                            }, 5000);
                        });
                }
            })
        } else {
            setValidation(false)
            console.log('nama kosong')
        }
    }

    return (
        <div>
            <ModalForm show={show} title={title}>
                <div className="mx-4 text-center">
                    <p>{pesan}</p>
                </div>
                <VscLoading className="animate-spin h-24 w-24 text-sky-400 mx-auto" />
                <div className="my-4 mx-4 text-center font-bold">
                    <p>Anda bisa mengisi form kembali setelah 5 detik</p>
                </div>
            </ModalForm>
            <div className="w-10/12 mx-auto space-y-2 mt-4">
                <input className="focus:shadow-md p-2 w-full focus:outline-none rounded-lg bg-slate-900 text-white"
                    placeholder="Masukkan nama anda"
                    onChange={(e) => setName(e.target.value)}
                    autoFocus={true}
                />
                <hr />
                <label className="block text-sm  text-white">
                    Jika ini adalah Chatbot pertanyaan atau pernyataan apa yang akan anda berikan?
                </label>
                {question.map((question, i) => {
                    return (
                        <div className="form-input-wrapper my-2" key={i}>
                            <div className="space-x-2 flex">
                                <div className="w-full">
                                    <div className="mt-1">
                                        <textarea rows="4" className="p-2 focus:shadow-md focus:outline-none mt-1 block w-full sm:text-sm rounded-lg bg-slate-900 text-white"
                                            value={question.quest}
                                            placeholder="Masukkan pertanyaan atau pernyataan di luar domain akademik"
                                            label={question.quest}
                                            onChange={e => handleChange(i, e)}
                                        ></textarea>
                                    </div>
                                </div>
                                <Button className='w-12' type="button" variant="danger" onClick={() => handleRemove(i)} className="btn-remove"><MdDelete /></Button>
                            </div>
                        </div>

                    )
                })}
                {/* <hr /> */}

                {
                    validation ? null :
                        <p>Jangan ada data kosong</p>
                }
                <div className="mt-4">
                    <div className="mb-2">
                        <Button className='w-full h-12 shadow-sm ' variant='success' onClick={handleAdd}><BsPlusLg className="mx-auto" /></Button>
                    </div>
                    <ReCAPTCHA
                        sitekey="6Lc7K8EdAAAAAHmHvFzcDU7p-4M2d1A4cwZNiWQ3"
                        onChange={() => setCaptcha(true)}
                    />
                    <div className="mt-2">
                        {
                            captcha ?
                                <button className='w-full py-2 shadow-sm bg-sky-400 rounded text-white' onClick={handleSubmit} ><IoSend className="mx-auto" /></button>
                                :
                                <button className='w-full py-2 shadow-sm bg-sky-400 rounded text-white' onClick={handleSubmit} disabled><IoSend className="mx-auto" /></button>
                        }
                    </div>
                </div>

            </div>
        </div >
    );

}

export default FormQuestion