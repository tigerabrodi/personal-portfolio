export const RightArrowIcon = ({
  className,
  id,
}: {
  className?: string;
  id: number | string;
}) => {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 10 10"
      className={className}
    >
      <g clipPath={`url(#${id})`}>
        <path
          d="M9.793 4.675L.508.39a.36.36 0 00-.428.1.355.355 0 00-.008.438L3.125 5 .072 9.07a.356.356 0 00.435.539l9.285-4.286a.357.357 0 00.001-.649z"
          fill="#FFAA84"
        />
      </g>
      <defs>
        <clipPath id={String(id)}>
          <path fill="#fff" d="M0 0h10v10H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
