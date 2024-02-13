
Drum Machine Demo
Overview
This drum machine demo allows users to play different drum and chord sounds using either their computer keyboard or by clicking on the drum pads displayed on the webpage. The sounds included are sourced from the Monte Booker sound collection, specifically tailored to include kicks, snares, hi-hats, and chords.

Features
Keyboard Triggering: Each drum pad can be activated by pressing specific keys on the keyboard ('a', 's', 'd', 'f', 'z', 'x', 'c', 'v').
Mouse Click Triggering: Users can also trigger the sounds by clicking on the corresponding drum pad on the webpage.
Visual Feedback: Drum pads provide visual feedback by changing color when active, enhancing the user interaction experience.
Setup
HTML: Ensure the index.html file is set up with a structure containing a series of div elements with class pad and unique classes from pad1 to pad8 for the active drum pads. Additional pads are included but not used in this demo.

CSS: Verify the inclusion of the styles.css file in the project to apply the visual styles for the drum pads, including colors for default, hover, and active states, as well as layout adjustments.

JavaScript: The app.js file contains the logic for triggering sounds and managing pad states. It maps keyboard keys to drum pad sounds and manages the playback and visual feedback.

Usage
Start: Load the HTML page in a browser to start the drum machine. Ensure all related files (app.js, styles.css, and sound files) are correctly placed in your project directory.
Play Sounds:
Keyboard: Press 'a', 's', 'd', 'f', 'z', 'x', 'c', or 'v' to play the corresponding sounds.
Mouse Click: Click on any of the active drum pads to play the assigned sound.
Customization
Sound Bank: Modify the soundBank object in app.js to include additional sounds or change existing ones. Point to the correct file path of your sound files.
Key Mapping: Adjust the keyMapping object to change which keys trigger which pads.
Visual Styles: Customize the look and feel by modifying styles.css. Change colors, sizes, or the layout to fit your preference.
Dependencies
This demo uses plain HTML, CSS, and JavaScript and does not require any external libraries or frameworks.
Sound files must be placed within the project directory and correctly referenced in app.js.
Note
This demo is designed for educational purposes and showcases basic web development techniques. It provides a foundation that can be expanded with more features and customized to create a more complex drum machine or musical instrument interface.
