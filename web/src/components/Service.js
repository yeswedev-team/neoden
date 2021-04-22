import React, { useRef, useState } from 'react';
import { MdCardGiftcard } from 'react-icons/md';
import { IoMdOpen } from 'react-icons/io';
import Img from 'gatsby-image';
import PortableText from './PortableText';
// import Modal from './Modal';

export default function Service({ service }) {
  const [selectedOption, setSelectedOption] = useState(
    service.places[0].bookingLink
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
              {service.offerlinktitle || "J'offre"} <MdCardGiftcard />
            </a>
          )}
          {service.bookinglink && (
            <a
              href={service.bookinglink}
              className="button button--brown"
              target="_blank"
              rel="noreferrer"
            >
              {service.bookinglinktitle || 'Je réserve'} <IoMdOpen />
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
      <Img fluid={service?.image?.asset?.fluid} />
    </div>
  );
}
