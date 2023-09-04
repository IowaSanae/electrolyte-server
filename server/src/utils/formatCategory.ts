export const formatCategory = (categoryTreeList: any[]): any[] => {
  const categoryTreeArray = []
  const lastIdx = categoryTreeList.length - 1

  for (let i = 0; i < lastIdx; i += 1) {
    const obj1 = {
      image: categoryTreeList[i]?.image,
      catid: categoryTreeList[i]?.catid,
      id: categoryTreeList[i]?.id,
      name: categoryTreeList[i]?.name,
      display_name: categoryTreeList[i]?.display_name,
      unselected_image: categoryTreeList[i]?.unselected_image,
      selected_image: categoryTreeList[i]?.selected_image
    }
  }

  // If the last object is not empty, add it as a single item to the result array
  if (!isEmptyObject(categoryTreeList[lastIdx])) {
    categoryTreeArray.push([categoryTreeList[lastIdx]])
  }

  return categoryTreeArray
}

const isEmptyObject = (obj: any) => {
  return Object.keys(obj).length === 0
}
