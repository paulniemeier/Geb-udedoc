# Nutzung

Dieser Leitfaden begleitet dich beim ersten Einstieg in Gebaeudedoc – vom Anlegen des ersten Projekts bis zum fertigen PDF-Export.

## Vorbereitung

1. Starte Gebaeudedoc; die Projektübersicht öffnet sich automatisch.
2. Klicke oben rechts auf **Projektordner wählen** und gib den Ordner an, in dem alle Projektdaten gespeichert werden sollen.
3. Bestätige die Auswahl. Der Pfad wird gemerkt und beim nächsten Start automatisch geladen.
4. Optional: Öffne das Menü **Profil → Profil bearbeiten**, trage deinen Namen ein und lade bei Bedarf ein Logo (PNG/JPG). Beides erscheint später auf den PDF-Exporten.

!!! tip "Profil-Logo anpassen"
    Im Profil-Dialog kannst du ein eigenes Logo wählen. Es wird lokal gespeichert und steht bei künftigen Exporten ohne erneuten Upload bereit.

## Projekt erfassen

1. Fülle im linken Bereich **Projekt erfassen** die Felder *Projektname*, *Kunde*, *Kundennummer*, *Standort*, *Auftragsnummer*, *Bearbeiter* und *Datum* aus.
2. Klicke auf **Projekt speichern**. Das Projekt wird angelegt, erhält automatisch einen eigenen Unterordner und erscheint rechts in der Liste.
3. Öffne das Projekt per Doppelklick auf den Listeneintrag. Du gelangst in die Detailansicht mit Netzplan und Tabellen.
4. Möchtest du Stammdaten ändern? Nutze das Drei-Punkte-Menü neben dem Projekt und wähle **Projekt bearbeiten**.

## Geräte platzieren

1. In der Detailansicht klicke links oben auf **Gerät erfassen**. Das Formular klappt direkt über dem Netzplan auf.
2. Wähle über das Dropdown einen *Gerätetyp* (zum Beispiel KNX, Netzwerk, Loxone oder „Neu“ für freie Eingaben).
3. Ergänze je nach Typ Verbindungsart, Protokoll, Adresse und Standort. Bei KNX-Geräten prüft die App automatisch, ob die Adresse bereits vergeben ist.
4. Speichere mit **Gerät erstellen**. Der Knoten erscheint im Netzplan und wird in der Gerätetabelle geführt.
5. Ziehe Verbindungen per Drag & Drop zwischen den Geräten. Rechtsklick auf eine Verbindung öffnet ein Kontextmenü zum Löschen oder Ändern des Protokolls.
6. Doppelklick auf einen vorhandenen Knoten lädt seine Daten in das Formular, damit du Änderungen vornehmen oder das Gerät löschen kannst.

## KNX-Geräte importieren (optional)

1. Wechsle in der unteren Navigation zum Tab **KNX Geräte** und klicke auf **KNX-Projekt importieren (.knxproj)**.
2. Wähle die gewünschte `.knxproj`-Datei aus. Nach dem Import siehst du alle gefundenen Geräte mit Adresse, Raum und Status „offen/platziert“.
3. Ziehe Einträge aus der Liste in den Netzplan. Schon platzierte Adressen werden gesperrt, damit du keine Dubletten erzeugst.
4. Die importierte Projektdatei wird im Projektordner archiviert und kann später erneut verwendet werden.

## Tabellen, Anmerkungen & Legende

- **Gerätetabelle:** Sortiere per Spaltenklick nach Name, Typ, Adresse, Verbindung oder Standort. Die aktuelle Sortierung bleibt gespeichert.
- **Anmerkungs-Tabelle:** Trage Notizen je Gerät ein. Die Eingabe wird gespeichert, sobald du das Feld verlässt.
- **Legende:** Blende über den Button oben rechts im Netzplan alle verwendeten Protokollfarben ein. So kontrollierst du schnell, ob die Darstellung passt.

!!! note "Automatisches Speichern"
    Nach jeder Änderung an Geräten, Verbindungen, Tabellen oder Anmerkungen speichert Gebaeudedoc die Daten automatisch im Projektordner.

## Exporte abschließen

1. Öffne die Menüleiste **Datei → Export**.
2. Wähle den gewünschten Export:
   - **Projektinformationen (PDF)** für alle Stammdaten,
   - **Tabelle (PDF)** für die Geräteliste,
   - **Legende (PDF)** für die Protokollübersicht,
   - **Anmerkungen (PDF)** für sämtliche Notizen,
   - **Alles exportieren (PDFs)** für ein Sammeldokument mit allen Kapiteln.
3. Nutze **Print to PDF** (Strg oder Cmd + P), um den Netzplan in einer druckoptimierten A4-Ansicht zu erzeugen.
4. Speichere die PDFs am gewünschten Speicherort. Die Dateien bleiben unverändert mit dem Projektordner verknüpft.

## Updates & Pflege

- Über **System → Update aus Datei installieren…** führst du neue Installationen ein, ohne das Projekt zu verlassen.
- Der zuletzt verwendete Projektordner und deine Profildaten bleiben erhalten.
- Für Feedback oder Fehlerberichte nutze das verknüpfte GitHub-Repository oder kontaktiere das Support-Team.

Mit diesen Schritten bist du bereit, deine Gebaeudedokumentation vollständig zu erfassen und exportfertig aufzubereiten.
