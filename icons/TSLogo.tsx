import { ComponentPropsWithoutRef } from "react";

export const TSLogo = (props: ComponentPropsWithoutRef<"svg">) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 128 128"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M2 63.91V126.41H127V1.41H2V63.91ZM102.73 58.91C105.724 59.6048 108.445 61.1706 110.55 63.41C111.709 64.6165 112.716 65.9597 113.55 67.41C113.55 67.57 108.15 71.22 104.86 73.26C104.74 73.34 104.26 72.82 103.73 72.03C103.129 70.9937 102.276 70.1264 101.25 69.5091C100.223 68.8918 99.057 68.5446 97.86 68.5C94.07 68.24 91.63 70.23 91.65 73.5C91.6187 74.3141 91.8051 75.1219 92.19 75.84C93.02 77.57 94.57 78.6 99.43 80.7C108.38 84.55 112.21 87.09 114.59 90.7C117.25 94.7 117.84 101.16 116.04 105.94C114.04 111.14 109.14 114.67 102.21 115.84C99.0448 116.203 95.8468 116.169 92.69 115.74C87.8722 114.958 83.4279 112.664 80 109.19C78.85 107.92 76.61 104.61 76.75 104.37C77.1151 104.099 77.4994 103.855 77.9 103.64L82.5 101L86.09 98.92L86.84 100.03C88.1057 101.841 89.7166 103.383 91.58 104.57C95.58 106.67 101.04 106.38 103.74 103.95C104.647 103.06 105.212 101.879 105.338 100.615C105.464 99.3505 105.143 98.0819 104.43 97.03C103.43 95.64 101.43 94.47 95.84 92.03C89.39 89.25 86.61 87.53 84.07 84.79C82.4843 82.9819 81.3136 80.8486 80.64 78.54C80.1375 75.9025 80.0633 73.2012 80.42 70.54C81.75 64.31 86.42 59.96 93.24 58.67C96.3984 58.2792 99.5977 58.3669 102.73 58.93V58.91ZM73.39 64.15V69.27H57.16V115.5H45.65V69.26H29.38V64.26C29.3363 62.5387 29.3831 60.8164 29.52 59.1C29.58 59.02 39.52 58.98 51.52 59H73.33L73.39 64.15Z" />
    </svg>
  );
};
