export const getRandomInt = (MAX=10) => {
    return Math.floor(Math.random() * Math.floor(MAX))
}

export const getRandomCoordinate = (count,MAXX=10,MAXY=10) => {
    if(!count || !MAXX || !MAXY) return []
    const arr = []
    while (arr.length<count) {
        const x = getRandomInt(MAXX)
        const y = getRandomInt(MAXY)
        if(!(arr.some(item => (item.x === x && item.y === y)))){
            arr.push({x,y})
        }
    }
    return arr
}