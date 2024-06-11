import React from 'react'

import { genOutlineIcon } from './gen'

const HomeOutline = genOutlineIcon(({ color, strokeWidth }) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none">
  <defs ><clipPath id="d9c75__a"><rect width="40" height="40" rx="0" /></clipPath></defs><g fill="${color}" clip-path="url(#d9c75__a)"><path d="M4.94 17.94 20 2.878l15.06 15.06-2.12 2.122-14-14L20 5l1.06 1.06-14 14-2.12-2.12zM6 20.5q-.074 0-.147-.007t-.146-.022q-.072-.014-.142-.036-.07-.021-.139-.05-.068-.027-.133-.062t-.126-.076q-.062-.04-.119-.087-.057-.047-.109-.1-.052-.051-.099-.108-.046-.057-.087-.119-.041-.06-.076-.126-.035-.065-.063-.133-.028-.068-.05-.139-.02-.07-.035-.142-.015-.073-.022-.146Q4.5 19.074 4.5 19t.007-.147q.007-.073.022-.146.014-.072.036-.142.021-.07.05-.139.027-.068.062-.133t.076-.126q.04-.062.087-.119.047-.057.1-.109.051-.052.108-.099.057-.046.119-.087.06-.041.126-.076.065-.035.133-.063.068-.028.139-.05.07-.02.142-.035.073-.015.146-.022.073-.007.147-.007t.147.007q.073.007.146.022.072.014.142.036.07.021.139.05.068.027.133.062t.126.076q.062.04.119.087.057.047.109.1.052.051.099.108.046.057.087.119.041.06.076.126.035.065.063.133.028.068.05.139.02.07.035.142.015.073.022.146.007.073.007.147t-.007.147q-.007.073-.022.146-.014.072-.036.142-.021.07-.05.139-.027.068-.062.133t-.076.126q-.04.062-.087.119-.047.057-.1.109-.051.052-.108.099-.057.046-.119.087-.06.041-.126.076-.065.035-.133.063-.068.028-.139.05-.07.02-.142.035-.073.015-.146.022-.073.007-.147.007zm28 0q-.074 0-.147-.007t-.146-.022q-.072-.014-.142-.036-.07-.021-.139-.05-.068-.027-.133-.062t-.126-.076q-.062-.04-.119-.087-.057-.047-.109-.1-.052-.051-.099-.108-.046-.057-.087-.119-.041-.06-.076-.126-.035-.065-.063-.133-.028-.068-.05-.139-.02-.07-.035-.142-.015-.073-.022-.146-.007-.073-.007-.147t.007-.147q.007-.073.022-.146.014-.072.036-.142.021-.07.05-.139.027-.068.062-.133t.076-.126q.04-.062.087-.119.047-.057.1-.109.051-.052.108-.099.057-.046.119-.087.06-.041.126-.076.065-.035.133-.063.068-.028.139-.05.07-.02.142-.035.073-.015.146-.022.073-.007.147-.007t.147.007q.073.007.146.022.072.014.142.036.07.021.139.05.068.027.133.062t.126.076q.062.04.119.087.057.047.109.1.052.051.099.108.046.057.087.119.041.06.076.126.035.065.063.133.028.068.05.139.02.07.035.142.015.073.022.146.007.073.007.147t-.007.147q-.007.073-.022.146-.014.072-.036.142-.021.07-.05.139-.027.068-.062.133t-.076.126q-.04.062-.087.119-.047.057-.1.109-.051.052-.108.099-.057.046-.119.087-.06.041-.126.076-.065.035-.133.063-.068.028-.139.05-.07.02-.142.035-.073.015-.146.022-.073.007-.147.007z" /><path d="M31.5 21v13q0 .074-.007.147t-.022.146q-.014.072-.036.142-.021.07-.05.139-.027.068-.062.133t-.076.126q-.04.062-.087.119-.047.057-.1.109-.051.052-.108.099-.057.046-.119.087-.06.041-.126.076-.065.035-.133.063-.068.028-.139.05-.07.02-.142.035-.073.015-.146.022-.073.007-.147.007H10q-.074 0-.147-.007t-.146-.022q-.072-.014-.142-.036-.07-.021-.139-.05-.068-.027-.133-.062t-.126-.076q-.062-.04-.119-.087-.057-.047-.109-.1-.052-.051-.099-.108-.046-.057-.087-.119-.041-.06-.076-.126-.035-.065-.063-.133-.028-.068-.05-.139-.02-.07-.035-.142-.015-.073-.022-.146Q8.5 34.074 8.5 34V21h3v13H10v-1.5h20V34h-1.5V21h3zm0 0q0 .074-.007.147t-.022.146q-.014.072-.036.142-.021.07-.05.139-.027.068-.062.133t-.076.126q-.04.062-.087.119-.047.057-.1.109-.051.052-.108.099-.057.046-.119.087-.06.041-.126.076-.065.035-.133.063-.068.028-.139.05-.07.02-.142.035-.073.015-.146.022-.073.007-.147.007t-.147-.007q-.073-.007-.146-.022-.072-.014-.142-.036-.07-.021-.139-.05-.068-.027-.133-.062t-.126-.076q-.062-.04-.119-.087-.057-.047-.109-.1-.052-.051-.099-.108-.046-.057-.087-.119-.041-.06-.076-.126-.035-.065-.063-.133-.028-.068-.05-.139-.02-.07-.035-.142-.015-.073-.022-.146-.007-.073-.007-.147t.007-.147q.007-.073.022-.146.014-.072.036-.142.021-.07.05-.139.027-.068.062-.133t.076-.126q.04-.062.087-.119.047-.057.1-.109.051-.052.108-.099.057-.046.119-.087.06-.041.126-.076.065-.035.133-.063.068-.028.139-.05.07-.02.142-.035.073-.015.146-.022.073-.007.147-.007t.147.007q.073.007.146.022.072.014.142.036.07.021.139.05.068.027.133.062t.126.076q.062.04.119.087.057.047.109.1.052.051.099.108.046.057.087.119.041.06.076.126.035.065.063.133.028.068.05.139.02.07.035.142.015.073.022.146.007.073.007.147zm-20 0q0 .074-.007.147t-.022.146q-.014.072-.036.142-.021.07-.05.139-.027.068-.062.133t-.076.126q-.04.062-.087.119-.047.057-.1.109-.051.052-.108.099-.057.046-.119.087-.06.041-.126.076-.065.035-.133.063-.068.028-.139.05-.07.02-.142.035-.073.015-.146.022-.073.007-.147.007t-.147-.007q-.073-.007-.146-.022-.072-.014-.142-.036-.07-.021-.139-.05-.068-.027-.133-.062t-.126-.076q-.062-.04-.119-.087-.057-.047-.109-.1-.052-.051-.099-.108-.046-.057-.087-.119-.041-.06-.076-.126-.035-.065-.063-.133-.028-.068-.05-.139-.02-.07-.035-.142-.015-.073-.022-.146Q8.5 21.074 8.5 21t.007-.147q.007-.073.022-.146.014-.072.036-.142.021-.07.05-.139.027-.068.062-.133t.076-.126q.04-.062.087-.119.047-.057.1-.109.051-.052.108-.099.057-.046.119-.087.06-.041.126-.076.065-.035.133-.063.068-.028.139-.05.07-.02.142-.035.073-.015.146-.022.073-.007.147-.007t.147.007q.073.007.146.022.072.014.142.036.07.021.139.05.068.027.133.062t.126.076q.062.04.119.087.057.047.109.1.052.051.099.108.046.057.087.119.041.06.076.126.035.065.063.133.028.068.05.139.02.07.035.142.015.073.022.146.007.073.007.147z" /></g>
  </svg>`
})
export default HomeOutline