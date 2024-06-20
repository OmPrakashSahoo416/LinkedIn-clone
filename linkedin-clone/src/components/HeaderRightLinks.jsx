function HeaderRightLinks({avatar,Icon, title, onClick}) {
  return (
    <>
      <div onClick={onClick} className="flex flex-col items-center mr-12 text-slate-500 cursor-pointer hover:text-slate-800">
        {/* icon component  */}
        {Icon && <Icon></Icon>}

        {/* avatar for profile icon  */}
        {avatar && <img src={avatar} className="rounded-full object-contain !h-[24px] bg-black !w-[24px]"></img>}

        {/* title component  */}
        <p className="text-[12px]">{title}</p>
      </div>
    </>
  );
}

export default HeaderRightLinks;
