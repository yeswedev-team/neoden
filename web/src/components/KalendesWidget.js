import React, { useEffect } from "react";

const KalendesWidget = ({ title, className, link }) => {

  const handleClick = () => {
    kalendes.show();
  };

  useEffect(() => {

    if(!document.querySelector('[src="https://www.kalendes.com/widget/widget.js?onload=kalendesLoaded"]')) {
      const script = document.createElement('script');
      script.src = 'https://www.kalendes.com/widget/widget.js?onload=kalendesLoaded';
      script.type = 'text/javascript';
      script.async = true;
      const scriptXml = document.createElement('script');
      scriptXml.innerHTML = `/*<![CDATA[*/kalendes_host="neoden";/*]]>*/`;
      document.getElementById('script-container').prepend(scriptXml);
      document.getElementById('script-container').prepend(script);

      window.kalendesLoaded = function(){
        kalendes.setPercentHeight(90);
        kalendes.setBottomRightPosition();
      }

      const kalendesContainer = document.createElement('div');
      kalendesContainer.id = 'kalendes-widget-container';
      document.querySelector('body').appendChild(kalendesContainer);
    }
  });

  return (
    <div id="script-container">
      { link ? (
          
          <a style={{textDecoration: "underline", cursor: "pointer"}} className={className} onClick={handleClick}>{title}</a>
        ) : (
          <button className={className} onClick={handleClick}>{title}</button>
        )}
    </div>
  );
};

export default KalendesWidget;