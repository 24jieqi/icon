import React from 'react'
const QuestionOutline: React.FC<React.SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      {...props}
      viewBox="0 0 1024 1024"
      focusable="false"
      width="1em"
      height="1em"
      fill="currentColor">
      <path d="M497.024 825.557333a46.933333 46.933333 0 1 1 0 93.866667 46.933333 46.933333 0 0 1 0-93.866667z m0-685.312a230.357333 230.357333 0 0 1 32 458.453334V725.333333a32 32 0 0 1-63.701333 4.352L465.024 725.333333v-156.416a32 32 0 0 1 32-32A166.357333 166.357333 0 1 0 330.666667 370.56a32 32 0 0 1-64 0 230.357333 230.357333 0 0 1 230.357333-230.314667z" />
    </svg>
  )
}
export default QuestionOutline
