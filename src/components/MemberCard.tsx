import React from 'react';
import type { Member } from '../data/committees';

type MemberCardProps = Member;

const MemberCard = ({ image, name, designation }: MemberCardProps) => {
  return (
    <div className="bg-gray-800/40 backdrop-blur-sm rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl border border-purple-500/10">
      <div className="aspect-w-1 aspect-h-1">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-2.5 sm:p-3">
        <h3 className="text-base sm:text-lg font-semibold text-white truncate leading-snug">{name}</h3>
        <p className="text-xs sm:text-sm text-purple-200/70 truncate leading-relaxed">{designation}</p>
      </div>
    </div>
  );
};

export default MemberCard;