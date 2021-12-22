const Skills = (props) => {
    return (
        <div className="max-w-sm shadow-md px-4 py-4 bg-white m-3 text-center rounded-xl">
            <i className="fas fa-laptop-code text-color fa-5x mb-6"></i>
            <div className="p-4 font-semibold">
                <button
                    className="bg-blue-700 text-white font-bold text-lg md:text-xl mb-6 px-4 py-2 shadow-md rounded-tl-lg rounded-br-lg"
                    disabled>{props.title}</button>
                {
                    props.children
                }
            </div>
            <div className="px-2 py-4">

            </div>
        </div>
    )
}

export default Skills;