import React from 'react'
const ComputerTemperatureOutline: React.FC<
  React.SVGProps<SVGSVGElement>
> = props => {
  return (
    <svg
      {...props}
      id="computer-temperature"
      viewBox="0 0 24 24"
      fill="none"
      focusable="false"
      width="1em"
      height="1em">
      <path
        d="M21.6 4c.22 0 .4.18.4.4v13.2a.4.4 0 0 1-.4.4H2.4a.4.4 0 0 1-.4-.4V4.4c0-.22.18-.4.4-.4h19.2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M4 21h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M7.14 11.338c-.396 0-.755-.095-1.079-.285a2.204 2.204 0 0 1-.775-.776A2.08 2.08 0 0 1 5 9.203c0-.395.095-.754.286-1.078a2.17 2.17 0 0 1 .775-.771c.324-.193.683-.29 1.078-.29s.753.097 1.074.29c.324.19.581.447.771.771.194.324.29.683.29 1.078 0 .392-.096.75-.29 1.074a2.17 2.17 0 0 1-.77.776c-.322.19-.68.285-1.075.285Zm0-1.33a.79.79 0 0 0 .694-.4.767.767 0 0 0 .11-.405.775.775 0 0 0-.11-.409.788.788 0 0 0-.29-.29.767.767 0 0 0-.405-.11.82.82 0 0 0-.703.4.79.79 0 0 0-.106.405c0 .15.035.288.106.413a.814.814 0 0 0 .703.396Zm11.104.273h-2.13a1.846 1.846 0 0 0-.175-.592 1.439 1.439 0 0 0-.865-.737 1.975 1.975 0 0 0-.652-.103c-.423 0-.789.104-1.095.312-.304.207-.539.507-.703.899-.162.392-.243.866-.243 1.423 0 .58.082 1.065.247 1.457.168.39.402.684.703.882.304.197.663.295 1.078.295.233 0 .445-.03.635-.09a1.56 1.56 0 0 0 .507-.26c.148-.116.269-.257.362-.422.097-.167.164-.356.2-.567l2.131.013a3.233 3.233 0 0 1-.336 1.142 3.646 3.646 0 0 1-.763 1.027 3.605 3.605 0 0 1-1.185.733c-.463.182-.994.273-1.594.273-.79 0-1.497-.173-2.122-.52a3.744 3.744 0 0 1-1.474-1.525c-.36-.668-.541-1.48-.541-2.438 0-.96.183-1.774.55-2.442.366-.667.862-1.175 1.487-1.521.625-.347 1.325-.52 2.1-.52a4.65 4.65 0 0 1 1.466.222c.45.144.844.358 1.185.639.341.278.618.62.831 1.027.213.406.345.87.396 1.393Z"
        fill="currentColor"
      />
    </svg>
  )
}
export default ComputerTemperatureOutline
