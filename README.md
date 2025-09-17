# Geb-udedoc
Gebäudesystemintegrationssoftware

## Veröffentlichung

Dieses Repository ist so konfiguriert, dass **nur bei Releases veröffentlicht wird** (nur releasenodes). 

Der automatische Publishing-Workflow wird nur ausgelöst, wenn:
- Ein neues Release erstellt wird
- Das Release als "published" markiert wird

### Release erstellen

1. Erstelle ein neues Release über die GitHub-Oberfläche
2. Vergib eine Versionsnummer (z.B. `v1.0.0`)
3. Der Workflow wird automatisch ausgelöst und veröffentlicht das Paket

### Was wird veröffentlicht

- NPM-Paket (falls konfiguriert)
- Release-Artefakte (komprimiertes Archiv)
- Automatische Erstellung von Release-Assets
