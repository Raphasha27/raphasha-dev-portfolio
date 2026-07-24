$ErrorActionPreference = "Stop"

try {
    Write-Host "=============================================="
    Write-Host "   Virtual Memory Fixer (Error 1455)          "
    Write-Host "=============================================="
    Write-Host ""
    Write-Host "Attempting to fix Virtual Memory (Page File)..."
    
    Set-CimInstance -Query "Select * from Win32_ComputerSystem" -Property @{AutomaticManagedPagefile=$true}
    Write-Host "[OK] Virtual Memory successfully set to 'System Managed'."
    
    $drive = Get-Volume -DriveLetter C
    $freeSpace = [math]::Round($drive.SizeRemaining / 1GB, 2)
    Write-Host "[INFO] Free space on C: drive: $freeSpace GB"
    
    if ($freeSpace -lt 15) {
        Write-Host ""
        Write-Host "[WARNING] You have very little free space on your C: drive!"
        Write-Host "Windows needs free space to expand the page file to prevent Error 1455."
        Write-Host "Please free up disk space by emptying the recycle bin, deleting large files, etc."
    }
    
    Write-Host ""
    Write-Host "=============================================="
    Write-Host " ACTION REQUIRED: PLEASE RESTART YOUR COMPUTER "
    Write-Host "=============================================="
} catch {
    Write-Host "[ERROR] An error occurred while applying the fix:"
    Write-Host $_
}

Write-Host ""
Write-Host "Press any key to close this window..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
