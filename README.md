# Course Registration Project


<h2>State Management In My Project</h2>
<hr><ul>
<li>In my project i adopted a fundamental state management approach using only React's built-in state management capabilities. This approach allowed me to effectively manage the application's state within individual components without relying on external libraries or context providers.
</li></ul>
<ul><li>The core of my state management strategy was centered around component-level state. Each component responsible for rendering specific UI elements or managing particular functionalities had its own state. For instance, i used component state to track form button and UI-related changes.
</li></ul>
<ul><li>
To share state between parent and child components, i utilized prop drilling. This technique involved passing state and callback functions as props from parent components to child components. This way, i maintained a unidirectional flow of data, ensuring that components had access to the state they needed.
</li></ul>
<ul><li>
State updates were triggered by user interactions and asynchronous operations. Event handlers were defined within components to handle user input, such as button clicks. These event handlers were responsible for updating the component's state and triggering re-renders.
</li></ul>
<ul><li>
Through this project, I  gained a deep understanding of React's core state management capabilities. I learned to strike a balance between component-level state and prop drilling to create maintainable and performant code. While basic React state management was suitable for this project's scope, i also recognized the benefits of more advanced state management solutions for larger applications.
</li></ul><br>
<h2>Features</h2>
<hr><ul>
<li>A clean and user-friendly interface that makes purchasing a course simplified for students as well as a responsive design that ensures accessibility on various devices.They can easily see the the description of desired courses, credits and prices altogether.
</li>
</ul>
<ul>
<li>Anyone can instantly buy desired courses effortlessly and show the total amount they have to pay.
</li>
</ul>
<ul>
<li>Learners can see the remaining course credit when acquiring the courses.If they did not have enough credit hour they will have an error,also if they want to select a courses couple of times it will give a notification that its already bought!</li>
</ul>
