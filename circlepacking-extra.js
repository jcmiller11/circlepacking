function draw(n, circleSize, holeSize, canvas) {
  //All of the data for packing configurations is far too large to load, so we'll just pull what we need dynamically
  var req, context, coordinates, lineArray, dataArray
  req = new XMLHttpRequest()
  context = canvas.getContext('2d')
  req.open('GET', 'data-extra/' + n + '.txt')
  req.onreadystatechange = function () {
    if (req.readyState === 4) {
      canvas.width = holeSize + 2
      canvas.height = holeSize + 2
      context.beginPath()
      context.arc(holeSize / 2 + 1, holeSize / 2 + 1, holeSize / 2, 0, Math.PI * 2, true)
      context.closePath()
      context.stroke()
      context.fillStyle = '#0f628b'; //Color of internal circles
      lineArray = req.responseText.split("\n")
      dataArray = lineArray[1].split(" ")
      for (var i = 0; i < lineArray.length - 1; i += 1) {
        dataArray = lineArray[i].split(" ")
        coordinates = []
        for (var ii = 0; ii < dataArray.length; ii += 1) {
          if (dataArray[ii].length > 5) {
            coordinates.push(dataArray[ii])
          }
        }
        context.beginPath()
        context.arc(holeSize / 2 + holeSize / 2 * parseFloat(coordinates[0]) + 1, holeSize / 2 + holeSize / 2 * parseFloat(coordinates[1]) + 1, circleSize / 2, 0, Math.PI * 2, true)
        context.closePath()
        context.fill()
      }
    }
  }
  req.send()
}