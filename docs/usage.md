# Nutzung

Dieser Leitfaden begleitet dich beim ersten Einstieg in Gebaeudedoc - vom Anlegen des ersten Projekts bis zum fertigen PDF-Export.

## Vorbereitung

1. Starte Gebaeudedoc; die Projektuebersicht oeffnet sich automatisch.
2. Klicke oben rechts auf **Projektordner waehlen** und gib den Ordner an, in dem alle Projektdaten gespeichert werden sollen.
3. Bestaetige die Auswahl. Der Pfad wird gemerkt und beim naechsten Start automatisch geladen.
4. Optional: Oeffne das Menue **Profil -> Profil bearbeiten**, trage deinen Namen ein und lade bei Bedarf ein Logo (PNG/JPG). Beides erscheint spaeter auf den PDF-Exporten.

!!! tip "Profil-Logo anpassen"
    Im Profil-Dialog kannst du ein eigenes Logo waehlen. Es wird lokal gespeichert und steht bei kuenftigen Exporten ohne erneuten Upload bereit.

## Projekt erfassen

1. Fuelle im linken Bereich **Projekt erfassen** die Felder *Projektname*, *Kunde*, *Kundennummer*, *Standort*, *Auftragsnummer*, *Bearbeiter* und *Datum* aus.
2. Klicke auf **Projekt speichern**. Das Projekt wird angelegt, erhaelt automatisch einen eigenen Unterordner und erscheint rechts in der Liste.
3. Oeffne das Projekt per Doppelklick auf den Listeneintrag. Du gelangst in die Detailansicht mit Netzplan und Tabellen.
4. Moechtest du Stammdaten aendern? Nutze das Drei-Punkte-Menue neben dem Projekt und waehle **Projekt bearbeiten**.

## Geraete platzieren

1. In der Detailansicht klicke links oben auf **Geraet erfassen**. Das Formular klappt direkt ueber dem Netzplan auf.
2. Waehle ueber das Dropdown einen *Geraetetyp* (zum Beispiel KNX, Netzwerk, Loxone oder "Neu" fuer freie Eingaben).
3. Ergaenze je nach Typ Verbindungsart, Protokoll, Adresse und Standort. Bei KNX-Geraeten prueft die App automatisch, ob die Adresse bereits vergeben ist.
4. Speichere mit **Geraet erstellen**. Der Knoten erscheint im Netzplan und wird in der Geraetetabelle gefuehrt.
5. Ziehe Verbindungen per Drag & Drop zwischen den Geraeten. Rechtsklick auf eine Verbindung oeffnet ein Kontextmenue zum Loeschen oder Aendern des Protokolls.
6. Doppelklick auf einen vorhandenen Knoten laedt seine Daten in das Formular, damit du Aenderungen vornehmen oder das Geraet loeschen kannst.

## KNX-Geraete importieren (optional)

1. Wechsle in der unteren Navigation zum Tab **KNX Geraete** und klicke auf **KNX-Projekt importieren (.knxproj)**.
2. Waehle die gewuenschte `.knxproj`-Datei aus. Nach dem Import siehst du alle gefundenen Geraete mit Adresse, Raum und Status "offen/platziert".
3. Ziehe Eintraege aus der Liste in den Netzplan. Schon platzierte Adressen werden gesperrt, damit du keine Dubletten erzeugst.
4. Die importierte Projektdatei wird im Projektordner archiviert und kann spaeter erneut verwendet werden.

## Tabellen, Anmerkungen & Legende

- **Geraetetabelle:** Sortiere per Spaltenklick nach Name, Typ, Adresse, Verbindung oder Standort. Die aktuelle Sortierung bleibt gespeichert.
- **Anmerkungs-Tabelle:** Trage Notizen je Geraet ein. Die Eingabe wird gespeichert, sobald du das Feld verlaesst.
- **Legende:** Blende ueber den Button oben rechts im Netzplan alle verwendeten Protokollfarben ein. So kontrollierst du schnell, ob die Darstellung passt.

!!! note "Automatisches Speichern"
    Nach jeder Aenderung an Geraeten, Verbindungen, Tabellen oder Anmerkungen speichert Gebaeudedoc die Daten automatisch im Projektordner.

## Exporte abschliessen

1. Oeffne die Menueleiste **Datei -> Export**.
2. Waehle den gewuenschten Export:
   - **Projektinformationen (PDF)** fuer alle Stammdaten,
   - **Tabelle (PDF)** fuer die Geraeteliste,
   - **Legende (PDF)** fuer die Protokolluebersicht,
   - **Anmerkungen (PDF)** fuer saemtliche Notizen,
   - **Alles exportieren (PDFs)** fuer ein Sammeldokument mit allen Kapiteln.
3. Nutze **Print to PDF** (Strg oder Cmd + P), um den Netzplan in einer druckoptimierten A4-Ansicht zu erzeugen.
4. Speichere die PDFs am gewuenschten Speicherort. Die Dateien bleiben unveraendert mit dem Projektordner verknuepft.

## Updates & Pflege

- Ueber **System -> Update aus Datei installieren...** fuehrst du neue Installationen ein, ohne das Projekt zu verlassen.
- Der zuletzt verwendete Projektordner und deine Profildaten bleiben erhalten.
- Fuer Feedback oder Fehlerberichte nutze das verknuepfte GitHub-Repository oder kontaktiere das Support-Team.

Mit diesen Schritten bist du bereit, deine Gebaeudedokumentation vollstaendig zu erfassen und exportfertig aufzubereiten.
