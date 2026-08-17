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
{slug:"jpg-to-webp",category:"image",name:"JPG to WebP",title:"JPG to WebP Converter Online — Free",description:"Convert JPG images to WebP in your browser.",run:jpgToWebp},
{slug:"png-to-webp",category:"image",name:"PNG to WebP",title:"PNG to WebP Converter Online — Free",description:"Convert PNG images to WebP in your browser.",run:pngToWebp},
{slug:"webp-to-jpg",category:"image",name:"WebP to JPG",title:"WebP to JPG Converter Online — Free",description:"Convert WebP images to JPG in your browser.",run:webpToJpg}] ;
