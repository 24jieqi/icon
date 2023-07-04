import React from 'react'

import { genOutlineIcon } from './gen'

const CrossOutline = genOutlineIcon(({ color, strokeWidth }) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none">
  <path d="m28.94 31.06-10-10 2.12-2.12 10 10-2.12 2.12zM11.06 8.94l10 10-2.12 2.12-10-10 2.12-2.12zm-2.12 20 10-10 10-10 2.12 2.12-10 10-10 10-2.12-2.12zM30 31.5q-.074 0-.147-.007t-.146-.022q-.072-.014-.142-.036-.07-.021-.139-.05-.068-.027-.133-.062t-.126-.076q-.062-.04-.119-.087-.057-.047-.109-.1-.052-.051-.099-.108-.046-.057-.087-.119-.041-.06-.076-.126-.035-.065-.063-.133-.028-.068-.05-.139-.02-.07-.035-.142-.015-.073-.022-.146-.007-.073-.007-.147t.007-.147q.007-.073.022-.146.014-.072.036-.142.021-.07.05-.139.027-.068.062-.133t.076-.126q.04-.062.087-.119.047-.057.1-.109.051-.052.108-.099.057-.046.119-.087.06-.041.126-.076.065-.035.133-.063.068-.028.139-.05.07-.02.142-.035.073-.015.146-.022.073-.007.147-.007t.147.007q.073.007.146.022.072.014.142.036.07.021.139.05.068.027.133.062t.126.076q.062.04.119.087.057.047.109.1.052.051.099.108.046.057.087.119.041.06.076.126.035.065.063.133.028.068.05.139.02.07.035.142.015.073.022.146.007.073.007.147t-.007.147q-.007.073-.022.146-.014.072-.036.142-.021.07-.05.139-.027.068-.062.133t-.076.126q-.04.062-.087.119-.047.057-.1.109-.051.052-.108.099-.057.046-.119.087-.06.041-.126.076-.065.035-.133.063-.068.028-.139.05-.07.02-.142.035-.073.015-.146.022-.073.007-.147.007zm-20-20q-.074 0-.147-.007t-.146-.022q-.072-.014-.142-.036-.07-.021-.139-.05-.068-.027-.133-.062t-.126-.076q-.062-.04-.119-.087-.057-.047-.109-.1-.052-.051-.099-.108-.046-.057-.087-.119-.041-.06-.076-.126-.035-.065-.063-.133-.028-.068-.05-.139-.02-.07-.035-.142-.015-.073-.022-.146Q8.5 10.074 8.5 10t.007-.147q.007-.073.022-.146.014-.072.036-.142.021-.07.05-.139.027-.068.062-.133t.076-.126q.04-.062.087-.119.047-.057.1-.109.051-.052.108-.099.057-.046.119-.087.06-.041.126-.076.065-.035.133-.063.068-.028.139-.05.07-.02.142-.035.073-.015.146-.022Q9.926 8.5 10 8.5t.147.007q.073.007.146.022.072.014.142.036.07.021.139.05.068.027.133.062t.126.076q.062.04.119.087.057.047.109.1.052.051.099.108.046.057.087.119.041.06.076.126.035.065.063.133.028.068.05.139.02.07.035.142.015.073.022.146.007.073.007.147t-.007.147q-.007.073-.022.146-.014.072-.036.142-.021.07-.05.139-.027.068-.062.133t-.076.126q-.04.062-.087.119-.047.057-.1.109-.051.052-.108.099-.057.046-.119.087-.06.041-.126.076-.065.035-.133.063-.068.028-.139.05-.07.02-.142.035-.073.015-.146.022-.073.007-.147.007zm0 20q-.074 0-.147-.007t-.146-.022q-.072-.014-.142-.036-.07-.021-.139-.05-.068-.027-.133-.062t-.126-.076q-.062-.04-.119-.087-.057-.047-.109-.1-.052-.051-.099-.108-.046-.057-.087-.119-.041-.06-.076-.126-.035-.065-.063-.133-.028-.068-.05-.139-.02-.07-.035-.142-.015-.073-.022-.146Q8.5 30.074 8.5 30t.007-.147q.007-.073.022-.146.014-.072.036-.142.021-.07.05-.139.027-.068.062-.133t.076-.126q.04-.062.087-.119.047-.057.1-.109.051-.052.108-.099.057-.046.119-.087.06-.041.126-.076.065-.035.133-.063.068-.028.139-.05.07-.02.142-.035.073-.015.146-.022.073-.007.147-.007t.147.007q.073.007.146.022.072.014.142.036.07.021.139.05.068.027.133.062t.126.076q.062.04.119.087.057.047.109.1.052.051.099.108.046.057.087.119.041.06.076.126.035.065.063.133.028.068.05.139.02.07.035.142.015.073.022.146.007.073.007.147t-.007.147q-.007.073-.022.146-.014.072-.036.142-.021.07-.05.139-.027.068-.062.133t-.076.126q-.04.062-.087.119-.047.057-.1.109-.051.052-.108.099-.057.046-.119.087-.06.041-.126.076-.065.035-.133.063-.068.028-.139.05-.07.02-.142.035-.073.015-.146.022-.073.007-.147.007zm20-20q-.074 0-.147-.007t-.146-.022q-.072-.014-.142-.036-.07-.021-.139-.05-.068-.027-.133-.062t-.126-.076q-.062-.04-.119-.087-.057-.047-.109-.1-.052-.051-.099-.108-.046-.057-.087-.119-.041-.06-.076-.126-.035-.065-.063-.133-.028-.068-.05-.139-.02-.07-.035-.142-.015-.073-.022-.146-.007-.073-.007-.147t.007-.147q.007-.073.022-.146.014-.072.036-.142.021-.07.05-.139.027-.068.062-.133t.076-.126q.04-.062.087-.119.047-.057.1-.109.051-.052.108-.099.057-.046.119-.087.06-.041.126-.076.065-.035.133-.063.068-.028.139-.05.07-.02.142-.035.073-.015.146-.022.073-.007.147-.007t.147.007q.073.007.146.022.072.014.142.036.07.021.139.05.068.027.133.062t.126.076q.062.04.119.087.057.047.109.1.052.051.099.108.046.057.087.119.041.06.076.126.035.065.063.133.028.068.05.139.02.07.035.142.015.073.022.146.007.073.007.147t-.007.147q-.007.073-.022.146-.014.072-.036.142-.021.07-.05.139-.027.068-.062.133t-.076.126q-.04.062-.087.119-.047.057-.1.109-.051.052-.108.099-.057.046-.119.087-.06.041-.126.076-.065.035-.133.063-.068.028-.139.05-.07.02-.142.035-.073.015-.146.022-.073.007-.147.007z" fill="${color}" />
  </svg>`
})
export default CrossOutline
