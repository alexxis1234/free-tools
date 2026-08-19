import removeDuplicateLines from "../tools/text/removeDuplicateLines.js";
import removeEmptyLines from "../tools/text/removeEmptyLines.js";
import sortLines from "../tools/text/sortLines.js";
import sortLinesByLength from "../tools/text/sortLinesByLength.js";
import removeDuplicateWords from "../tools/text/removeDuplicateWords.js";
import reverseText from "../tools/text/reverseText.js";
import removeLineBreaks from "../tools/text/removeLineBreaks.js";
import extractEmails from "../tools/text/extractEmails.js";
import extractUrls from "../tools/text/extractUrls.js";
import extractPhoneNumbers from "../tools/text/extractPhoneNumbers.js";
import extractNumbers from "../tools/text/extractNumbers.js";
import removePunctuation from "../tools/text/removePunctuation.js";
import removeSpaces from "../tools/text/removeSpaces.js";
import removeSpecialCharacters from "../tools/text/removeSpecialCharacters.js";
import caseConverter from "../tools/text/caseConverter.js";
import jsonFormatter from "../tools/developer/jsonFormatter.js";
import jsonValidator from "../tools/developer/jsonValidator.js";
import jsonMinifier from "../tools/developer/jsonMinifier.js";
import jsonToCsv from "../tools/developer/jsonToCsv.js";
import jsonToXml from "../tools/developer/jsonToXml.js";
import base64Encoder from "../tools/developer/base64Encoder.js";
import base64Decoder from "../tools/developer/base64Decoder.js";
import urlEncoder from "../tools/developer/urlEncoder.js";
import urlDecoder from "../tools/developer/urlDecoder.js";
import uuidGenerator from "../tools/developer/uuidGenerator.js";
import uuidValidator from "../tools/developer/uuidValidator.js";
import unixTimestampConverter from "../tools/developer/unixTimestampConverter.js";
import jpgToWebp from "../tools/image/jpgToWebp.js";
import pngToWebp from "../tools/image/pngToWebp.js";
import webpToJpg from "../tools/image/webpToJpg.js";
import webpToPng from "../tools/image/webpToPng.js";
import wordCounter from "../tools/text/wordCounter.js";
import characterCounter from "../tools/text/characterCounter.js";
import characterCounterNoSpaces from "../tools/text/characterCounterNoSpaces.js";
import lineCounter from "../tools/text/lineCounter.js";
import sentenceCounter from "../tools/text/sentenceCounter.js";
import paragraphCounter from "../tools/text/paragraphCounter.js";
import trimWhitespace from "../tools/text/trimWhitespace.js";
import collapseSpaces from "../tools/text/collapseSpaces.js";
import addLineNumbers from "../tools/text/addLineNumbers.js";
import removeLineNumbers from "../tools/text/removeLineNumbers.js";
import sortLinesReverse from "../tools/text/sortLinesReverse.js";
import sortLinesNumeric from "../tools/text/sortLinesNumeric.js";
import shuffleLines from "../tools/text/shuffleLines.js";
import normalizeLineEndings from "../tools/text/normalizeLineEndings.js";
import tabsToSpaces from "../tools/text/tabsToSpaces.js";
import spacesToTabs from "../tools/text/spacesToTabs.js";
import slugGenerator from "../tools/text/slugGenerator.js";
import textToAscii from "../tools/text/textToAscii.js";
import asciiToText from "../tools/text/asciiToText.js";
import extractHashtags from "../tools/text/extractHashtags.js";
import extractMentions from "../tools/text/extractMentions.js";
import extractIpAddresses from "../tools/text/extractIpAddresses.js";
import extractHexColors from "../tools/text/extractHexColors.js";
import extractDates from "../tools/text/extractDates.js";
import extractWords from "../tools/text/extractWords.js";
import countUniqueWords from "../tools/text/countUniqueWords.js";
import countUniqueLines from "../tools/text/countUniqueLines.js";
import removeVowels from "../tools/text/removeVowels.js";
import keepLetters from "../tools/text/keepLetters.js";
import keepDigits from "../tools/text/keepDigits.js";
import removeDigits from "../tools/text/removeDigits.js";
import extractCapitalizedWords from "../tools/text/extractCapitalizedWords.js";
import dedentText from "../tools/text/dedentText.js";
import indentText from "../tools/text/indentText.js";
import wrapText from "../tools/text/wrapText.js";
import csvToJson from "../tools/developer/csvToJson.js";
import xmlToJson from "../tools/developer/xmlToJson.js";
import jsonEscape from "../tools/developer/jsonEscape.js";
import jsonUnescape from "../tools/developer/jsonUnescape.js";
import htmlEncode from "../tools/developer/htmlEncode.js";
import htmlDecode from "../tools/developer/htmlDecode.js";
import urlParse from "../tools/developer/urlParse.js";
import queryStringToJson from "../tools/developer/queryStringToJson.js";
import jsonToQueryString from "../tools/developer/jsonToQueryString.js";
import jwtDecoder from "../tools/developer/jwtDecoder.js";
import regexEscape from "../tools/developer/regexEscape.js";
import regexTest from "../tools/developer/regexTest.js";
import jsonSortKeys from "../tools/developer/jsonSortKeys.js";
import jsonFlatten from "../tools/developer/jsonFlatten.js";
import jsonArrayToLines from "../tools/developer/jsonArrayToLines.js";
import linesToJsonArray from "../tools/developer/linesToJsonArray.js";
import xmlMinifier from "../tools/developer/xmlMinifier.js";
import xmlFormatter from "../tools/developer/xmlFormatter.js";
import htmlMinifier from "../tools/developer/htmlMinifier.js";
import cssMinifier from "../tools/developer/cssMinifier.js";
import jsMinifier from "../tools/developer/jsMinifier.js";
import htmlTagExtractor from "../tools/developer/htmlTagExtractor.js";
import htmlLinkExtractor from "../tools/developer/htmlLinkExtractor.js";
import jsonKeysExtractor from "../tools/developer/jsonKeysExtractor.js";
import jsonValuesExtractor from "../tools/developer/jsonValuesExtractor.js";
import jsonToLines from "../tools/developer/jsonToLines.js";
import linesToJson from "../tools/developer/linesToJson.js";
import csvToTsv from "../tools/developer/csvToTsv.js";
import tsvToCsv from "../tools/developer/tsvToCsv.js";
import numberBaseConverter from "../tools/developer/numberBaseConverter.js";
import binaryToDecimal from "../tools/developer/binaryToDecimal.js";
import decimalToBinary from "../tools/developer/decimalToBinary.js";
import hexToDecimal from "../tools/developer/hexToDecimal.js";
import decimalToHex from "../tools/developer/decimalToHex.js";

