import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
const events = 

    [
        {color:'#9bd1e5', title: 'Accenture Physical Drive',start: '2023-08-11T10:00:00',
        end: '2023-08-12T12:00:00',url:'https://1000logos.net/wp-content/uploads/2021/04/Accenture-logo.png' },
        {color:'#fffbbd', title: 'GenPact Physical Drive', date: '2023-08-11',url:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Genpact_logo.svg/2560px-Genpact_logo.svg.png' },
        {color:'#f8aa92', title: 'GenPact Physical Drive', date: '2023-08-22',url:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Genpact_logo.svg/2560px-Genpact_logo.svg.png' },
        {color:'#dbd8ae', title: 'TCS presentation Drive', date: '2023-08-14',url:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/2560px-Tata_Consultancy_Services_Logo.svg.png' },
        {color:'#be97c6',title:'Oracle',date:'2023-08-16',url:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/2560px-Oracle_logo.svg.png"}
      ]
  
  
 function Calendar() {
    const role = 'Admin'
    return (
      <div className='bg-white h-[60vh] md:h-full px-3 py-4 rounded-md w-full'>
        <FullCalendar
          plugins={[dayGridPlugin,timeGridPlugin,interactionPlugin]}
          initialView={'dayGridMonth'}
          headerToolbar={{
            end:'prev,next',
            start:'',
            center:'title',
            // end:'dayGridMonth,timeGridWeek',
          }}
          
          
          eventBorderColor='white'
          events={events}
          eventContent={renderEventContent}
        />
      </div>
    )
  }
  
  // a custom render function
  function renderEventContent(eventInfo) {
    return (
    
      <div className={`${eventInfo.event.color}` }>
        <p className='text-black whitespace-normal text-[10px] md:text-[14px] text-center'>{eventInfo.event.title}</p>
        <img className='w-full md:px-4 md:py-0 py-2 md:h-20 object-contain' src={eventInfo.event.url} alt='img'/>
      </div>
    )
  }

export default Calendar