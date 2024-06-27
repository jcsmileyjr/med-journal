# Developer Documentation

## Software Details
* [Click to view: Medical Journal](https://medicaljournal.netlify.app)


## Site Map
1. **Landing Page**: Provide the user with various prompts (links to journals) to assist with accurately tagging the content and to initiate the creative process with a singular focus.

2. **Journal**: Enables users to provide an accurate account of their physical and emotional health status. The content can be accompanied by a brief summary.

3. **Logs**: The system presents a list of logs organized by date, tag, summary, and a brief description of the content. Upon selection, the full content is displayed by toggling it into view.

4. **Setting**: Provide the user with the option to select whether they would like to enable password protection for the application.

## Data Composition/Schema
Journal data point
- **date**: The date the health event happened
- **summary**: Title or descriptive identifier for the content
- **content**: Unique description provided by the user of the health event.
- **tag**: A common identifier to help sort the health event

## Tech Stack used
- **Next.js** is a frontend JavaScript framework, based on React but with server components/actions, used for displaying the user interface. 
- **TailwindCSS** is a CSS library utilized to quickly style the application. 
- **Jest** serves as a component testing framework. 
- **Netlify** is the hosting platform employed for hosting the application.
- **React-Secure-Storage** is a library specializing in encrypting local data and providing a unique key for each browser.

## Development Thoughts
1. If the user chooses to password protect the app, then a pop up should start the app.
2. Data is saved via indexDB storage.
3. IndexDB storage is protected through encryption, and a unique secure key is generated for each browser using the react-secure-storage library. 
2. Data is saved from the journal to a React's reducer that shares that information with the logs page. 
