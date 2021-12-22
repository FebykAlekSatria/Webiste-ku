import axios from "axios"
import { useEffect, useState } from "react"
import { IoSend } from "react-icons/io5"
import { BsPlusLg } from "react-icons/bs"
import { MdDelete } from "react-icons/md"
import { VscLoading } from "react-icons/vsc"
import { Button } from "react-bootstrap"
import ModalForm from "../modal/modal"


const FormQuestion = () => {
    const [question, setQuestion] = useState([{ quest: '' }])
    const [user, setUser] = useState()
    const [show, setShow] = useState(false)

    const handleShowModal = () => {
        setShow(true)
        setTimeout(() => {
            setShow(false)
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
        question.map((quest, i) => {
            await axios.post('https://api-data-febyk.herokuapp.com/', {
                id: parseInt(Math.ceil(Math.random() * Date.now()).toPrecision(13).toString().replace(".", "")),
                pesan: quest.quest,
                kelas: "OOD",
                keterangan: "Setuju"
            }, config)
                .then(function (res) {
                    console.log(res);
                    console.log(user);
                })
                .catch(function (error) {
                    console.log(error);
                });
        })
        handleShowModal();

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
            <div className="w-10/12 mx-auto space-y-2">
                <label className="block text-sm  text-gray-700">
                    Jika ini adalah Chatbot pertanyaan atau pernyataan apa yang akan anda berikan?
                </label>
                {question.map((question, i) => {
                    return (
                        <div className="form-input-wrapper" key={i}>
                            <div className="space-x-2 flex">
                                <div className="w-full">
                                    <div className="mt-1">
                                        <textarea rows="4" className="px-2 shadow-sm focus:ring-blue-800 focus:outline-none focus:border-blue-800 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
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
                <div className="space-x-2">
                    <input className="mt-1" type="checkbox" id="vehicle1" name="vehicle1" value="true" />
                    <label for="vehicle1" className="text-xs text-gray-400">Saya menyetujui untuk data dipakai dalam penelitian</label><br />
                </div>
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <Button className='w-full h-12 shadow-sm ' variant='success' onClick={handleAdd}><BsPlusLg className="mx-auto" /></Button>
                    </div>

                    <div>
                        <Button className='w-full h-12 shadow-sm ' onClick={handleSubmit}><IoSend className="mx-auto" /></Button>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default FormQuestion