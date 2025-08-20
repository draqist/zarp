import { motion, Variants } from "motion/react";
const draw: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    const delay = i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "tween", duration: 5 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};
const Swift1Icon = () => (
  <motion.svg
    initial="hidden"
    whileInView="visible"
    whileHover="visible"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 500 500"
  >
    <g id="freepik--background-simple--inject-39">
      <motion.path
        variants={draw}
        fill="#92E3A9"
        d="M156.19 55.92S80.42 94.52 42.63 154 7.83 290 53.75 346.8s133.69 49.34 207.18 85.32 154.57 28.57 189.32-47.66-17.65-104.72-26.65-192.94-88.53-217.4-267.41-135.6"
      ></motion.path>
      <motion.path
        variants={draw}
        fill="#fff"
        d="M156.19 55.92S80.42 94.52 42.63 154 7.83 290 53.75 346.8s133.69 49.34 207.18 85.32 154.57 28.57 189.32-47.66-17.65-104.72-26.65-192.94-88.53-217.4-267.41-135.6"
        // opacity="0.7"
      ></motion.path>
    </g>
    <g id="freepik--Lamp--inject-39">
      <motion.path
        variants={draw}
        fill="none"
        stroke="gray"
        strokeMiterlimit="10"
        d="M70.74 70.05a6.24 6.24 0 1 1-6.24-6.24 6.24 6.24 0 0 1 6.24 6.24Z"
      ></motion.path>
      <motion.path
        variants={draw}
        fill="#263238"
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M98 70H31l20-14h27z"
      ></motion.path>
      <motion.path
        variants={draw}
        fill="#263238"
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M59.19 47.68h10.63v14H59.19z"
      ></motion.path>
      <motion.path
        variants={draw}
        fill="none"
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M64.27 48.55V16.67"
      ></motion.path>
    </g>
    <g
      id="freepik--boxes-1--inject-39"
      fill="none"
      stroke="gray"
      strokeMiterlimit="10"
    >
      <motion.path
        variants={draw}
        d="M312.98 57.92V42.31h14.56v113.12M312.98 296.49V62.16M327.54 159.67v260.16h-14.56V302.27M237 49.16v-6.85h14.56v5.6M237 170.84v-4.59M251.56 406.34v13.49H237v-63.61M251.56 355.97v45.36M89.12 393.23v-37.01M103.68 355.97v63.86H89.12V399.4M251.56 165v5.59M194.36 165.67h118.67v-16h-270M100.7 165.67h89.8M88.37 165.67h8.48M43.03 165.67h40.71M274.24 317.11h30.09v23.29h-30.09zM200.95 317.11h30.09v23.29h-30.09zM70.71 317.11h87.03v23.29H70.71z"
      ></motion.path>
      <motion.path
        variants={draw}
        d="M132.36 317.11h25.38v23.29h-25.38zM57.02 312.43h249.83v4.66H57.02z"
      ></motion.path>
      <motion.path
        variants={draw}
        d="M121.74 312.43h185.1v4.66h-185.1z"
      ></motion.path>
      <motion.path
        variants={draw}
        d="M60.33 309h88.82v3.56H60.33zM168.53 309h18.21v3.34h-18.21zM206.12 309h18.21v3.34h-18.21zM243.71 309h18.21v3.34h-18.21zM281.3 309h18.21v3.34H281.3zM157.74 340.4h43.21M231.03 340.4h43.21M132.05 312.46v-3.34M149.15 309h19.38M186.74 309h19.38M224.33 309h19.38M261.92 309h19.38M62.16 356.36h250.87v-16h-270M43.03 356.36h14.51M217.18 170.71h83.04v68.99h-83.04z"
      ></motion.path>
      <motion.path
        variants={draw}
        d="M233.45 170.71h66.77v68.99h-66.77z"
      ></motion.path>
      <motion.path
        variants={draw}
        d="M274.66 176.2h-14a2.44 2.44 0 0 1-2.44-2.44 2.44 2.44 0 0 1 2.44-2.44h14a2.44 2.44 0 0 1 2.44 2.44 2.44 2.44 0 0 1-2.44 2.44ZM217.18 239.68h83.04v68.99h-83.04z"
      ></motion.path>
      <motion.path
        variants={draw}
        d="M233.45 239.68h66.77v68.99h-66.77z"
      ></motion.path>
      <rect width="18.88" height="4.87" x="258.22" y="240.29" rx="2.44"></rect>
      <motion.path
        variants={draw}
        d="M121.04 239.68h83.04v68.99h-83.04z"
      ></motion.path>
      <motion.path
        variants={draw}
        d="M137.31 239.68h66.77v68.99h-66.77z"
      ></motion.path>
      <rect width="18.88" height="4.87" x="162.09" y="240.29" rx="2.44"></rect>
      <motion.path
        variants={draw}
        d="M274.24 126.2h30.09v23.29h-30.09zM200.95 126.2h30.09v23.29h-30.09zM70.71 126.2h87.03v23.29H70.71z"
      ></motion.path>
      <motion.path
        variants={draw}
        d="M132.36 126.2h25.38v23.29h-25.38zM57.02 121.53h249.83v4.66H57.02z"
      ></motion.path>
      <motion.path
        variants={draw}
        d="M121.74 121.53h185.1v4.66h-185.1z"
      ></motion.path>
      <motion.path
        variants={draw}
        d="M84.48 118.09H60.33v3.56h88.82v-3.56H88.53M168.53 118.1h18.21v3.34h-18.21zM206.12 118.1h18.21v3.34h-18.21zM243.71 118.1h18.21v3.34h-18.21zM281.3 118.1h18.21v3.34H281.3zM157.74 149.5h43.21M231.03 149.5h43.21M132.05 121.55v-3.33M149.15 118.1h19.38M186.74 118.1h19.38M224.33 118.1h19.38M261.92 118.1h19.38M217.18 48.78h83.04v68.99h-83.04z"
      ></motion.path>
      <motion.path
        variants={draw}
        d="M233.45 94.6V48.78h66.76v68.99h-66.76v-17.4"
      ></motion.path>
      <motion.path
        variants={draw}
        d="M274.66 54.26h-14a2.44 2.44 0 0 1-2.44-2.44 2.43 2.43 0 0 1 2.44-2.43h14a2.43 2.43 0 0 1 2.44 2.43 2.44 2.44 0 0 1-2.44 2.44ZM204.08 78.99v38.78h-83.04V48.78h83.04v25.88"
      ></motion.path>
      <motion.path
        variants={draw}
        d="M204.08 78.99v38.78h-66.77V48.78h66.77v22.99"
      ></motion.path>
      <motion.path
        variants={draw}
        d="M178.53 54.26h-14a2.43 2.43 0 0 1-2.43-2.44 2.43 2.43 0 0 1 2.43-2.43h14a2.44 2.44 0 0 1 2.47 2.43 2.44 2.44 0 0 1-2.47 2.44ZM286.02 356.44l27.18 18.57M313.16 389.02l-47.52-32.49M209.69 356.44l27.17 18.57M236.82 389.02l-47.52-32.49"
      ></motion.path>
    </g>
    <motion.path
      variants={draw}
      // initial={{ pathLength: 0 }}
      // whileInView={{ pathLength: 1 }}
      // transition={{ duration: 2, ease: "linear", repeat: 1 }}
      id="freepik--Floor--inject-39"
      fill="none"
      stroke="#263238"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M472 419.82H34"
    ></motion.path>
    <g id="freepik--boxes-2--inject-39">
      <motion.path
        variants={draw}
        fill="#263238"
        stroke="gray"
        strokeMiterlimit="10"
        d="M287.43 353.23h98.45v81.96h-98.45z"
      ></motion.path>
      <motion.path
        variants={draw}
        fill="#d1d1d1"
        stroke="gray"
        strokeMiterlimit="10"
        d="M287.43 353.23h70.5v81.96h-70.5z"
      ></motion.path>
      <motion.path
        variants={draw}
        fill="#263238"
        d="m349.66 370.7-5.97-13.2-5.99 13.17 3.1.01v13.49l5.75.01.01-13.49zM341.3 386.94v6.74c0 .62.19.84.5.85s.5-.23.5-.85V387h.92v6.64c0 1.4-.49 2.2-1.44 2.19s-1.44-.8-1.44-2.19v-6.65ZM346.74 389.12v1.13c0 1.4-.47 2.16-1.44 2.16h-.46v3.28h-1V387h1.42c1.01 0 1.48.72 1.48 2.12m-1.9-.92v3h.46c.31 0 .47-.2.47-.82V389c0-.62-.17-.83-.48-.83Z"
      ></motion.path>
      <motion.path
        variants={draw}
        fill="#f5f5f5"
        stroke="gray"
        strokeMiterlimit="10"
        d="M316.68 353.23h12v15.44h-12z"
      ></motion.path>
      <motion.path
        variants={draw}
        fill="#263238"
        stroke="gray"
        strokeMiterlimit="10"
        d="M368.43 353.23h98.45v81.96h-98.45z"
      ></motion.path>
      <motion.path
        variants={draw}
        fill="#d1d1d1"
        stroke="gray"
        strokeMiterlimit="10"
        d="M368.43 353.23h70.5v81.96h-70.5z"
      ></motion.path>
      <motion.path
        variants={draw}
        fill="#f5f5f5"
        stroke="gray"
        strokeMiterlimit="10"
        d="M397.68 353.23h12v15.44h-12z"
      ></motion.path>
      <motion.path
        variants={draw}
        fill="#263238"
        stroke="gray"
        strokeMiterlimit="10"
        d="M363.44 271.69h98.45v81.96h-98.45z"
      ></motion.path>
      <motion.path
        variants={draw}
        fill="#d1d1d1"
        stroke="gray"
        strokeMiterlimit="10"
        d="M363.44 271.69h70.5v81.96h-70.5z"
      ></motion.path>
      <motion.path
        variants={draw}
        fill="#263238"
        d="m428.66 290.2-5.97-13.2-5.99 13.17 3.1.01v13.49l5.75.01.01-13.49zM420.3 306.44v6.74c0 .62.19.84.5.85s.5-.23.5-.85v-6.73h.92v6.64c0 1.4-.49 2.2-1.44 2.19s-1.44-.8-1.44-2.19v-6.65ZM425.74 308.62v1.13c0 1.4-.47 2.16-1.44 2.16h-.46v3.28h-1v-8.73h1.42c1.01 0 1.48.76 1.48 2.16m-1.9-.92v3h.46c.31 0 .47-.2.47-.82v-1.31c0-.62-.17-.83-.48-.83Z"
      ></motion.path>
      <motion.path
        variants={draw}
        fill="#f5f5f5"
        stroke="gray"
        strokeMiterlimit="10"
        d="M392.68 271.69h12.01v15.44h-12.01z"
      ></motion.path>
      <motion.path
        variants={draw}
        fill="#263238"
        stroke="gray"
        strokeMiterlimit="10"
        d="M363.44 188.69h98.45v81.96h-98.45z"
      ></motion.path>
      <motion.path
        variants={draw}
        fill="#d1d1d1"
        stroke="gray"
        strokeMiterlimit="10"
        d="M363.44 188.69h70.5v81.96h-70.5z"
      ></motion.path>
      <motion.path
        variants={draw}
        fill="#f5f5f5"
        stroke="gray"
        strokeMiterlimit="10"
        d="m373.734 247.171 24.813-15.432 8.513 13.688-24.812 15.432zM295.149 406.886l24.812-15.432 8.514 13.688-24.813 15.433zM392.68 188.69h12.01v15.44h-12.01z"
      ></motion.path>
    </g>
    <g
      id="freepik--Window--inject-39"
      fill="none"
      stroke="gray"
      strokeMiterlimit="10"
    >
      <motion.path variants={draw} d="M474 119H350V54h124z"></motion.path>
      <motion.path
        variants={draw}
        d="m467.61 54.57 5.7 11.4H354.23L350 54"
      ></motion.path>
      <motion.path
        variants={draw}
        d="m467.61 66.28 5.7 11.41H354.23L350 65.72"
      ></motion.path>
      <motion.path
        variants={draw}
        d="m467.61 78 5.7 11.4H354.23L350 77.44"
      ></motion.path>
      <motion.path
        variants={draw}
        d="m467.61 89.72 5.7 11.4H354.23L350 89.15"
      ></motion.path>
      <motion.path
        variants={draw}
        d="m467.61 101.44 5.7 11.4H354.23L350 100.87"
      ></motion.path>
    </g>
    <g id="freepik--Character--inject-39">
      <motion.path
        variants={draw}
        fill="#263238"
        d="M154.5 434.92c38.51 0 71.27 5.81 83.45 13.92l32.57 12.92-82.69 20.5-19.7-5.76q-6.66.24-13.63.25c-48.9 0-88.53-9.37-88.53-20.92s39.63-20.91 88.53-20.91"
      ></motion.path>
      <motion.path
        variants={draw}
        fill="#fff"
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M73.49 296.38s-3 7.11-5.42 14.22-3.23 12.46-2.22 17.87 6 11.23 11 12.25 33.85-8.46 41.29-14.22 2.37-20.64-3.72-24-40.93-6.12-40.93-6.12"
      ></motion.path>
      <motion.path
        variants={draw}
        fill="#263238"
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M80.42 302.58s7.58 4.81 11.65 6.1 11.46 2.78 11.46 2.78-12.76-.93-15.35.18-4.81 2.22-4.81 2.22 18.5-.55 22.57 2.22 9.06 7 9.06 7l-5.73-14.8.92-1.66s-17.75.21-29.77-4.04"
      ></motion.path>
      <motion.path
        variants={draw}
        fill="#92E3A9"
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M162.69 235.36s14.17 7.78 16.12 15.83a49.4 49.4 0 0 0 5 13.06l-68.36 42.24s-14.72 3.33-26.12-.28-17.22-5.28-17-10 4.73-8.06 6.12-10.56 13.06-29.73 19.73-40.29 8.61-19.17 22.23-24.73a61.1 61.1 0 0 1 25-4.73Z"
      ></motion.path>
      <motion.path
        variants={draw}
        fill="none"
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M85.23 297.84c-1.66 0-3.32 0-5-.15M107.07 296a146.5 146.5 0 0 1-19.62 1.79M112.11 295.15s-.85.18-2.35.44M106.35 285.46c-6.22 3.13-16.87 7.82-27.7 9.46M111.88 282.46s-1 .6-2.74 1.54M75.42 292.84a56 56 0 0 1 8.58-3.23M159.63 244.53l-7.5 21.39-3.33.56 3.89-10.56"
      ></motion.path>
      <motion.path
        variants={draw}
        fill="#92E3A9"
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m169.35 244.16-3.21 9.18-2.13-9.61z"
      ></motion.path>
      <motion.path
        variants={draw}
        fill="#92E3A9"
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m163.7 231.47 5.65 12.69-11.32 1.71z"
      ></motion.path>
      <motion.path
        variants={draw}
        fill="#fff"
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M200.54 203.78s-3.63 5.34-4.06 7.05-3.42 7.69-5.77 11.11-10.89 13-16 13.89-9.61-2.78-9.61-2.78l-7.1 12.82-8.12-31 5.34-3.85a11.8 11.8 0 0 1-2.14-6.62c0-3.84 2.35-8.54 2.35-8.54s3-5.35 7.91-7.91 23.71 1.07 30.12 3.21 7.93 7.92 7.08 12.62"
      ></motion.path>
      <motion.path
        variants={draw}
        fill="#263238"
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m165.08 233.05-5.42-4.9 2.42 8.79z"
      ></motion.path>
      <motion.path
        variants={draw}
        fill="none"
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m187.72 205.28-2.35 3.2s.64 9.61-1.28 10.47-6-.21-7.05-1.92M176.4 220.23a58 58 0 0 1-4.49-6.41c-1.71-3-4.27-1.92-5.77 0s-.21 4.7 1.93 6 7.26 2.97 8.33.41"
      ></motion.path>
      <motion.path
        variants={draw}
        fill="none"
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M167 213s3 6.19 8.12 7.9"
      ></motion.path>
      <motion.path
        variants={draw}
        fill="none"
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M178.87 205.39a7 7 0 0 0-5.8-3.37M188.45 209.49s3.71-.36 4.64 2.35"
      ></motion.path>
      <motion.path
        variants={draw}
        fill="none"
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M195.6 209.17s.19-3-6-3.19M181.09 203.32s-.49-4.38-7.05-5.27"
      ></motion.path>
      <motion.path
        variants={draw}
        fill="#263238"
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M155.57 195.69a24.2 24.2 0 0 1 4.9-5.75 86 86 0 0 1 10.16 1.45l1.07 1.71s-6.41 8.76-8.76 8.76-1.71-4.92-3.85-6.2a3.75 3.75 0 0 0-3.52.03M153.11 204.42a14.3 14.3 0 0 1 .4-3.09c-.39 3.83 1.49 6.81 2.17 7.15a6.7 6.7 0 0 1 1.71 1.5l-2.2 1a11.87 11.87 0 0 1-2.08-6.56"
      ></motion.path>
      <motion.path
        variants={draw}
        fill="#92E3A9"
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M155.33 194.83s10.47-2.35 26.23 1.75 19.16 8.17 19.16 8.17 2.2-8.72 3.17-14.19-9.23-14-15.11-16.35-18.15-.4-22.27.82-7.28 6.74-8 8.35-3.18 11.45-3.18 11.45"
      ></motion.path>
      <motion.path
        variants={draw}
        fill="#fff"
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M200.72 204.75s8.91 10.91 6.83 11.63-10.1-7.87-18.9-9.65-17.05-5.41-20-8.32a26.2 26.2 0 0 1-4-4.61s20.81-.87 36.07 10.95"
      ></motion.path>
      <motion.path
        variants={draw}
        fill="#92E3A9"
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m152.47 211.26 7.69 34.18-9.82 3.85-6.2-34.83z"
      ></motion.path>
      <motion.path
        variants={draw}
        fill="#263238"
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m182.47 396.9-10.83 18.27s2.37 2 2.37 3.05v3.38s13.53 4.74 16.58 6.1 3.72 5.41 3.38 6.43-7.1 2.37-13.53 2.37-18.62-3.05-18.62-3.05-8.12 0-10.83-1.69-1.69-5.76-1-8.8 1.69-6.09 1.69-6.09-.34-5.08.34-6.43 1.69-2.71 1.69-4.07 4.74-21 4.74-21Z"
      ></motion.path>
      <motion.path
        variants={draw}
        fill="#263238"
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m172.31 337 27.75 75.81-61.27-35.19-28.28-69.18z"
      ></motion.path>
      <motion.path
        variants={draw}
        fill="#dedede"
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M261.32 272.35 172.31 337l-61.8-28.56 77.03-56.05z"
      ></motion.path>
      <motion.path
        variants={draw}
        fill="#d1d1d1"
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m261.32 272.35 25.72 75.81-86.98 64.65L172.31 337z"
      ></motion.path>
      <motion.path
        variants={draw}
        fill="#f5f5f5"
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M226.42 263.22 143.1 323.4l6.24 20.14-11.33-6.8-7.25-18.92 80.66-59.01z"
      ></motion.path>
      <motion.path
        variants={draw}
        fill="none"
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m134.39 319.33-1.77-.83M141.58 322.73l-5.89-2.78"
      ></motion.path>
      <motion.path
        variants={draw}
        fill="#263238"
        d="m201.48 340.32-10.04-7.09-2.01 14.27 3.13-1.87 4.11 10.93 5.81-3.45-4.12-10.93zM198 358.51l2.05 5.46c.19.5.45.57.76.38s.44-.48.25-1l-2.06-5.44.92-.55 2 5.38a2 2 0 0 1-.79 2.65c-1 .57-1.7.22-2.12-.91l-2-5.39ZM204.17 357l.35.92a1.93 1.93 0 0 1-.8 2.61l-.46.28 1 2.65-1 .58-2.64-7.04 1.44-.85c.94-.62 1.69-.29 2.11.85m-2.19.4.9 2.4.46-.28c.31-.18.42-.45.23-.95l-.4-1.06c-.19-.51-.42-.57-.73-.38ZM260.54 293.37l-10.05-7.09-2 14.27 3.12-1.86 4.12 10.93 5.8-3.46-4.11-10.93zM257.08 311.57l2.06 5.45c.19.51.45.57.76.39s.44-.49.25-1l-2.06-5.41.92-.55 2 5.38a2 2 0 0 1-.78 2.64c-1 .57-1.7.22-2.13-.91l-2-5.38ZM263.23 310l.35.92a2 2 0 0 1-.8 2.62l-.46.27 1 2.66-1 .58-2.64-7.05 1.44-.86c.97-.56 1.68-.23 2.11.86m-2.19.41.9 2.39.46-.27c.31-.19.42-.45.23-1l-.4-1.06c-.19-.5-.42-.56-.73-.38Z"
      ></motion.path>
      <motion.path
        variants={draw}
        fill="none"
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m286.09 313.1 1.18 3.39M272.87 275.16l12.29 35.3M289.76 309.16l4.01 11.51M279.37 279.34l9.39 26.97M226.27 255.2l-29.1-7.9M234.79 257.51l-5.46-1.48M216.21 249.62l-21.36-5.57M207.6 413.88l-3.46 2.46M221.79 403.8l-12.19 8.66M225.96 406.59l-8.35 6.03"
      ></motion.path>
      <motion.path
        variants={draw}
        fill="#fff"
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M206.57 304.52a33 33 0 0 1 3.31-.52 14.5 14.5 0 0 0 5.17-.1c2.27-.62 3.31 0 2.68 1.45a5.89 5.89 0 0 1-3.92 3c-1.24.1-4 .1-4 .1l-3.72-3.31Z"
      ></motion.path>
      <motion.path
        variants={draw}
        fill="#fff"
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M137.68 230.08s6.12 5.83 6.67 11.94-3.35 41.13-3.35 41.13 12.5 6.11 21.95 11.67 25.29 12.23 25.29 12.23 18.33-3.34 19.72-2.78 8.9 8.61 9.17 9.72-1.39 7.5-1.39 8.62-1.44 1.14-1.44 1.14h-1.06l-.76 1.52a2.59 2.59 0 0 1-2 1.41l-1.11.12s-1.94 2.23-3.61.84-5.28-7.51-5.28-7.51-8.61-.83-10.84-1.66a37 37 0 0 1-5.28-2.78S133 302.6 128 301.21s-6.95-2.78-8.89-6.67-6.36-42.5-6.36-45.83"
      ></motion.path>
      <motion.path
        variants={draw}
        fill="none"
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M200.2 314s5.84 5 5.84 6.95 2.7 6.22 2.7 6.22M203.68 310.41s3.93 4.34 4.75 5.69 2 10.55 2 10.55M206.88 307.83s5 4.65 5.07 6.41 1.31 9.48 1.31 9.48"
      ></motion.path>
      <motion.path
        variants={draw}
        fill="#92E3A9"
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M137.39 229.6s6.41 6.31 7 12.42c.39 4.3-1.41 22.86-2.52 33.52-5.57-2.05-16.15-4.25-25.63 3.45-1.63-11.7-3.22-26.26-3.49-30.28"
      ></motion.path>
      <motion.path
        variants={draw}
        fill="none"
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M141 283.15s-6.39-1.95-8.89-1.39"
      ></motion.path>
      <motion.path
        variants={draw}
        fill="#92E3A9"
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M121.91 459.43s7.79 8.8 13.54 13.54 3.38 9.14-.68 10.15-12.18-.67-19.63-3-13.53-10.15-13.53-10.15-8.47-5.42-9.14-7.45 7.1-11.52 7.1-11.52 20.31 8.43 22.34 8.43"
      ></motion.path>
      <motion.path
        variants={draw}
        fill="#fff"
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M92.47 462.48c-.24-.7.54-2.3 1.67-4.09 4.49 3.87 12.53 14.91 18.63 18 5.17 2.58 16.63 5.37 24.68 5.37a6.2 6.2 0 0 1-2.68 1.39c-4.06 1-12.18-.67-19.63-3S101.61 470 101.61 470s-8.47-5.49-9.14-7.52M79.92 315.34s12.86-5.42 22.34-1.7 26.4 19 33.5 29.79S149 359 148.62 369.15s-16.24 55.5-16.92 59.56-5 20.91-5 20.91a29.3 29.3 0 0 1 0 6.43c-.31 2.58-1.14 7-1.14 7s-11.38-.6-17.81-3.65a43.9 43.9 0 0 1-9.82-6.09 42 42 0 0 1 2-7.44c1.36-3.39 5.73-9.4 6.41-11.44s2.37-22.67 2.37-31.13 3.72-29.45 3.72-30.8a37 37 0 0 1 1.35-5.75s-28.76-14.22-36.55-21-11.1-13.12-11.87-19.18c-.55-4.39 1.27-10.67 1.27-10.67"
      ></motion.path>
      <motion.path
        variants={draw}
        fill="none"
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M76.87 303.49s-4.4 4.74-3.72 6.77 3.72 5.74 2.37 5.74-3.38 3.05-3.38 3.05l3 .67-1.35 7.79L114.44 360a38.4 38.4 0 0 0 6.09 4.06l-2.37 4.06 4.4.68s-6.43 6.43-7.1 11.84-6.41 62.2-7.09 63.89-1.69 2.71-2 4.4a28.6 28.6 0 0 0 0 5.42c0 1-.34 3.38-.34 3.38"
      ></motion.path>
    </g>
  </motion.svg>
);

export default Swift1Icon;
