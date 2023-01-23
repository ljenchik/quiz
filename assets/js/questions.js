let questions = [
  [
    'How do you write "Hello World" in an alert box?',
    [
      'alert("Hello World")',
      'alertBox("Hello World")',
      'msg("Hello World")',
      'msgBox("Hello World")',
    ],
    0,
  ],
  [
    "How to write an IF statement in JavaScript?",
    ["if i = 5", "if (i = 5) then", "if (i === 5)", "if i == 5 then"],
    2,
  ],
  [
    "Inside which HTML element do we put the JavaScript?",
    ["<js>", "<script>", "<javascript>", "<scripting>"],
    1,
  ],
  [
    `What is the correct JavaScript syntax to change the content of the HTML element below?
  <p id="demo">How are you?</p>`,
    [
      `document.getElementsByName("p").innerHTML = "Hello World!"`,
      `document.getElementsById("demo").innerHTML = "Hello World!"`,
      `document.getElement("p").innerHTML = "Hello World!"`,
      `document.querySelector(".demo").innerHTML = "Hello World!"`,
    ],
    1,
  ],
  [
    `What is the correct syntax for referring to an external script called "xxx.js"?`,
    [
      `<script href="xxx.js">`,
      `<script name="xxx.js">`,
      `<script src="xxx.js">`,
      `<script html="xxx.js">`,
    ],
    2,
  ],
  [
    `How does a FOR loop start?`,
    [
      `for (i = 0; i <=5)`,
      `for (i <=5; i++)`,
      `for i = 0; i to 5)`,
      `for (i = 0; i <=5; i++)`,
    ],
    3,
  ],
  [
    "Which of the following type of variable is visible only within a function where it is defined?",
    [
      "global variable",
      "local variable",
      "both of the above",
      "none of the above",
    ],
    1,
  ],
  [
    "Which of the following function of Array object returns a new array comprised of this array joined with other array(s) and/or value(s)?",
    ["pop()", "push()", "some()", "concat()"],
    3,
  ],
  [
    "Which of the following function of Array object removes the first element from an array and returns that element?",
    ["reverse()", "shift()", "slice()", "some()"],
    1,
  ],
  [
    "Which of the following function of String object returns the calling string value converted to upper case?",
    ["toLocaleUpperCase()", "toUpperCase()", "toString()", "substring()"],
    1,
  ],
];
