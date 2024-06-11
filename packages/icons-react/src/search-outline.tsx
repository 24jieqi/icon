import React from 'react'
const SearchOutline: React.FC<React.SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      {...props}
      id="search"
      viewBox="0 0 16 16"
      fill="none"
      focusable="false"
      width="1em"
      height="1em">
      <path
        d="M2.62 2.62Q.666 4.571.666 7.332q0 2.762 1.952 4.714Q4.572 14 7.333 14q2.422 0 4.222-1.502l1.974 1.973q.094.093.216.143.123.051.255.051.065 0 .13-.013.064-.013.124-.038.061-.025.115-.061.055-.036.101-.083.046-.046.083-.1.036-.055.061-.115.025-.061.038-.125.013-.064.013-.13 0-.132-.05-.254-.051-.123-.145-.216l.001-.001-1.973-1.974Q14 9.755 14 7.333q0-2.761-1.953-4.714Q10.095.667 7.333.667q-2.761 0-4.714 1.952zm.942 8.485Q2 9.542 2 7.333q0-2.209 1.562-3.77Q5.124 2 7.333 2q2.21 0 3.771 1.562 1.563 1.562 1.563 3.771 0 2.21-1.563 3.772-1.562 1.562-3.77 1.562-2.21 0-3.772-1.562z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
}
export default SearchOutline