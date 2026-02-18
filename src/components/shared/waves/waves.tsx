import './waves.css';

const Waves = () => {
  return (
    <div className="waves-container">
      <svg
        className="waves"
        viewBox="0 0 1600 820"
        preserveAspectRatio="xMidYMax slice"
        width="100%"
        height="100%"
      >
        <defs>
          <linearGradient id="bg">
            <stop offset="0%" stopColor="var(--mat-primary)" stopOpacity="0.06" />
            <stop offset="50%" stopColor="var(--mat-primary)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="var(--mat-accent)" stopOpacity="0.2" />
          </linearGradient>

          <path
            id="wave"
            fill="url(#bg)"
            d="M-363.852,502.589c0,0,236.988-41.997,505.475,0
            s371.981,38.998,575.971,0s293.985-39.278,505.474,5.859
            s493.475,48.368,716.963-4.995v560.106H-363.852V502.589z"
          />
        </defs>

        <g>
          <use href="#wave" opacity=".3">
            <animateTransform
              attributeName="transform"
              type="translate"
              dur="10s"
              values="270 230; -334 180; 270 230"
              keyTimes="0; .5; 1"
              repeatCount="indefinite"
            />
          </use>

          <use href="#wave" opacity=".6">
            <animateTransform
              attributeName="transform"
              type="translate"
              dur="8s"
              values="-270 230;243 220;-270 230"
              keyTimes="0; .6; 1"
              repeatCount="indefinite"
            />
          </use>

          <use href="#wave" opacity=".9">
            <animateTransform
              attributeName="transform"
              type="translate"
              dur="6s"
              values="0 230;-140 200;0 230"
              keyTimes="0; .4; 1"
              repeatCount="indefinite"
            />
          </use>
        </g>
      </svg>
    </div>
  );
};

export default Waves;