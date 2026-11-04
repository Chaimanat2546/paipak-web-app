Add-Type -AssemblyName System.Drawing
$reviewDir = $PSScriptRoot
foreach ($item in @(@('screens/osaIa.png','desktop-fold.png',900),@('screens/osaIa.png','upper-section.png',360))) {
    $source = [System.Drawing.Image]::FromFile((Join-Path $reviewDir $item[0]))
    $output = New-Object System.Drawing.Bitmap(1440,$item[2])
    $g = [System.Drawing.Graphics]::FromImage($output)
    $g.DrawImage($source,0,0,(New-Object System.Drawing.Rectangle(0,0,1440,$item[2])),[System.Drawing.GraphicsUnit]::Pixel)
    $g.Dispose()
    $source.Dispose()
    $output.Save((Join-Path $reviewDir $item[1]),[System.Drawing.Imaging.ImageFormat]::Png)
    $output.Dispose()
}
$comparison = New-Object System.Drawing.Bitmap(1480,1296)
$g = [System.Drawing.Graphics]::FromImage($comparison)
$g.Clear([System.Drawing.Color]::FromArgb(242,250,254))
$font = New-Object System.Drawing.Font('Tahoma',17,[System.Drawing.FontStyle]::Bold)
$brush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(7,45,89))
$g.DrawString('ก่อนปรับ · รูปบ้านเริ่ม y=531', $font, $brush, 20, 12)
$g.DrawString('หลังปรับ · รูปบ้านเริ่ม y=364', $font, $brush, 20, 660)
for ($i=0; $i -lt 2; $i++) {
    $sourcePath = @('../results-r2/screens/osaIa.png','screens/osaIa.png')[$i]
    $source = [System.Drawing.Image]::FromFile((Join-Path $reviewDir $sourcePath))
    $g.DrawImage($source,20,(48+$i*648),(New-Object System.Drawing.Rectangle(0,0,1440,600)),[System.Drawing.GraphicsUnit]::Pixel)
    $source.Dispose()
}
$g.Dispose()
$font.Dispose()
$brush.Dispose()
$comparison.Save((Join-Path $reviewDir 'desktop-before-after.png'),[System.Drawing.Imaging.ImageFormat]::Png)
$comparison.Dispose()
