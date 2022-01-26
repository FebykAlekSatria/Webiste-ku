import axios from "axios";
import { useState } from "react";
import { Spinner } from "react-bootstrap";
import Chat from "./chat";


const ChatBox = () => {
    const [kumpulan, setKumpulan] = useState([])
    const [quest, setQuest] = useState()
    const [loading, setLoading] = useState(false)
    const handleSubmit = () => {
        setLoading(true)
        axios.post('https://oodapi.herokuapp.com/', {
            text: quest
        }).then(function (res) {
            console.log(res)
            const _kumpulan = [...kumpulan];
            _kumpulan.push({ 'predict': res.data.predict, "pertanyaan": res.data.pertanyaan })
            setKumpulan(_kumpulan)
            setQuest()
            setLoading(false)
        }).catch(function (e) {
            console.log(e)
        })
    }
    return (
        <div className="p-4 w-full lg:w-10/12 mx-auto my-10 mt-18 bg-slate-800 shadow rounded-3xl text-sm">
            <h4 className='text-center font-semibold text-white'>Deteksi Domain Chat</h4>
            <div className="m-auto w-full text-white">
                <div className="h-96 bg-slate-900 py-2 block border-1 border-sky-500 rounded-lg overflow-auto">
                    <p className="text-center">hasil</p>

                    {kumpulan ? (
                        kumpulan.map((items, i) => {
                            return (
                                <Chat
                                    key={i}
                                    pertanyaan={items.pertanyaan}
                                    predict={items.predict}
                                />

                            )
                        })
                    ) : null
                    }

                </div>
                <div className="">
                    <div className="flex items-center border-b border-sky-500 py-2">
                        <input className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
                            type="text"
                            placeholder="Masukkan pertanyaan anda"
                            onChange={(e) => setQuest(e.target.value)}
                            autoFocus={true}
                        />
                        {loading ?
                            <>

                                <button className="bg-sky-500 text-white hover:bg-indigo-900 text-sm py-1 px-2 rounded-lg"
                                    disabled>
                                    <Spinner animation="border" variant='info' size="sm" />
                                    <Spinner animation="border" variant='info' size='sm' />
                                    Deteksi
                                </button>
                            </> :
                            <button className="bg-sky-500 text-white hover:bg-indigo-900 text-sm py-1 px-2 rounded-lg"
                                onClick={handleSubmit}>
                                Deteksi
                            </button>}

                    </div>
                </div>
            </div>
        </div>

    )
}

export default ChatBox;