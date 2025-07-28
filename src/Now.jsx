export const Now = ({ now }) => {
  return (

    <div className="flex-grow-0 flex flex-col items-start w-[95%] custom-440:w-[70%] text-sm relative px-0 custom-588:px-[1rem] py-[0.1rem] custom-588:py-[2rem] custom-590:flex-col custom-590:w-[50%] custom-1120:w-[50%] sm:w-[100%] sm:flex-row custom-1150:w-[50%] mx-auto sm:mx-0 gap-y-2 sm:gap-y-0">
      
      <div className="sm:pr-[2rem] overflow-hidden">
        <img
          src={`${now.fields.artwork.fields.file.url}?fit=thumb&f=center&w=400&h=400&fm=webp`}
          alt={`${now.fields.workshopName} artwork`}
          className="aspect-square w-full pr-0 h-auto custom-588:w-[20rem] min-h-[18rem] object-cover rounded-lg"
          loading="lazy"
        />
      </div>

      <div className="flex flex-col justify-between w-[100%] sm:w-[60%] custom-1150:w-[60%] custom-1120:w-[60%]">
        <div className="flex flex-col justify-between gap-[0.15rem]">

          <div className='flex flex-col justify-between custom-588:pt-0'>
            <h3 className="text-2xl pt-[0.2rem] sm:py-[0.20rem] font-semibold font-serif">
              {now.fields.workshopName}
            </h3>

          {/* one instagram handle */}
          {now.fields.handle && !now.fields.handle2 && ( // @handle only shown if field is populated in Contentful
            <h4 className="text-base sm:py-[0.25rem] font-light font-serif hover:underline">
              <a 
                href={`https://www.instagram.com/${now.fields.handle}`}     
                target="_blank"
                rel="noopener noreferrer">
                @{now.fields.handle}
              </a>
            </h4>
          )}

          {/* two instagram handles */}
          {now.fields.handle && now.fields.handle2 && ( // @handle & @handle2 only shown if fields are populated in Contentful
            <h4 className="text-base sm:py-[0.25rem] font-light font-serif">
              <a 
                href={`https://www.instagram.com/${now.fields.handle}`}     
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline">
                @{now.fields.handle}
              </a>
              &nbsp;
              <a 
                href={`https://www.instagram.com/${now.fields.handle2}`}     
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline">
                @{now.fields.handle2}
              </a>
            </h4>
          )}

            {/* <div className="uppercase text-sm font-light">
              {now.fields.location}
            </div> */}
          </div>

          <div className="flex gap-[0.5rem] pt-[1rem] text-[1rem] lowercase font-semibold">
            <div>{now.fields.day}</div>
            <div>{now.fields.date}</div>
            <div>{now.fields.time}</div>
          </div>

          <div className="flex flex-row">
            <div className="text-sm pt-[0.1rem] pr-[0.5rem] font-semibold">
              {now.fields.workshopLanguageTitle} 
            </div>

            <div className="text-sm pt-[0.1rem] font-light">
              {now.fields.workshopLanguage}
            </div>
          </div>
            
          <p className="text-base min-h-[6.5rem] py-[0.2rem] font-light overflow-hidden whitespace-pre-line">
            {now.fields.description}
          </p>

        </div>
      </div>
    </div>
  );
};