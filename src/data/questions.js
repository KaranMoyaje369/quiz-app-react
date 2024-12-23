export const Questions = {
  Html: [
    {
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Preprocessor",
        "Hyper Text Markup Language",
        "Hyper Text Multiple Language",
        "Hyper Tool Multi Language",
      ],
      answer: "Hyper Text Markup Language",
    },
    {
      question: "Which HTML tag is used to define an internal stylesheet?",
      options: ["<style>", "<script>", "<css>", "<link>"],
      answer: "<style>",
    },
    {
      question: "Which is the correct HTML element for inserting a line break?",
      options: ["<br>", "<lb>", "<break>", "<newline>"],
      answer: "<br>",
    },
    {
      question: "What is the correct syntax for creating a hyperlink in HTML?",
      options: [
        "<a url='url'>link</a>",
        "<a href='url'>link</a>",
        "<a>url</a>",
        "<link href='url'>",
      ],
      answer: "<a href='url'>link</a>",
    },
    {
      question: "Which HTML tag is used to display a picture on a webpage?",
      options: ["<img>", "<picture>", "<photo>", "<src>"],
      answer: "<img>",
    },
    {
      question: "What does the <title> tag define in an HTML document?",
      options: [
        "The main heading of the page",
        "The title bar text",
        "The subtitle of the document",
        "The footer text",
      ],
      answer: "The title bar text",
    },
    {
      question: "Which attribute is used in HTML to specify inline styles?",
      options: ["class", "styles", "style", "id"],
      answer: "style",
    },
    {
      question: "Which tag is used to define a table in HTML?",
      options: ["<table>", "<tab>", "<td>", "<tr>"],
      answer: "<table>",
    },
    {
      question:
        "Which HTML element is used to specify a footer for a document or section?",
      options: ["<footer>", "<bottom>", "<section>", "<end>"],
      answer: "<footer>",
    },
    {
      question: "Which doctype declaration is correct for HTML5?",
      options: [
        "<!DOCTYPE html5>",
        "<!DOCTYPE HTML>",
        "<!DOCTYPE HTML5>",
        "<!DOCTYPE html>",
      ],
      answer: "<!DOCTYPE html>",
    },
  ],

  Css: [
    {
      question: "What does CSS stand for?",
      options: [
        "Creative Style Sheets",
        "Cascading Style Sheets",
        "Colorful Style Sheets",
        "Computer Style Sheets",
      ],
      answer: "Cascading Style Sheets",
    },
    {
      question: "Which property is used to change the background color in CSS?",
      options: ["background-color", "color", "bgcolor", "background"],
      answer: "background-color",
    },
    {
      question: "Which is the correct syntax to link an external CSS file?",
      options: [
        "<style src='styles.css'>",
        "<stylesheet>styles.css</stylesheet>",
        "<link rel='stylesheet' href='styles.css'>",
        "<css>styles.css</css>",
      ],
      answer: "<link rel='stylesheet' href='styles.css'>",
    },
    {
      question:
        "Which CSS property is used to change the text color of an element?",
      options: ["fgcolor", "color", "text-color", "font-color"],
      answer: "color",
    },
    {
      question: "How do you add a border to an element in CSS?",
      options: [
        "border: 1px solid black;",
        "border-color: black;",
        "border-style: solid;",
        "border-width: 1px;",
      ],
      answer: "border: 1px solid black;",
    },
    {
      question:
        "Which property is used to control the spacing between lines of text?",
      options: ["line-height", "spacing", "letter-spacing", "text-indent"],
      answer: "line-height",
    },
    {
      question: "How do you select an element with the id 'header' in CSS?",
      options: ["#header", ".header", "header", "*header"],
      answer: "#header",
    },
    {
      question: "Which property is used to make text bold in CSS?",
      options: ["font-style", "text-decoration", "font-weight", "font-bold"],
      answer: "font-weight",
    },
    {
      question: "What is the default value of the position property in CSS?",
      options: ["static", "relative", "absolute", "fixed"],
      answer: "static",
    },
    {
      question:
        "Which shorthand property is used to set all the margin properties in one declaration?",
      options: ["margin", "padding", "border", "spacing"],
      answer: "margin",
    },
  ],
  Bootstrap: [
    {
      question: "What is Bootstrap?",
      options: [
        "A JavaScript framework",
        "A CSS framework",
        "A database management system",
        "A programming language",
      ],
      answer: "A CSS framework",
    },
    {
      question:
        "Which Bootstrap class is used to create a responsive container?",
      options: [
        ".container",
        ".container-fluid",
        ".container-responsive",
        ".container-fixed",
      ],
      answer: ".container",
    },
    {
      question:
        "Which class provides a button with primary styling in Bootstrap?",
      options: ["btn-secondary", "btn-primary", "btn-default", "btn-basic"],
      answer: "btn-primary",
    },
    {
      question: "How many columns are there in the Bootstrap grid system?",
      options: ["6", "8", "12", "16"],
      answer: "12",
    },
    {
      question: "Which class is used to make an image responsive in Bootstrap?",
      options: [
        "img-responsive",
        "img-fluid",
        "image-responsive",
        "responsive-image",
      ],
      answer: "img-fluid",
    },
    {
      question:
        "Which class is used to add padding to an element in Bootstrap?",
      options: ["p-*", "pd-*", "pad-*", "padding-*"],
      answer: "p-*",
    },
    {
      question:
        "Which class is used to hide an element only on small screens in Bootstrap?",
      options: ["d-sm-none", "d-xs-none", "hide-sm", "hidden-sm"],
      answer: "d-sm-none",
    },
    {
      question: "What is the purpose of the .navbar class in Bootstrap?",
      options: [
        "To style the navigation bar",
        "To align buttons",
        "To create responsive tables",
        "To set margins and padding",
      ],
      answer: "To style the navigation bar",
    },
    {
      question: "Which Bootstrap class is used to align text to the center?",
      options: ["text-middle", "text-center", "align-center", "center-text"],
      answer: "text-center",
    },
    {
      question: "Which class is used to apply a card layout in Bootstrap?",
      options: ["card-layout", "card", "panel-card", "card-container"],
      answer: "card",
    },
  ],
  Javascript: [
    {
      question: "What is JavaScript?",
      options: [
        "A server-side programming language",
        "A client-side scripting language",
        "A database management language",
        "A style sheet language",
      ],
      answer: "A client-side scripting language",
    },
    {
      question: "Which company developed JavaScript?",
      options: ["Microsoft", "Netscape", "Sun Microsystems", "Google"],
      answer: "Netscape",
    },
    {
      question: "Which symbol is used for single-line comments in JavaScript?",
      options: ["#", "//", "/* */", "--"],
      answer: "//",
    },
    {
      question: "How can you declare a variable in JavaScript?",
      options: [
        "var, let, const",
        "var, let, int",
        "let, int, const",
        "int, const, let",
      ],
      answer: "var, let, const",
    },
    {
      question:
        "Which method is used to find the length of a string in JavaScript?",
      options: ["strlen()", "length()", "strlength()", ".length"],
      answer: ".length",
    },
    {
      question:
        "Which operator is used to compare both value and type in JavaScript?",
      options: ["==", "===", "=", "!=="],
      answer: "===",
    },
    {
      question: "How do you call a function named 'myFunction' in JavaScript?",
      options: [
        "call myFunction()",
        "myFunction()",
        "call function myFunction()",
        "execute myFunction()",
      ],
      answer: "myFunction()",
    },
    {
      question:
        "Which method is used to add an element to the end of an array?",
      options: ["push()", "pop()", "append()", "add()"],
      answer: "push()",
    },
    {
      question: "What does 'typeof' operator do in JavaScript?",
      options: [
        "Checks the type of a variable",
        "Checks the existence of a variable",
        "Checks the value of a variable",
        "Converts a variable to a string",
      ],
      answer: "Checks the type of a variable",
    },
    {
      question:
        "Which function is used to parse a string into a floating-point number in JavaScript?",
      options: ["parseInt()", "parseFloat()", "Number()", "toFloat()"],
      answer: "parseFloat()",
    },
  ],
};
