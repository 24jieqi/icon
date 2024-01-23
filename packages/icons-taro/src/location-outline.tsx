import React from 'react'

import { genOutlineIcon } from './gen'

const LocationOutline = genOutlineIcon(({ color, strokeWidth }) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
  <path d="M27.186 13.159C27.18 6.993 22.214 2 16.093 2 9.966 2 5 6.99 5 13.159c0 3.083 1.406 5.747 3 7.904l.047.063.05.065.068.09.035.048.037.047.057.073.078.101.082.105.065.08.066.084.088.11.046.057.093.116.032.039.065.08.1.123c.018.02.035.041.052.063l.105.128.11.131.112.135.115.14.12.141.122.146.126.15.064.076.131.154.135.158.138.162.213.25.147.17.15.174.153.177.156.181.16.185.164.188.167.192.17.195.174.2.177.201.18.206.185.21.282.32.193.219.195.221.2.226.305.344.208.234.211.238.215.241.218.245.334.374.226.253.231.259.012.012a1 1 0 0 0 1.474-.008l.348-.383.227-.251.223-.248.22-.245.217-.24.213-.238.21-.234.308-.344.202-.225.295-.332.287-.323.188-.211.183-.208.225-.255.22-.25.172-.196.168-.192.165-.189.161-.185.08-.091.156-.18.153-.177.09-.104.132-.155.145-.168.14-.164.138-.161.133-.158.13-.154.064-.076.126-.148.121-.146.118-.142.123-.147.095-.116.07-.085.09-.11.11-.135.105-.131.082-.102.099-.124.076-.097.055-.07.072-.092.052-.067.05-.066.066-.086.048-.062.06-.081.03-.04.058-.077.04-.057.04-.055c1.626-2.25 2.968-4.946 2.968-7.903zM16.093 4.75c-4.607 0-8.343 3.757-8.343 8.409 0 2.052.848 4.086 2.461 6.269l.04.054.043.056.021.029.056.074.03.038.06.078.031.04.064.082.034.043.068.086.071.09.074.093.077.095.08.099.082.1.107.131.11.135.093.112.095.114.097.117.1.12.103.122.105.126.164.193.112.133.115.135.118.139.12.14.124.145.19.22.13.152.133.154.135.156.139.16.14.162.217.249.222.255.152.173.232.266.159.18.16.184.247.28.253.286.346.391.267.301.272.307.107.12.372-.414.176-.197.259-.29.169-.189.249-.28.163-.183.239-.27.233-.264.153-.173.224-.254.145-.166.144-.164.14-.16.138-.16.136-.155.133-.153.13-.15.128-.148.124-.145.123-.142.12-.14.117-.137.114-.134.167-.197.108-.128.105-.125.128-.152.123-.149.096-.115.094-.113.09-.11.117-.143.057-.07.082-.102.08-.1.04-.048.075-.096.05-.062.07-.09.047-.06.045-.057.044-.057.021-.028.063-.081.04-.053.04-.052.037-.05.037-.05.035-.048.035-.047.028-.04c1.597-2.21 2.447-4.3 2.447-6.29-.005-4.652-3.743-8.412-8.343-8.412zm3.363 5.022a4.75 4.75 0 0 0-3.362-1.397 4.786 4.786 0 0 0-3.363 1.397 4.716 4.716 0 0 0-1.387 3.353 4.752 4.752 0 0 0 4.75 4.75 4.817 4.817 0 0 0 3.362-1.397 4.68 4.68 0 0 0 1.388-3.353v-.038a4.752 4.752 0 0 0-1.388-3.315zm-5.117 1.573a2.5 2.5 0 0 1 4.254 1.78v.022a2.464 2.464 0 0 1-.73 1.743 2.535 2.535 0 0 1-1.77.735 2.5 2.5 0 0 1-1.77-4.265z" fill="${color}" fill-opacity=".85" fill-rule="evenodd" />
  </svg>`
})
export default LocationOutline