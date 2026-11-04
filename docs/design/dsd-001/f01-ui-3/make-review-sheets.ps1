Add-Type -AssemblyName System.Drawing
$reviewRoot = $PSScriptRoot
$reviewFont = New-Object System.Drawing.Font('Arial', 10)
$reviewBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(7,45,89))
foreach ($group in @('wordmarks','icon-rows')) {
    $files = @(Get-ChildItem -LiteralPath (Join-Path $reviewRoot $group) -Filter '*.png' | Sort-Object Name)
    $sheetCount = [Math]::Ceiling($files.Count / 32)
    for ($sheet = 0; $sheet -lt $sheetCount; $sheet++) {
        $batch = @($files | Select-Object -Skip ($sheet * 32) -First 32)
        $height = 32 + [Math]::Ceiling($batch.Count / 4) * 106
        $bitmap = New-Object System.Drawing.Bitmap(1280, $height)
        $canvas = [System.Drawing.Graphics]::FromImage($bitmap)
        $canvas.Clear([System.Drawing.Color]::FromArgb(242,250,254))
        $canvas.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        for ($i = 0; $i -lt $batch.Count; $i++) {
            $x = ($i % 4) * 320 + 12
            $y = [Math]::Floor($i / 4) * 106 + 12
            $canvas.DrawString($batch[$i].BaseName, $reviewFont, $reviewBrush, $x, $y)
            $img = [System.Drawing.Image]::FromFile($batch[$i].FullName)
            $sourceWidth = $img.Width
            $sourceHeight = $img.Height
            if ($group -eq 'wordmarks') {
                $sourceWidth = [Math]::Min(320, $sourceWidth)
                $sourceHeight = [Math]::Min(112, $sourceHeight)
            }
            $scale = [Math]::Min(1, [Math]::Min(296 / $sourceWidth, 72 / $sourceHeight))
            $destRect = New-Object System.Drawing.RectangleF([single]$x, [single]($y + 20), [single]($sourceWidth*$scale), [single]($sourceHeight*$scale))
            $sourceRect = New-Object System.Drawing.RectangleF(0, 0, [single]$sourceWidth, [single]$sourceHeight)
            $canvas.DrawImage($img, $destRect, $sourceRect, [System.Drawing.GraphicsUnit]::Pixel)
            $img.Dispose()
        }
        $canvas.Dispose()
        $bitmap.Save((Join-Path $reviewRoot ($group + '-sheet-' + ($sheet+1) + '.png')), [System.Drawing.Imaging.ImageFormat]::Png)
        $bitmap.Dispose()
    }
}
$reviewFont.Dispose()
$reviewBrush.Dispose()
