import React from 'react';

function Teams() {
  const teamMembers = [
    {
      name: 'Maya Darpan',
      location: 'Mumbai, 1972',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=600&h=800'
    },
    {
      name: 'Khayal Gatha',
      location: 'Mumbai, 1989',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600&h=800'
    },
    {
      name: 'Tarang',
      location: 'Mumbai, 1984',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600&h=800'
    },
    {
      name: 'Char Adhyay',
      location: 'Mumbai, 1997',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=600&h=800'
    },
    {
      name: 'Kasaba',
      location: 'Mumbai, 1991',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600&h=800'
    },
    {
      name: 'Bhavantarana',
      location: 'Mumbai, 1991',
      image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&q=80&w=600&h=800'
    }
  ];

  return (
    <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-12 lg:py-24">
      <h1 className="text-3xl sm:text-3xl lg:text-3xl font-semibold mb-2 sm:mb-4 lg:mb-4">
        Meet the Team
      </h1>
      
      {/* Mobile view (up to 639px) */}
      <div className="sm:hidden overflow-x-auto pb-6 scrollbar-hide">
        <div className="flex space-x-1 snap-x snap-mandatory">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="flex-none w-[150px] snap-center"
            >
              <div className="flex flex-col">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-[350px] object-cover mb-1"
                />
                <h3 className="text-sm font-semibold">{member.name}</h3>
                <p className="text-gray-600 text-xs">{member.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tablet view (640px - 1023px) */}
      <div className="hidden sm:block lg:hidden">
        <div className="grid grid-cols-2 gap-1">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col">
              <img 
                src={member.image} 
                alt={member.name}
                className="w-full h-[400px] object-cover  mb-3"
              />
              <h3 className="text-sm font-semibold">{member.name}</h3>
              <p className="text-gray-600 text-xs">{member.location}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop view (1024px and above) */}
      <div className="hidden lg:flex lg:flex-row lg:gap-1 lg:overflow-x-auto">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex-none w-[230px]">
            <div className="flex flex-col">
              <img 
                src={member.image} 
                alt={member.name}
                className="w-full h-[400px] object-cover  mb-3"
              />
              <h3 className="text-sm font-semibold">{member.name}</h3>
              <p className="text-gray-600 text-xs">{member.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Teams;