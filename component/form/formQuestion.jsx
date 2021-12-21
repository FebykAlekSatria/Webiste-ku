import axios from "axios"
import { useEffect, useState } from "react"
import { IoSend } from "react-icons/io5"
import { BsPlusLg } from "react-icons/bs"
import { MdDelete } from "react-icons/md"
import { Button } from "react-bootstrap"


const FormQuestion = () => {
    const [question, setQuestion] = useState([{ quest: '' }])
    const [user, setUser] = useState()
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

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('user')))
    }, [])
    const handleSubmit = () => {
        const config = {
            headers: {
                "auth-token": localStorage.getItem("auth-token")

            }
        }
        question.map((quest, i) => {
            axios.post('http://localhost:5000/question', {
                id: parseInt(Math.ceil(Math.random() * Date.now()).toPrecision(13).toString().replace(".", "")),
                pesan: quest.quest,
                kelas: "OOD",
                keterangan: ""
            }, config)
                .then(function (res) {
                    console.log(res);
                    console.log(user);
                })
                .catch(function (error) {
                    console.log(error);
                });
        })

    }

    return (
        <div className="sm:w-1/3 w-10/12 mx-auto space-y-2">
            <label className="block text-sm font-medium text-gray-700">
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
                                        placeholder="Masukkan pertanyaan atau pernyataan"
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

            <div className="space-y-2 mx-auto">
                <div>
                    <div className="text-xs text-gray-400">
                        Klik untuk menambahkan inputan
                    </div>
                    <Button className='w-full shadow-sm ' variant='success' onClick={handleAdd}><BsPlusLg className="mx-auto" /></Button>
                </div>

                <Button className='w-full shadow-sm ' onClick={handleSubmit}><IoSend className="mx-auto" /></Button>

            </div>
        </div>
    );

}

export default FormQuestion