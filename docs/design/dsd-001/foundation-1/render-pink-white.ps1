Add-Type -AssemblyName System.Drawing
$dir=$PSScriptRoot
$data=Get-Content -Raw -LiteralPath (Join-Path $dir 'pink-white-contrast.json') | ConvertFrom-Json
$collection=[System.Drawing.Text.PrivateFontCollection]::new()
$collection.AddFontFile((Join-Path $dir 'fonts/Mitr-Regular.ttf'))
$collection.AddFontFile((Join-Path $dir 'fonts/Mitr-Medium.ttf'))
$regular=$collection.Families | Where-Object Name -eq 'Mitr'
$medium=$collection.Families | Where-Object Name -eq 'Mitr Medium'
if (-not $regular -or -not $medium) { throw 'Mitr fonts unavailable' }
$bitmap=[System.Drawing.Bitmap]::new(1440,950)
$g=[System.Drawing.Graphics]::FromImage($bitmap)
$g.Clear([System.Drawing.Color]::White)
$g.SmoothingMode=[System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.TextRenderingHint=[System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit
function Text([string]$value,[single]$x,[single]$y,[single]$w,[single]$h,[single]$size,[string]$color='#072D59',[bool]$bold=$false,[bool]$center=$false) {
    $family=if($bold){$medium}else{$regular}
    $font=[System.Drawing.Font]::new($family,$size,[System.Drawing.FontStyle]::Regular,[System.Drawing.GraphicsUnit]::Pixel)
    $brush=[System.Drawing.SolidBrush]::new([System.Drawing.ColorTranslator]::FromHtml($color))
    $format=[System.Drawing.StringFormat]::new()
    if($center){$format.Alignment=[System.Drawing.StringAlignment]::Center;$format.LineAlignment=[System.Drawing.StringAlignment]::Center}
    $g.DrawString($value,$font,$brush,[System.Drawing.RectangleF]::new($x,$y,$w,$h),$format)
    $font.Dispose();$brush.Dispose();$format.Dispose()
}
function Box([single]$x,[single]$y,[single]$w,[single]$h,[single]$r,[string]$color) {
    $p=[System.Drawing.Drawing2D.GraphicsPath]::new();$d=2*$r
    $p.AddArc($x,$y,$d,$d,180,90);$p.AddArc($x+$w-$d,$y,$d,$d,270,90)
    $p.AddArc($x+$w-$d,$y+$h-$d,$d,$d,0,90);$p.AddArc($x,$y+$h-$d,$d,$d,90,90);$p.CloseFigure()
    $b=[System.Drawing.SolidBrush]::new([System.Drawing.ColorTranslator]::FromHtml($color));$g.FillPath($b,$p);$b.Dispose();$p.Dispose()
}
Text 'ปุ่มชมพู · ข้อความขาว' 48 30 1344 80 44 '#072D59' $true
Text 'เลือกเฉดเฉพาะปุ่ม โดยคงสีแบรนด์เดิมไว้' 48 118 1344 50 22
Box 48 192 1344 150 16 '#F7F7F7'
Box 80 232 360 72 8 '#FD6E88'
Text 'ค้นหาพูลวิลล่า' 80 232 360 72 23 '#FFFFFF' $true $true
Text '#FD6E88 + White · 2.705 : 1' 488 218 860 48 27 '#072D59' $true
Text 'สีเดิมสำหรับเทียบ · ยังไม่ผ่านเกณฑ์ข้อความปกติ' 488 274 860 44 20
Text 'ตัวเลือกเฉดชมพูสำหรับปุ่มหลัก' 48 374 1344 50 25 '#072D59' $true
$titles=@('1 · ชมพูสด (แนะนำ)','2 · ชมพูเข้ม','3 · เบอร์รี')
$notes=@('ปรับจากชมพูเดิมน้อยที่สุดในชุดนี้','ข้อความมีคอนทราสต์มากขึ้น','สีเข้มที่สุดในสามตัวเลือก')
for($i=0;$i -lt 3;$i++) {
    $x=48+464*$i;$option=$data.candidates[$i]
    Box $x 444 416 374 16 '#F7F7F7'
    Text $titles[$i] ($x+28) 468 360 52 25 '#072D59' $true
    Box ($x+28) 546 360 76 8 $option.background
    Text 'ค้นหาพูลวิลล่า' ($x+28) 546 360 76 23 '#FFFFFF' $true $true
    Text ($option.background+' · '+([double]$option.ratio).ToString('F3')+' : 1') ($x+28) 658 360 52 24 '#072D59' $true
    Text $notes[$i] ($x+28) 738 360 64 17
}
Text 'คู่สีทึบทั้งสามผ่าน 4.5 : 1 · ยังรอเลือกเฉดและตรวจ states · OPEN-001 ยังเปิด' 48 864 1344 65 20
$bitmap.Save((Join-Path $dir 'pink-white-options.png'),[System.Drawing.Imaging.ImageFormat]::Png)
$g.Dispose();$bitmap.Dispose();$collection.Dispose()
Write-Output 'Saved pink/white CTA proposal with actual Mitr rendering'
