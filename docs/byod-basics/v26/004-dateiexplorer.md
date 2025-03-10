---
sidebar_custom_props:
  id: 0f78de86-0768-4d6d-a2b5-bb1005752a87
---
import OsTabs from '@site/src/components/OsTabs'
import useBaseUrl from '@docusaurus/useBaseUrl';
import Video from '@site/src/components/Video';

# Dateiexplorer

<OsTabs>
<TabItem value="win11">

Dateiexplorer

![--width=150px](/img/byod-basics/win11/explorer.png)
</TabItem>
<TabItem value="win10">

Dateiexplorer

![](/img/byod-basics/win-explorer.png)
</TabItem>
<TabItem value="mac">

Finder

![](/img/byod-basics/osx-finder.png)

</TabItem>
</OsTabs>


## Ansichten

<OsTabs>
<TabItem value="win11">

- Navigationsbereich
- Vorschaufenster
- Mittelgrosse Symbole
- Liste
- **Details**\*

\* wird als Standardoption empfohlen.

![--width=700px](/img/byod-basics/win11/explorer-start.png)

</TabItem>
<TabItem value="win10">

- Navigationsbereich
- Vorschaufenster
- Mittelgrosse Symbole
- Liste
- **Details**\*

\* wird als Standardoption empfohlen.

</TabItem>
<TabItem value="mac">

- **Symbolleiste ein/ausblenden**\*
- Alle Tabs ein/ausblenden
- Tableiste ein/ausblenden
- **Pfadleiste ein/ausblenden**\*
- Statusleiste ein/ausblenden

\* wird empfohlen, diese Optionen einzublenden.

<Video src={useBaseUrl('/img/byod-basics/osx/finder_view_settings.mp4')} />
</TabItem>
</OsTabs>

### Sortieren

Sie können Dateien in einem Ordner nach unterschiedlichen Kriterien sortieren.

Im Downloads Ordner ist etwa die Sortierung nach dem __Erstelldatum__ sinnvoll, bei Aufräumarbeiten wo die grössten Dateien gelöscht werden sollen, die __Grösse__ oder beim Aufsuchen eines Bildes (oder eines anderen spezifischen Dateityps) das Sortieren nach dem __Dateityp__ (bzw. nach der __Art__).

Standardmässig wird nach dem "Namen" sortiert. 

<OsTabs>
<TabItem value="win11">

Einige Kriterien (wie das __Erstelldatum__) wird nicht automatisch verfügbar und müssen zuerst noch aktiviert werden: 

__:mdi-cursor-default-click: rechtskick__ > __:mdi-swap-vertical: Sortieren nach__ > __Mehr...__ > __Erstelldatum__

<Video src={useBaseUrl('/img/byod-basics/win11/explorer-sort.mp4')} />
</TabItem>
<TabItem value="win10">
<Video src={useBaseUrl('/img/byod-basics/win/explorer_sort.mp4')} />
</TabItem>
<TabItem value="mac">
<Video src={useBaseUrl('/img/byod-basics/osx/finder_sort.mp4')} />
</TabItem>
</OsTabs>

## Ordner Erstellen

> Ein Ordner gruppiert mehrere Dateien an einem Ort. Eine Datei in einem Ordner besitzt den Ordnernamen im Dateipfad.

Sie können einen neuen Ordner mit einem gewünschten Namen erstellen:
- über das Kontextmenü
- über das Menüband

<OsTabs>
<TabItem value="win11">

![Variante Kontextmenü --max-width=650px](/img/byod-basics/win11/explorer-new-folder-2.png)

![Variante Menüband  --max-width=650px](/img/byod-basics/win11/explorer-new-folder-1.png)
</TabItem>
<TabItem value="win10">
<Video src={useBaseUrl('/img/byod-basics/win/new_folder.mp4')} />
</TabItem>
<TabItem value="mac">
<Video src={useBaseUrl('/img/byod-basics/osx/new_folder.mp4')} />
</TabItem>
</OsTabs>

