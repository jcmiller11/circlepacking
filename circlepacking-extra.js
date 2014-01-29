function getPositions(n, callbackFunc, datalocation) {
  //All of the data for packing configurations is far too large to load, so we'll just pull what we need dynamically
  var req, coordinates, lineArray, dataArray, resultArray
  datalocation = (typeof datalocation === "undefined") ? "data-extra/" : datalocation
  req = new XMLHttpRequest()
  req.open('GET', datalocation + n + '.txt')
  req.onreadystatechange = function () {
    if (req.readyState === 4) {
      lineArray = req.responseText.split("\n")
      dataArray = lineArray[1].split(" ")
      resultArray = []
      for (var i = 0; i < lineArray.length - 1; i += 1) {
        dataArray = lineArray[i].split(" ")
        coordinates = []
        for (var ii = 0; ii < dataArray.length; ii += 1) {
          if (dataArray[ii].length > 5) {
            coordinates.push(dataArray[ii])
          }
        }
        resultArray.push(coordinates)
      }
      callbackFunc(resultArray)
    }
  }
  req.send()
}