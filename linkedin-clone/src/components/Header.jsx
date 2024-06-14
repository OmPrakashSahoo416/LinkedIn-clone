import SearchIcon from '@mui/icons-material/Search';
import HeaderRightLinks from './HeaderRightLinks';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import WorkIcon from '@mui/icons-material/Work';
import EmailIcon from '@mui/icons-material/Email';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Header() {
  return (
    <>
      <div className="header w-[100%] flex sticky top-0 z-[999] justify-evenly bg-slate-100 p-1">
        <div className="headerLeft items-center flex mr-24">
          {/* logo of the application  */}
          <img src="../public/linkedin.png" className='object-contain mr-3 h-9'
           alt="" />

          {/* search bar icon using material ui  */}
          {/* search bar  */}
          <div className="headerSearch p-2 w-64 text-slate-500 flex rounded-md bg-slate-300 items-center">
            <SearchIcon></SearchIcon>
            <input type="text" placeholder='Search' className='ml-2  bg-slate-300 outline-none w-64 border-none' />
          </div>
        </div>

        <div className="headerRight flex">
        {/* using components to make it reusable 
        using props to send title and icon for pages like 
        home or contact or profile stuff like that */}
        <HeaderRightLinks Icon={HomeIcon} title="Home"></HeaderRightLinks>
        <HeaderRightLinks Icon={PeopleIcon} title="My Network"></HeaderRightLinks>
        <HeaderRightLinks Icon={WorkIcon} title="Jobs"></HeaderRightLinks>
        <HeaderRightLinks Icon={EmailIcon} title="Messaging"></HeaderRightLinks>
        <HeaderRightLinks avatar={"../public/avatar_2.jpg"} title="Me"></HeaderRightLinks>
        </div>

      </div>
    </>
  );
}

export default Header
