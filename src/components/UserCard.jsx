import React from 'react';
import { IoIosMale, IoMdFemale } from "react-icons/io";
import { Phone, Mail, MapPin } from 'lucide-react';

const UserCard = ({ user }) => {
  const genderIcon = user.gender === 'female' ? <IoMdFemale size={18} /> : <IoIosMale size={18} />;

  return (
    <div className="max-w-xl p-5 rounded-md shadow-md mx-auto flex justify-between gap-10 bg-gradient-to-br from-[#131c85] to-[#8278d9] mt-10 relative  hover:shadow-xl  transition duration-300 hover:-translate-y-2 hover:translate-x-1 group text-white">
      <div className="relative w-48 h-h8">
        <img
          src={user.picture.large}
          alt={user.name.first}
          className="w-52 h-52 object-cover rounded-md  profileImage drop-shadow-lg transition-all duration-300 absolute -top-14 z-20"
        />
      </div>
      <div className="text-start flex flex-col gap-1 relative z-10">
        <h2 className="text-2xl font-bold">
          {user.name.title}. {user.name.first} {user.name.last}
        </h2>
        <p className="text-white/90 flex gap-2 text-base items-center">
          {genderIcon} {user.gender}
        </p>
        <p className="text-white/90 flex gap-2 text-base items-center">
          <Phone size={18} /> {user.phone}
        </p>
        <p className="text-white/90 flex gap-2 text-base items-center">
          <Mail size={18} /> {user.email}
        </p>
        <p className="text-white/90 flex gap-2 text-base items-center">
          <MapPin size={18} /> {user.location.street.number}, {user.location.street.name}, {user.location.city}, {user.location.state}, {user.location.country}
        </p>
      </div>
      
    </div>
  );
};


export default UserCard;