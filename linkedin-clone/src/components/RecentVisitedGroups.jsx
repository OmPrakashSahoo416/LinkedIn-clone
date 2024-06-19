import Diversity1Icon from '@mui/icons-material/Diversity1';

function RecentVisitedGroups({title}) {
    return(
        <>
        <div className='flex p-2 text-slate-600 cursor-pointer hover:text-slate-900 hover:bg-slate-100'>
            <Diversity1Icon fontSize='small'></Diversity1Icon>
            <p className='ml-4 text-[12px]'>{title}</p>
        </div>
        </>
    );
}

export default RecentVisitedGroups