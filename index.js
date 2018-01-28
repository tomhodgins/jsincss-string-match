export default (selector, string, rule) => {

  let styles = ''
  let count = 0

  Array.from(document.querySelectorAll(selector))
    .filter(tag => tag.textContent.includes(string))
    .forEach(tag => {

      const attr = (selector+string).replace(/\W/g, '')

      tag.setAttribute(`data-contains-${attr}`, count)
      styles += `[data-contains-${attr}="${count}"] { ${rule} }\n`
      count++

    })

  return styles

}