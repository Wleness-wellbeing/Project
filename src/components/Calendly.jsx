// <!-- Calendly inline widget begin -->
// <div class="calendly-inline-widget" data-url="https://calendly.com/prabhat-kr-2900/wlen" style="min-width:320px;height:700px;"></div>
// <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
// <!-- Calendly inline widget end -->

import React from "react";

const Calendly = () => {
  const widgetStyle = {
    minWidth: "750px",
    height: "700px",
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div
        style={widgetStyle}
        className="bg-white rounded-lg overflow-hidden shadow-lg"
      >
        <iframe
          title="Calendly Widget"
          src="https://calendly.com/prabhat-kr-2900/wleness?primary_color=008080"
          style={{ width: "100%", height: "100%" }}
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
};

export default Calendly;
