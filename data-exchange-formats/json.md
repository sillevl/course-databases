# JavaScript Object Notation - JSON

## JSON Format

JSON (JavaScript Object Notation) is a lightweight data-interchange format. It is easy for humans to read and write. It is easy for machines to parse and generate. It is based on a subset of the [JavaScript Programming Language](http://javascript.crockford.com/), [Standard ECMA-262 3rd Edition - December 1999](http://www.ecma-international.org/publications/files/ecma-st/ECMA-262.pdf). JSON is a text format that is completely **language independent** but uses conventions that are familiar to programmers of the C-family of languages, including C, C++, C#, Java, JavaScript, Perl, Python, and many others. These properties make JSON an ideal data-interchange language.

JSON is built on two structures:

* A **collection of name/value pairs**. In various languages, this is realized as an object, record, struct, dictionary, hash table, keyed list, or associative array.
* An ordered list of values. In most languages, this is realized as an array, vector, list, or sequence.

These are universal data structures. Virtually all modern programming languages support them in one form or another. It makes sense that a data format that is interchangeable with programming languages also be based on these structures.

In JSON, they take on these forms:

* Objects
* Arrays
* Values
* Strings
* Numbers

### Objects

An object is an unordered set of name/value pairs. An object begins with { (left brace) and ends with } (right brace). Each name is followed by : (colon) and the name/value pairs are separated by , (comma).

![Structure of a JSON Object](img/object.gif)

### Arrays

An array is an ordered collection of values. An array begins with [ (left bracket) and ends with ] (right bracket). Values are separated by , (comma).

![Structure of a JSON Array](img/array.gif)

### Values

A value can be a string in double quotes, or a number, or true or false or null, or an object or an array. These structures can be nested.

![Structure of a JSON Value](img/value.gif)

### Strings

A string is a sequence of zero or more Unicode characters, wrapped in double quotes, using backslash escapes. A character is represented as a single character string. A string is very much like a C or Java string.

![Structure of a JSON String](img/string.gif)

### Numbers

A number is very much like a C or Java number, except that the octal and hexadecimal formats are not used.

![Structure of a JSON Number](img/number.gif)

---

Whitespace can be inserted between any pair of tokens. Excepting a few encoding details, that completely describes the language.

---
Source:
* http://www.json.org/

---

### Examples

Source: https://www.sitepoint.com/10-example-json-files/

This is an example of a Customer Form JSON file which you might see used to store configuration settings to setup your system. It might also be used to contain record information which can be easily shared across components using the simple JSON format.

```json
{
     "firstName": "John",
     "lastName": "Smith",
     "age": 25,
     "address":
     {
         "streetAddress": "21 2nd Street",
         "city": "New York",
         "state": "NY",
         "postalCode": "10021"
     },
     "phoneNumber":
     [
         {
           "type": "home",
           "number": "212 555-1234"
         },
         {
           "type": "fax",
           "number": "646 555-4567"
         }
     ]
 }
```

This is an example of Products Database JSON file which you might see used to store configuration settings to setup your system. It might also be used to contain products record information which can be easily shared across components using the simple JSON format.

```json
{
        "name":"Product",
        "properties":
        {
                "id":
                {
                        "type":"number",
                        "description":"Product identifier",
                        "required":true
                },
                "name":
                {
                        "description":"Name of the product",
                        "type":"string",
                        "required":true
                },
                "price":
                {
                        "type":"number",
                        "minimum":0,
                        "required":true
                },
                "tags":
                {
                        "type":"array",
                        "items":
                        {
                                "type":"string"
                        }
                }
        }
}
```

This is an example of a Colors JSON file which you might see used to store configuration settings to setup your system. It might also be used to contain color information which can be easily shared across components using the simple JSON format.

```json
{
    "colorsArray":[{
            "colorName":"red",
            "hexValue":"#f00"
        },
        {
            "colorName":"green",
            "hexValue":"#0f0"
        },
        {
            "colorName":"blue",
            "hexValue":"#00f"
        },
        {
            "colorName":"cyan",
            "hexValue":"#0ff"
        }
    ]
}
```

Or simply:

```json
{
    "colorsArray":[{
            "red":"#f00",
            "green":"#0f0",
            "blue":"#00f",
            "cyan":"#0ff",
            "magenta":"#f0f",
            "yellow":"#ff0",
            "black":"#000"
        }
    ]
}
```

Or even simply:

```json
{
    "red":"#f00",
    "green":"#0f0",
    "blue":"#00f",
    "cyan":"#0ff",
    "magenta":"#f0f",
    "yellow":"#ff0",
    "black":"#000"
}
```

JSON example of an application menu:

```json
{"menu": {
  "id": "file",
  "value": "File",
  "popup": {
    "menuitem": [
      {"value": "New", "onclick": "CreateNewDoc()"},
      {"value": "Open", "onclick": "OpenDoc()"},
      {"value": "Close", "onclick": "CloseDoc()"}
    ]
  }
}}
```

JSON example of a Widget:

```json
{"widget": {
    "debug": "on",
    "window": {
        "title": "Sample Konfabulator Widget",
        "name": "main_window",
        "width": 500,
        "height": 500
    },
    "image": { 
        "src": "Images/Sun.png",
        "name": "sun1",
        "hOffset": 250,
        "vOffset": 250,
        "alignment": "center"
    },
    "text": {
        "data": "Click Here",
        "size": 36,
        "style": "bold",
        "name": "text1",
        "hOffset": 250,
        "vOffset": 100,
        "alignment": "center",
        "onMouseUp": "sun1.opacity = (sun1.opacity / 100) * 90;"
    }
}}    
```

---


## JSON Schema

TODO