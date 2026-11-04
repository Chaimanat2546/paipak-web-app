Add-Type -AssemblyName System.Drawing
$reviewPath = $PSScriptRoot
foreach ($capture in @(@('osaIa.png','desktop-fold.png',1440,900),@('L8ev6.png','mobile-fold.png',390,844))) {
    $sourceImage = [System.Drawing.Image]::FromFile((Join-Path $reviewPath $capture[0]))
    $resultImage = New-Object System.Drawing.Bitmap($capture[2], $capture[3])
    $graphics = [System.Drawing.Graphics]::FromImage($resultImage)
    $graphics.DrawImage($sourceImage, 0, 0, (New-Object System.Drawing.Rectangle(0,0,$capture[2],$capture[3])), [System.Drawing.GraphicsUnit]::Pixel)
    $graphics.Dispose()
    $sourceImage.Dispose()
    $resultImage.Save((Join-Path $reviewPath $capture[1]), [System.Drawing.Imaging.ImageFormat]::Png)
    $resultImage.Dispose()
}
$comparison = New-Object System.Drawing.Bitmap(740,440)
$graphics = [System.Drawing.Graphics]::FromImage($comparison)
$graphics.Clear([System.Drawing.Color]::FromArgb(242,250,254))
$font = New-Object System.Drawing.Font('Tahoma',15,[System.Drawing.FontStyle]::Bold)
$brush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(7,45,89))
$graphics.DrawString('Results ปัจจุบัน', $font, $brush, 24, 14)
$graphics.DrawString('Home ปัจจุบัน', $font, $brush, 394, 14)
for ($i=0; $i -lt 2; $i++) {
    $sourceImage = [System.Drawing.Image]::FromFile((Join-Path $reviewPath @('vEMvJ.png','yG6KY.png')[$i]))
    $x = 24 + $i*370
    $graphics.FillRectangle([System.Drawing.Brushes]::White, $x, 54, 322, 362)
    $graphics.DrawImage($sourceImage,$x,54,$sourceImage.Width,$sourceImage.Height)
    $sourceImage.Dispose()
}
$graphics.Dispose()
$font.Dispose()
$brush.Dispose()
$comparison.Save((Join-Path $reviewPath 'cards-comparison.png'),[System.Drawing.Imaging.ImageFormat]::Png)
$comparison.Dispose()
