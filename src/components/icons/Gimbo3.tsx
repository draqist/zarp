const Gimbo3 = ({ className }: { className?: string; rotate?: boolean }) => {
  return (
    <svg
      viewBox="0 0 116 116"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle
        cx="30"
        cy="30"
        r="28"
        fill="white"
        stroke="black"
        strokeWidth="4"
      />
      <path
        d="M30.791 8.80762C33.966 18.4616 41.5384 26.034 51.1924 29.209L53.5977 30L51.1924 30.791C41.5384 33.966 33.966 41.5384 30.791 51.1924L30 53.5977L29.209 51.1924C26.034 41.5384 18.4616 33.966 8.80762 30.791L6.40137 30L8.80762 29.209C18.4616 26.034 26.034 18.4616 29.209 8.80762L30 6.40137L30.791 8.80762Z"
        fill="#A17FBC"
        stroke="black"
        strokeWidth="4"
      />
      <circle
        cx="30"
        cy="86"
        r="28"
        fill="white"
        stroke="black"
        strokeWidth="4"
      />
      <circle
        cx="86"
        cy="30"
        r="28"
        fill="white"
        stroke="black"
        strokeWidth="4"
      />
      <circle
        cx="86"
        cy="86"
        r="28"
        fill="white"
        stroke="black"
        strokeWidth="4"
      />
      <path
        d="M86.791 64.8076C89.966 74.4616 97.5384 82.034 107.192 85.209L109.598 86L107.192 86.791C97.5384 89.966 89.966 97.5384 86.791 107.192L86 109.598L85.209 107.192C82.034 97.5384 74.4616 89.966 64.8076 86.791L62.4014 86L64.8076 85.209C74.4616 82.034 82.034 74.4616 85.209 64.8076L86 62.4014L86.791 64.8076Z"
        fill="#BCA47F"
        stroke="black"
        strokeWidth="4"
      />
    </svg>
  );
};

export default Gimbo3;