export const categories={text:{name:"Text Tools",title:"Free Text Tools Online",description:"Free browser-based tools for cleaning, sorting and extracting text."},developer:{name:"Developer Tools",title:"Free Developer Tools Online",description:"Free browser-based developer utilities for JSON, Base64, URLs and UUIDs."},image:{name:"Image Tools",title:"Free Image Tools Online",description:"Free browser-based image conversion tools that process files locally."}};

export const tools=[
{slug:"remove-duplicate-lines",category:"text",name:"Remove Duplicate Lines",title:"Remove Duplicate Lines Online — Free",description:"Remove duplicate lines from text instantly.",run:removeDuplicateLines},
{slug:"remove-empty-lines",category:"text",name:"Remove Empty Lines",title:"Remove Empty Lines Online — Free",description:"Remove blank lines from text instantly.",run:removeEmptyLines},
{slug:"sort-lines",category:"text",name:"Sort Lines",title:"Sort Lines Online — Free",description:"Sort lines alphabetically.",run:sortLines},
{slug:"sort-lines-by-length",category:"text",name:"Sort Lines by Length",title:"Sort Lines by Length Online — Free",description:"Sort lines from shortest to longest.",run:sortLinesByLength},
{slug:"remove-duplicate-words",category:"text",name:"Remove Duplicate Words",title:"Remove Duplicate Words Online — Free",description:"Remove repeated words while preserving the first occurrence.",run:removeDuplicateWords},
{slug:"reverse-text",category:"text",name:"Reverse Text",title:"Reverse Text Online — Free",description:"Reverse text instantly.",run:reverseText},
{slug:"remove-line-breaks",category:"text",name:"Remove Line Breaks",title:"Remove Line Breaks Online — Free",description:"Join text lines into one line.",run:removeLineBreaks},
{slug:"extract-emails",category:"text",name:"Extract Emails",title:"Extract Email Addresses from Text — Free",description:"Extract email addresses from pasted text.",run:extractEmails},
{slug:"extract-urls",category:"text",name:"Extract URLs",title:"Extract URLs from Text — Free",description:"Extract HTTP and HTTPS URLs from text.",run:extractUrls},
{slug:"extract-phone-numbers",category:"text",name:"Extract Phone Numbers",title:"Extract Phone Numbers from Text — Free",description:"Extract common phone-number patterns from text.",run:extractPhoneNumbers},
{slug:"extract-numbers",category:"text",name:"Extract Numbers",title:"Extract Numbers from Text — Free",description:"Extract numbers from text.",run:extractNumbers},
{slug:"remove-punctuation",category:"text",name:"Remove Punctuation",title:"Remove Punctuation from Text — Free",description:"Remove punctuation marks from text.",run:removePunctuation},
{slug:"remove-spaces",category:"text",name:"Remove Spaces",title:"Remove Spaces from Text — Free",description:"Remove whitespace from text.",run:removeSpaces},
{slug:"remove-special-characters",category:"text",name:"Remove Special Characters",title:"Remove Special Characters from Text — Free",description:"Remove special characters while keeping letters and numbers.",run:removeSpecialCharacters},
{slug:"case-converter",category:"text",name:"Case Converter",title:"Case Converter Online — Free",description:"Convert text to lowercase, uppercase or title case.",run:caseConverter},
{slug:"word-counter",category:"text",name:"Word Counter",title:"Word Counter Online — Free",description:"Count words in text instantly in your browser.",run:wordCounter},
{slug:"character-counter",category:"text",name:"Character Counter",title:"Character Counter Online — Free",description:"Count characters in text instantly.",run:characterCounter},
{slug:"character-counter-no-spaces",category:"text",name:"Character Counter Without Spaces",title:"Character Counter Without Spaces — Free",description:"Count characters while ignoring spaces and line breaks.",run:characterCounterNoSpaces},
{slug:"line-counter",category:"text",name:"Line Counter",title:"Line Counter Online — Free",description:"Count lines in text instantly.",run:lineCounter},
{slug:"sentence-counter",category:"text",name:"Sentence Counter",title:"Sentence Counter Online — Free",description:"Count sentences in text instantly.",run:sentenceCounter},
{slug:"paragraph-counter",category:"text",name:"Paragraph Counter",title:"Paragraph Counter Online — Free",description:"Count paragraphs in text instantly.",run:paragraphCounter},
{slug:"trim-whitespace",category:"text",name:"Trim Whitespace",title:"Trim Whitespace Online — Free",description:"Remove leading and trailing whitespace from every line.",run:trimWhitespace},
{slug:"collapse-spaces",category:"text",name:"Collapse Spaces",title:"Collapse Spaces Online — Free",description:"Replace repeated spaces with single spaces.",run:collapseSpaces},
{slug:"add-line-numbers",category:"text",name:"Add Line Numbers",title:"Add Line Numbers Online — Free",description:"Add line numbers to text with one click.",run:addLineNumbers},
{slug:"remove-line-numbers",category:"text",name:"Remove Line Numbers",title:"Remove Line Numbers Online — Free",description:"Remove numeric line prefixes from text.",run:removeLineNumbers},
{slug:"sort-lines-reverse",category:"text",name:"Reverse Sort Lines",title:"Reverse Sort Lines Online — Free",description:"Sort lines in reverse alphabetical order.",run:sortLinesReverse},
{slug:"sort-lines-numeric",category:"text",name:"Sort Lines Numerically",title:"Sort Lines Numerically Online — Free",description:"Sort lines by their numeric value.",run:sortLinesNumeric},
{slug:"shuffle-lines",category:"text",name:"Shuffle Lines",title:"Shuffle Lines Online — Free",description:"Randomize the order of text lines.",run:shuffleLines},
{slug:"normalize-line-endings",category:"text",name:"Normalize Line Endings",title:"Normalize Line Endings Online — Free",description:"Normalize line endings to standard Unix-style newlines.",run:normalizeLineEndings},
{slug:"tabs-to-spaces",category:"text",name:"Tabs to Spaces",title:"Tabs to Spaces Converter — Free",description:"Convert tab characters to four spaces.",run:tabsToSpaces},
{slug:"spaces-to-tabs",category:"text",name:"Spaces to Tabs",title:"Spaces to Tabs Converter — Free",description:"Convert groups of four spaces to tabs.",run:spacesToTabs},
{slug:"slug-generator",category:"text",name:"Slug Generator",title:"Slug Generator Online — Free",description:"Create clean URL slugs from text.",run:slugGenerator},
{slug:"text-to-ascii",category:"text",name:"Text to ASCII Entities",title:"Text to ASCII Entities Converter — Free",description:"Convert non-ASCII characters to numeric HTML entities.",run:textToAscii},
{slug:"ascii-to-text",category:"text",name:"ASCII Entities to Text",title:"ASCII Entities to Text Converter — Free",description:"Decode numeric HTML entities into readable text.",run:asciiToText},
{slug:"extract-hashtags",category:"text",name:"Extract Hashtags",title:"Extract Hashtags from Text — Free",description:"Extract unique hashtags from text.",run:extractHashtags},
{slug:"extract-mentions",category:"text",name:"Extract Mentions",title:"Extract Mentions from Text — Free",description:"Extract @mentions from text.",run:extractMentions},
{slug:"extract-ip-addresses",category:"text",name:"Extract IP Addresses",title:"Extract IP Addresses from Text — Free",description:"Extract IPv4 addresses from text.",run:extractIpAddresses},
{slug:"extract-hex-colors",category:"text",name:"Extract Hex Colors",title:"Extract Hex Colors from Text — Free",description:"Extract hexadecimal color codes from text.",run:extractHexColors},
{slug:"extract-dates",category:"text",name:"Extract Dates",title:"Extract Dates from Text — Free",description:"Extract common date patterns from text.",run:extractDates},
{slug:"extract-words",category:"text",name:"Extract Words",title:"Extract Words from Text — Free",description:"Extract unique words from text.",run:extractWords},
{slug:"count-unique-words",category:"text",name:"Count Unique Words",title:"Count Unique Words Online — Free",description:"Count distinct words in text.",run:countUniqueWords},
{slug:"count-unique-lines",category:"text",name:"Count Unique Lines",title:"Count Unique Lines Online — Free",description:"Count distinct lines in text.",run:countUniqueLines},
{slug:"remove-vowels",category:"text",name:"Remove Vowels",title:"Remove Vowels from Text — Free",description:"Remove vowels from Latin and Cyrillic text.",run:removeVowels},
{slug:"keep-letters",category:"text",name:"Keep Letters Only",title:"Keep Letters Only Online — Free",description:"Remove everything except letters from text.",run:keepLetters},
{slug:"keep-digits",category:"text",name:"Keep Digits Only",title:"Keep Digits Only Online — Free",description:"Extract digits from text.",run:keepDigits},
{slug:"remove-digits",category:"text",name:"Remove Digits",title:"Remove Digits from Text — Free",description:"Remove all digits from text.",run:removeDigits},
{slug:"extract-capitalized-words",category:"text",name:"Extract Capitalized Words",title:"Extract Capitalized Words — Free",description:"Extract words beginning with uppercase letters.",run:extractCapitalizedWords},
{slug:"dedent-text",category:"text",name:"Dedent Text",title:"Dedent Text Online — Free",description:"Remove common leading indentation from text.",run:dedentText},
{slug:"indent-text",category:"text",name:"Indent Text",title:"Indent Text Online — Free",description:"Add four spaces to the start of each line.",run:indentText},
{slug:"wrap-text",category:"text",name:"Wrap Text",title:"Wrap Text Online — Free",description:"Wrap text to approximately 80 characters per line.",run:wrapText},
{slug:"json-formatter",category:"developer",name:"JSON Formatter",title:"JSON Formatter Online — Free",description:"Format JSON and make it readable.",run:jsonFormatter},
{slug:"json-validator",category:"developer",name:"JSON Validator",title:"JSON Validator Online — Free",description:"Validate JSON syntax instantly.",run:jsonValidator},
{slug:"json-minifier",category:"developer",name:"JSON Minifier",title:"JSON Minifier Online — Free",description:"Minify JSON and remove unnecessary whitespace.",run:jsonMinifier},
{slug:"json-to-csv",category:"developer",name:"JSON to CSV",title:"JSON to CSV Converter Online — Free",description:"Convert an array of JSON objects to CSV.",run:jsonToCsv},
{slug:"json-to-xml",category:"developer",name:"JSON to XML",title:"JSON to XML Converter Online — Free",description:"Convert JSON objects to readable XML.",run:jsonToXml},
{slug:"base64-encoder",category:"developer",name:"Base64 Encoder",title:"Base64 Encoder Online — Free",description:"Encode UTF-8 text as Base64.",run:base64Encoder},
{slug:"base64-decoder",category:"developer",name:"Base64 Decoder",title:"Base64 Decoder Online — Free",description:"Decode Base64 text.",run:base64Decoder},
{slug:"url-encoder",category:"developer",name:"URL Encoder",title:"URL Encoder Online — Free",description:"Encode text for use in URLs.",run:urlEncoder},
{slug:"url-decoder",category:"developer",name:"URL Decoder",title:"URL Decoder Online — Free",description:"Decode URL-encoded text.",run:urlDecoder},
{slug:"uuid-generator",category:"developer",name:"UUID Generator",title:"UUID Generator Online — Free",description:"Generate random UUIDs in your browser.",run:uuidGenerator},
{slug:"uuid-validator",category:"developer",name:"UUID Validator",title:"UUID Validator Online — Free",description:"Check whether a UUID has a valid format.",run:uuidValidator},
{slug:"unix-timestamp-converter",category:"developer",name:"Unix Timestamp Converter",title:"Unix Timestamp Converter Online — Free",description:"Convert Unix timestamps to readable dates.",run:unixTimestampConverter},
{slug:"csv-to-json",category:"developer",name:"CSV to JSON",title:"CSV to JSON Converter Online — Free",description:"Convert CSV data to a JSON array in your browser.",run:csvToJson},
{slug:"xml-to-json",category:"developer",name:"XML to JSON",title:"XML to JSON Converter Online — Free",description:"Convert XML data to JSON in your browser.",run:xmlToJson},
{slug:"json-escape",category:"developer",name:"JSON Escape",title:"JSON Escape Online — Free",description:"Escape text as a JSON string.",run:jsonEscape},
{slug:"json-unescape",category:"developer",name:"JSON Unescape",title:"JSON Unescape Online — Free",description:"Decode a JSON string into plain text.",run:jsonUnescape},
{slug:"html-encoder",category:"developer",name:"HTML Encoder",title:"HTML Encoder Online — Free",description:"Encode special characters for safe HTML.",run:htmlEncode},
{slug:"html-decoder",category:"developer",name:"HTML Decoder",title:"HTML Decoder Online — Free",description:"Decode HTML entities into readable text.",run:htmlDecode},
{slug:"url-parser",category:"developer",name:"URL Parser",title:"URL Parser Online — Free",description:"Parse a URL into its main components.",run:urlParse},
{slug:"query-string-to-json",category:"developer",name:"Query String to JSON",title:"Query String to JSON Converter — Free",description:"Convert URL query parameters into JSON.",run:queryStringToJson},
{slug:"json-to-query-string",category:"developer",name:"JSON to Query String",title:"JSON to Query String Converter — Free",description:"Convert a JSON object into URL query parameters.",run:jsonToQueryString},
{slug:"jwt-decoder",category:"developer",name:"JWT Decoder",title:"JWT Decoder Online — Free",description:"Decode the header and payload of a JWT locally.",run:jwtDecoder},
{slug:"regex-escape",category:"developer",name:"Regex Escape",title:"Regex Escape Online — Free",description:"Escape special characters for use in regular expressions.",run:regexEscape},
{slug:"regex-tester",category:"developer",name:"Regex Tester",title:"Regex Tester Online — Free",description:"Test a regular expression against text. Use the first line for the pattern and second line for flags.",run:regexTest},
{slug:"json-sort-keys",category:"developer",name:"JSON Sort Keys",title:"JSON Sort Keys Online — Free",description:"Sort JSON object keys alphabetically.",run:jsonSortKeys},
{slug:"json-flattener",category:"developer",name:"JSON Flattener",title:"JSON Flattener Online — Free",description:"Flatten nested JSON objects into dotted keys.",run:jsonFlatten},
{slug:"json-array-to-lines",category:"developer",name:"JSON Array to Lines",title:"JSON Array to Lines Converter — Free",description:"Convert a JSON array into one value per line.",run:jsonArrayToLines},
{slug:"lines-to-json-array",category:"developer",name:"Lines to JSON Array",title:"Lines to JSON Array Converter — Free",description:"Convert lines of text into a JSON array.",run:linesToJsonArray},
{slug:"xml-minifier",category:"developer",name:"XML Minifier",title:"XML Minifier Online — Free",description:"Remove unnecessary whitespace from XML.",run:xmlMinifier},
{slug:"xml-formatter",category:"developer",name:"XML Formatter",title:"XML Formatter Online — Free",description:"Format XML into a more readable layout.",run:xmlFormatter},
{slug:"html-minifier",category:"developer",name:"HTML Minifier",title:"HTML Minifier Online — Free",description:"Minify HTML by removing comments and unnecessary whitespace.",run:htmlMinifier},
{slug:"css-minifier",category:"developer",name:"CSS Minifier",title:"CSS Minifier Online — Free",description:"Minify CSS in your browser.",run:cssMinifier},
{slug:"javascript-minifier",category:"developer",name:"JavaScript Minifier",title:"JavaScript Minifier Online — Free",description:"Remove comments and unnecessary whitespace from JavaScript.",run:jsMinifier},
{slug:"html-tag-extractor",category:"developer",name:"HTML Tag Extractor",title:"HTML Tag Extractor Online — Free",description:"Extract unique HTML tag names from markup.",run:htmlTagExtractor},
{slug:"html-link-extractor",category:"developer",name:"HTML Link Extractor",title:"HTML Link Extractor Online — Free",description:"Extract href URLs from HTML.",run:htmlLinkExtractor},
{slug:"json-keys-extractor",category:"developer",name:"JSON Keys Extractor",title:"JSON Keys Extractor Online — Free",description:"Extract unique keys from JSON.",run:jsonKeysExtractor},
{slug:"json-values-extractor",category:"developer",name:"JSON Values Extractor",title:"JSON Values Extractor Online — Free",description:"Extract primitive values from JSON.",run:jsonValuesExtractor},
{slug:"json-to-lines",category:"developer",name:"JSON to Lines",title:"JSON to Lines Converter Online — Free",description:"Convert a flat JSON object into key=value lines.",run:jsonToLines},
{slug:"lines-to-json",category:"developer",name:"Lines to JSON",title:"Lines to JSON Converter Online — Free",description:"Convert key=value lines into a JSON object.",run:linesToJson},
{slug:"csv-to-tsv",category:"developer",name:"CSV to TSV",title:"CSV to TSV Converter Online — Free",description:"Convert comma-separated values to tab-separated values.",run:csvToTsv},
{slug:"tsv-to-csv",category:"developer",name:"TSV to CSV",title:"TSV to CSV Converter Online — Free",description:"Convert tab-separated values to CSV.",run:tsvToCsv},
{slug:"number-base-converter",category:"developer",name:"Number Base Converter",title:"Number Base Converter Online — Free",description:"Convert an integer between numeric bases. Use NUMBER FROM_BASE TO_BASE.",run:numberBaseConverter},
{slug:"binary-to-decimal",category:"developer",name:"Binary to Decimal",title:"Binary to Decimal Converter Online — Free",description:"Convert binary numbers to decimal.",run:binaryToDecimal},
{slug:"decimal-to-binary",category:"developer",name:"Decimal to Binary",title:"Decimal to Binary Converter Online — Free",description:"Convert decimal integers to binary.",run:decimalToBinary},
{slug:"hex-to-decimal",category:"developer",name:"Hex to Decimal",title:"Hex to Decimal Converter Online — Free",description:"Convert hexadecimal numbers to decimal.",run:hexToDecimal},
{slug:"decimal-to-hex",category:"developer",name:"Decimal to Hex",title:"Decimal to Hex Converter Online — Free",description:"Convert decimal integers to hexadecimal.",run:decimalToHex},
{slug:"jpg-to-webp",category:"image",name:"JPG to WebP",title:"JPG to WebP Converter Online — Free",description:"Convert JPG images to WebP in your browser.",run:jpgToWebp},
{slug:"png-to-webp",category:"image",name:"PNG to WebP",title:"PNG to WebP Converter Online — Free",description:"Convert PNG images to WebP in your browser.",run:pngToWebp},
{slug:"webp-to-jpg",category:"image",name:"WebP to JPG",title:"WebP to JPG Converter Online — Free",description:"Convert WebP images to JPG in your browser.",run:webpToJpg},
{slug:"webp-to-png",category:"image",name:"WebP to PNG",title:"WebP to PNG Converter Online — Free",description:"Convert WebP images to PNG in your browser.",run:webpToPng}
];