## Dokumente verschieben

Sie können Dateien zwischen verschiedenen Ordnern, die allenfalls auf unterschiedlichen Laufwerken liegen, verschieben.

- per *Drag & Drop* (mit der Maus Packen und in einen anderen Ordner ziehen und loslassen)
- oder per *Copy & Paste* (Ausschneiden/Kopieren und anschliessendes Einfügen)

<OsTabs>
<TabItem value="win11">

- Ausschneiden & Einfügen (auch über Tastenkürzel [[ctrl]]+[[x]] und [[ctrl]]+[[v]] möglich)

<Video src={useBaseUrl('/img/byod-basics/win11/explorer-copy-paste.mp4')} />
</TabItem>
<TabItem value="win10">

- Ausschneiden & Einfügen (auch über Tastenkürzel [[ctrl]]+[[x]] und [[ctrl]]+[[v]] möglich)

<Video src={useBaseUrl('/img/byod-basics/win/move_files.mp4')} />
</TabItem>
<TabItem value="mac">

- mit [[cmd]]+[[c]] und [[cmd]]+[[v]] lassen sich die Dateien kopieren und Einfügen. Auf Mac OSX ist ausschneiden ([[cmd]]+[[x]]) nicht möglich.
  
</TabItem>
</OsTabs>

## Dateien und Dokumente umbenennen

<OsTabs>
<TabItem value="win11">

- Übers Menüband
- Übers Kontextmenü: __:mdi-cursor-default-click: rechtskick__ > __:mdi-form-textbox: Umbenennen__
- Mit [[F2]] (je nach Tastatur auch [[Fn]]+[[F2]])

</TabItem>
<TabItem value="win10">

- Übers Menüband
- Übers Kontextmenü: __:mdi-cursor-default-click: rechtskick__ > __Umbenennen__
- Mit [[F2]] (je nach Tastatur auch [[Fn]]+[[F2]])

</TabItem>
<TabItem value="mac">

- Mit `enter`
- Mit rechtsklick "Umbenennen"

<Video src={useBaseUrl('/img/byod-basics/osx/rename.mp4')} />

</TabItem>
</OsTabs>


## Komprimierte Dateien __.zip__

Dateien können *komprimiert* werden - sie brauchen dann weniger Speicherplatz auf Ihrem Gerät, können im Gegenzug aber nicht mehr bearbeitet werden (ausser Sie entpacken die Dateien wieder).

Als Analogie wird in der Informatik ein Reissverschluss verwendet, welcher durch das Zumachen Platz einspart. Deshalb das englische Wort __Zip__ für *Zipper* für komprimierte Dateien.

![Reissverschluss (Zipper)](/img/byod-basics/zipper.jpg)

### Komprimieren

Die gewünschten Dateien Auswählen und anschliessend komprimieren. Das Symbol für einen komprimierten Ordner weist oft einen Reissverschluss auf.

![ZIP Datei](/img/byod-basics/zip-file.jpg)

<OsTabs>
<TabItem value="win11">
<Video src={useBaseUrl('/img/byod-basics/win11/explorer-zip.mp4')} />
</TabItem>
<TabItem value="win10">

Übers Kontextmenü: __:mdi-cursor-default-click: rechtskick__ > __Senden an__ > __ZIP-komprimierter Ordner__

<Video src={useBaseUrl('/img/byod-basics/win/zip.mp4')} />
</TabItem>
<TabItem value="mac">
<Video src={useBaseUrl('/img/byod-basics/osx/zip.mp4')} />
</TabItem>
</OsTabs>

### Entpacken

<OsTabs>
<TabItem value="win11">
<Video src={useBaseUrl('/img/byod-basics/win11/explorer-unzip.mp4')} />
</TabItem>
<TabItem value="win10">
<Video src={useBaseUrl('/img/byod-basics/win/extract_zip.mp4')} />
</TabItem>
<TabItem value="mac">
.zip-Datei Doppelklicken
</TabItem>
</OsTabs>
