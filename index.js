
function superbowlWin(objs) {
    const result = objs.find( ({result}) => result === "W")
    return result.year
        
     
}

const record = [
    {year: "2018", result: "L"},
    {year: "2017", result: "W"},
    {year: "2016", result: "N/A"}
    //...
  ]

