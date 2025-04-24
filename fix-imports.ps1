# Fix all the @/lib/utils imports
Get-ChildItem -Path app\components\ui -Filter *.tsx | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    $newContent = $content -replace 'import \{ cn \} from "@/lib/utils"', 'import { cn } from "../../lib/utils"'
    Set-Content $_.FullName $newContent
}

# Fix all the @/components/ui imports
Get-ChildItem -Path app\components\ui -Filter *.tsx | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    $newContent = $content -replace 'from "@/components/ui/([^"]+)"', 'from "../ui/$1"'
    Set-Content $_.FullName $newContent
}

# Fix all the @/hooks imports
Get-ChildItem -Path app\components\ui -Filter *.tsx | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    $newContent = $content -replace 'from "@/hooks/([^"]+)"', 'from "../../hooks/$1"'
    Set-Content $_.FullName $newContent
}

Write-Host "Fixed import paths in UI components"
