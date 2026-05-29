import React from "react";

// Apuri: näytä lohko vain jos joku sen sisältä on totta
function hasAny(...values) {
  return values.some(Boolean);
}

function Area({ data }) {
  const openHours = data?.openHours?.fields;
  const accessibilityLinks = [
    {
      href: "https://docs.google.com/document/d/18mhspc47rtUlAMXKDayj_F4Q89gykPB0-dy2PHDo1nQ/",
      label: data?.subheading5,
    },
    {
      href: "https://lapinlahdenlahde.fi/wp-content/uploads/FI-Q-door-access-ramp-Omatoimiohje.pdf",
      label: data?.subheading6,
    },
    {
      href: "https://bit.ly/myos-safer-space",
      label: data?.subheading8,
    },
  ].filter((link) => link.label);

  return (
    <div className="flex flex-row justify-center items-center w-full leading-8">
      <div className="max-w-[88%] sm:max-w-[85%] flex flex-col justify-center items-start lg:flex-row">
        <div className="flex flex-col w-[100%] lg:pr-[5rem] lg:w-[50%] text-plum text-lg leading-8">
          {data?.secondaryTitle && (
            <h1 className="font-serif font-semibold text-plum text-4xl mb-4">
              {data.secondaryTitle}
            </h1>
          )}

          {hasAny(data?.subheading1, data?.paragraph1, data?.paragraph5) && (
            <div className="py-4">
              {data?.subheading1 && (
                <h3 className="font-bold leading-7">{data.subheading1}</h3>
              )}
              {data?.paragraph1 && <p>{data.paragraph1}</p>}
              {data?.paragraph5 && <p className="pt-[0.5rem]">{data.paragraph5}</p>}
            </div>
          )}

          {hasAny(
            data?.subheading2,
            openHours?.item1,
            openHours?.item2,
            openHours?.item3,
            openHours?.item4,
          ) && (
            <div className="py-4">
              {data?.subheading2 && (
                <h3 className="font-bold">{data.subheading2}</h3>
              )}
              {openHours?.item1 && <div>{openHours.item1}</div>}
              {openHours?.item2 && <div>{openHours.item2}</div>}
              {openHours?.item3 && <div>{openHours.item3}</div>}
              {openHours?.item4 && <div>{openHours.item4}</div>}
            </div>
          )}

          {hasAny(data?.subheading3, data?.paragraph3) && (
            <div className="py-4">
              {data?.subheading3 && (
                <h3 className="font-bold leading-7">{data.subheading3}</h3>
              )}
              {data?.paragraph3 && <p>{data.paragraph3}</p>}
            </div>
          )}

          {hasAny(data?.subheading4, data?.paragraph4) && (
            <div className="py-4">
              {data?.subheading4 && (
                <h3 className="font-bold leading-7">{data.subheading4}</h3>
              )}
              {data?.paragraph4 && <p>{data.paragraph4}</p>}
            </div>
          )}

          {accessibilityLinks.length > 0 && (
            <div className="py-4 font-bold leading-7">
              {accessibilityLinks.map((link, i) => (
                <div key={link.href}>
                  <a
                    href={link.href}
                    className="inline-block hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h3 className={i === 0 ? "pt-4" : "pt-2"}>{link.label}</h3>
                  </a>
                </div>
              ))}
            </div>
          )}

          {hasAny(data?.subheading9, data?.paragraph6) && (
            <>
              {data?.subheading9 && (
                <h3 className="font-bold leading-7">{data.subheading9}</h3>
              )}
              {data?.paragraph6 && <p>{data.paragraph6}</p>}
            </>
          )}
          {hasAny(data?.subheading10, data?.paragraph7) && (
            <>
              {data?.subheading10 && (
                <h3 className="font-semibold leading-7 pt-4 underline">
                  {data.subheading10}
                </h3>
              )}
              {data?.paragraph7 && <p>{data.paragraph7}</p>}
            </>
          )}
          {hasAny(data?.subheading11, data?.paragraph8) && (
            <>
              {data?.subheading11 && (
                <h3 className="font-semibold leading-7 pt-4 underline">
                  {data.subheading11}
                </h3>
              )}
              {data?.paragraph8 && <p>{data.paragraph8}</p>}
            </>
          )}
          {hasAny(data?.subheading12, data?.paragraph9) && (
            <>
              {data?.subheading12 && (
                <h3 className="font-semibold leading-7 pt-4 underline">
                  {data.subheading12}
                </h3>
              )}
              {data?.paragraph9 && <p>{data.paragraph9}</p>}
            </>
          )}
        </div>

        <div className="flex flex-col w-full lg:w-[50%] items-center pt-8 lg:pt-0">
          <a
            href="/area-map.png"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-[20rem] lg:max-w-[40rem]"
          >
            <picture>
              <source srcSet="/area-map-1000.webp" type="image/webp" />
              <img
                className="aspect-square w-full h-auto object-cover"
                src="/area-map.png"
                alt="Lapinlahden alueen kartta"
                loading="lazy"
              />
            </picture>
          </a>

          <div className="relative pt-[60%] rounded-2xl overflow-hidden shadow-lg mt-8 w-full max-w-[20rem] lg:max-w-[40rem]">
            <iframe
              className="absolute top-0 left-0 w-full h-full border-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1584.4612808598185!2d24.911512298500625!3d60.16752629689014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46920a37d09b33d7%3A0x80af25826e6d8cf6!2sLapinlahden%20L%C3%A4hde!5e0!3m2!1sen!2sse!4v1715858112461!5m2!1sen!2sse"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lapinlahden Lähde sijainti"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Area;
