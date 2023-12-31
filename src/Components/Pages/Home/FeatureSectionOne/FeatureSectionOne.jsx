import scribbleFlipped from "../../../../assets/PaintScribble/paint-scribble-flipped.svg";
import icon from "../../../../assets/icons/icon.png";
const FeatureSectionOne = () => {
  return (
    <div className="w-[1903px] h-[540px]">
      <img src={scribbleFlipped} className="relative -top-[1px]" alt="" />
      <div className="w-3/5 flex mx-auto py-20">
        <div className="w-2/5 p-4">
          {/* features-text */}
          <h2 className="font-bold">THE WHITE OAKS CABINS DIFFERENCE</h2>
          <h1 className="font-bold text-3xl">
            PRIVATE CABINS WITH
            <br />
            <span className="text-[#ff4b4b]">HOSPITALITY</span>
          </h1>
          <img src={icon} alt="" />
          <p>
            We promise private, professionally-cleaned vacation rentals with
            24/7 guest support so you can travel without worry.
          </p>
        </div>
        <div className="grid grid-cols-3 w-3/5 ">
          {/* features- */}
          <div>
            <div className="bg-[#ff4b4b] rounded-full flex items-center justify-center h-[70px] w-[70px]">
              <svg
                className=""
                width="50"
                height="50"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#ffffff"
                  d="M12 12.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7M10.5 16a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0"
                />
                <path
                  fill="#ffffff"
                  d="M17.526 5.116L14.347.659L2.658 9.997L2.01 9.99V10H1.5v12h21V10h-.962l-1.914-5.599zM19.425 10H9.397l7.469-2.546l1.522-.487zM15.55 5.79L7.84 8.418l6.106-4.878zM3.5 18.169v-4.34A3.008 3.008 0 0 0 5.33 12h13.34a3.009 3.009 0 0 0 1.83 1.83v4.34A3.009 3.009 0 0 0 18.67 20H5.332A3.01 3.01 0 0 0 3.5 18.169"
                />
              </svg>
            </div>
            <h1 className="font-bold text-[#ff4b4b] text-xl">BEST RATE</h1>
            <img src={icon} alt="" />
            <p>
              You’re guaranteed to book the best rates on our vacation homes at{" "}
              <a href="whiteoakscabins.org" className="text-[#ff4b4b]">
                whiteoakscabins.org
              </a>
            </p>
          </div>
          <div>
            <div className="bg-[#ff4b4b] rounded-full flex items-center justify-center h-[70px] w-[70px]">
              <svg
                width="50"
                height="50"
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#fff"
                  d="M128 384v512h768V192H768v32a32 32 0 1 1-64 0v-32H320v32a32 32 0 0 1-64 0v-32H128v128h768v64zm192-256h384V96a32 32 0 1 1 64 0v32h160a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h160V96a32 32 0 0 1 64 0zm-32 384h64a32 32 0 0 1 0 64h-64a32 32 0 0 1 0-64m0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64m192-192h64a32 32 0 0 1 0 64h-64a32 32 0 0 1 0-64m0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64m192-192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64m0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64"
                />
              </svg>
            </div>
            <h1 className="font-bold text-[#ff4b4b] text-xl">REST EASY</h1>
            <img src={icon} alt="" />
            <p>
              If plans change or the vacation rental isn’t what we promised,
              we’re here to{" "}
              <a href="whiteoakscabins.org" className="text-[#ff4b4b]">
                help make it right.
              </a>
            </p>
          </div>
          <div>
            <div className="bg-[#ff4b4b] rounded-full flex items-center justify-center h-[70px] w-[70px]">
              <svg
                width="50"
                height="50"
                viewBox="0 0 14 14"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M.5 7.08h2.19a.52.52 0 0 0 .45-.27l1.8-3.6a.49.49 0 0 1 .49-.27a.48.48 0 0 1 .43.35l2.23 7.42a.5.5 0 0 0 .46.36a.5.5 0 0 0 .45-.32l1.37-3.35a.51.51 0 0 1 .47-.32h2.66"
                />
              </svg>
            </div>
            <h1 className="font-bold text-[#ff4b4b] text-xl">HOSPITALITY</h1>
            <img src={icon} alt="" />
            <p>
              <a href="whiteoakscabins.org" className="text-[#ff4b4b]">
                White oaks cabins
              </a>
              White oaks cabins offers a luxurious opportunity to experience
              nature in a whole new way.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSectionOne;
