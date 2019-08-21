function contains(selector, string, rule) {
  const attr = (selector + string).replace(/\W/g, '')
  const result = Array.from(document.querySelectorAll(selector))
    .filter(tag => tag[tag.value ? 'value' : 'textContent'].includes(string))
    .reduce((output, tag, count) => {
      output.add.push({tag: tag, count: count})
      output.styles.push(`[data-contains-${attr}="${count}"] { ${rule} }`)
      return output
    }, {add: [], remove: [], styles: []})
  result.add.forEach(tag => tag.tag.setAttribute(`data-contains-${attr}`, tag.count))
  result.remove.forEach(tag => tag.setAttribute(`data-contains-${attr}`, ''))
  return result.styles.join('\n')
}
