function timeline(options){

    let defaults = {
        xAxis : 1400,
        lineHeight : 40,
        lineStart : 70,
        rectHeight : 20,
        startHour : 8,
        endHour : 22
    }
    let actual = Object.assign({}, defaults, options);


    var draw = SVG('drawing').size(actual.xAxis, 500)

    const zeroPad = (num, places) => String(num).padStart(places, '0')

    let putHours = function(startHour, endHour){
        let startPoint = 500;
        do{
            draw.text(zeroPad(startHour, 2) + ":00").move(startPoint, 20)
            draw.circle(10).fill("#808080").move(startPoint + 15, 40)

            startPoint += 60
            startHour++
        } while(startHour <= endHour)
    }

    draw.text('Region').move(0, 20)
    draw.text('Manager').move(100, 20)
    draw.text('Field Staff').move(300, 20)
    putHours(8,22)

    
    draw.line(1, actual.lineStart - 10, actual.xAxis -1, actual.lineStart - 10).move(0, actual.lineStart - 10).stroke({ color: '#808080', width: 2, linecap: 'round', opacity: 0.5 })
    draw.text('Urfa').move(0, actual.lineStart)
    draw.text('İsmail').move(100,actual.lineStart)
    draw.text('İbrahim').move(300,actual.lineStart)
    draw.rect(50, actual.rectHeight).fill('black').radius(5, 5).data('toggle', 'popover').data('content','Çalışma 1').data('container','body').move(568, actual.lineStart)
    draw.rect(45, actual.rectHeight).fill('black').radius(5, 5).data('toggle', 'popover').data('content','Çalışma 3').data('container','body').move(634, actual.lineStart)
    actual.lineStart += actual.lineHeight

    draw.line(1, actual.lineStart - 10, actual.xAxis -1, actual.lineStart - 10).move(0, actual.lineStart - 10).stroke({ color: '#808080', width: 2, linecap: 'round', opacity: 0.5 })
    draw.text('İzmir').move(0, actual.lineStart)
    draw.text('Cihan').move(100,actual.lineStart)
    draw.text('Emin İlker').move(300, actual.lineStart)
    draw.rect(90, actual.rectHeight).fill('green').radius(5, 5).data('toggle', 'popover').data('content','Çalışma Lorem').data('container','body').move(545, actual.lineStart)
    actual.lineStart += actual.lineHeight

    draw.line(1, actual.lineStart - 10, actual.xAxis -1, actual.lineStart - 10).move(0, actual.lineStart - 10).stroke({ color: '#808080', width: 2, linecap: 'round', opacity: 0.5 })


}