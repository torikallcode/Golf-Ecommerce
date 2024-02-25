import React from 'react';

export const CollectionCard = ({ backgroundImage, title, description }) => {
  return (
    <div
      className="bg-cover bg-center w-full h-full overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="p-4 flex flex-col w-full h-full justify-end gap-y-3">
        <h2 className="text-slate-800 text-3xl font-semibold sm:text-5xl md:text-6xl lg:text-4xl xl:text-5xl">{title}</h2>
        <p className="text-slate-800 text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-2xl">{description}</p>
      </div>
    </div>
  );
};
