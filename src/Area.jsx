import React from "react";

function Area() {
  return (
    <div class="mb-20 flex flex-row justify-center items-center w-full leading-7">
      <div class="max-w-[85%] flex flex-row justify-center items-center">
        <div class="flex flex-col mr-24">
          <div class="">
            <h1 class="font-serif font-semibold text-4xl mb-4">
              Miten saavut paikalle
            </h1>
          </div>
          <div class=" flex flex-col justify-between w-2/3">
            <div class="py-4">
              <h3 class="font-bold leading-7">Sijainti</h3>
              <h2 class="">
                Kino Lapinlahti järjestetään Lapinlahden puistoalueella
                Hietaniemen hautausmaan vieressä.
              </h2>
            </div>

            <div class="py-4">
              <h3 class="font-bold">Festivaalialueen aukioloajat</h3>
              <div>
                <ul>
                  <li>To 22.8.2024 klo 14:00 – 01:00</li>
                  <li>Pe 23.8.2024 klo 14:00 – 01:00</li>
                  <li>La 24.8.2024 klo 13:00 – 01:00</li>
                  <li>Su 25.8.2024 klo 14:00 – 00:00</li>
                </ul>
              </div>
            </div>
            <div class="py-4">
              <h3 class="font-bold leading-7">Ikäraja</h3>
              <h2 class="">
                Tapahtuma on ikäräjaton. Joidenkin elokuvien ikäraja on k16.
              </h2>
            </div>
            <div class="py-4">
              <h3 class="font-bold leading-7">Esteettömyys</h3>
              <h2 class="">
                Kaikkiin muihin rakennuksiin, paisi ... on esteetön kulku
              </h2>
            </div>
          </div>
        </div>

        <div>
          <div className="w-2/3 mb-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1584.4612808598185!2d24.911512298500625!3d60.16752629689014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46920a37d09b33d7%3A0x80af25826e6d8cf6!2sLapinlahden%20L%C3%A4hde!5e0!3m2!1sen!2sse!4v1715858112461!5m2!1sen!2sse"
              width="450"
              height="430"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Area;
