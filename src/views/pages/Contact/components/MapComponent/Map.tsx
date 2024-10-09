import React from 'react';

const Map: React.FC = () => {
  return (
    <>
      <section className="h-full w-full sm:mt-[400px] xl:mt-[220px] x:mb-[112px] x:mt-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.060222205331!2d105.77774597922516!3d21.03027623064791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab4cb69f572b%3A0x3b8fbd089b01207f!2sBac%20Ha%20Software%20(BHSoft)!5e0!3m2!1sen!2s!4v1725592419255!5m2!1sen!2s"
          className="mt-[-2px] w-full x:h-[418px] 2xl:h-full"
          style={{ border: 0, width: '100%' }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
};

export default Map;
