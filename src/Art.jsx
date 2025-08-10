export const Art = ({ art }) => {
  return (

    <div className="flex-grow-0 flex flex-col items-start w-[95%] custom-440:w-[70%] text-sm relative px-0 custom-588:px-[1rem] py-[0.1rem] custom-588:py-[2rem] custom-590:flex-col custom-590:w-[50%] custom-1120:w-[50%] sm:w-[100%] sm:flex-row custom-1150:w-[50%] mx-auto sm:mx-0 gap-y-2 sm:gap-y-0">
      
      <div className="sm:pr-[2rem] pr-0">
        <img
          src={`https:${art.fields.artwork.fields.file.url}?w=600&fm=webp`}
          alt={`${art.fields.title} poster`}
          className="w-[100%] h-auto custom-588:w-[20rem] min-h-[18rem] aspect-[7/10]" // check if any further tweaks to aspect ratios needed
          loading="lazy"
        />
      </div>

      <div className="flex flex-col justify-between w-[100%] sm:w-[60%] custom-1150:w-[60%] custom-1120:w-[60%]">
        <div className="flex flex-col justify-between gap-[0.15rem]">

          <div className='flex flex-col justify-between custom-588:pt-0'>
            <h3 className="text-2xl pt-[0.2rem] sm:py-[0.20rem] font-semibold font-serif">
              {art.fields.title}
            </h3>

            <h4 className="text-base  sm:py-[0.25rem] font-light font-serif">
              {art.fields.originalTitle}
            </h4>
            
            {/*}
            <div className="uppercase text-sm font-light">
              {art.fields.genre}
            </div>
            */}
          </div>
{/*}
          <div className="flex gap-[0.5rem] pt-[1rem] text-[1rem] lowercase font-semibold">
            <div>{art.fields.day}</div>
            <div>{art.fields.date}</div>
            <div>{art.fields.time}</div>
          </div>
*/}
          <div className="text-sm pt-[0.1rem] pb-[0rem] font-light">
            {art.fields.location}
          </div>
            
          <p className="text-base min-h-[6.5rem] py-[0.2rem] font-light overflow-hidden whitespace-pre-line">
            {art.fields.description}
          </p>

        </div>
      </div>
    </div>
  );
};
