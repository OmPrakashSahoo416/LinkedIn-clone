function HeaderRightLinks({avatar,Icon, title}) {
  return (
    <>
      <div className="flex flex-col items-center mr-12 text-slate-600 cursor-pointer hover:text-slate-800">
        {/* icon component  */}
        {Icon && <Icon></Icon>}

        {/* avatar for profile icon  */}
        {avatar && <img src={avatar} className="rounded-full [!important] object-contain !h-[24px]"></img>}

        {/* title component  */}
        <p className="">{title}</p>
      </div>
    </>
  );
}

export default HeaderRightLinks;
