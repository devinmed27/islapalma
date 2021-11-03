const gallery_structure = (arr1, arr2, arr3,arr4) => {
    let output = []
  
    const localA = structure(arr1.reverse())
    output.push(localA)
    const localB = structure(arr2.reverse())
    output.push(localB)
    const localC = structure(arr3.reverse())
    output.push(localC)
    const localD = structure(arr4.reverse())
    output.push(localD)

    return output
}

const structure = (arr) => {
    const aux = [] 
    arr.forEach((el) => {
        const aux2 ={
            "src": "http:" + el.fields.image.fields.file.url,
            "width": el.fields.width,
            "height": el.fields.height
        } 
        aux.push(aux2)
    })
    return aux

}

export default gallery_structure
