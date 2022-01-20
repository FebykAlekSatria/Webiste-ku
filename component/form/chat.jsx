const Chat = ({ pertanyaan, predict }) => {
    return (
        <div>
            <div
                className="bg-slate-800 float-right w-auto mx-4 my-1 p-2 rounded-lg clearfix text-sm"
            >{pertanyaan}
                <i className='float-right text-xs ml-10 mt-4'>Kamu</i>
            </div>
            <div
                className="bg-sky-500 float-left w-auto mx-4 my-1 p-2 rounded-lg clearfix text-sm"
            >kalimat terdeteksi {predict}
                <i className='float-right text-xs ml-10 mt-4'>Sistem</i>
            </div>
        </div>
    )
};

export default Chat;

