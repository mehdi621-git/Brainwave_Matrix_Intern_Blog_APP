
import React from 'react'
import Inputfield from './inputfield'
import Divider from './Divider'

const SettingBasic = () => {
  return (
    <div>
    <Inputfield borderC='border-[#E0E0E0]' labelfor={'Name'} textcolor={'text-white'} labelname={'Name'} inputType={'text'} placeholder={'abc'}/>
    <Inputfield borderC='border-[#E0E0E0]' labelfor={'Profession'} textcolor={'text-white'} labelname={'Profession'} inputType={'text'} placeholder={'abc'}/>
    <Inputfield borderC='border-[#E0E0E0]' labelfor={'Country'} textcolor={'text-white'} labelname={'Country'} inputType={'text'} placeholder={'abc'}/>

    <Inputfield borderC='border-[#E0E0E0]' labelfor={'City'} textcolor={'text-white'} labelname={'City'} inputType={'text'} placeholder={'abc'}/>
     
    


   
</div>
       
  )
}

export default SettingBasic