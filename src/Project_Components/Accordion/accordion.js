const accordionData = [
  {
    id: 1,
    question: "What is an accordion component?",
    answer: "An accordion is a vertically stacked list of items that can be expanded or collapsed to reveal or hide content associated with them."
  },
  {
    id: 2,
    question: "Why use an accordion?",
    answer: "Accordions are useful when you want to toggle between hiding and showing large amounts of content, helping to reduce page clutter."
  },
  {
    id: 3,
    question: "Is it possible to have multiple items open at once?",
    answer: "Yes, depending on the implementation, you can allow multiple sections to be expanded simultaneously or restrict it to only one at a time."
  },
  {
    id: 4,
    question: "How do you implement an accordion in React?",
    answer: "In React, you typically manage the state of which item is expanded (using useState) and conditionally render the content based on that state."
  }
];

export default accordionData;
