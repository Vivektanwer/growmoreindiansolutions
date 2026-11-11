// A simple grey box that shows where an image or video will go.
//
// HOW TO REPLACE IT:
//  1. Put your picture in the "public/images" folder (example: public/images/hero.jpg)
//  2. Where you see <Placeholder ... /> write this instead:
//       <img src="/images/hero.jpg" alt="Describe the picture" loading="lazy" className="w-full h-full object-cover" />
//     (For the very first picture at the top of the page, remove loading="lazy")
//  3. For a video use:
//       <video src="/videos/intro.mp4" controls preload="none" className="w-full h-full object-cover"></video>

const Placeholder = ({ icon = 'bi-image', label = 'Image placeholder', className = '' }) => {
  return (
    <div className={'flex flex-col items-center justify-center gap-3 bg-brand-green-soft text-brand-green text-center p-6 ' + className}>
      <i className={'bi text-5xl ' + icon}></i>
      <span className="font-medium text-sm">{label}</span>
    </div>
  )
}

export default Placeholder
