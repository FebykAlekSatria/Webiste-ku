const Skills = (props) => {
    return (
        <div className="max-w-sm shadow-md px-4 py-4 bg-slate-800 m-3 text-center rounded-xl ">
            <i className="fas fa-laptop-code text-color fa-5x mb-6"></i>
            <div className="p-4 font-semibold">
                <div
                    className="bg-sky-500 text-white font-semibold md:text-xl mb-6 px-4 py-2 shadow-md rounded-lg"
                >{props.title}</div>
                {
                    props.children
                }
            </div>
        </div>
    )
}

export default Skills;