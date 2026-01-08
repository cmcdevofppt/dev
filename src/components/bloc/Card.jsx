export default function Card({logo,title,descrption,user,likes,background}) {
    return (
        <div className={`p-4 max-w-sm mx-auto bg-black rounded-xl shadow-md space-y-4 text-white overflow-hidden`}>
            <div className="card-logo">
                <img src={logo} alt="logo" className={`rounded-xl border-l-2  `} style={{borderLeftColor : background}}/>
            </div>
            <div className="card-content">
                <h2 className={`text-xl font-bold`} style={{color : background}}>{title}</h2>
                <p className={`text-[12px] text-zinc-400`}>{descrption}</p>
                <div className="card-user flex items-center space-x-2 py-4">
                    <i className={`bi bi-person-circle text-[25px] `} style={{color : background}}></i>
                    <span>{user.name}</span>
                </div>
                <div className="card-likes flex items-center space-x-1 justify-end cursor-pointer">
                    <i className={`bi bi-heart-fill `} style={{color : background}}></i>
                    <span className="text-zinc-400">{likes}</span>
                </div>
            </div>
        </div>
    );
}