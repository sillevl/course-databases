# XML - eXtensible Markup Language

XML or Extensible Markup Language is a markup language developed in 1996 by World Wide Web Consortium. XML is an open technology for data storage and exchange. XML is portable and wideley supported by many programming languages and software.

XML is next to JSON the standard format for data exchange over the internet.

```markup
<?xml version="1.0" encoding="UTF-8"?> 
<!-- Hello world XML example-->
<text>
   <para>hello world</para>
</text>
```

XML enables you to create markup for virtually every type of information. This enables you to create a new markup language for describing any type of date. XML is used to create data formats for:

* Mathematical formulas
* Software configuration
* Music
* News
* …

```markup
<?xml version="1.0" encoding="UTF-8"?> 
<!-- Bassball player structured with XML --> 
<player> 
   <firstname>John</firstname> 
   <lastname>Doe</lastname> 
   <battingaverage>0.375</battingaverage> 
</player>
```

## XML Structure

Every XML document begins with an optional XML declaration to identify the document as XML document. A version attribute specifies the version of XML syntax.

```markup
<?xml version="1.0" encoding="UTF-8"?>
```

XML comment begins with `<!–-` and ends with `-->`

```markup
<!-- Bassball player structured with XML -->
```

Just like an HTML document, an XML document is made out of elements that specify the structure and text that represents the content or data.

```markup
<firstname>John</firstname>
```

The lines that precede the root element are called the XML prolog.

XML delimits an element with start and end tags

* A tag consists of an element name between angle brackets `<` and `>` eg: `<player>`
* An end tag consists of the element name preceded by a forward slash `/` eg: `</player>`

  Every document must have exactly one root element

  Root element encompasses all the other elements

```markup
<player> 
   <firstname>John</firstname> 
   <lastname>Doe</lastname> 
</player>
```

Element names can be of any length and can contain letters, digits, underscores, hyphens and periods

* Must begin with a letter or underscore
* Should not begin with `xml` in any combination \(reserved\)

Blank lines, white spaces and indentation are ignored and can help to improve readability.

### Hierarchy

* **Container elements**: Any element that contains other elements
* **Parent elements**: Container elements
* **Child elements**: Nested elements in container or parent elements
* **Siblings**: Child elements that are at the same nesting level

```markup
<player> 
   <firstname>John</firstname> 
   <lastname>Doe</lastname> 
   <battingaverage>0.375</battingaverage> 
</player>
```

## XML Vocabularies

Many XML vocabularies exist. These are all based on the XML markup language.

* XHTML
* MathML for mathematic
* VoiceML for speech
* CML: Chemical Markup Language
* XBRL: Extensible Business Reporting Language
* …

In the past, XHTML was used to build the web enabling more sophisticated web based applications. XML allows you to assign meaning to what would otherwise be random pieces of data.

## Viewing and editing XML

XML files use the `.xml` filename extension. Formatting and displaying XML files is application specific. XML is mostly parsed in software. Some software exist to browse and display XML.

* Browsers can show XML, they use a specific built-in style sheet to give 
* Microsoft XML viewer
* Microsoft Excel

Most software packages will display XML in a tree like structure:

* Like file system
* Show or collapse
* Container elements

## Doctype

XML uses a DocType to define the type of the document. The Doctype also contains information about:

* The name of the root element that specifies the DTD 
* SYSTEM keyword, denotating an external DTD
* DTD filename and location

DTD = Document Type Definition

```markup
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

XML can describe any kind of data. This might introduce problems.

### Problem

XML carrying HTML table information

```markup
<table>
   <tr> 
      <td>Intel</td>
       <td>ARM</td>
    </tr> 
</table>
```

XML carrying information about a table \(furniture\)

```markup
<table>
   <name>Coffee Table</name> 
   <width>80</width>
   <lenght>180</lenght>
</table>
```

### Solution

Solution: namespace prefix and colon = XML namespace

```markup
<html:table>
   <html:tr> 
      <html:td>Intel</html:td>
      <html:td>ARM</html:td>
    </html:tr> 
</html:table>
```

and

```markup
<furniture:table>
   <furniture:name>Coffee Table</furniture:name> 
   <furniture:width>80</furniture:width>
   <furniture:lenght>180</furniture:lenght>
</furniture:table>
```

Namespaces providing a means for preventing naming collisions. Each namespace prefix is bound to a Uniform Resource Identifier \(URI\). A URI provides a unique identification of the namespace. Document authors can create their own namespace prefix, a can choose any name as prefix \(except 'xml'\)

The `xmlns` attribute can be used to define the XML namespace and is buund to an URI \(Uniform Resource Identifier\)

* URN: Uniform Resource Name `xmlns:image = "urn:vives:imageInfo"`
* URL: Uniform Resource Locator `xmlns:image = “http://vives.be/xmlns-image"`

```markup
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

The need to place a namespace can be eliminated in each element by useing the `xmlns` keyword.

```markup
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

## Example

```markup
<?xml version="1.0" encoding="UTF-8"?> 

<people>
   <person>
      <name>james</name>
      <age>21</age>
      <gender>m</gender>
   </person>
   <person>
      <name>lauren</name>
      <age>19</age>
      <gender>f</gender>
   </person>
   <person>
      <name>simon</name>
      <age>57</age>
      <gender>m</gender>
   </person>
</people>
```