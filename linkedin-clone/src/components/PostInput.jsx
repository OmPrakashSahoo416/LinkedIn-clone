function PostInput({Icon, title, color}) {
    return(
        <>
        <div className="inputPost flex hover:bg-slate-100 hover:rounded-md hover:cursor-pointer p-4">
            <Icon style={{color:color}}></Icon>
            <p className="font-semibold ml-2 text-slate-700">{title}</p>
        </div>
        </>
    );
}

export default PostInput