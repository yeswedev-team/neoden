import React, { useRef, useState } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PortableText from './PortableText';
// import Modal from './Modal';

export default function Service({ service }) {
  const [selectedOption, setSelectedOption] = useState(
    service?.places[0]?.bookingLink
  );
  /*
  const modalRef = useRef();

  const { places } = service;
  */

  const onChangeValue = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div key={service.id} className="service">
      <div className="service__content">
        <h3 className="service__title">{service.title}</h3>
        <PortableText blocks={service._rawText} />
        <div className="actions">
          {service.offerlink && (
            <a
              href={service.offerlink}
              className="button button--brownlight"
              target="_blank"
              rel="noreferrer"
            >
              {service.offerlinktitle || "J'offre"} <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 00-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"></path></svg>
            </a>
          )}
          {service.bookinglink && (
            <a
              href={service.bookinglink}
              className="button button--brown"
              target="_blank"
              rel="noreferrer"
            >
              {service.bookinglinktitle || 'Je réserve'} <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M405.34 405.332H106.66V106.668H240V64H106.66C83.191 64 64 83.197 64 106.668v298.664C64 428.803 83.191 448 106.66 448h298.68c23.469 0 42.66-19.197 42.66-42.668V272h-42.66v133.332zM288 64v42.668h87.474L159.999 322.133l29.866 29.866 215.476-215.47V224H448V64H288z"></path></svg>
            </a>
          )}
          {/*
          <Modal ref={modalRef} id="modal-services">
            <h3 className="middle-title">
              Choisissez votre espace Neoden
              <br />
              pour réserver&nbsp;:
            </h3>
            <div className="places-list">
              {places.map((place) => (
                <div key={place.id} className="place">
                  <input
                    type="radio"
                    name="place-choice"
                    id={place.bookingLink}
                    checked={selectedOption === place.bookingLink}
                    value={place.bookingLink}
                    onChange={onChangeValue}
                  />
                  <label htmlFor={place.bookingLink}>
                    <h4 className="place__name">{place.title}</h4>
                    {place._rawText && <PortableText blocks={place._rawText} />}
                  </label>
                </div>
              ))}
            </div>
            <a
              className="button button--white"
              href={selectedOption}
              target="_blank"
              rel="noreferrer"
            >
              Je choisis cet espace Neoden <IoMdOpen />
            </a>
          </Modal>
          <button
            type="button"
            onClick={() => modalRef.current.openModal()}
            className="button button--brown"
          >
            Je réserve <IoMdOpen />
          </button>
          */}
        </div>
      </div>
      <GatsbyImage image={getImage(service?.image?.asset)} alt="" />
    </div>
  );
}
