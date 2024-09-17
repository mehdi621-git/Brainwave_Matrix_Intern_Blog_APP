


const SkillsDiv =({mainDivWidth,percent})=>{
   const percentageDiv = (percent / 100)* (mainDivWidth);
  const smallDivNo = Math.ceil(percentageDiv/'12');

    return <>
         {
            Array.from({length :smallDivNo}).map((_,index)=> <div key = {index} className='w-[8px] h-2  mx-[2px] relative bg-slate-600'></div>)
         }
    </>
}
export default SkillsDiv