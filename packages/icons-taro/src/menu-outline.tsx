import React from 'react'

import { genOutlineIcon } from './gen'

const MenuOutline = genOutlineIcon(({ color, strokeWidth }) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none">
  <path d="M34 9.5H6v-3h28v3zM35.5 8q0 .074-.007.147t-.022.146q-.014.072-.036.142-.021.07-.05.139-.027.068-.062.133t-.076.126q-.04.062-.087.119-.047.057-.1.109-.051.052-.108.099-.057.046-.119.087-.06.041-.126.076-.065.035-.133.063-.068.028-.139.05-.07.02-.142.035-.073.015-.146.022-.073.007-.147.007t-.147-.007q-.073-.007-.146-.022-.072-.014-.142-.036-.07-.021-.139-.05-.068-.027-.133-.062t-.126-.076q-.062-.04-.119-.087-.057-.047-.109-.1-.052-.051-.099-.108-.046-.057-.087-.119-.041-.06-.076-.126-.035-.065-.063-.133-.028-.068-.05-.139-.02-.07-.035-.142-.015-.073-.022-.146Q32.5 8.074 32.5 8t.007-.147q.007-.073.022-.146.014-.072.036-.142.021-.07.05-.139.027-.068.062-.133t.076-.126q.04-.062.087-.119.047-.057.1-.109.051-.052.108-.099.057-.046.119-.087.06-.041.126-.076.065-.035.133-.063.068-.028.139-.05.07-.02.142-.035.073-.015.146-.022.073-.007.147-.007t.147.007q.073.007.146.022.072.014.142.036.07.021.139.05.068.027.133.062t.126.076q.062.04.119.087.057.047.109.1.052.051.099.108.046.057.087.119.041.06.076.126.035.065.063.133.028.068.05.139.02.07.035.142.015.073.022.146.007.073.007.147zm-28 0q0 .074-.007.147t-.022.146q-.014.072-.036.142-.021.07-.05.139-.027.068-.062.133t-.076.126q-.04.062-.087.119-.047.057-.1.109-.051.052-.108.099-.057.046-.119.087-.06.041-.126.076-.065.035-.133.063-.068.028-.139.05-.07.02-.142.035-.073.015-.146.022Q6.074 9.5 6 9.5t-.147-.007q-.073-.007-.146-.022-.072-.014-.142-.036-.07-.021-.139-.05-.068-.027-.133-.062t-.126-.076q-.062-.04-.119-.087-.057-.047-.109-.1-.052-.051-.099-.108-.046-.057-.087-.119-.041-.06-.076-.126-.035-.065-.063-.133-.028-.068-.05-.139-.02-.07-.035-.142-.015-.073-.022-.146Q4.5 8.074 4.5 8t.007-.147q.007-.073.022-.146.014-.072.036-.142.021-.07.05-.139.027-.068.062-.133t.076-.126q.04-.062.087-.119.047-.057.1-.109.051-.052.108-.099.057-.046.119-.087.06-.041.126-.076.065-.035.133-.063.068-.028.139-.05.07-.02.142-.035.073-.015.146-.022Q5.926 6.5 6 6.5t.147.007q.073.007.146.022.072.014.142.036.07.021.139.05.068.027.133.062t.126.076q.062.04.119.087.057.047.109.1.052.051.099.108.046.057.087.119.041.06.076.126.035.065.063.133.028.068.05.139.02.07.035.142.015.073.022.146.007.073.007.147zM34 21.5H6v-3h28v3zm1.5-1.5q0 .074-.007.147t-.022.146q-.014.072-.036.142-.021.07-.05.139-.027.068-.062.133t-.076.126q-.04.062-.087.119-.047.057-.1.109-.051.052-.108.099-.057.046-.119.087-.06.041-.126.076-.065.035-.133.063-.068.028-.139.05-.07.02-.142.035-.073.015-.146.022-.073.007-.147.007t-.147-.007q-.073-.007-.146-.022-.072-.014-.142-.036-.07-.021-.139-.05-.068-.027-.133-.062t-.126-.076q-.062-.04-.119-.087-.057-.047-.109-.1-.052-.051-.099-.108-.046-.057-.087-.119-.041-.06-.076-.126-.035-.065-.063-.133-.028-.068-.05-.139-.02-.07-.035-.142-.015-.073-.022-.146-.007-.073-.007-.147t.007-.147q.007-.073.022-.146.014-.072.036-.142.021-.07.05-.139.027-.068.062-.133t.076-.126q.04-.062.087-.119.047-.057.1-.109.051-.052.108-.099.057-.046.119-.087.06-.041.126-.076.065-.035.133-.063.068-.028.139-.05.07-.02.142-.035.073-.015.146-.022.073-.007.147-.007t.147.007q.073.007.146.022.072.014.142.036.07.021.139.05.068.027.133.062t.126.076q.062.04.119.087.057.047.109.1.052.051.099.108.046.057.087.119.041.06.076.126.035.065.063.133.028.068.05.139.02.07.035.142.015.073.022.146.007.073.007.147zm-28 0q0 .074-.007.147t-.022.146q-.014.072-.036.142-.021.07-.05.139-.027.068-.062.133t-.076.126q-.04.062-.087.119-.047.057-.1.109-.051.052-.108.099-.057.046-.119.087-.06.041-.126.076-.065.035-.133.063-.068.028-.139.05-.07.02-.142.035-.073.015-.146.022-.073.007-.147.007t-.147-.007q-.073-.007-.146-.022-.072-.014-.142-.036-.07-.021-.139-.05-.068-.027-.133-.062t-.126-.076q-.062-.04-.119-.087-.057-.047-.109-.1-.052-.051-.099-.108-.046-.057-.087-.119-.041-.06-.076-.126-.035-.065-.063-.133-.028-.068-.05-.139-.02-.07-.035-.142-.015-.073-.022-.146Q4.5 20.074 4.5 20t.007-.147q.007-.073.022-.146.014-.072.036-.142.021-.07.05-.139.027-.068.062-.133t.076-.126q.04-.062.087-.119.047-.057.1-.109.051-.052.108-.099.057-.046.119-.087.06-.041.126-.076.065-.035.133-.063.068-.028.139-.05.07-.02.142-.035.073-.015.146-.022.073-.007.147-.007t.147.007q.073.007.146.022.072.014.142.036.07.021.139.05.068.027.133.062t.126.076q.062.04.119.087.057.047.109.1.052.051.099.108.046.057.087.119.041.06.076.126.035.065.063.133.028.068.05.139.02.07.035.142.015.073.022.146.007.073.007.147zM34 33.5H6v-3h28v3zm1.5-1.5q0 .074-.007.147t-.022.146q-.014.072-.036.142-.021.07-.05.139-.027.068-.062.133t-.076.126q-.04.062-.087.119-.047.057-.1.109-.051.052-.108.099-.057.046-.119.087-.06.041-.126.076-.065.035-.133.063-.068.028-.139.05-.07.02-.142.035-.073.015-.146.022-.073.007-.147.007t-.147-.007q-.073-.007-.146-.022-.072-.014-.142-.036-.07-.021-.139-.05-.068-.027-.133-.062t-.126-.076q-.062-.04-.119-.087-.057-.047-.109-.1-.052-.051-.099-.108-.046-.057-.087-.119-.041-.06-.076-.126-.035-.065-.063-.133-.028-.068-.05-.139-.02-.07-.035-.142-.015-.073-.022-.146-.007-.073-.007-.147t.007-.147q.007-.073.022-.146.014-.072.036-.142.021-.07.05-.139.027-.068.062-.133t.076-.126q.04-.062.087-.119.047-.057.1-.109.051-.052.108-.099.057-.046.119-.087.06-.041.126-.076.065-.035.133-.063.068-.028.139-.05.07-.02.142-.035.073-.015.146-.022.073-.007.147-.007t.147.007q.073.007.146.022.072.014.142.036.07.021.139.05.068.027.133.062t.126.076q.062.04.119.087.057.047.109.1.052.051.099.108.046.057.087.119.041.06.076.126.035.065.063.133.028.068.05.139.02.07.035.142.015.073.022.146.007.073.007.147zm-28 0q0 .074-.007.147t-.022.146q-.014.072-.036.142-.021.07-.05.139-.027.068-.062.133t-.076.126q-.04.062-.087.119-.047.057-.1.109-.051.052-.108.099-.057.046-.119.087-.06.041-.126.076-.065.035-.133.063-.068.028-.139.05-.07.02-.142.035-.073.015-.146.022-.073.007-.147.007t-.147-.007q-.073-.007-.146-.022-.072-.014-.142-.036-.07-.021-.139-.05-.068-.027-.133-.062t-.126-.076q-.062-.04-.119-.087-.057-.047-.109-.1-.052-.051-.099-.108-.046-.057-.087-.119-.041-.06-.076-.126-.035-.065-.063-.133-.028-.068-.05-.139-.02-.07-.035-.142-.015-.073-.022-.146Q4.5 32.074 4.5 32t.007-.147q.007-.073.022-.146.014-.072.036-.142.021-.07.05-.139.027-.068.062-.133t.076-.126q.04-.062.087-.119.047-.057.1-.109.051-.052.108-.099.057-.046.119-.087.06-.041.126-.076.065-.035.133-.063.068-.028.139-.05.07-.02.142-.035.073-.015.146-.022.073-.007.147-.007t.147.007q.073.007.146.022.072.014.142.036.07.021.139.05.068.027.133.062t.126.076q.062.04.119.087.057.047.109.1.052.051.099.108.046.057.087.119.041.06.076.126.035.065.063.133.028.068.05.139.02.07.035.142.015.073.022.146.007.073.007.147z" fill="${color}" />
  </svg>`
})
export default MenuOutline
