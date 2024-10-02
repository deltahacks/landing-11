import { useEffect, useRef, useState } from "react";

const Newsletter = () => {
  const [clickCount, setClickCount] = useState(0);

  const [position, setPosition] = useState({ x: -500, y: -500 });
  const [velocity, setVelocity] = useState({ vx: 2, vy: 2 });
  const imageRef = useRef(null);

  useEffect(() => {
    if (clickCount >= 10) {
      const moveImage = () => {
        setPosition((prev) => {
          const newX = prev.x + velocity.vx;
          const newY = prev.y + velocity.vy;
          const imageEl = imageRef.current;

          if (imageEl) {
            const containerWidth = 100;
            const containerHeight = 100;
            const imgWidth = imageEl.offsetWidth;
            const imgHeight = imageEl.offsetHeight;

            // Reverse velocity if it hits the edges
            if (newX + imgWidth >= containerWidth || newX <= 0) {
              setVelocity((prevVel) => ({ ...prevVel, vx: -prevVel.vx }));
            }
            if (newY + imgHeight >= containerHeight || newY <= 0) {
              setVelocity((prevVel) => ({ ...prevVel, vy: -prevVel.vy }));
            }
          }
          return { x: newX, y: newY };
        });
      };
      const intervalId = setInterval(moveImage, 10); // Smooth movement with 10ms updates
      return () => clearInterval(intervalId); // Cleanup on unmount
    }
  }, [clickCount, velocity]);

  return (
    <div className="relative mx-auto mt-10 max-w-2xl">
      {clickCount >= 10 && (
        <div
          className="absolute z-50 animate-spin"
          ref={imageRef}
          style={{
            top: position.y,
            left: position.x,
            transition: "top 0.1s linear, left 0.1s linear", // Smooth movement
          }}
        >
          <img
            src="https://i.imgur.com/vha8CCl.png"
            width={500}
            className=""
          ></img>
          <audio
            src="https://dl1d37y1b6ilp.cloudfront.net/d2rfcp%2Ffile%2F19792f96dd12b66143d68ed36bce5f9d_0434e3ffb9de1cb03e99b2d3ac4b1028.mp3?response-content-disposition=inline%3Bfilename%3D%2219792f96dd12b66143d68ed36bce5f9d_0434e3ffb9de1cb03e99b2d3ac4b1028.mp3%22%3B&response-content-type=audio%2Fmpeg&Expires=1727849384&Signature=T~GycEJUEzIW2CFj~Lt4Vm3LhugD4jv9UP9bJ2YZAIsBbUgsvem-6bqmVmuCJieJv0Ktf5kYgGZwUiRMD2z8~zD3J2DOVxwl6MW2SPI1v-NhF55W85brfo9XBSKUI1qRSrjM~P-dVy~411NfUUu6jVeqXb4dk5S3D8jh3PlCKtRXHucNo8Lh365mbjhXGuP2e3BQ6f~d9hOIyEN5RF7MzlhdAUQLlas2PO6ylqqgVpdFU1R6I-uWcLU9TmNsISPH245S2MSVZuN2iJtoM1tIKRzAz21KBSWvFcI4A5f8J2keabAZJrhJvKBiLziicO-4GDpCf~lCqZ4AKXyDahmkIg__&Key-Pair-Id=APKAJT5WQLLEOADKLHBQ"
            autoPlay
          ></audio>
        </div>
      )}
      <div
        className="letter absolute left-1/2 right-0 z-0 w-3/4 -translate-x-1/2 transform cursor-pointer md:bottom-48"
        // ref={letterRef}
        onClick={() => setClickCount((prev) => prev + 1)}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 580 282"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.64679 281.118H580L344.178 136.44L289.401 168.133L234.971 136.44L0.64679 281.118Z"
            fill="#553C8B"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M234.971 136.44L0.64679 0V281.118L234.971 136.44ZM580 281.118L344.178 136.44L580 0V281.118Z"
            fill="#553C8B"
          />
          <path
            d="M580 0H0.64679L234.971 136.44L289.401 168.133L344.178 136.44L580 0Z"
            fill="#856ABF"
          />
          <path
            d="M234.933 133.525L9.90868 2.5H570.687L344.216 133.53L342.926 134.276L339.295 136.377L289.405 165.242L239.832 136.377L236.229 134.28L234.933 133.525ZM349.062 136.503L577.5 4.33473V276.651L349.062 136.503ZM344.141 139.35L571.144 278.618H9.45451L235.009 139.355L288.143 170.293L289.397 171.023L290.653 170.297L344.141 139.35ZM230.111 136.503L3.14679 276.637V4.3486L230.111 136.503Z"
            stroke="white"
            stroke-width="5"
          />
          <path
            d="M289.505 134C291.757 134 293.576 135.815 293.576 138.062V141.884L295.485 139.979C296.68 138.786 298.614 138.786 299.797 139.979C300.981 141.173 300.993 143.103 299.797 144.283L293.563 150.504V159.429L301.375 154.884L303.627 146.492C304.059 144.867 305.739 143.902 307.367 144.334C308.996 144.766 309.963 146.441 309.53 148.066L308.869 150.517L311.871 148.765C313.818 147.635 316.311 148.295 317.444 150.225C318.576 152.154 317.927 154.655 315.98 155.785L312.762 157.664L315.522 158.4C317.151 158.832 318.118 160.508 317.685 162.133C317.253 163.758 315.573 164.723 313.945 164.291L305.332 161.993L297.584 166.5L305.332 171.007L313.945 168.709C315.573 168.277 317.253 169.242 317.685 170.867C318.118 172.492 317.151 174.168 315.522 174.6L312.762 175.336L315.98 177.215C317.927 178.345 318.576 180.833 317.444 182.775C316.311 184.718 313.818 185.365 311.871 184.235L308.869 182.483L309.53 184.934C309.963 186.559 308.996 188.234 307.367 188.666C305.739 189.098 304.059 188.133 303.627 186.508L301.375 178.116L293.576 173.571V182.496L299.81 188.717C301.006 189.91 301.006 191.84 299.81 193.021C298.614 194.201 296.68 194.214 295.497 193.021L293.589 191.116V194.938C293.589 197.185 291.77 199 289.518 199C287.266 199 285.446 197.185 285.446 194.938V191.116L283.538 193.021C282.342 194.214 280.408 194.214 279.225 193.021C278.042 191.827 278.029 189.897 279.225 188.717L285.459 182.496V173.571L277.648 178.116L275.396 186.508C274.963 188.133 273.284 189.098 271.655 188.666C270.027 188.234 269.06 186.559 269.493 184.934L270.154 182.483L267.126 184.223C265.18 185.353 262.686 184.692 261.554 182.763C260.421 180.833 261.083 178.332 263.017 177.202L266.236 175.323L263.475 174.587C261.846 174.155 260.879 172.479 261.312 170.854C261.745 169.229 263.424 168.265 265.052 168.696L273.665 170.994L281.426 166.5L273.678 161.993L265.065 164.291C263.437 164.723 261.757 163.758 261.325 162.133C260.892 160.508 261.859 158.832 263.487 158.4L266.248 157.664L263.029 155.785C261.083 154.655 260.434 152.167 261.566 150.237C262.699 148.308 265.192 147.647 267.139 148.777L270.141 150.529L269.48 148.079C269.047 146.454 270.014 144.778 271.643 144.347C273.271 143.915 274.95 144.88 275.383 146.505L277.635 154.896L285.434 159.429V150.504L279.2 144.283C278.004 143.09 278.004 141.16 279.2 139.979C280.396 138.799 282.329 138.786 283.513 139.979L285.421 141.884L285.434 138.062C285.434 135.815 287.253 134 289.505 134Z"
            fill="#EBDEFC"
          />
        </svg>
      </div>
      <div className="relative z-10 mx-auto mt-10 max-w-2xl rounded-lg bg-white p-6 shadow-md">
        <div id="mc_embed_signup">
          <form
            action="https://deltahacks.us19.list-manage.com/subscribe/post?u=7ac221f02edc4242db4789d8f&amp;id=380c22c749&amp;f_id=00a736e7f0"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_self"
            noValidate
          >
            <div
              id="mc_embed_signup_scroll"
              className="flex flex-col items-center justify-center space-y-4"
            >
              <h2 className="text-violet-900">
                Follow us on social media to stay up to date on latest news
                about DeltaHacks!
              </h2>
              <div className="mt-4 flex justify-center space-x-4">
                <svg
                  width="37"
                  height="36"
                  viewBox="0 0 37 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.11 13.5C16.9165 13.5 15.772 13.9741 14.928 14.818C14.0841 15.6619 13.61 16.8065 13.61 18C13.61 19.1935 14.0841 20.3381 14.928 21.182C15.772 22.0259 16.9165 22.5 18.11 22.5C19.3035 22.5 20.4481 22.0259 21.292 21.182C22.1359 20.3381 22.61 19.1935 22.61 18C22.61 16.8065 22.1359 15.6619 21.292 14.818C20.4481 13.9741 19.3035 13.5 18.11 13.5ZM18.11 10.5C20.0991 10.5 22.0068 11.2902 23.4133 12.6967C24.8198 14.1032 25.61 16.0109 25.61 18C25.61 19.9891 24.8198 21.8968 23.4133 23.3033C22.0068 24.7098 20.0991 25.5 18.11 25.5C16.1209 25.5 14.2132 24.7098 12.8067 23.3033C11.4002 21.8968 10.61 19.9891 10.61 18C10.61 16.0109 11.4002 14.1032 12.8067 12.6967C14.2132 11.2902 16.1209 10.5 18.11 10.5ZM27.86 10.125C27.86 10.6223 27.6625 11.0992 27.3108 11.4508C26.9592 11.8025 26.4823 12 25.985 12C25.4877 12 25.0108 11.8025 24.6592 11.4508C24.3076 11.0992 24.11 10.6223 24.11 10.125C24.11 9.62772 24.3076 9.15081 24.6592 8.79917C25.0108 8.44754 25.4877 8.25 25.985 8.25C26.4823 8.25 26.9592 8.44754 27.3108 8.79917C27.6625 9.15081 27.86 9.62772 27.86 10.125ZM18.11 6C14.399 6 13.793 6.0105 12.0665 6.087C10.8905 6.1425 10.1015 6.3 9.36952 6.585C8.75727 6.81056 8.2036 7.17095 7.74952 7.6395C7.28043 8.09343 6.91951 8.64711 6.69352 9.2595C6.40852 9.9945 6.25102 10.782 6.19702 11.9565C6.11902 13.6125 6.10852 14.1915 6.10852 18C6.10852 21.7125 6.11902 22.317 6.19552 24.0435C6.25102 25.218 6.40852 26.0085 6.69202 26.739C6.94702 27.3915 7.24702 27.861 7.74502 28.359C8.25052 28.863 8.72002 29.1645 9.36502 29.4135C10.106 29.7 10.895 29.859 12.065 29.913C13.721 29.991 14.3 30 18.1085 30C21.821 30 22.4255 29.9895 24.152 29.913C25.325 29.8575 26.114 29.7 26.8475 29.4165C27.4598 29.1909 28.0134 28.8305 28.4675 28.362C28.973 27.858 29.2745 27.3885 29.5235 26.742C29.8085 26.004 29.9675 25.215 30.0215 24.042C30.0995 22.3875 30.1085 21.807 30.1085 18C30.1085 14.289 30.098 13.683 30.0215 11.9565C29.966 10.7835 29.807 9.9915 29.5235 9.2595C29.298 8.64725 28.9376 8.09358 28.469 7.6395C28.0151 7.17041 27.4614 6.80949 26.849 6.5835C26.114 6.2985 25.325 6.141 24.152 6.087C22.4975 6.009 21.9185 6 18.1085 6M18.1085 3C22.184 3 22.6925 3.015 24.293 3.09C25.889 3.165 26.978 3.4155 27.9335 3.7875C28.9235 4.1685 29.7575 4.6845 30.5915 5.517C31.3546 6.2666 31.9448 7.17371 32.321 8.175C32.6915 9.1305 32.9435 10.2195 33.0185 11.817C33.089 13.416 33.1085 13.9245 33.1085 18C33.1085 22.0755 33.0935 22.584 33.0185 24.183C32.9435 25.782 32.6915 26.868 32.321 27.825C31.9448 28.8263 31.3546 29.7334 30.5915 30.483C29.8419 31.246 28.9348 31.8363 27.9335 32.2125C26.978 32.583 25.889 32.835 24.293 32.91C22.6925 32.9805 22.184 33 18.1085 33C14.033 33 13.5245 32.985 11.924 32.91C10.328 32.835 9.24052 32.583 8.28352 32.2125C7.28223 31.8363 6.37512 31.246 5.62552 30.483C4.86248 29.7334 4.27224 28.8263 3.89602 27.825C3.52402 26.8695 3.27352 25.7805 3.19852 24.183C3.12652 22.584 3.10852 22.0755 3.10852 18C3.10852 13.9245 3.12352 13.416 3.19852 11.817C3.27352 10.218 3.52402 9.132 3.89602 8.175C4.27224 7.17371 4.86248 6.2666 5.62552 5.517C6.37512 4.75396 7.28223 4.16372 8.28352 3.7875C9.23902 3.4155 10.3265 3.165 11.924 3.09C13.526 3.0195 14.0345 3 18.11 3"
                    fill="#533688"
                  />
                </svg>

                <svg
                  width="37"
                  height="36"
                  viewBox="0 0 37 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M28.6085 4.5C29.4042 4.5 30.1672 4.81607 30.7298 5.37868C31.2924 5.94129 31.6085 6.70435 31.6085 7.5L31.6085 28.5C31.6085 29.2956 31.2924 30.0587 30.7298 30.6213C30.1672 31.1839 29.4042 31.5 28.6085 31.5L7.60852 31.5C6.81287 31.5 6.04981 31.1839 5.4872 30.6213C4.92459 30.0587 4.60852 29.2956 4.60852 28.5L4.60852 7.5C4.60852 6.70435 4.92459 5.94129 5.4872 5.37868C6.04981 4.81607 6.81287 4.5 7.60852 4.5L28.6085 4.5ZM27.8585 27.75V19.8C27.8585 18.5031 27.3433 17.2593 26.4263 16.3422C25.5092 15.4252 24.2654 14.91 22.9685 14.91C21.6935 14.91 20.2085 15.69 19.4885 16.86V15.195H15.3035L15.3035 27.75L19.4885 27.75L19.4885 20.355C19.4885 19.2 20.4185 18.255 21.5735 18.255C22.1305 18.255 22.6646 18.4762 23.0584 18.8701C23.4523 19.2639 23.6735 19.798 23.6735 20.355V27.75H27.8585ZM10.4285 12.84C11.0969 12.84 11.7378 12.5745 12.2104 12.1019C12.683 11.6293 12.9485 10.9883 12.9485 10.32C12.9485 8.925 11.8235 7.785 10.4285 7.785C9.7562 7.785 9.11141 8.05208 8.636 8.52748C8.1606 9.00289 7.89352 9.64768 7.89352 10.32C7.89352 11.715 9.03352 12.84 10.4285 12.84ZM12.5135 27.75L12.5135 15.195L8.35852 15.195L8.35852 27.75H12.5135Z"
                    fill="#533688"
                  />
                </svg>

                <svg
                  width="37"
                  height="36"
                  viewBox="0 0 37 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_290_3388)">
                    <path
                      d="M9.11152 2.41504L0.108521 18.006L9.11152 33.585H27.1055L36.1085 18.006L27.1055 2.41504L9.11152 2.41504ZM11.501 8.54104L17.4215 8.54104C22.829 8.54104 26.8355 11.0835 26.8355 18.006C26.8355 24.66 22.0205 27.459 17.1515 27.459H11.501L11.501 8.54104ZM15.2765 12.2145L15.2765 23.7855H17.138C21.107 23.7855 22.931 21.4605 22.931 17.994C22.9445 14.1405 21.287 12.2145 17.2805 12.2145L15.2765 12.2145Z"
                      fill="#533688"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_290_3388">
                      <rect
                        width="36"
                        height="36"
                        fill="white"
                        transform="translate(0.108521)"
                      />
                    </clipPath>
                  </defs>
                </svg>

                <svg
                  width="37"
                  height="36"
                  viewBox="0 0 37 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.0085 8.73C23.9834 7.55929 23.4184 6.0561 23.4185 4.5L18.7835 4.5L18.7835 23.1C18.7485 24.1068 18.3238 25.0606 17.599 25.7602C16.8742 26.4599 15.9059 26.8506 14.8985 26.85C12.7685 26.85 10.9985 25.11 10.9985 22.95C10.9985 20.37 13.4885 18.435 16.0535 19.23V14.49C10.8785 13.8 6.34852 17.82 6.34852 22.95C6.34852 27.945 10.4885 31.5 14.8835 31.5C19.5935 31.5 23.4185 27.675 23.4185 22.95L23.4185 13.515C25.298 14.8648 27.5546 15.589 29.8685 15.585L29.8685 10.95C29.8685 10.95 27.0485 11.085 25.0085 8.73Z"
                    fill="#533688"
                  />
                </svg>
              </div>
              <h3 className="mb-4 text-center text-xl text-violet-900">
                Sign up to our newsletter!
              </h3>

              <div className="flex w-full flex-col space-y-4 px-20 sm:flex-row sm:space-x-4 sm:space-y-0">
                <div className="flex-grow">
                  <div className="mc-field-group">
                    <label
                      htmlFor="mce-EMAIL"
                      className="mb-1 block text-sm font-medium text-gray-700"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="EMAIL"
                      className="required email w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500"
                      id="mce-EMAIL"
                      required={true}
                    />
                  </div>
                  <div className="hidden">
                    <input type="hidden" name="tags" value="24287902" />
                  </div>
                  <div id="mce-responses" className="clear">
                    <div
                      className="response hidden"
                      id="mce-error-response"
                    ></div>
                    <div
                      className="response hidden"
                      id="mce-success-response"
                    ></div>
                  </div>
                  <div aria-hidden="true" className="absolute left-[-5000px]">
                    <input
                      type="text"
                      name="b_7ac221f02edc4242db4789d8f_380c22c749"
                      tabIndex={-1}
                      value=""
                    />
                  </div>
                </div>
                <div className="flex items-end">
                  <input
                    type="submit"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    className="w-full cursor-pointer rounded-md bg-violet-900 px-4 py-2 font-bold text-white transition duration-300 ease-in-out hover:bg-violet-600 sm:w-auto"
                    value="Sign up!"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
