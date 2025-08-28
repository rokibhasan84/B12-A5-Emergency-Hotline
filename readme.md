1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

Answer: When we need to use a single or specific element with a unique name (Id) in DOM.
Like, document.getElementById('Id-name').

      When we need to use multiple
elements that share a specific class name. It can be do dynamic interfaces where elements with that class are frequently added or removed.
Like, document.getElementsByClassName('class-name').

       When we need to select the first
element that matches a complex CSS selector. 

      When we need to select the all
element that matches a complex CSS selector. 
Like, document.querySelectorAll('.class-name').


2. How do you **create and insert a new element into the DOM**?

Answer: We can use this ( createElement() ) to create a new HTML element into the DOM.
Like,  const newParagraph = document.createElement('p');
We can also add content, add attributes and we can insert append child to any HTML elements if we locate the parent element.


3. What is **Event Bubbling** and how does it work?
Answer: 
      Event bubbling in JavaScript is a
mechanism within the Document Object Model (DOM) event propagation process. When an event, such as a click or a keypress, occurs on an element, that event does not simply stop at the target element. Instead, it "bubbles up" through the DOM tree, from the target element to its immediate parent, then to the grandparent, and so on, all the way up to the document object.

How it works:

Event Trigger:
  An event is initiated on a specific DOM element (the "target element"). For example, a user clicks a button.
Handlers on Target:
  Any event handlers attached directly to the target element for that specific event type are executed first.
Bubbling Up:
  The event then "bubbles" up the DOM hierarchy. This means that the browser checks if any parent elements of the target element also have event handlers attached for the same event type.
Parent Handlers Executed:
If a parent element has an event handler for that event, it will be triggered and executed. This process continues up the DOM tree, from parent to grandparent, until it reaches the document object (or window, depending on the event).

Stopping Bubbling:
You can prevent an event from bubbling further up the DOM tree using event.stopPropagation(). When called within an event handler, this method stops the event from propagating to ancestor elements.



4. What is **Event Delegation** in JavaScript? Why is it useful?

Answer: 
Event delegation is a powerful technique that simplifies event handling, improves performance, and enhances the flexibility of your code. By leveraging the event bubbling mechanism, you can efficiently manage events on a group of elements rather than dealing with each one individually.

Efficiency: Imagine you have a list of items, each requiring a click event. Instead of attaching a click handler to each item, event delegation allows you to attach a single listener to the parent container. This results in less code and better performance, especially for large sets of elements.

Dynamism: Event delegation is particularly useful when dealing with dynamic content. As new elements are added or removed, the event listener remains attached to the parent, reducing the need for constant reattachment. 




5. What is the difference between **preventDefault() and stopPropagation()** methods?

Answer : The preventDefault() and stopPropagation() methods in JavaScript, both part of the Event object.

preventDefault() :
This method prevents the default action associated with a specific event from occurring. Default actions are the standard behaviors the browser performs in response to certain events.


Like -  
Preventing a form from submitting when a "submit" button is clicked.
Stopping a link from navigating to its href target when clicked.
Disabling default scrolling behavior on touch events.

stopPropagation():
This method stops the event from propagating further through the DOM tree. Events in the DOM typically go through three phases: capturing, target, and bubbling. stopPropagation() prevents the event from continuing its journey up or down the DOM hierarchy.

Like - 
Preventing a click on a child element from triggering a click handler on its parent element (bubbling phase).
Stopping an event from reaching other event listeners on parent or sibling elements.