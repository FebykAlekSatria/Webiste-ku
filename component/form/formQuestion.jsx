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
    const [question, setQuestion] = useState([{ quest: '' }])
    const [name, setName] = useState()
    const [show, setShow] = useState(false)
    const [captcha, setCaptcha] = useState(false)

    const handleShowModal = () => {
        setShow(true)
        setTimeout(() => {
            location.reload()
        }, 10000);
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
    const handleSubmit = async () => {
        await question.map((quest, i) => {
            axios.post('https://api-data-febyk.herokuapp.com/', {
                id: parseInt(Math.ceil(Math.random() * Date.now()).toPrecision(13).toString().replace(".", "")),
                nama: name,
                pesan: quest.quest,
                kelas: "OOD",
                keterangan: "Setuju"
            })
                .then(function (res) {
                    if (res.data.message == "Create Data") {
                        handleShowModal();
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        })


    }

    return (
        <div>
            <ModalForm show={show} title="TERIMAKASIH">
                <div className="mx-4 text-center">
                    <p>Anda telah membantu dan mempermudah saya dalam menyelesaikan penelitian ini</p>
                </div>
                <VscLoading className="animate-spin h-16 w-16 mr-3 text-blue-900 mx-auto" />
                <div className="mt-4 mx-4 text-center font-bold">
                    <p>Anda bisa mengisi form kembali dalam 10 detik dengan inputan yang berbeda</p>
                </div>
            </ModalForm>
            <div className="w-10/12 mx-auto space-y-2 mt-4">
                <input className="focus:shadow-md p-2 w-full border border-gray-300 focus:outline-none rounded-lg "
                    placeholder="Masukkan nama anda"
                    onChange={(e) => setName(e.target.value)}
                />
                <hr />
                <label className="block text-sm  text-gray-700">
                    Jika ini adalah Chatbot pertanyaan atau pernyataan apa yang akan anda berikan?
                </label>
                {question.map((question, i) => {
                    return (
                        <div className="form-input-wrapper" key={i}>
                            <div className="space-x-2 flex">
                                <div className="w-full">
                                    <div className="mt-1">
                                        <textarea rows="4" className="px-2 focus:shadow-md focus:outline-none mt-1 block w-full sm:text-sm border border-gray-300 rounded-lg"
                                            value={question.quest}
                                            placeholder="Masukkan pertanyaan atau pernyataan diluar domain akademik"
                                            label={question.quest}
                                            onChange={e => handleChange(i, e)}
                                            autoFocus={true}
                                        ></textarea>
                                    </div>
                                </div>
                                <Button className='w-12' type="button" variant="danger" onClick={() => handleRemove(i)} className="btn-remove"><MdDelete /></Button>
                            </div>
                        </div>

                    )
                })}
                {/* <hr /> */}


                <div className="mt-4">
                    <div className="mb-2">
                        <Button className='w-full h-12 shadow-sm ' variant='success' onClick={handleAdd}><BsPlusLg className="mx-auto" /></Button>
                    </div>
                    <ReCAPTCHA
                        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                        onChange={() => setCaptcha(true)}
                    />
                    <div className="mt-2">
                        {
                            captcha ?
                                <Button className='w-full h-12 shadow-sm' onClick={handleSubmit} ><IoSend className="mx-auto" /></Button>
                                :
                                <Button className='w-full h-12 shadow-sm' onClick={handleSubmit} disabled><IoSend className="mx-auto" /></Button>
                        }
                    </div>
                </div>

            </div>
        </div>
    );

}

export default FormQuestion