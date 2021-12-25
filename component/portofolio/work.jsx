import { BsCheckCircleFill } from 'react-icons/bs'
const Works = (props) => {

    return (
        <div className="min-h-72 w-full py-6 flex flex-col justify-center sm:py-12 font-sm">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                </div>
                <div className="relative px-4 py-10 bg-slate-800 shadow-lg sm:rounded-3xl sm:p-20 text-white">
                    <div className="max-w-md mx-auto">
                        <div className="w-full text-3xl font-bold text-center mb-4">{props.title}</div>

                        {
                            props.children
                        }

                        <div className="divide-y divide-gray-200 mt-2">
                            <div
                                className="py-8 leading-6 space-y-4 text-white sm:text-lg sm:leading-7">
                                <p>{props.desc}</p>
                                <ul className="list-disc space-y-2">
                                    <li className="flex items-start">
                                        <span className="h-6 flex items-center sm:h-7 m-1">
                                            <BsCheckCircleFill className='' />
                                        </span>
                                        <p className="ml-2">
                                            Menggunakan bahasa pemograman
                                            <code className="text-sm font-bold text-gray-900">{props.lang}</code>
                                            dengan library/framework
                                            <code className="text-sm font-bold text-gray-900">{props.framework}</code>
                                        </p>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="h-6 flex items-center sm:h-7 m-1">
                                            <BsCheckCircleFill className='' />
                                        </span>
                                        <p className="ml-2">
                                            memperindah tampilan dengan framework
                                            <code className="text-sm font-bold text-gray-900">{props.css}</code>
                                        </p>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="h-6 flex items-center sm:h-7 m-1">
                                            <BsCheckCircleFill className='' />
                                        </span>
                                        <p className="ml-2">
                                            Mengurusi data dan mengontrol data dengan
                                            <code className="text-sm font-bold text-gray-900">{props.api}</code>
                                        </p>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="h-6 flex items-center sm:h-7 m-1">
                                            <BsCheckCircleFill className='' />
                                        </span>
                                        <p className="ml-2">
                                            Database yang digunakan yaitu
                                            <code className="text-sm font-bold text-gray-900">{props.database}</code>
                                        </p>
                                    </li>
                                </ul>
                                <p>Dalam project ini saya memegang penuh pada bagian Frontend developer.</p>
                                <div className='flex space-x-2'>
                                    <div className="badge bg-secondary text-decoration-none link-light mx-2"
                                    >{props.statusWork}</div>
                                    <div className="badge bg-success text-decoration-none link-light"
                                    >{props.status}</div>
                                </div>
                            </div>
                            <div className=" pt-6 leading-6 font-bold sm:text-lg sm:leading-7">
                                <p>
                                    <a href={props.link}
                                        className="text-cyan-600 hover:text-cyan-700 no-underline"> Read the docs &rarr;
                                    </a>
                                </p>
                                <a className="badge text-danger text-decoration-none" aria-disabled="">
                                    {props.statusRepo}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Works;