import React from 'react'

import { genOutlineIcon } from './gen'

const RefreshOutline = genOutlineIcon(({ color, strokeWidth }) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
  <defs ><clipPath id="d9c87__a"><rect rx="0" height="32" width="32" /></clipPath></defs><g fill="${color}" fill-rule="evenodd" clip-path="url(#d9c87__a)"><path d="M29.333 5.333h.002V3.998h-2.67v1.335h.002v10.6l-.002.067q0 .066.006.13.007.066.02.13.012.065.031.128.02.062.045.123.025.06.056.118.03.058.067.113.036.054.078.105.042.05.088.097.046.046.097.088.05.042.105.078.055.036.113.067.058.031.118.056.06.025.123.045.063.019.128.031.064.013.13.02.064.006.13.006t.13-.006q.066-.007.13-.02.065-.012.128-.031.062-.02.123-.045.06-.025.118-.056.058-.03.113-.067.054-.036.105-.078.05-.042.097-.088.046-.046.088-.097.042-.05.078-.105.036-.055.067-.113.031-.058.056-.118.025-.06.045-.123.019-.063.031-.128.013-.064.02-.13.006-.064.006-.13l-.002-.067v-10.6Zm-24 10.734L5.335 16q0-.066-.006-.13-.007-.066-.02-.13-.012-.065-.031-.128-.02-.062-.045-.123-.025-.06-.056-.118-.03-.058-.067-.113-.036-.054-.078-.105-.042-.05-.088-.097-.046-.046-.097-.088-.05-.042-.105-.078-.055-.036-.113-.067-.058-.031-.118-.056-.06-.025-.123-.045-.063-.019-.128-.031-.064-.013-.13-.02-.064-.006-.13-.006t-.13.006q-.066.007-.13.02-.065.012-.128.031-.062.02-.123.045-.06.025-.118.056-.058.03-.113.067-.054.036-.105.078-.05.042-.097.088-.046.046-.088.097-.042.05-.078.105-.036.055-.067.113-.031.058-.056.118-.025.06-.045.123-.019.063-.031.128-.013.064-.02.13-.006.064-.006.13l.002.067v10.6h-.002v1.335h2.67v-1.335h-.002v-10.6Z" /><path d="M8.369 8.547q-.094.107-.209.192-.114.085-.244.144-.13.059-.269.089-.14.03-.282.03-.065 0-.13-.007-.066-.006-.13-.019t-.127-.032q-.063-.019-.123-.044-.061-.025-.119-.056-.058-.03-.112-.067-.055-.037-.106-.078-.05-.042-.097-.088-.046-.047-.088-.097-.041-.051-.078-.106-.036-.054-.067-.112-.03-.058-.056-.118-.025-.061-.044-.124-.02-.063-.032-.127-.013-.064-.02-.13-.006-.065-.006-.13 0-.138.028-.272.028-.135.083-.26.055-.127.134-.239.08-.112.18-.206 1.837-1.884 4.244-2.928Q13.226 2.667 16 2.667q2.712 0 5.19 1.048 2.393 1.012 4.238 2.857 1.845 1.845 2.857 4.238 1.035 2.446 1.048 5.12l.002.07q0 .066-.006.13-.007.066-.02.13-.012.065-.032.127-.018.063-.044.124-.025.06-.056.118-.03.058-.067.113-.036.054-.078.105-.042.05-.088.097-.046.046-.097.088-.05.042-.105.078-.055.036-.113.067-.058.031-.118.056-.06.025-.123.044-.063.02-.128.032-.064.013-.13.02-.064.006-.13.006t-.13-.006q-.066-.007-.13-.02-.065-.012-.127-.032-.063-.019-.124-.044-.06-.025-.118-.056-.058-.03-.113-.067-.054-.036-.105-.078-.05-.042-.097-.088-.046-.046-.088-.097-.042-.05-.078-.105-.036-.055-.067-.113-.031-.058-.056-.118-.026-.06-.044-.123-.02-.063-.032-.128-.013-.064-.02-.13-.006-.064-.006-.13l.002-.063q-.013-2.137-.838-4.089-.81-1.914-2.287-3.39-1.477-1.477-3.39-2.287Q18.17 5.333 16 5.333q-2.221 0-4.24.876-1.922.834-3.391 2.338Zm-3.035 7.516L5.335 16q0-.066-.006-.13-.007-.066-.02-.13-.012-.065-.031-.127-.02-.063-.045-.124-.025-.06-.056-.118-.03-.058-.067-.113-.036-.054-.078-.105-.042-.05-.088-.097-.046-.046-.097-.088-.05-.042-.105-.078-.055-.036-.113-.067-.058-.031-.118-.056-.06-.025-.123-.044-.063-.02-.128-.032-.064-.013-.13-.02-.064-.006-.13-.006t-.13.006q-.066.007-.13.02-.065.012-.128.031-.062.02-.123.045-.06.025-.118.056-.058.03-.113.067-.054.036-.105.078-.05.042-.097.088-.046.046-.088.097-.042.05-.078.105-.036.055-.067.113-.031.057-.056.118-.025.06-.045.123-.019.063-.031.128-.013.064-.02.13-.006.064-.006.13l.002.07q.013 2.674 1.048 5.12 1.012 2.393 2.857 4.238 1.845 1.845 4.238 2.857 2.478 1.048 5.19 1.048 2.65 0 5.08-1.002 2.314-.954 4.129-2.689.108-.093.194-.208.086-.115.145-.246.06-.13.09-.27t.03-.283q0-.066-.006-.131-.006-.066-.02-.13-.012-.064-.031-.127-.02-.063-.044-.123-.025-.06-.056-.119-.031-.058-.068-.112-.036-.055-.078-.105-.041-.051-.088-.097-.046-.047-.097-.088-.05-.042-.105-.078-.055-.037-.112-.068-.058-.03-.119-.056-.06-.025-.123-.044-.063-.019-.127-.032-.065-.012-.13-.019-.065-.006-.13-.006-.137 0-.27.027-.134.028-.26.082-.125.054-.237.132-.111.079-.205.178-1.452 1.385-3.3 2.147-1.941.8-4.062.8-2.171 0-4.152-.837-1.914-.81-3.39-2.287-1.477-1.477-2.287-3.39-.825-1.952-.837-4.089Z" /></g>
  </svg>`
})
export default RefreshOutline