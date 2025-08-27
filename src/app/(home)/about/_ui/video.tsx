interface VideoProps {
  source: string;
  width?: number;
  height?: number;
}
const VideoPlayer = ({ source, width = 400, height = 300 }: VideoProps) => {
  return (
    <section className="rounded-3xl overflow-hidden" style={{ width, height }}>
      <video
        autoPlay
        loop
        muted
        preload="metadata"
        className="w-full object-cover object-center h-full"
      >
        <source src={source} type="video/mp4" />
        {/* <track
          src="/path/to/captions.vtt"
          kind="subtitles"
          srcLang="en"
          label="English"
        /> */}
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default VideoPlayer;
