# APPPRO-example
Issue with event listeners in native elements e.g inputs and textareas

Steps to reproduce:

1) Open panel PProPanel (arrow);
2) Open debugging console;
2) Type smth into input or textarea;
3) Move between characters with keyboard arrows, check that caret moves as expected and event prints into console;
4) Make an import using 'Drag and drop import' block;
5) Focus the element from step 3
6) Try to move between characters with arrow buttons

Actual result:
Nothing happens, caret doesn't move, event doesn't handle. Instead of this focus move between imported files

Expected result:
Caret moves between characters when input element is focused
