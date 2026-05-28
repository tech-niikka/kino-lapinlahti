import React from "react";

function Contacts({ contacts }) {
  if (!contacts?.length) return null;

  return (
    <div className="flex flex-row justify-center items-center w-full leading-7">
      <div className="max-w-[88%] sm:max-w-[85%] w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 text-plum">
          {contacts.map((person) => (
            <div key={person.email || person.name} className="flex flex-col">
              {person.name && (
                <h3 className="font-semibold text-lg leading-snug">
                  {person.name}
                </h3>
              )}
              {person.title && (
                <p className="leading-snug pb-1">{person.title}</p>
              )}
              {person.email && (
                <a
                  href={`mailto:${person.email}`}
                  className="hover:underline break-all"
                >
                  {person.email}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contacts;
