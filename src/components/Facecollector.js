import React from "react";

function Facecollector() {
  return (
    <div>
      {/* In React, developers use iframes to create either a sandboxed component or an application that is isolated from its parent component. In an iframe, when a piece of content is embedded from an external source, it is completely controlled by the source instead of the website it is embedded in. */}
      <iframe
          src={"http://192.168.1.50:5003/video_feed"}
          width="640px"
          height="480px"
          allow="accelerometer, autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
    </div>
  );
}

export default Facecollector;
