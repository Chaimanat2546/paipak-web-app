Add-Type -AssemblyName System.Drawing
$reviewDirectory = $PSScriptRoot
$palette = @{ navy='#072D59'; pink='#FD6E88'; blue='#DBF2FC'; white='#FFFFFF'; quiet='#F7F7F7'; text='#202124' }
$fontCollection = [System.Drawing.Text.PrivateFontCollection]::new()
Get-ChildItem -LiteralPath (Join-Path $reviewDirectory 'fonts') -Filter '*.ttf' | ForEach-Object { $fontCollection.AddFontFile($_.FullName) }
$regularFamily = $fontCollection.Families | Where-Object Name -eq 'Mitr'
$mediumFamily = $fontCollection.Families | Where-Object Name -eq 'Mitr Medium'
$semiboldFamily = $fontCollection.Families | Where-Object Name -eq 'Mitr SemiBold'
if (-not $regularFamily -or -not $mediumFamily -or -not $semiboldFamily) { throw 'Required Mitr families were not loaded' }
$fontInventory = $fontCollection.Families.Name
$measurements = [System.Collections.Generic.List[object]]::new()

function New-ReviewFont([single]$size, [string]$weight='regular') {
    $family = switch ($weight) { medium {$mediumFamily}; semibold {$semiboldFamily}; default {$regularFamily} }
    return [System.Drawing.Font]::new($family, $size, [System.Drawing.FontStyle]::Regular, [System.Drawing.GraphicsUnit]::Pixel)
}
function Paint-Text($canvas, [string]$text, [single]$x, [single]$y, [single]$width, [single]$height, [single]$size, [string]$color, [string]$weight='regular', [bool]$center=$false) {
    $font = New-ReviewFont $size $weight
    $brush = [System.Drawing.SolidBrush]::new([System.Drawing.ColorTranslator]::FromHtml($color))
    $format = [System.Drawing.StringFormat]::new()
    if ($center) { $format.Alignment=[System.Drawing.StringAlignment]::Center; $format.LineAlignment=[System.Drawing.StringAlignment]::Center }
    $rectangle = [System.Drawing.RectangleF]::new($x,$y,$width,$height)
    $canvas.DrawString($text,$font,$brush,$rectangle,$format)
    $measured = $canvas.MeasureString($text,$font,[int]$width,$format)
    $measurements.Add([PSCustomObject]@{text=$text;family=$font.FontFamily.Name;size=$size;width=$measured.Width;height=$measured.Height;boxWidth=$width;boxHeight=$height;fitsHeight=($measured.Height -le $height)})
    $format.Dispose(); $brush.Dispose(); $font.Dispose()
}
function Paint-RoundRect($canvas,[single]$x,[single]$y,[single]$width,[single]$height,[single]$radius,[string]$fill,[string]$outline='', [single]$stroke=0) {
    $shape = [System.Drawing.Drawing2D.GraphicsPath]::new()
    $diameter = 2*$radius
    $shape.AddArc($x,$y,$diameter,$diameter,180,90)
    $shape.AddArc($x+$width-$diameter,$y,$diameter,$diameter,270,90)
    $shape.AddArc($x+$width-$diameter,$y+$height-$diameter,$diameter,$diameter,0,90)
    $shape.AddArc($x,$y+$height-$diameter,$diameter,$diameter,90,90)
    $shape.CloseFigure()
    $brush = [System.Drawing.SolidBrush]::new([System.Drawing.ColorTranslator]::FromHtml($fill))
    $canvas.FillPath($brush,$shape)
    if ($outline -and $stroke -gt 0) { $pen=[System.Drawing.Pen]::new([System.Drawing.ColorTranslator]::FromHtml($outline),$stroke); $canvas.DrawPath($pen,$shape); $pen.Dispose() }
    $brush.Dispose(); $shape.Dispose()
}
function New-Board([int]$width,[int]$height) {
    $bitmap=[System.Drawing.Bitmap]::new($width,$height)
    $canvas=[System.Drawing.Graphics]::FromImage($bitmap)
    $canvas.Clear([System.Drawing.Color]::White)
    $canvas.SmoothingMode=[System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $canvas.TextRenderingHint=[System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit
    return @{bitmap=$bitmap;canvas=$canvas}
}

$board=New-Board 1440 900
$canvas=$board.canvas
Paint-Text $canvas 'เลือกสีปุ่มหลัก' 48 36 1300 80 44 $palette.navy medium
Paint-Text $canvas 'สำหรับ Direction B · ทั้งสามแบบยังรอคุณเลือก' 48 120 1300 48 22 $palette.navy
$options=@(
    @{x=48; title='1 · Pink + Navy'; description='คงปุ่มชมพูตามแนว B'; fill=$palette.pink; ink=$palette.navy; ratio='5.078 : 1'; outline=''; note='แนะนำ: ใกล้ทิศทางที่เลือกที่สุด'},
    @{x=512; title='2 · Navy + White'; description='ปุ่มทึบ น้ำหนักชัดขึ้น'; fill=$palette.navy; ink=$palette.white; ratio='13.738 : 1'; outline=''; note='คอนทราสต์ข้อความสูงกว่า'},
    @{x=976; title='3 · White + Navy'; description='ขอบ Navy บนพื้นขาว'; fill=$palette.white; ink=$palette.navy; ratio='13.738 : 1'; outline=$palette.navy; note='ดูเบา แต่เด่นน้อยกว่าปุ่มทึบ'}
)
foreach ($option in $options) {
    $x=$option.x
    Paint-RoundRect $canvas $x 210 416 450 16 $palette.quiet
    Paint-Text $canvas $option.title ($x+28) 238 360 60 28 $palette.navy medium
    Paint-Text $canvas $option.description ($x+28) 302 360 60 20 $palette.navy
    Paint-RoundRect $canvas ($x+28) 392 360 76 8 $option.fill $option.outline 2
    Paint-Text $canvas 'ค้นหาพูลวิลล่า' ($x+28) 392 360 76 23 $option.ink medium $true
    Paint-Text $canvas $option.ratio ($x+28) 510 360 56 30 $palette.navy medium
    Paint-Text $canvas $option.note ($x+28) 582 360 55 17 $palette.navy
}
Paint-Text $canvas 'ทุกตัวเลือกคงสีแบรนด์เดิม · วัด contrast ของคู่สีทึบ · ใช้ Mitr จริงในภาพนี้' 48 718 1344 70 21 $palette.navy
Paint-Text $canvas 'White บน Pink = 2.705 : 1 ไม่ผ่านข้อความปกติ · OPEN-001 ยังเปิด · ยังไม่ใช่ final UI' 48 797 1344 64 18 $palette.navy
$board.bitmap.Save((Join-Path $reviewDirectory 'cta-options.png'),[System.Drawing.Imaging.ImageFormat]::Png)
$canvas.Dispose(); $board.bitmap.Dispose()

$board=New-Board 1440 1160
$canvas=$board.canvas
Paint-Text $canvas 'Mitr · ภาษาไทยและตัวเลข' 48 32 1344 80 42 $palette.navy medium
Paint-Text $canvas 'Foundation-1 · ตัวอย่างฟอนต์จริงสำหรับตรวจสเปก · ยังรออนุมัติชุดสุดท้าย' 48 116 1344 52 20 $palette.navy
Paint-Text $canvas 'วันพัก' 48 190 760 112 64 $palette.navy semibold
Paint-Text $canvas 'ในแบบของเรา' 48 308 760 80 40 $palette.navy medium
Paint-Text $canvas 'hero.lead 64 / continuation 40 · Mitr 600 / 500' 820 236 560 100 18 $palette.navy
Paint-Text $canvas 'พูลวิลล่าแนะนำ' 48 416 750 70 32 $palette.navy medium
Paint-Text $canvas 'section.title 32 · Mitr 500' 820 422 560 70 18 $palette.navy
Paint-Text $canvas "บ้านพักริมสระสำหรับวันหยุด`nกับครอบครัวและเพื่อน" 48 522 302 100 18 $palette.navy medium
Paint-Text $canvas 'card.title 18 · อนุญาตสองบรรทัดตาม measure' 820 532 560 90 18 $palette.navy
Paint-Text $canvas 'เริ่มต้น ฿8,900 / คืน' 48 654 700 70 24 $palette.navy semibold
Paint-Text $canvas 'price.primary 24 · Mitr 600' 820 654 560 70 18 $palette.navy
Paint-Text $canvas 'ค้นพบพูลวิลล่าสำหรับวันดี ๆ ของคุณ เลือกดูบ้านได้ก่อนระบุวันเข้าพัก' 48 766 590 110 16 $palette.text
Paint-Text $canvas 'body.default 16 · line-height 1.65 ในสเปก' 820 776 560 90 18 $palette.navy
Paint-Text $canvas 'Pet Friendly · พัทยา · 12 คน · 4 ห้องนอน' 48 904 710 65 14 '#6B7280'
Paint-Text $canvas 'metadata 14 · Mitr 400 · บนขาว' 820 900 560 70 18 $palette.navy
Paint-Text $canvas 'ภาพนี้ยืนยันการ render จากไฟล์ Mitr บนเครื่องมือออกแบบ ไม่ใช่การทดสอบฟอนต์ใน Next.js หรือ browser' 48 1040 1344 80 18 $palette.navy
$board.bitmap.Save((Join-Path $reviewDirectory 'typography-specimen.png'),[System.Drawing.Imaging.ImageFormat]::Png)
$canvas.Dispose(); $board.bitmap.Dispose()

[PSCustomObject]@{renderer='Windows System.Drawing / GDI+';fontFamilies=$fontInventory;textMeasurements=$measurements;claim='Design specimen only; no browser, screen-reader or app font-loading claim'} | ConvertTo-Json -Depth 6 | Set-Content -LiteralPath (Join-Path $reviewDirectory 'render-evidence.json') -Encoding utf8
$fontCollection.Dispose()
Write-Output 'Saved CTA comparison and Mitr specimen with font/render evidence'
