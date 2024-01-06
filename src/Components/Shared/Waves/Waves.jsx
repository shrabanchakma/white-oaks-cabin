import curve from "../../../assets/Curve/curve.svg";
const Waves = () => {
  return (
    <>
      {/* <svg
        className="absolute bottom-[.25rem] left-[23rem]"
        width="100%"
        height="100%"
        viewBox="0 0 1000 1000"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        overflow="auto"
        shapeRendering="auto"
        fill="#ffffff"
      >
        <defs>
          <path
            opacity=".2"
            id="wavepath1"
            d="M 0 2000 0 500 Q 99 416 198 500 t 198 0 198 0 198 0 198 0 198 0 198 0 198 0  v1000 z"
          />
        </defs>
        <g>
          <use xlinkHref="#wavepath1" y="400" fill="#ffffff"></use>
        </g>
      </svg>
      <svg
        className="absolute -bottom-14"
        width="100%"
        height="100%"
        viewBox="0 0 1000 1000"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        overflow="auto"
        shapeRendering="auto"
        fill="#ffffff"
      >
        <defs>
          <path
            id="wavepath2"
            d="M 0 2000 0 500 Q 99 416 198 500 t 198 0 198 0 198 0 198 0 198 0 198 0 198 0  v1000 z"
          />
        </defs>
        <g>
          <use xlinkHref="#wavepath2" y="330" fill="#ffffff"></use>
        </g>
      </svg> */}
      <img className="relative -bottom-[362px]" src={curve} alt="" />
    </>
  );
};

export default Waves;
