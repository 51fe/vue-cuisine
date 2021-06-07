const getters = {
  visible: state => state.code !== -1,

  parentCategories: state => state.categories.map(item => {
    return {
      tags_id: item.tags_id,
      catename: item.catename
    }
  }),

  nextCategory: state => {
    let arr = []
    state.categories.forEach(item => {
      item.nextlist.forEach(subItem => {
        arr.push({
          pid: subItem.parentId,
          tags_id: subItem.tags_id,
          catename: subItem.catename,
          nextlist: subItem.nextlist
        })
      })
    });
    return arr
  },

  getNextCategories: (state, getters) =>
    (pid, title) =>
      getters.nextCategory.find(item => item.pid == pid && item.catename == title)
}

export default getters
