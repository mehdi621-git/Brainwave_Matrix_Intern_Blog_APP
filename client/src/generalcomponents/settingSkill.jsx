import { useState } from "react";
import { MdDelete } from "react-icons/md";
const initialValues ={
  rang:0,
  text : ''
}
const SettingSkill = () => {
    const [range, setRange] = useState([initialValues]);

    const handleRangeChange = (e, i) => {
      const {name ,value} =e.target
      const newRange = [...range];

      newRange[i] = {...newRange[i],[name] : value}
      setRange(newRange);
    };
    const handleDelete =(i)=>{
        const newrange = range.filter((_,index)=> i!==index)
        setRange(newrange)
    }

    return (
      <div>
        {range.map((r, i) => (
          <div key={i} className="mb-4"> {/* Add margin-bottom for spacing */}
            <input
              type="text"
              name="text"
              placeholder='Skill: Business Administration'
              className='px-[13px] outline-none py-[3px] w-full bg-slate-200  rounded-2xl'
             onChange={(e)=>handleRangeChange(e,i)}
             value={r.text}
            />
            <div className='flex gap-2 items-center'>
            <MdDelete color={'red'} className='hover:cursor-pointer' size={20} onClick={()=>handleDelete(i)}/>
               
              <input
               name="rang"
                type="range"
                className='w-full '
                min={0}
                max={100}
                onChange={(e) => handleRangeChange(e, i)}
                value={r.rang}
              />
              <p className='ml-2'>{r.rang}</p> {/* Add margin-left for spacing */}
              <p>%</p>
            </div>
          </div>
        ))}
  
        <p
          className='cursor-pointer text-blue-500'
          onClick={() => setRange([...range, initialValues])} // Add a new range input with an initial value of 1
        >
          Add+
        </p>
      </div>
    );
  };
  
  export default SettingSkill;
  
