function timeline(divId = 'drawing', options){

    let defaults = {
        xAxis : 1400,
        lineHeight : 40,
        lineStart : 70,
        rectHeight : 20,
        startHour : 8,
        endHour : 22,
        headers : ["Region", "Manager", "Field Staff"],
        headerWidth: 150,
        data : []
    }
    let actual = Object.assign({}, defaults, options);
    let dataSize = actual.data.length

    var draw = SVG(divId).size(actual.xAxis, actual.lineHeight * (dataSize + 2))
    const zeroPad = (num, places) => String(num).padStart(places, '0')

    let putHours = function(startHour, endHour){
        do{
            draw.text(zeroPad(startHour, 2) + ":00").move(startingPoint - 15, 20)
            startingPoint += 60
            startHour++
        } while(startHour <= endHour)
    }

    let putHourLines = function (hoursStartingPoint, start, end, line){
        let startPoint = hoursStartingPoint;
        do {
            draw.line(startPoint, line, startPoint, line + 30).move(startPoint, line).stroke({color: '#900C3F', width: 2, linecap: 'round', opacity: 0.2})
            startPoint += 60
            start++
        } while (start <= end)
    }

    let startingPoint = 0;
    actual.headers.forEach(header => {
        draw.text(header).move(startingPoint, 20)
        startingPoint += actual.headerWidth
    });
    let hoursStartingPoint = startingPoint
    let hoursStartingDifference = ((actual.startHour * 100) - startingPoint)

    putHours(actual.startHour, actual.endHour)

    actual.data.forEach(d => {
        draw.line(1, actual.lineStart - 10, actual.xAxis -1, actual.lineStart - 10).move(0, actual.lineStart - 10).stroke({ color: '#808080', width: 2, linecap: 'round', opacity: 0.5 })
    
        let lineStartPoint = 0
        d.text.forEach(t => {
            draw.text(t).move(lineStartPoint, actual.lineStart)
            lineStartPoint += actual.headerWidth
        })

        putHourLines(hoursStartingPoint, actual.startHour, actual.endHour, actual.lineStart - 5)

        d.jobs.forEach(j => {
            let sh = j.hours.split('-')[0]
            let eh = j.hours.split('-')[1]
            let startMinute = parseInt(sh.replace(":",""))
            let endMinute = parseInt(eh.replace(":",""))


            let moveDifference = (Math.floor(startMinute/100) - actual.startHour) * 40;

            console.log(moveDifference, hoursStartingDifference)

            let movePoint = startMinute - moveDifference - hoursStartingDifference;

            let lengthDifference = (Math.floor(endMinute/100) - Math.floor(startMinute/100)) * actual.lineHeight;
            let length = endMinute - startMinute - lengthDifference;

            draw.rect(length, actual.rectHeight).fill('black').radius(5, 5).data('toggle', 'popover').data('content',j.hours + " " + j.explanation).data('container','body').move(movePoint, actual.lineStart)
        })

        actual.lineStart += actual.lineHeight
    })

    draw.line(1, actual.lineStart - 10, actual.xAxis -1, actual.lineStart - 10).move(0, actual.lineStart - 10).stroke({ color: '#808080', width: 2, linecap: 'round', opacity: 0.5 })

}