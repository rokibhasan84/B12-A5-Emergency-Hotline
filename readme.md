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

      Answer: We can use this (createElement()) to create a new HTML element into the DOM.
Like, const newParagraph = document.createElement('p');
We can also add content, add attributes and we can insert append child to any HTML element if we loacate the parent element.


3. What is **Event Bubbling** and how does it work?

      Answer: If you click on something inside, the thinks outside can be affected by that click.

Like, Suppose there is a <button> inside a <div>. When you click the button-
      1. First the button event will be fired
      2. Then div event will be fired
      3. Finally it can go to the body

This is even bubbling.


4. What is **Event Delegation** in JavaScript? Why is it useful?

        Answer: Event delegation is a technique where instead of providing separate event listeners for many child
        elements, an event listener is placed on their parent element. Because due to event bubbling, the parent element can also catch the events of the child element.

Why is it useful?

1. It works with less code – if there are 100 child elements, there is no need to provide separate listeners, just provide one in the parent.

2. Performance is better – the browser does not have to manage many event listeners.

3. Dynamic elements can be handled – if a new child element is added later, its event can also be caught using the event listener of the parent.



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