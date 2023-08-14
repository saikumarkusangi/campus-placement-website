import React, { useState } from 'react'
import {IoIosArrowForward,IoIosArrowBack} from 'react-icons/io';
import { differenceInDays, endOfMonth, format, startOfMonth } from 'date-fns';
import { add, sub } from 'date-fns/esm';

const daysOfWeek = [
  "Sun","Mon","Tue","Wed","Thu","Fri","Sat"
];

const events = 

    [
        {color:'#9bd1e5', title: 'Accenture Physical Drive',start: '2023-08-11T10:00:00',
        end: '2023-08-12T12:00:00',url:'https://1000logos.net/wp-content/uploads/2021/04/Accenture-logo.png' },
        {color:'#fffbbd', title: 'GenPact Physical Drive', date: '2023-08-11',url:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Genpact_logo.svg/2560px-Genpact_logo.svg.png' },
        {color:'#f8aa92', title: 'GenPact Physical Drive', date: '2023-08-22',url:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Genpact_logo.svg/2560px-Genpact_logo.svg.png' },
        {color:'#dbd8ae', title: 'TCS presentation Drive', date: '2023-08-14',url:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/2560px-Tata_Consultancy_Services_Logo.svg.png' },
        {color:'#be97c6',title:'Oracle',date:'2023-08-16',url:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/2560px-Oracle_logo.svg.png"}
      ]
  
  
 function Calendar({value,onChange}) {
    const startDate = startOfMonth(value);
    const endDate = endOfMonth(value);
    const numDays = differenceInDays(endDate,startDate)+1;
    const prefixDays = startDate.getDay();
    const suffixDays = 6 - endDate.getDay();

    const prevMonth = () => onChange(sub(value , {months:1}));
    const NextMonth = () => onChange(add(value , {months:1}));
    return (
      <div className='bg-white  md:h-full px-3 py-4 rounded-md w-full  '>
        <div className='items-center justify-between text-center'>
          <div className='flex w-[90vw] justify-between'>
            <IoIosArrowBack onClick={prevMonth} className='' size={32}/>
            <p className='text-xl font-oswald font-semibold'>{format(value , 'LLLL yyyy')}</p>
            <IoIosArrowForward onClick={NextMonth} className=''  size={32}/>
          </div>
         <div className='mt-5 flex justify-between border-[1px] border-black'>
         {daysOfWeek.map(day => {
          return(
           <div key={day} className='text-sm font-bold font-roboto border-l-0 border-black w-full  py-3 text-center border-[1px]'>{day}</div>
          )
         })}
         </div>
         
        <div className='grid grid-cols-7 border-[1px] border-t-0 border-black '>
        {Array.from({length:prefixDays}).map((_,index) =>{
            return(
              <div key={index} className="px-5 py-5 border-[1px]  border-t-0 border-[#7a7a7a7b]"></div>
            )
          })
         }
         {Array.from({length:numDays}).map((_,index) =>{
          const date = index + 1;
          return(
            <div key={index} className={`relative px-5 ${date == 12 && 'bg-red-200 '} py-5 border-[1px] border-t-0 border-[#7a7a7a7b]`}>
              {date == 12 && <img className='absolute bottom-2 left-0 ' src='https://cdn.cookielaw.org/logos/2396a178-b290-4b3f-bf3f-5be727810e2a/31641acd-0a90-4c01-b06b-16df2fa8573b/9285c36b-ce29-4f1e-9d50-fcdadd882498/Acc_Logo_Black_Purple_RGB.png' alt='logo'/>}
              {date}
            </div>
          )
         })}
         {Array.from({length:suffixDays}).map((_,index) =>{
          return(
            <div key={index} className="px-5 py-5 border-[1px] border-t-0 border-[#7a7a7a7b]"></div>
          )
        })
       }
        </div>

        </div>
        
      </div>
    )
  }



export default Calendar