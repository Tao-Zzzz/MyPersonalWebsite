param(
  [int]$Port = 4181
)

$ErrorActionPreference = "Stop"
$ProjectRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$Url = "http://localhost:$Port/"

function Test-SiteReady {
  param([string]$TargetUrl)

  try {
    $response = Invoke-WebRequest -UseBasicParsing -Uri $TargetUrl -Method Head -TimeoutSec 2
    return ($response.StatusCode -ge 200 -and $response.StatusCode -lt 500)
  } catch {
    return $false
  }
}

try {
  Set-Location $ProjectRoot

  if (-not (Get-Command npm.cmd -ErrorAction SilentlyContinue)) {
    throw "npm.cmd was not found. Install Node.js first, then run this script again."
  }

  if (-not (Test-Path (Join-Path $ProjectRoot "node_modules"))) {
    Write-Host "Installing dependencies..."
    & npm.cmd install
    if ($LASTEXITCODE -ne 0) {
      throw "npm install failed."
    }
  }

  Write-Host "Building site..."
  & npm.cmd run build
  if ($LASTEXITCODE -ne 0) {
    throw "Build failed."
  }

  if (Test-SiteReady $Url) {
    Write-Host "Site is already running at $Url"
    Start-Process $Url
    Write-Host "Close the existing preview server window when you want to stop it."
    Read-Host "Press Enter to close this launcher"
    exit 0
  }

  Write-Host "Starting preview server at $Url"
  $previewArgs = @("run", "preview", "--", "--port", "$Port")
  $previewProcess = Start-Process -FilePath "npm.cmd" -ArgumentList $previewArgs -WorkingDirectory $ProjectRoot -NoNewWindow -PassThru

  $ready = $false
  for ($attempt = 0; $attempt -lt 30; $attempt++) {
    if ($previewProcess.HasExited) {
      throw "Preview server exited early."
    }

    if (Test-SiteReady $Url) {
      $ready = $true
      break
    }

    Start-Sleep -Seconds 1
  }

  if (-not $ready) {
    throw "Preview server did not become ready at $Url."
  }

  Start-Process $Url
  Write-Host "Site is running at $Url"
  Write-Host "Keep this window open. Close it or press Ctrl+C to stop the server."
  Wait-Process -Id $previewProcess.Id
} catch {
  Write-Host ""
  Write-Host "Failed to start site:" -ForegroundColor Red
  Write-Host $_.Exception.Message -ForegroundColor Red
  Read-Host "Press Enter to close this launcher"
  exit 1
}
