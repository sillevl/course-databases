# XML - eXtensible Markup Language

XML: Extensible Markup Language
* 1996 by World Wide Web Consortium

Open technology
Technology for data storage and exchange
Portable
Widely supported
Standard format for data exchanged over the internet

```xml
<?xml version="1.0" encoding="UTF-8"?> 
<!-- Hello world XML example-->
<text>
   <para>hello world</para>
</text>
```

Create markup for virtually every type of information
Enabling to create entirely new markup languages for describing any type of data
Mathematical formulas, software configuration, music, news, …

```xml
<?xml version="1.0" encoding="UTF-8"?> 
<!-- Bassball player structured with XML --> 
<player> 
   <firstname>John</firstname> 
   <lastname>Doe</lastname> 
   <battingaverage>0.375</battingaverage> 
</player>
```

## XML Structure

Begins with an optional XML declaration to identify the document as XML document
Verson attribute specifies the version of XML syntax

```xml
<?xml version="1.0" encoding="UTF-8"?>
```

XML comment begins with `<!–-` and ends with `-->`

```xml
<!-- Bassball player structured with XML --> 
```

Contains text that represents content (data)
Contains elements that specify structure

```xml
<firstname>John</firstname> 
```

The lines that precede the root element are called the XML prolog

XML delimits an element with start and end tags
* A tag consists of an element name between angle brackets `<` and `>` eg: `<player>`
* An end tag consists of the element name preceded by a forward slash `/` eg: `</player>`
Every document must have exactly one root element
Root element encompasses all the other elements

```xml
<player> 
   <firstname>John</firstname> 
   <lastname>Doe</lastname> 
</player>
```

Elements names can be of any length and can contain letters, digits, underscores, hyphens and periods
* Must begin with a letter or underscore
* Should not begin with “xml” in any combination (reserved)

Blank lines, white spaces and indentation: help improve readability but are ignored in XML

### Hierarchy

Container elements
* Any element that contains other elements

Parent elements
* Container elements

Child elements
* Nested elements in container or parent elements

Siblings
* Child elements that are at the same nesting level

```xml
<player> 
   <firstname>John</firstname> 
   <lastname>Doe</lastname> 
   <battingaverage>0.375</battingaverage> 
</player>
```

## XML Vocabularies

XML based markup languages = vocabulary
* XHTML
* MathML for mathematic
* VoiceML for speech
* CML: Chemical Markup Language
* XBRL: Extensible Business Reporting Language
* …

Next generation of web is build on XML foundation, enabling more sophisticated web based applications
XML allows you to assign meaning to what would otherwise be random pieces of data

## Viewing and editing XML

.xml filename extension
Formatting and displaying is application specific
Browsers can show XML
* Brower specific built-in style sheet

Microsoft XML viewer
Microsoft Excel

Tree structure
* Like file system
* Show or collapse
* container elements

## Doctype

`DOCTYPE`
* Name of the root element that specifies the DTD 
* SYSTEM keyword, denotating an external DTD
* DTD filename and location
DTD=Document Type Definition

```xml
<?xml version="1.0" encoding="UTF-8"?>

<!-- Business letter marked up with XML -->
<!DOCTYPE letter SYSTEM "letter.dtd">
<letter>
   <contact type = "sender">
      <name>Jane Doe</name>
      <address1>Box 12345</address1>
      <address2>15 Any ave</address2>
      <city>Othertown</city> 
...
```

## Namespaces

### Problem

XML carrying HTML table information

```xml
<table>
   <tr> 
      <td>Intel</td>
      <td>ARM</td>
    </tr> 
</table> 
```

XML carrying information about a table (furniture)

```xml
<table>
   <name>Coffee Table</name> 
   <width>80</width>
   <lenght>180</lenght>
</table>
```

### Solution 

Solution: namespace prefix and colon = XML namespace

```xml
<html:table>
   <html:tr> 
      <html:td>Intel</html:td>
      <html:td>ARM</html:td>
    </html:tr> 
</html:table> 
```
and

```xml
<furniture:table>
   <furniture:name>Coffee Table</furniture:name> 
   <furniture:width>80</furniture:width>
   <furniture:lenght>180</furniture:lenght>
</furniture:table>
```

Providing a means for preventing naming collisions
Each namespace prefix is bound to a Uniform Resource Identifier (URI)
* Unique identification of the namespace
* Document authors create their own namespace prefix
* Any name can be used as prefix (except ‘xml’)

xmlns attribute
Bound to an URI (Uniform Resource Identifier)
* URN: Uniform Resource Name `xmlns:image = "urn:vives:imageInfo"`
* URL: Uniform Resource Locator `xmlns:image = “http://vives.be/xmlns-image"`


```xml
<?xml version="1.0" encoding="UTF-8"?> 

<text:directory 
   xmlns:text = "urn:vives:textInfo" 
   xmlns:image = "urn:vives:imageInfo"> 

   <text:file filename="book.xml"> 
      <text:description>A book list</text:description> 
   </text:file> 

   <image:file filename="funny.jpg"> 
      <image:description>A funny picture</image:description> 
      <image:size width="200" height="100" /> 
   </image:file> 
</text:directory>
```

Eliminate the need to place a namespace in each element (xmlns keyword)

```xml
<?xml version="1.0" encoding="UTF-8"?> 

<directory 
   xmlns = "urn:vives:textInfo" 
   xmlns:image = "urn:vives:imageInfo"> 
   <file filename="book.xml"> 
      <description>A book list</description> 
   </file> 

   <image:file filename="funny.jpg"> 
      <image:description>A funny picture</image:description> 
      <image:size width="200" height="100" /> 
   </image:file> 
</directory>
```




