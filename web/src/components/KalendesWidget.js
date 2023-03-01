import React, { useEffect } from "react";

const KalendesWidget = () => {

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
        <button className="button" onClick={handleClick}>Réserver ou offrir</button>
    </div>
  );
};

export default KalendesWidget;