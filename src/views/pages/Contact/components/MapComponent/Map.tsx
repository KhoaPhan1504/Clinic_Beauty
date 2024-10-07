import React from 'react';
import { contact } from '../../../../../data/Contact/contactData';

const Map: React.FC = () => {
  return (
    <>
      <section>
        <iframe
          src={contact.map}
          className="mt-[-2px] h-[418px] w-full"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  );
};

export default Map;
