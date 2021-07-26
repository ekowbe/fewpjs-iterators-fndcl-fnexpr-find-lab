
function superbowlWin(objs) {
    objs.find(function(tournament) {
        // console.log(tournament)
        // console.log(tournament.result)
        // console.log(tournament.year)
        if (tournament.result === "W") {
            return tournament.year
        }
        else {
            return undefined
        }
    })
}

const record = [
    {year: "2018", result: "L"},
    {year: "2017", result: "W"},
    {year: "2016", result: "N/A"}
    //...
  ]