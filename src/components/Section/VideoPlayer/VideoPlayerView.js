import React from "react";

export const isIframeValid = (code) => {
  const iframeRegex = /<iframe.*?src="(.*?)".*?>/;
  return iframeRegex.test(code);
};

const VideoPlayerView = ({ video }) => {
  return isIframeValid(video) ? (
    <div
      style={{
        position: "relative",
        width: "100%",
        paddingTop: "56.25%",
        overflow: "hidden",
      }}
      className="md:border-[20px] border-[10px] rounded-xl border-white shadow-sm"
    >
      <div
        dangerouslySetInnerHTML={{
          __html: video.replace(
            "<iframe",
            '<iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"'
          ),
        }}
      />
    </div>
  ) : (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
      }}
      className="md:border-[20px] border-[10px] rounded-xl border-white shadow-sm aspect-video"
    >
      <video controls>
        <source src={video} type="video/mp4" />
        Trình duyệt của bạn không hỗ trợ video.
      </video>
    </div>
  );
};

export default VideoPlayerView;
