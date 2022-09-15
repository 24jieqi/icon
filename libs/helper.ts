export const string2CamelCase = (s: string) =>
  s.replace(/(\-([a-z]))/g, (_, __, p) => {
    return p.toUpperCase()
  })

export const excludeProps = (
  prop: Record<string, string>,
  exclude?: (string | ((s: string) => boolean))[],
) => {
  return Object.entries(prop).filter(([_key]) => {
    const result = (exclude || []).some(fn => {
      if (typeof fn === 'function') {
        return fn(_key)
      }
      return _key === fn
    })

    return !result
  })
}

export const joinProps = (
  prop: Record<string, string>,
  exclude?: (string | ((s: string) => boolean))[],
) =>
  excludeProps(prop, exclude)
    .map(([_key, _value]) => {
      return `${string2CamelCase(_key)}="${_value}"`
    })
    .join(' ')

export const ignorePropsBase = ['style', (s: string) => /^data-/.test(s)]
