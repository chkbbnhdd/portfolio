import comp from "C:/Users/cgrub/portfolio/docs/.vuepress/.temp/pages/contact.html.vue"
const data = JSON.parse("{\"path\":\"/contact.html\",\"title\":\"📬 Contact\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"📧 Email\",\"slug\":\"📧-email\",\"link\":\"#📧-email\",\"children\":[]},{\"level\":2,\"title\":\"💬 Social Media\",\"slug\":\"💬-social-media\",\"link\":\"#💬-social-media\",\"children\":[]},{\"level\":2,\"title\":\"🏢 Address\",\"slug\":\"🏢-address\",\"link\":\"#🏢-address\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"contact.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
