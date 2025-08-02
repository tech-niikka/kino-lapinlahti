export const Now = ({ now }) => {
  return (

    <div className="flex w-[95%] max-w-[1200px] mx-auto items-start gap-6 flex-col sm:flex-row px-4 py-4">
      
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
          </div>

          <div className="flex gap-[0.5rem] pt-[1rem] text-[1rem] lowercase font-semibold">
            <div>{now.fields.day}</div>
            <div>{now.fields.date}</div>
            <div>{now.fields.time}</div>
          </div>

          <div className="py-4">
            <h3 className="font-bold leading-7">{now.fields.subheading1}</h3>
              
            <p className="text-base py-[0.2rem] font-light overflow-hidden whitespace-pre-line">
              {now.fields.paragraph1}
            </p>
          </div>

          <div className="py-4">
            <h3 className="font-bold leading-7">{now.fields.subheading2}</h3>

            <p className="text-base py-[0.2rem] font-light overflow-hidden whitespace-pre-line mt-2 mb-4">
              {now.fields.paragraph2}
            </p>

            <a
              href="https://warrenellis.ltd/film/dogma-25-manifesto/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base py-[0.2rem] font-semibold leading-7 hover:underline overflow-hidden whitespace-pre-line"
            >
              {now.fields.link1}
            </a>
          </div>

          <div className="py-4">
            <h3 className="font-bold leading-7">{now.fields.subheading3}</h3>

            <p className="text-base py-[0.2rem] font-light overflow-hidden whitespace-pre-line">
              {now.fields.paragraph3}
            </p>

          </div>

          <div className="py-4">
            <h3 className="font-bold leading-7">{now.fields.subheading4}</h3>

            <p className="text-base py-[0.2rem] font-light overflow-hidden whitespace-pre-line mt-2 mb-4">
              {now.fields.paragraph4}
            </p>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSftm55ZmvbpoCC_Qbl1vGm4rKjrWXxH69n7t6DCTTYyPxqryg/viewform?usp=sharing&ouid=112752221650999465221"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base py-[0.2rem] font-semibold leading-7 hover:underline overflow-hidden whitespace-pre-line mb-4 mt-2"
            >
              {now.fields.link2}
            </a>

             <p className="text-base py-[0.2rem] font-light overflow-hidden whitespace-pre-line mb-4 mt-2">
              {now.fields.paragraph5}
            </p>

          </div>

          <div className="py-4">
            <h3 className="font-bold leading-7">{now.fields.subheading5}</h3>

            <p className="text-base py-[0.2rem] font-light overflow-hidden whitespace-pre-line">
              {now.fields.paragraph6}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};