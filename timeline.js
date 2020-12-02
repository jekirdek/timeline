
function timeline(){

    let xAxis = 1400
    let lineHeight = 40
    let lineStart = 70
    let rectHeight = 20

    var draw = SVG('drawing').size(xAxis, 500)

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

    
    draw.line(1, lineStart - 10, xAxis -1, lineStart - 10).move(0, lineStart - 10).stroke({ color: '#808080', width: 2, linecap: 'round', opacity: 0.5 })
    draw.text('Urfa').move(0, lineStart)
    draw.text('İsmail').move(100,lineStart)
    draw.text('İbrahim').move(300,lineStart)
    var survey1 = draw.rect(50, rectHeight).fill('black').radius(5, 5).data('toggle', 'popover').data('content','Çalışma 1').data('container','body').move(568, lineStart)
    var survey2 = draw.rect(45, rectHeight).fill('black').radius(5, 5).data('toggle', 'popover').data('content','Çalışma 3').data('container','body').move(634, lineStart)
    lineStart += lineHeight

    draw.line(1, lineStart - 10, xAxis -1, lineStart - 10).move(0, lineStart - 10).stroke({ color: '#808080', width: 2, linecap: 'round', opacity: 0.5 })
    draw.text('İzmir').move(0, lineStart)
    draw.text('Cihan').move(100,lineStart)
    draw.text('Emin İlker').move(300,lineStart)
    draw.rect(90, rectHeight).fill('green').radius(5, 5).data('toggle', 'popover').data('content','Çalışma Lorem').data('container','body').move(545, lineStart)
    lineStart += lineHeight

    draw.line(1, lineStart - 10, xAxis -1, lineStart - 10).move(0, lineStart - 10).stroke({ color: '#808080', width: 2, linecap: 'round', opacity: 0.5 })


}