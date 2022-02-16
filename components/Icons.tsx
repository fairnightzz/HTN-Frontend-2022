/* eslint-disable no-unused-vars */
import React from 'react';
import classNames from 'classnames';

export interface IconProps {
  className?: string
}

export function ShareIcon({ className }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
    </svg>
  );
}

export function RssIcon({ className }: IconProps) {
  return (
    <svg className="stroke-current" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.50002 1.41666C10.2784 1.41666 16.5834 7.72166 16.5834 15.5M2.50002 7.91666C4.51125 7.91666 6.4401 8.71561 7.86225 10.1378C9.2844 11.5599 10.0834 13.4888 10.0834 15.5M3.58335 15.5C3.58335 15.7873 3.46922 16.0629 3.26605 16.266C3.06289 16.4692 2.78734 16.5833 2.50002 16.5833C2.2127 16.5833 1.93715 16.4692 1.73399 16.266C1.53082 16.0629 1.41669 15.7873 1.41669 15.5C1.41669 15.2127 1.53082 14.9371 1.73399 14.734C1.93715 14.5308 2.2127 14.4167 2.50002 14.4167C2.78734 14.4167 3.06289 14.5308 3.26605 14.734C3.46922 14.9371 3.58335 15.2127 3.58335 15.5Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function TitleIcon({ className }: IconProps) {
  return (
    <svg className={classNames('stroke-current', className)} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M33.3333 35H6.66665C4.8257 35 3.33331 33.5076 3.33331 31.6667V8.33333C3.33331 6.49238 4.8257 5 6.66665 5H33.3333C35.1743 5 36.6666 6.49238 36.6666 8.33333V31.6667C36.6666 33.5076 35.1743 35 33.3333 35ZM16.6666 11.6667V31.6667H33.3333V11.6667H16.6666ZM6.66665 11.6667V31.6667H13.3333V11.6667H6.66665Z" fill="#2E3A59" />
    </svg>
  );
}

export function MoonIcon({ className }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
    </svg>
  );
}

export function SunIcon({ className }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
    </svg>
  );
}

export function CopyLinkIcon({ className }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
    </svg>
  );
}

export function CopyLinkSuccessIcon({ className }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
  );
}

export function ExternalLinkIcon({ className }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

export function ArrowsExpandIcon({ className }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
    </svg>
  );
}
export function SearchIcon({ className }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={classNames('h-6 w-6', className)} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  );
}

export function UserIcon({ className }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={classNames('h-6 w-6', className)} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

export function BackIcon({ className }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
    </svg>
  );
}

export function HTNIcon({ className }: IconProps) {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="300.000000pt"
      height="300.000000pt"
      viewBox="0 0 300.000000 300.000000"
      preserveAspectRatio="xMidYMid meet"
      className={classNames(className)}
    >

      <g
        transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
        fill="currentColor"
        stroke="none"
      >
        <path d="M1926 2902 c-14 -26 -12 -32 19 -95 19 -37 44 -98 56 -136 l22 -69
169 -63 c204 -75 212 -82 206 -182 -5 -92 -17 -102 -208 -167 -85 -29 -160
-58 -166 -64 -7 -6 -20 -36 -29 -66 -10 -30 -34 -88 -53 -127 l-35 -73 43 -92
c24 -51 59 -125 78 -165 41 -87 39 -104 -24 -166 -71 -70 -71 -70 -312 44
l-113 53 -48 -26 c-26 -15 -88 -41 -137 -57 l-89 -30 -58 -168 c-69 -202 -78
-213 -172 -213 -95 0 -110 17 -175 210 -29 85 -57 160 -61 166 -5 6 -28 16
-51 23 -24 7 -82 31 -131 53 l-87 41 -163 -76 c-89 -43 -170 -77 -180 -77 -10
0 -43 23 -73 51 -73 70 -72 81 22 278 l75 159 -32 64 c-17 34 -42 92 -54 128
l-23 65 -26 -59 c-86 -189 -128 -473 -106 -701 37 -372 191 -690 458 -947 147
-141 362 -275 525 -328 42 -13 34 -18 182 119 l60 56 0 111 -1 110 -97 88
c-105 96 -111 109 -83 178 25 60 32 61 179 54 l132 -7 79 77 79 78 -7 135 c-3
75 -3 141 2 148 9 15 91 52 114 53 9 0 56 -46 106 -101 l89 -101 111 0 110 0
86 95 c48 52 94 98 103 101 20 8 107 -20 124 -40 9 -11 10 -51 6 -153 l-6
-139 77 -77 77 -77 132 7 c89 4 138 3 152 -4 19 -10 23 -6 50 47 46 90 98 251
123 375 31 158 31 396 0 554 -88 443 -354 814 -742 1031 -58 33 -264 122 -282
122 -4 0 -14 -13 -22 -28z"
        />
        <path d="M945 2749 c-343 -120 -365 -597 -36 -753 61 -29 74 -31 171 -31 98 0
110 2 171 32 163 81 259 260 229 431 -24 139 -105 247 -227 305 -91 42 -216
49 -308 16z"
        />
        <path d="M1834 648 c-60 -20 -127 -80 -159 -142 -25 -49 -29 -70 -29 -130 1
-90 28 -149 96 -211 176 -158 457 -46 476 191 9 112 -45 212 -145 271 -38 22
-60 27 -127 29 -45 2 -95 -2 -112 -8z"
        />
      </g>
    </svg>

  );
}
