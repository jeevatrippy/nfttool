import type { IconProps } from '@radix-ui/react-icons/dist/types';
import React from 'react';
import { memo } from 'react';

export const OpenSeaLogoIcon = memo(function ({
  color = 'currentColor',
  ...props
}: IconProps) {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...(props as any)}
    >
      <path
        d="M1.77355 8.08082L1.81903 8.00933L4.56204 3.71825C4.60213 3.65541 4.69637 3.66192 4.72672 3.73015C5.18495 4.75717 5.58039 6.03442 5.39513 6.82958C5.31605 7.15674 5.09938 7.59983 4.85562 8.00933C4.82422 8.06892 4.78954 8.12742 4.7527 8.18375C4.73539 8.20974 4.70612 8.22492 4.6747 8.22492H1.85371C1.77786 8.22492 1.73346 8.14259 1.77355 8.08082Z"
        fill={color}
      />
      <path
        d="M14 8.87828V9.55752C14 9.59651 13.9762 9.63119 13.9415 9.64635C13.7292 9.73736 13.0022 10.071 12.7 10.4914C11.9287 11.5649 11.3393 13.1 10.022 13.1H4.52624C2.57842 13.1 1 11.5162 1 9.56186V9.49901C1 9.44702 1.04225 9.40477 1.09424 9.40477H4.15791C4.21858 9.40477 4.263 9.4611 4.25759 9.52069C4.23592 9.72002 4.27275 9.92369 4.367 10.1089C4.54899 10.4783 4.92601 10.7091 5.33333 10.7091H6.85V9.52502H5.35067C5.27374 9.52502 5.22826 9.43619 5.27266 9.37335C5.28892 9.34844 5.30734 9.32243 5.32684 9.29319C5.46874 9.0917 5.67133 8.7786 5.87282 8.42218C6.01041 8.1817 6.14367 7.92493 6.25092 7.66711C6.27259 7.62053 6.28991 7.57287 6.30725 7.52626C6.33649 7.44395 6.36684 7.36702 6.38849 7.29012C6.41016 7.22512 6.4275 7.15686 6.44484 7.09294C6.49576 6.87411 6.51741 6.64227 6.51741 6.40177C6.51741 6.30752 6.51307 6.20895 6.5044 6.11468C6.50009 6.01177 6.48709 5.90885 6.47408 5.80594C6.46541 5.71493 6.44918 5.62502 6.43184 5.53078C6.41016 5.39319 6.37984 5.2567 6.34516 5.11911L6.33326 5.06711C6.30725 4.97287 6.28557 4.88294 6.25525 4.78869C6.16966 4.49294 6.07108 4.20477 5.96709 3.93502C5.92917 3.82778 5.88583 3.72486 5.8425 3.62195C5.77858 3.46702 5.71358 3.32619 5.65399 3.19294C5.62367 3.13227 5.59766 3.07702 5.57167 3.02069C5.54241 2.95677 5.51209 2.89287 5.48174 2.83218C5.46009 2.7856 5.43516 2.74227 5.41782 2.69895L5.23259 2.35661C5.20658 2.31002 5.24991 2.25477 5.30083 2.26885L6.46 2.58303H6.46326C6.46541 2.58303 6.46649 2.58411 6.46759 2.58411L6.62032 2.62635L6.78826 2.67402L6.85 2.69135V2.00236C6.85 1.66977 7.11649 1.40002 7.44583 1.40002C7.6105 1.40002 7.76 1.46718 7.86725 1.57661C7.9745 1.68603 8.04167 1.83553 8.04167 2.00236V3.02502L8.16516 3.05968C8.17491 3.06294 8.18466 3.06727 8.19333 3.07376C8.22367 3.09651 8.267 3.13012 8.32225 3.17126C8.36557 3.20594 8.41216 3.24819 8.46851 3.29151C8.58009 3.38145 8.71333 3.49736 8.85959 3.6306C8.89858 3.6642 8.93649 3.69885 8.97117 3.73353C9.15966 3.90901 9.37092 4.11486 9.57241 4.34236C9.62874 4.40626 9.68399 4.47126 9.74032 4.53952C9.79668 4.60885 9.85624 4.67711 9.90826 4.74537C9.97649 4.83635 10.0502 4.9306 10.1141 5.0292C10.1444 5.07578 10.1791 5.12344 10.2083 5.17002C10.2907 5.29461 10.3633 5.42353 10.4326 5.55243C10.4618 5.61202 10.4922 5.67702 10.5182 5.74094C10.5951 5.91319 10.6558 6.08869 10.6947 6.2642C10.7067 6.30211 10.7153 6.34328 10.7197 6.38012V6.38876C10.7327 6.44078 10.737 6.49603 10.7413 6.55236C10.7587 6.73218 10.75 6.91202 10.711 7.09294C10.6947 7.16986 10.6731 7.24243 10.6471 7.31936C10.6211 7.39303 10.5951 7.46993 10.5615 7.54252C10.4965 7.6931 10.4196 7.84369 10.3286 7.98452C10.2993 8.03651 10.2647 8.09177 10.23 8.14376C10.1921 8.19901 10.1531 8.25103 10.1184 8.30195C10.0708 8.36695 10.0198 8.43518 9.96782 8.49585C9.92124 8.55977 9.87358 8.62369 9.82158 8.68002C9.74899 8.7656 9.67966 8.84686 9.60709 8.92486C9.56374 8.97578 9.51716 9.02778 9.4695 9.07436C9.42291 9.12635 9.37525 9.17294 9.3319 9.21626C9.25934 9.28885 9.19867 9.34518 9.14775 9.39177L9.02858 9.50119C9.01124 9.51635 8.98849 9.52502 8.96466 9.52502H8.04167V10.7091H9.20301C9.46301 10.7091 9.71 10.617 9.90934 10.448C9.97757 10.3884 10.2755 10.1306 10.6276 9.7417C10.6395 9.72869 10.6547 9.71895 10.672 9.71461L13.8797 8.78727C13.9393 8.76993 14 8.81544 14 8.87828Z"
        fill={color}
      />
    </svg>
  );
});
