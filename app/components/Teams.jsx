import React from 'react';

function Teams() {
  const teamMembers = [
    {
      name: 'Maya Darpan',
      location: 'Mumbai, 1972',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=600&h=600'
    },
    {
      name: 'Khayal Gatha',
      location: 'Mumbai, 1989',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600&h=600'
    },
    {
      name: 'Tarang',
      location: 'Mumbai, 1984',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600&h=600'
    },
    {
      name: 'Char Adhyay',
      location: 'Mumbai, 1997',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=600&h=600'
    },
    {
      name: 'Kasaba',
      location: 'Mumbai, 1991',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600&h=600'
    },
    {
      name: 'Bhavantarana',
      location: 'Mumbai, 1991',
      image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&q=80&w=600&h=600'
    }
  ];

  return (
    <div className=" mx-auto px-4 lg:px-8 md:px-8 pb-8 pt-20">
      <h1 className="text-3xl font-semibold mb-4">Meet the Team</h1>
      
      {/* Mobile slider view */}
      <div className="md:hidden overflow-x-auto pb-1 scrollbar-hide">
        <div className="flex space-x-1 snap-x snap-mandatory">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="flex-none  w-[194px] snap-center"
            >
              <div className="flex flex-col">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-[400px]  object-cover  mb-1"
                />
                <h3 className="text-sm font-medium">{member.name}</h3>
                <p className="text-gray-600 text-xs">{member.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop view - single row */}
      <div className="hidden md:flex md:flex-row md:gap-1 md:overflow-x-auto">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex-none w-[194px] ">
            <div className="flex flex-col">
              <img 
                src={member.image} 
                alt={member.name}
                className="w-full h-[400px] object-cover  mb-1"
              />
              <h3 className="text-sm font-medium ">{member.name}</h3>
              <p className="text-gray-600 text-xs">{member.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Teams;