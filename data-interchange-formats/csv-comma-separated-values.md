# CSV - Comma Separated Values

## Introduction

The comma separated values format \(CSV\) has been used for exchanging and converting data between various spreadsheet programs for quite some time. Surprisingly, while this format is very common, it has never been formally documented.

## Definition of the CSV Format

While there are various specifications and implementations for the CSV format, there is no formal specification in existence, which allows for a wide variety of interpretations of CSV files. This section documents the format that seems to be followed by most implementations:

1. Each record is located on a separate line, delimited by a line break \(`CRLF`\).

   For example:

   ```text
   aaa,bbb,ccc CRLF
   zzz,yyy,xxx CRLF
   ```

2. The last record in the file may or may not have an ending line break. For example:

   ```text
   aaa,bbb,ccc CRLF
   zzz,yyy,xxx
   ```

3. There maybe an optional header line appearing as the first line of the file with the same format as normal record lines. This header will contain names corresponding to the fields in the file and should contain the same number of fields as the records in the rest of the file.

   For example:

   ```text
   field_name,field_name,field_name CRLF
   aaa,bbb,ccc CRLF
   zzz,yyy,xxx CRLF
   ```

4. Within the header and each record, there may be one or more fields, separated by commas. Each line should contain the same number of fields throughout the file. Spaces are considered part of a field and should not be ignored. The last field in the record must not be followed by a comma.

   For example:

   ```text
   aaa,bbb,ccc
   ```

5. Each field may or may not be enclosed in double quotes \(however some programs, such as Microsoft Excel, do not use double quotes at all\). If fields are not enclosed with double quotes, then double quotes may not appear inside the fields.

   For example:

   ```text
   "aaa","bbb","ccc" CRLF
   zzz,yyy,xxx
   ```

6. Fields containing line breaks \(CRLF\), double quotes, and commas should be enclosed in double-quotes.

   For example:

   ```text
   "aaa","b CRLF
   bb","ccc" CRLF
   zzz,yyy,xxx
   ```

7. If double-quotes are used to enclose fields, then a double-quote appearing inside a field must be escaped by preceding it with another double quote.

   For example:

   ```text
   "aaa","b""bb","ccc"
   ```

## Examples

```text
name,age,gender
james,21,m
lauren,19,f
simon,57,m
```

## CSV Validator

[https://csvlint.io/](https://csvlint.io/)

## CSV Schema

[http://digital-preservation.github.io/csv-schema/csv-schema-1.0.html](http://digital-preservation.github.io/csv-schema/csv-schema-1.0.html)

Sources:

* [https://tools.ietf.org/html/rfc4180](https://tools.ietf.org/html/rfc4180)

