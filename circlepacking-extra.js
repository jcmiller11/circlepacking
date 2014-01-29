function getPositions(n, callbackFunc, datalocation) {
  //All of the data for packing configurations is far too large to load, so we'll just pull what we need dynamically
  var req, coordinates, lineArray, dataArray, resultArray
  datalocation = (typeof datalocation === "undefined") ? "data-extra/" : datalocation
  req = new XMLHttpRequest()
  req.open('GET', datalocation + n + '.txt')
  console.info(datalocation + n + '.txt')
  req.onreadystatechange = function () {
    if (req.readyState === 4) {
      resultArray = req.responseText.split("\n")
      console.info(resultArray)
      for(var i=0;i<resultArray.length;i++){
        resultArray[i]=resultArray[i].split(",")
      }
      callbackFunc(resultArray)
    }
  }
  req.send()
}