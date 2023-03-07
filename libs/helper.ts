export const string2CamelCase = (s: string) =>
  s.replace(/(\-([a-zA-Z]))/g, (_, __, p) => {
    return p.toUpperCase()
  })

export const string2UpperFirst = (s: string) =>
  s.replace(/(^[a-z]{1})/, ($, $1) => $1.toLocaleUpperCase())

export const excludeProps = (
  props: Record<string, string>,
  exclude?: (string | ((s: string) => boolean))[],
) => {
  return Object.entries(props)
    .filter(([_key]) => {
      const result = (exclude || []).some(fn => {
        if (typeof fn === 'function') {
          return fn(_key)
        }
        return _key === fn
      })

      return !result
    })
    .reduce<Record<string, string>>((prev, [key, value]) => {
      prev[key] = value
      return prev
    }, {})
}

export const joinProps = (
  prop: Record<string, string>,
  exclude?: (string | ((s: string) => boolean))[],
) =>
  Object.entries(excludeProps(prop, exclude))
    .map(([_key, _value]) => {
      return `${string2CamelCase(_key)}="${_value}"`
    })
    .join(' ')

export const ignorePropsBase = ['style', (s: string) => /^data-/.test(s)]
