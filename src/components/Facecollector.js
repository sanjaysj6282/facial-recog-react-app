import React from "react";

function Facecollector() {
  return (
    <div>
        <iframe
          src={"http://0.0.0.0:5003/video_feed"}
          allow="accelerometer, autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
    </div>
  );
}

export default Facecollector;
