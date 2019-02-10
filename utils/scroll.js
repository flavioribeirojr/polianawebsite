export const getScroll = () => {
  const browserSupportPageOffset = window.pageXOffset !== undefined
  const isCSS1Compat = ((document.compatMode || '') === 'CSS1Compat')

  return {
    x: browserSupportPageOffset ?
      window.pageXOffset :
      (isCSS1Compat ?
        document.documentElement.scrollLeft :
        document.body.scrollLeft
      ),
    y: browserSupportPageOffset ?
      window.pageYOffset :
      (isCSS1Compat ?
        document.documentElement.scrollTop :
        document.body.scrollTop
      )
  }
}