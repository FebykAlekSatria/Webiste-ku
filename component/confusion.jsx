const Confusion = (props) => {
    return (
        <div className='block mb-4 bg-sky-400 rounded-lg p-2'>
            <p className='font-bold text-center'>Index ke {props.index} </p>
            <div className='flex space-x-2'>
                <table className='bg-slate-900 rounded-lg'>
                    <tr>
                        <th className="px-2 py-1 text-xs">
                        </th>
                        <th className="px-2 py-1 text-xs">
                            OOD
                        </th>
                        <th className="px-2 py-1 text-xs">
                            ID
                        </th>
                    </tr>
                    <tr className="whitespace-nowrap">
                        <th className="px-2 py-1 text-xs">
                            OOD
                        </th>
                        <td className="px-2 py-1">
                            <div className="text-xs">
                                {props.tn}
                            </div>
                        </td>
                        <td className="px-2 py-1">
                            <div className="text-xs">
                                {props.fp}
                            </div>
                        </td>
                    </tr>
                    <tr className="whitespace-nowrap">
                        <th className="px-2  text-xs">
                            ID
                        </th>
                        <td className="px-2 py-1">
                            <div className="text-xs">
                                {props.fn}
                            </div>
                        </td>
                        <td className="px-2 py-1">
                            <div className="text-xs">
                                {props.tp}
                            </div>
                        </td>

                    </tr>
                </table>
                <div>
                    <p>Accurasy : {props.accuracy}<br />
                        Precision : {props.precision}<br />
                        Recall : {props.recall}<br />
                        F1 : {props.f1}<br />
                        times : {props.times}</p>
                </div>
            </div>

        </div>
    )
}

export default Confusion;