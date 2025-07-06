const LivePreview = () => {
  return (
    <section className="w-full">
      <div className="relative">
          {/* Browser mockup */}
          <div className="bg-gray-800 rounded-t-2xl p-4">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <div className="ml-4 flex-1 bg-gray-700 rounded px-3 py-1 text-sm text-gray-300 text-left">
                meet.google.com/abc-defg-hij
              </div>
            </div>
          </div>
          
          {/* Iframe content */}
          <div className="bg-black rounded-b-2xl overflow-hidden">
            <div className="relative w-full aspect-video">
              <iframe
                src="https://www.youtube.com/embed/gQ3wMqmIoA8?si=UdpSy6y1zOcD6DM8"
                title="TalkScroll Demo Video"
                className="absolute inset-0 w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
      </div>
    </section>
  );
};

export default LivePreview;
