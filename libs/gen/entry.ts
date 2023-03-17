export interface ComponentItem {
  name: string
  filename: string
}

export const genEntry = (components: ComponentItem[]) => {
  const importStrings: string[] = []
  const names: string[] = []

  components
    .sort((a, b) => ([a.name, b.name].sort()[0] === a.name ? -1 : 0))
    .forEach(item => {
      importStrings.push(`import ${item.name} from './${item.filename}'`)
      names.push(item.name)
    })

  const nameKeys = names.join(',')

  return `
    ${importStrings.join(';')}

    export { ${nameKeys} }

    export default { ${nameKeys} } as const;
  `
}
