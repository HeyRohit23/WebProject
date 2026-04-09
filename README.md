💡 Core Concepts I Used
1. Two-Way Data Binding (Controlled Components)
In this project, I used Two-Way Binding for the search bar and note inputs.
What it is: It means the "Code" and the "Screen" are always in sync.
How it works: When you type in the input box, it updates the State (the code). If the code changes the State, the text in the input box updates automatically. They are "tied" together.

2. State Management (useState)
I used the useState hook to keep track of data that changes, like the list of notes or the current page number. Whenever the state changes, React automatically updates the parts of the screen that need it without refreshing the whole page.

3. Side Effects (useEffect)
I used useEffect to handle "outside" tasks, like fetching images from an API when the page loads. It tells the app: "Once you are visible on the screen, go get the data."

4. Props (Properties)
I used Props to pass information from a parent component to a child component (like passing image data into a Card component). This keeps the code modular and reusable.
