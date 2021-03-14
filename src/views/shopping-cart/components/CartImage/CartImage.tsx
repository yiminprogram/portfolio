import React, { useContext } from 'react';
//style
import { CartSvg } from './style';
//context
import cartContext from '../../cartContext';

const CartImage = () => {
  const {
    cartState: { isChecked },
  } = useContext(cartContext);
  return (
    <CartSvg
      isChecked={isChecked}
      viewBox="0 0 888 742"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="shopping-cart 1" clipPath="url(#clip0)">
        <path
          id="Vector"
          d="M365.896 174.38H361.864V63.9272C361.864 55.5322 360.211 47.2193 356.998 39.4633C353.785 31.7073 349.077 24.66 343.14 18.7238C337.204 12.7876 330.157 8.07872 322.401 4.86609C314.645 1.65345 306.332 -5.67817e-05 297.937 -3.05173e-05H63.9274C55.5323 -5.67817e-05 47.2195 1.65345 39.4634 4.86609C31.7074 8.07872 24.6601 12.7876 18.7239 18.7238C12.7877 24.66 8.0788 31.7073 4.86615 39.4633C1.6535 47.2193 -1.31322e-05 55.5322 0 63.9273V669.881C-7.87929e-06 678.276 1.65351 686.589 4.86617 694.345C8.07882 702.101 12.7877 709.148 18.7239 715.084C24.6601 721.021 31.7074 725.729 39.4634 728.942C47.2195 732.155 55.5323 733.808 63.9274 733.808H297.937C306.332 733.808 314.645 732.155 322.401 728.942C330.157 725.729 337.204 721.021 343.14 715.084C349.077 709.148 353.785 702.101 356.998 694.345C360.211 686.589 361.864 678.276 361.864 669.881V253.003H365.896V174.38Z"
          fill="#E6E6E6"
        />
        <path
          id="Vector_2"
          d="M300.516 16.6317H269.97C271.375 20.0756 271.911 23.8122 271.532 27.5122C271.152 31.2122 269.869 34.762 267.794 37.8491C265.719 40.9361 262.917 43.4656 259.635 45.2147C256.352 46.9637 252.69 47.8787 248.971 47.879H114.91C111.19 47.8787 107.528 46.9637 104.245 45.2147C100.963 43.4656 98.1608 40.9361 96.0862 37.8491C94.0115 34.762 92.7279 31.2122 92.3484 27.5122C91.9688 23.8122 92.5051 20.0756 93.9098 16.6317H65.3798C59.1105 16.6316 52.9025 17.8665 47.1104 20.2656C41.3183 22.6648 36.0555 26.1813 31.6224 30.6144C27.1893 35.0474 23.6728 40.3103 21.2736 46.1024C18.8744 51.8945 17.6396 58.1024 17.6396 64.3717V669.436C17.6396 675.706 18.8744 681.914 21.2736 687.706C23.6728 693.498 27.1893 698.761 31.6224 703.194C36.0555 707.627 41.3183 711.143 47.1104 713.543C52.9025 715.942 59.1104 717.177 65.3798 717.177H300.516C306.786 717.177 312.994 715.942 318.786 713.543C324.578 711.143 329.841 707.627 334.274 703.194C338.707 698.761 342.223 693.498 344.622 687.706C347.022 681.914 348.256 675.706 348.256 669.436V64.3717C348.256 58.1024 347.022 51.8945 344.622 46.1024C342.223 40.3103 338.707 35.0474 334.274 30.6144C329.841 26.1813 324.578 22.6648 318.786 20.2656C312.994 17.8665 306.786 16.6316 300.516 16.6317V16.6317Z"
          fill="white"
        />
        <path
          id="Vector_3"
          d="M113.672 139.635H99.6331C99.1395 139.635 98.666 139.831 98.317 140.18C97.9679 140.529 97.7718 141.002 97.7718 141.496V147.658C97.7718 148.152 97.9679 148.625 98.317 148.974C98.666 149.324 99.1395 149.52 99.6331 149.52H101.96V158.753H111.346V149.52H113.672C114.166 149.52 114.639 149.324 114.989 148.974C115.338 148.625 115.534 148.152 115.534 147.658V141.496C115.534 141.002 115.338 140.529 114.989 140.18C114.639 139.831 114.166 139.635 113.672 139.635V139.635Z"
          fill="#E6E6E6"
        />
        <path
          id="Vector_4"
          d="M127.734 196.032C119.136 183.45 114.741 168.47 115.177 153.238C115.185 152.887 115.071 152.543 114.855 152.266C114.638 151.989 114.332 151.796 113.989 151.719V149.056H99.1619V151.682H98.9576C98.5541 151.683 98.1673 151.843 97.8824 152.129C97.5974 152.415 97.4376 152.802 97.4382 153.205C97.4382 153.242 97.4396 153.279 97.4423 153.316C98.6105 169.599 94.666 184.202 85.6089 197.124C85.0878 197.866 84.8215 198.758 84.8501 199.665L86.4714 249.816C86.5104 250.935 86.9799 251.995 87.7819 252.776C88.5839 253.556 89.6565 253.997 90.7757 254.006H124.313C125.445 253.997 126.529 253.546 127.333 252.75C128.138 251.953 128.599 250.874 128.62 249.742L129.245 201.049C129.263 199.262 128.736 197.512 127.734 196.032Z"
          fill="#E6E6E6"
        />
        <path
          id="Vector_5"
          d="M122.425 212.69H93.2337C92.8016 212.69 92.3746 212.784 91.9819 212.964C91.5893 213.145 91.2404 213.408 90.959 213.736C90.6776 214.064 90.4705 214.449 90.3519 214.864C90.2332 215.28 90.2058 215.716 90.2715 216.143L94.6827 244.816H120.013L125.371 216.24C125.452 215.807 125.437 215.361 125.326 214.935C125.216 214.509 125.013 214.112 124.731 213.773C124.45 213.434 124.098 213.162 123.699 212.975C123.301 212.787 122.866 212.69 122.425 212.69V212.69Z"
          fill="white"
        />
        <path
          id="Vector_6"
          d="M269.957 289.869H255.917C255.424 289.869 254.95 290.065 254.601 290.414C254.252 290.764 254.056 291.237 254.056 291.731V297.893C254.056 298.387 254.252 298.86 254.601 299.209C254.95 299.558 255.424 299.754 255.917 299.754H258.244V308.987H267.63V299.754H269.957C270.45 299.754 270.924 299.558 271.273 299.209C271.622 298.86 271.818 298.387 271.818 297.893V291.731C271.818 291.237 271.622 290.763 271.273 290.414C270.924 290.065 270.45 289.869 269.957 289.869Z"
          fill="#E6E6E6"
        />
        <path
          id="Vector_7"
          d="M284.019 346.266C275.42 333.685 271.025 318.705 271.462 303.473C271.47 303.121 271.355 302.778 271.139 302.501C270.922 302.224 270.617 302.031 270.274 301.954V299.291H255.446V301.917H255.242C255.042 301.917 254.844 301.956 254.66 302.033C254.475 302.11 254.308 302.222 254.167 302.364C254.026 302.505 253.914 302.673 253.837 302.858C253.761 303.042 253.722 303.24 253.722 303.44C253.722 303.477 253.724 303.514 253.727 303.551C254.895 319.834 250.95 334.436 241.893 347.358C241.372 348.101 241.106 348.993 241.134 349.899L242.756 400.051C242.795 401.169 243.264 402.23 244.066 403.01C244.868 403.791 245.941 404.232 247.06 404.241H280.597C281.729 404.232 282.813 403.781 283.617 402.984C284.422 402.188 284.884 401.109 284.904 399.977L285.529 351.284C285.547 349.497 285.021 347.746 284.019 346.266V346.266Z"
          fill="#E6E6E6"
        />
        <path
          id="Vector_8"
          d="M278.71 362.925H249.518C249.086 362.925 248.659 363.018 248.266 363.199C247.874 363.379 247.525 363.643 247.243 363.97C246.962 364.298 246.755 364.683 246.636 365.099C246.518 365.514 246.49 365.951 246.556 366.378L250.967 395.051H276.297L281.655 366.474C281.736 366.041 281.721 365.596 281.611 365.17C281.5 364.743 281.297 364.347 281.016 364.008C280.735 363.669 280.382 363.396 279.983 363.209C279.585 363.022 279.15 362.925 278.71 362.925H278.71Z"
          fill="white"
        />
        <path
          id="Vector_9"
          d="M93.935 502.257H87.2755C87.0413 502.257 86.8168 502.35 86.6512 502.515C86.4856 502.681 86.3926 502.906 86.3926 503.14V506.063C86.3926 506.297 86.4856 506.521 86.6512 506.687C86.8168 506.853 87.0413 506.946 87.2755 506.946H88.3791V511.325H92.8314V506.946H93.935C94.1691 506.946 94.3937 506.853 94.5593 506.687C94.7249 506.521 94.8179 506.297 94.8179 506.063V503.14C94.8179 502.906 94.7249 502.681 94.5593 502.515C94.3937 502.35 94.1691 502.257 93.935 502.257Z"
          fill="#E6E6E6"
        />
        <path
          id="Vector_10"
          d="M100.605 529.008C96.5268 523.041 94.4418 515.935 94.649 508.71C94.6527 508.543 94.5985 508.38 94.4958 508.249C94.3931 508.117 94.248 508.026 94.0853 507.989V506.726H87.052V507.971H86.9551C86.8604 507.972 86.7665 507.99 86.679 508.027C86.5915 508.063 86.512 508.116 86.4451 508.183C86.3782 508.251 86.3251 508.33 86.289 508.418C86.2528 508.505 86.2343 508.599 86.2344 508.694C86.2344 508.712 86.235 508.729 86.2364 508.747C86.8855 516.119 84.8964 523.483 80.6233 529.527C80.376 529.879 80.2497 530.302 80.2633 530.732L81.0323 554.521C81.0508 555.051 81.2735 555.554 81.6539 555.925C82.0344 556.295 82.5432 556.504 83.0741 556.508H98.9823C99.5193 556.504 100.033 556.29 100.415 555.912C100.797 555.535 101.016 555.023 101.025 554.486L101.322 531.389C101.33 530.541 101.081 529.711 100.605 529.008V529.008Z"
          fill="#E6E6E6"
        />
        <path
          id="Vector_11"
          d="M98.3157 537.753H83.1366V545.343H98.3157V537.753Z"
          fill="white"
        />
        <path
          id="Vector_12"
          d="M124.935 502.257H118.276C118.041 502.257 117.817 502.35 117.651 502.515C117.486 502.681 117.393 502.906 117.393 503.14V506.063C117.393 506.297 117.486 506.521 117.651 506.687C117.817 506.853 118.041 506.946 118.276 506.946H119.379V511.325H123.831V506.946H124.935C125.169 506.946 125.394 506.853 125.559 506.687C125.725 506.521 125.818 506.297 125.818 506.063V503.14C125.818 502.906 125.725 502.681 125.559 502.515C125.394 502.35 125.169 502.257 124.935 502.257Z"
          fill="#E6E6E6"
        />
        <path
          id="Vector_13"
          d="M131.605 529.008C127.527 523.041 125.442 515.935 125.649 508.71C125.653 508.543 125.599 508.38 125.496 508.249C125.393 508.117 125.248 508.026 125.085 507.989V506.726H118.052V507.971H117.955C117.86 507.972 117.767 507.99 117.679 508.027C117.591 508.063 117.512 508.116 117.445 508.183C117.378 508.251 117.325 508.33 117.289 508.418C117.253 508.505 117.234 508.599 117.234 508.694C117.234 508.712 117.235 508.729 117.236 508.747C117.886 516.119 115.896 523.483 111.623 529.527C111.376 529.879 111.25 530.302 111.263 530.732L112.032 554.521C112.051 555.051 112.273 555.554 112.654 555.925C113.034 556.295 113.543 556.504 114.074 556.508H129.982C130.519 556.504 131.033 556.29 131.415 555.912C131.797 555.535 132.016 555.023 132.025 554.486L132.322 531.389C132.33 530.541 132.081 529.711 131.605 529.008Z"
          fill="#E6E6E6"
        />
        <path
          id="Vector_14"
          d="M129.316 537.753H114.137V545.343H129.316V537.753Z"
          fill="white"
        />
        <path
          id="Vector_15"
          d="M155.935 502.257H149.276C149.041 502.257 148.817 502.35 148.651 502.515C148.486 502.681 148.393 502.906 148.393 503.14V506.063C148.393 506.297 148.486 506.521 148.651 506.687C148.817 506.853 149.041 506.946 149.276 506.946H150.379V511.325H154.831V506.946H155.935C156.169 506.946 156.394 506.853 156.559 506.687C156.725 506.521 156.818 506.297 156.818 506.063V503.14C156.818 502.906 156.725 502.681 156.559 502.515C156.394 502.35 156.169 502.257 155.935 502.257Z"
          fill="#E6E6E6"
        />
        <path
          id="Vector_16"
          d="M162.605 529.008C158.527 523.041 156.442 515.935 156.649 508.71C156.653 508.543 156.599 508.38 156.496 508.249C156.393 508.117 156.248 508.026 156.085 507.989V506.726H149.052V507.971H148.955C148.86 507.972 148.767 507.99 148.679 508.027C148.591 508.063 148.512 508.116 148.445 508.183C148.378 508.251 148.325 508.33 148.289 508.418C148.253 508.505 148.234 508.599 148.234 508.694C148.234 508.712 148.235 508.729 148.236 508.747C148.886 516.119 146.896 523.483 142.623 529.527C142.376 529.879 142.25 530.302 142.263 530.732L143.032 554.521C143.051 555.051 143.273 555.554 143.654 555.925C144.034 556.295 144.543 556.504 145.074 556.508H160.982C161.519 556.504 162.033 556.29 162.415 555.912C162.797 555.535 163.016 555.023 163.025 554.486L163.322 531.389C163.33 530.541 163.081 529.711 162.605 529.008Z"
          fill="#E6E6E6"
        />
        <path
          id="Vector_17"
          d="M160.316 537.753H145.137V545.343H160.316V537.753Z"
          fill="white"
        />
        <path
          id="Vector_18"
          d="M245.567 444.137H231.528C231.284 444.137 231.042 444.185 230.816 444.279C230.59 444.372 230.385 444.509 230.212 444.682C230.039 444.855 229.902 445.06 229.808 445.286C229.715 445.512 229.667 445.754 229.667 445.998V452.161C229.667 452.654 229.863 453.128 230.212 453.477C230.561 453.826 231.034 454.022 231.528 454.022H233.855V463.255H243.241V454.022H245.567C246.061 454.022 246.534 453.826 246.883 453.477C247.232 453.128 247.429 452.654 247.429 452.161V445.998C247.429 445.754 247.38 445.512 247.287 445.286C247.193 445.06 247.056 444.855 246.883 444.682C246.711 444.509 246.505 444.372 246.28 444.279C246.054 444.185 245.812 444.137 245.567 444.137V444.137Z"
          fill="#E6E6E6"
        />
        <path
          id="Vector_19"
          d="M259.629 500.534C251.031 487.953 246.636 472.973 247.072 457.74C247.08 457.389 246.966 457.046 246.749 456.769C246.533 456.492 246.227 456.298 245.884 456.221V453.559H231.057V456.184H230.852C230.653 456.185 230.455 456.224 230.27 456.301C230.086 456.378 229.918 456.49 229.777 456.631C229.636 456.773 229.524 456.941 229.448 457.125C229.372 457.31 229.333 457.508 229.333 457.708C229.333 457.745 229.334 457.782 229.337 457.818C230.505 474.102 226.561 488.704 217.504 501.626C216.983 502.369 216.716 503.26 216.745 504.167L218.366 554.318C218.405 555.437 218.875 556.497 219.677 557.278C220.479 558.059 221.551 558.5 222.671 558.508H256.208C257.34 558.499 258.424 558.048 259.228 557.252C260.032 556.455 260.494 555.376 260.515 554.244L261.14 505.552C261.158 503.764 260.631 502.014 259.629 500.534Z"
          fill="#E6E6E6"
        />
        <path
          id="Vector_20"
          d="M254.32 517.193H225.129C224.696 517.193 224.269 517.286 223.877 517.466C223.484 517.647 223.135 517.91 222.854 518.238C222.573 518.566 222.365 518.951 222.247 519.367C222.128 519.782 222.101 520.218 222.166 520.645L226.578 549.319H251.908L257.266 520.742C257.347 520.309 257.332 519.864 257.221 519.438C257.111 519.011 256.908 518.615 256.626 518.276C256.345 517.937 255.993 517.664 255.594 517.477C255.195 517.29 254.76 517.193 254.32 517.193V517.193Z"
          fill="white"
        />
        <path
          id="Vector_21"
          d="M253.232 260.462H169.544C175.395 228.829 174.049 190.631 169.544 149.551H253.232C248.847 190.631 247.536 228.829 253.232 260.462Z"
          fill="#E6E6E6"
        />
        <path
          id="Vector_22"
          d="M211.892 222.148C223.029 222.148 232.058 213.119 232.058 201.982C232.058 190.845 223.029 181.816 211.892 181.816C200.755 181.816 191.726 190.845 191.726 201.982C191.726 213.119 200.755 222.148 211.892 222.148Z"
          fill="white"
        />
        <path
          id="Vector_23"
          d="M176.602 407.672H92.9143C98.7652 376.039 97.4192 337.84 92.9143 296.761H176.602C172.217 337.841 170.907 376.039 176.602 407.672Z"
          fill="#E6E6E6"
        />
        <path
          id="Vector_24"
          d="M135.262 369.357C146.4 369.357 155.428 360.329 155.428 349.192C155.428 338.054 146.4 329.026 135.262 329.026C124.125 329.026 115.097 338.054 115.097 349.192C115.097 360.329 124.125 369.357 135.262 369.357Z"
          fill="white"
        />
        <path
          id="Vector_25"
          d="M300.621 267.52H216.933C222.784 235.887 221.438 197.689 216.933 156.609H300.621C296.236 197.689 294.926 235.887 300.621 267.52Z"
          fill="#E6E6E6"
        />
        <path
          id="Vector_26"
          d="M259.281 229.206C270.419 229.206 279.447 220.177 279.447 209.04C279.447 197.903 270.419 188.874 259.281 188.874C248.144 188.874 239.116 197.903 239.116 209.04C239.116 220.177 248.144 229.206 259.281 229.206Z"
          fill="white"
        />
        <path
          id="Vector_27"
          d="M300.621 262.479H216.933C222.784 230.846 221.438 192.647 216.933 151.568H300.621C296.236 192.647 294.926 230.846 300.621 262.479Z"
          fill="#E6E6E6"
        />
        <path
          id="Vector_28"
          d="M259.281 224.164C270.419 224.164 279.447 215.136 279.447 203.998C279.447 192.861 270.419 183.833 259.281 183.833C248.144 183.833 239.116 192.861 239.116 203.998C239.116 215.136 248.144 224.164 259.281 224.164Z"
          fill="white"
        />
        <path
          id="Vector_29"
          d="M300.621 267.52H216.933C222.784 235.887 221.438 197.689 216.933 156.609H300.621C296.236 197.689 294.926 235.887 300.621 267.52Z"
          fill="#E6E6E6"
        />
        <path
          id="Vector_30"
          d="M259.281 229.206C270.419 229.206 279.447 220.177 279.447 209.04C279.447 197.903 270.419 188.874 259.281 188.874C248.144 188.874 239.116 197.903 239.116 209.04C239.116 220.177 248.144 229.206 259.281 229.206Z"
          fill="white"
        />
        <path
          id="Vector_31"
          d="M319.779 254.413H45.5248V284.661H319.779V254.413Z"
          fill="#E6E6E6"
        />
        <path
          id="Vector_32"
          d="M319.779 404.647H45.5248V434.896H319.779V404.647Z"
          fill="#E6E6E6"
        />
        <path
          id="Vector_33"
          d="M319.779 554.882H45.5248V585.13H319.779V554.882Z"
          fill="#E6E6E6"
        />
        <g id="product-1">
          <path
            id="Vector_34"
            d="M796.855 677.599L728.53 629.273C751.573 606.826 772.532 574.862 792.576 538.722L860.9 587.048C833.599 618.054 810.471 648.484 796.855 677.599Z"
            fill="#34B776"
          />
          <path
            id="Vector_35"
            d="M796.873 626.148C808.011 626.148 817.039 617.119 817.039 605.982C817.039 594.845 808.011 585.816 796.873 585.816C785.736 585.816 776.708 594.845 776.708 605.982C776.708 617.119 785.736 626.148 796.873 626.148Z"
            fill="white"
          />
        </g>
        <path
          id="Vector_36"
          d="M467.262 457.078H459.762C459.499 457.078 459.246 457.183 459.059 457.369C458.873 457.556 458.768 457.809 458.768 458.073V461.365C458.768 461.495 458.794 461.624 458.844 461.745C458.894 461.866 458.967 461.975 459.059 462.068C459.152 462.16 459.261 462.233 459.382 462.283C459.503 462.333 459.632 462.359 459.762 462.359H461.005V467.291H466.02V462.359H467.262C467.526 462.359 467.779 462.254 467.965 462.068C468.152 461.881 468.257 461.628 468.257 461.365V458.073C468.257 457.809 468.152 457.556 467.965 457.369C467.779 457.183 467.526 457.078 467.262 457.078V457.078Z"
          fill="#E6E6E6"
        />
        <path
          id="Vector_37"
          d="M474.774 487.206C470.181 480.485 467.833 472.483 468.066 464.345C468.071 464.158 468.01 463.974 467.894 463.826C467.778 463.678 467.615 463.575 467.432 463.534V462.111H459.511V463.514H459.402C459.295 463.514 459.189 463.535 459.091 463.576C458.992 463.617 458.903 463.677 458.827 463.753C458.752 463.828 458.692 463.918 458.651 464.017C458.611 464.115 458.59 464.221 458.59 464.328C458.59 464.348 458.591 464.367 458.592 464.387C459.323 472.69 457.083 480.984 452.271 487.79C451.992 488.186 451.85 488.663 451.865 489.147L452.731 515.939C452.752 516.536 453.003 517.103 453.431 517.52C453.86 517.937 454.433 518.172 455.031 518.177H472.947C473.551 518.172 474.13 517.931 474.56 517.506C474.99 517.08 475.237 516.504 475.248 515.899L475.581 489.887C475.591 488.932 475.31 487.997 474.774 487.206V487.206Z"
          fill="#34B776"
        />
        <path
          id="Vector_38"
          opacity="0.2"
          d="M465.699 458.151C465.699 458.72 465.473 459.265 465.071 459.668C464.668 460.07 464.123 460.296 463.554 460.296C462.985 460.296 462.439 460.07 462.037 459.668C461.634 459.265 461.408 458.72 461.408 458.151"
          fill="black"
        />
        <path
          id="Vector_39"
          d="M471.285 492.368H456.161V502.451H471.285V492.368Z"
          fill="white"
        />
        <g id="product-2">
          <path
            id="Vector_40"
            d="M704.602 561.742H690.563C690.069 561.742 689.596 561.938 689.247 562.287C688.898 562.636 688.702 563.109 688.702 563.603V569.765C688.702 570.259 688.898 570.733 689.247 571.082C689.596 571.431 690.069 571.627 690.563 571.627H692.89V580.86H702.276V571.627H704.602C705.096 571.627 705.569 571.431 705.919 571.082C706.268 570.733 706.464 570.259 706.464 569.765V563.603C706.464 563.109 706.268 562.636 705.919 562.287C705.569 561.938 705.096 561.742 704.602 561.742V561.742Z"
            fill="#E6E6E6"
          />
          <path
            id="Vector_41"
            d="M718.664 618.139C710.066 605.557 705.671 590.578 706.107 575.345C706.115 574.994 706.001 574.65 705.785 574.373C705.568 574.097 705.262 573.903 704.919 573.826V571.163H690.092V573.789H689.888C689.688 573.789 689.49 573.829 689.305 573.906C689.121 573.982 688.953 574.095 688.812 574.236C688.671 574.378 688.559 574.545 688.483 574.73C688.407 574.915 688.368 575.113 688.368 575.312C688.368 575.349 688.37 575.386 688.372 575.423C689.54 591.707 685.596 606.309 676.539 619.231C676.018 619.973 675.751 620.865 675.78 621.772L677.401 671.923C677.44 673.042 677.91 674.102 678.712 674.883C679.514 675.664 680.586 676.104 681.706 676.113H715.243C716.375 676.104 717.459 675.653 718.263 674.857C719.068 674.06 719.529 672.981 719.55 671.849L720.175 623.156C720.193 621.369 719.666 619.619 718.664 618.139V618.139Z"
            fill="#34B776"
          />
          <path
            id="Vector_42"
            opacity="0.2"
            d="M701.676 563.75C701.676 564.815 701.253 565.836 700.5 566.589C699.746 567.342 698.725 567.766 697.66 567.766C696.595 567.766 695.574 567.342 694.82 566.589C694.067 565.836 693.644 564.815 693.644 563.75"
            fill="black"
          />
          <path
            id="Vector_43"
            d="M713.355 634.797H684.164C683.732 634.797 683.305 634.891 682.912 635.071C682.519 635.252 682.17 635.515 681.889 635.843C681.608 636.171 681.401 636.556 681.282 636.971C681.163 637.387 681.136 637.823 681.201 638.25L685.613 666.923H710.943L716.301 638.347C716.382 637.914 716.367 637.469 716.256 637.042C716.146 636.616 715.943 636.219 715.661 635.881C715.38 635.542 715.028 635.269 714.629 635.082C714.231 634.895 713.796 634.797 713.355 634.797V634.797Z"
            fill="white"
          />
        </g>
        <g id="product-3">
          <path
            id="Vector_44"
            d="M664.546 677.52H580.858C586.709 645.887 585.363 607.688 580.858 566.608H664.546C660.161 607.688 658.851 645.887 664.546 677.52Z"
            fill="#34B776"
          />
          <path
            id="Vector_45"
            d="M623.206 639.205C634.344 639.205 643.372 630.177 643.372 619.039C643.372 607.902 634.344 598.874 623.206 598.874C612.069 598.874 603.041 607.902 603.041 619.039C603.041 630.177 612.069 639.205 623.206 639.205Z"
            fill="white"
          />
        </g>
        <path
          id="Vector_46"
          d="M322.243 328.466L341.03 326.758L352.986 297.724L331.637 285.768L322.243 328.466Z"
          fill="#FFB8B8"
        />
        <path
          id="Vector_47"
          d="M494.66 408.174C495.285 406.616 495.531 404.932 495.377 403.26C495.223 401.589 494.674 399.978 493.775 398.56C492.876 397.143 491.654 395.959 490.208 395.106C488.762 394.254 487.134 393.757 485.459 393.657L456.289 391.918L451.994 406.2L482.023 414.447C484.532 415.136 487.207 414.878 489.538 413.721C491.869 412.564 493.692 410.589 494.66 408.174V408.174Z"
          fill="#FFB8B8"
        />
        <path
          id="Vector_48"
          d="M463.339 414.687L463.018 387.887L398.225 377.549L348.31 320.301C345.712 317.323 342.124 315.386 338.209 314.851C334.293 314.316 330.317 315.217 327.015 317.389C325.016 318.704 323.331 320.442 322.077 322.481C320.824 324.519 320.034 326.807 319.762 329.184C319.491 331.562 319.745 333.97 320.506 336.238C321.268 338.506 322.518 340.579 324.169 342.311L365.349 392.989L463.339 414.687Z"
          fill="#575A89"
        />
        <path
          id="Vector_49"
          d="M307.726 716.167H324.805L367.168 524.633L411.055 583.802L436.674 711.897H452.9L449.484 574.408L392.268 427.526H335.906C320.504 455.401 308.422 484.135 322.243 513.777L307.726 716.167Z"
          fill="#2F2E41"
        />
        <path
          id="Vector_50"
          d="M426.204 727.8C426.016 728.405 425.958 729.042 426.035 729.671C426.111 730.299 426.321 730.904 426.65 731.445C426.979 731.986 427.419 732.451 427.942 732.808C428.464 733.166 429.057 733.408 429.68 733.519L471.473 740.935C473.125 741.237 474.83 740.925 476.267 740.057C477.704 739.189 478.773 737.825 479.274 736.222V736.222C479.761 734.691 479.693 733.037 479.082 731.551C478.471 730.065 477.355 728.842 475.932 728.096C466.742 723.378 458.834 716.502 452.884 708.058C448.29 712.335 443.156 711.933 437.705 708.781L431.922 709.504L426.204 727.8Z"
          fill="#2F2E41"
        />
        <path
          id="Vector_51"
          d="M299.818 727.8C299.629 728.405 299.571 729.042 299.648 729.671C299.724 730.299 299.934 730.904 300.263 731.445C300.592 731.986 301.032 732.451 301.555 732.808C302.077 733.166 302.67 733.408 303.293 733.519L345.086 740.935C346.738 741.237 348.443 740.925 349.88 740.057C351.317 739.189 352.386 737.825 352.887 736.222V736.222C353.374 734.691 353.306 733.037 352.695 731.551C352.084 730.065 350.969 728.842 349.545 728.096C340.356 723.378 332.447 716.502 326.497 708.058C321.903 712.335 316.769 711.933 311.318 708.781L305.535 709.504L299.818 727.8Z"
          fill="#2F2E41"
        />
        <path
          id="Vector_52"
          d="M353.413 308.398C366.618 308.398 377.324 297.693 377.324 284.487C377.324 271.281 366.618 260.576 353.413 260.576C340.207 260.576 329.502 271.281 329.502 284.487C329.502 297.693 340.207 308.398 353.413 308.398Z"
          fill="#FFB8B8"
        />
        <path
          id="Vector_53"
          d="M332.064 433.931L394.403 432.223L376.095 374.604C387.473 356.364 376.022 338.144 359.817 319.927L347.008 311.387L326.513 309.679C317.639 319.174 312.784 331.735 312.964 344.73C313.369 372.556 318.297 402.848 332.064 433.931Z"
          fill="#575A89"
        />
        <path
          id="Vector_54"
          d="M475.291 472.716C476.479 471.529 477.367 470.077 477.883 468.48C478.399 466.883 478.528 465.186 478.259 463.529C477.991 461.872 477.333 460.303 476.339 458.95C475.345 457.598 474.043 456.501 472.542 455.75L446.409 442.675L436.841 454.116L461.205 473.511C463.241 475.132 465.802 475.947 468.4 475.8C470.998 475.653 473.451 474.555 475.291 472.716V472.716Z"
          fill="#FFB8B8"
        />
        <path
          id="Vector_55"
          d="M443.933 466.382L454.181 441.617L398.679 406.623L375.309 334.355C374.093 330.595 371.555 327.403 368.166 325.371C364.777 323.338 360.766 322.603 356.877 323.301V323.301C354.522 323.724 352.288 324.658 350.334 326.039C348.38 327.42 346.753 329.213 345.569 331.292C344.384 333.371 343.67 335.684 343.478 338.069C343.286 340.454 343.619 342.852 344.456 345.094L362.379 407.885L443.933 466.382Z"
          fill="#575A89"
        />
        <path
          id="Vector_56"
          d="M314.13 275.093C314.13 284.397 320.173 298.806 327.794 304.982C332.922 309.138 339.698 308.963 342.311 303.274C344.991 297.439 354.231 283.722 370.492 275.093C392.17 263.591 362.804 243.912 342.311 246.913C326.911 249.167 314.13 259.53 314.13 275.093Z"
          fill="#2F2E41"
        />
        <path
          id="Vector_57"
          d="M328.648 262.284C338.08 262.284 345.727 254.637 345.727 245.205C345.727 235.772 338.08 228.125 328.648 228.125C319.215 228.125 311.568 235.772 311.568 245.205C311.568 254.637 319.215 262.284 328.648 262.284Z"
          fill="#2F2E41"
        />
        <path
          id="Vector_58"
          d="M348.289 239.227C348.287 234.921 346.658 230.775 343.728 227.62C340.799 224.464 336.784 222.533 332.491 222.212C332.915 222.181 333.339 222.148 333.771 222.148C338.301 222.148 342.645 223.947 345.848 227.15C349.051 230.353 350.851 234.697 350.851 239.227C350.851 243.757 349.051 248.101 345.848 251.304C342.645 254.507 338.301 256.306 333.771 256.306C333.339 256.306 332.915 256.273 332.491 256.242C336.784 255.921 340.799 253.99 343.728 250.834C346.658 247.679 348.287 243.533 348.289 239.227Z"
          fill="#2F2E41"
        />
        <path
          id="Vector_59"
          d="M353.84 293.027C355.962 293.027 357.682 290.733 357.682 287.903C357.682 285.073 355.962 282.779 353.84 282.779C351.717 282.779 349.997 285.073 349.997 287.903C349.997 290.733 351.717 293.027 353.84 293.027Z"
          fill="#FFB8B8"
        />
        <path
          id="Vector_60"
          d="M837.751 684.845H571.879L515.578 418.694H467.529V406.752H525.258L581.559 672.902H837.751V684.845Z"
          fill="#3F3D56"
        />
        <path
          id="Vector_61"
          d="M610.841 733.468C624.975 733.468 636.432 722.01 636.432 707.877C636.432 693.743 624.975 682.285 610.841 682.285C596.707 682.285 585.25 693.743 585.25 707.877C585.25 722.01 596.707 733.468 610.841 733.468Z"
          fill="#3F3D56"
        />
        <path
          id="Vector_62"
          d="M801.923 733.468C816.057 733.468 827.515 722.01 827.515 707.877C827.515 693.743 816.057 682.285 801.923 682.285C787.79 682.285 776.332 693.743 776.332 707.877C776.332 722.01 787.79 733.468 801.923 733.468Z"
          fill="#3F3D56"
        />
        <path
          id="Vector_63"
          d="M832.904 679.221H574.225L528.584 453.669H875.735C877.507 453.669 879.257 454.053 880.866 454.794C882.475 455.535 883.904 456.616 885.055 457.963C886.207 459.309 887.053 460.888 887.535 462.593C888.018 464.297 888.126 466.086 887.851 467.836L845.018 668.861C844.576 671.753 843.109 674.39 840.886 676.292C838.662 678.194 835.829 679.233 832.904 679.221V679.221ZM577.034 675.809H832.904C835.015 675.818 837.06 675.067 838.664 673.695C840.269 672.322 841.327 670.419 841.646 668.331L884.479 467.306C884.677 466.043 884.6 464.752 884.252 463.522C883.904 462.291 883.293 461.151 882.462 460.18C881.631 459.208 880.6 458.428 879.438 457.893C878.277 457.358 877.014 457.081 875.735 457.081H532.726L577.034 675.809Z"
          fill="#3F3D56"
        />
        <path
          id="Vector_64"
          d="M624.513 678.499L594.623 455.653L597.989 455.097L627.879 677.943L624.513 678.499Z"
          fill="#3F3D56"
        />
        <path
          id="Vector_65"
          d="M790.712 676.788L787.343 676.242L816.36 455.102L819.729 455.648L790.712 676.788Z"
          fill="#3F3D56"
        />
        <path
          id="Vector_66"
          d="M711.527 455.375H708.115V678.221H711.527V455.375Z"
          fill="#3F3D56"
        />
        <path
          id="Vector_67"
          d="M546.014 515.088L546.005 518.501L876.3 519.3L876.308 515.888L546.014 515.088Z"
          fill="#3F3D56"
        />
        <path
          id="Vector_68"
          d="M853 620.494L562.829 622.478L562.853 625.89L853.024 623.906L853 620.494Z"
          fill="#3F3D56"
        />
        <path
          id="Vector_69"
          d="M472.648 421.253C483.012 421.253 491.415 416.67 491.415 411.017C491.415 405.363 483.012 400.78 472.648 400.78C462.283 400.78 453.881 405.363 453.881 411.017C453.881 416.67 462.283 421.253 472.648 421.253Z"
          fill="#3F3D56"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="888" height="741.048" fill="white" />
        </clipPath>
      </defs>
    </CartSvg>
  );
};

export default CartImage;
