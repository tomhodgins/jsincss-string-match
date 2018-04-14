export default (selector, string, rule) => {

  return Array.from(document.querySelectorAll(selector))

    .filter(tag => tag.textContent.includes(string))

    .reduce((styles, tag, count) => {

      const attr = (selector+string).replace(/\W/g, '')

      tag.setAttribute(`data-contains-${attr}`, count)
      styles += `[data-contains-${attr}="${count}"] { ${rule} }\n`
      count++

      return styles

    }, '')

}