# FormWidgetEditor

FormWidgetEditor is a dynamic React-based form widget editor designed to create and customize forms with various settings, such as titles, subtitles, submit buttons, and more. It allows for live editing of form properties, including text content, font size, font color, alignment, etc.

## Technologies

- **NodeJs**
- **React**
- **TypeScript**
- **Expressjs**
- **SQLite**

## Prerequisites

You’ll need to have the following installed on your machine:

- **Node.js** (v20.17.0) You can download it from the [official website](https://nodejs.org/en/download/package-manager). Recommended version
- **npm** (v10.8.2) Comes with node.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/BrayanDurazo/FormWidgetEditor.git
   cd FormWidgetEditor
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Run both the development server and the client with the next command (need to be in the root folder of the repo):

   ```bash
   npm run start
   ```

4. Now that both sides are running, use your browser an go to the next URL to see the web app:
   ```bash
   http://localhost:5173
   ```

## Usage

After running the app, you can:

1. Modify the title, subtitle, and submit button text.
2. Adjust font size, text alignment, and colors for both titles and buttons.
3. Set fields like first name and last name as required.
4. The form editor allows live previewing of all changes, making it easy to see the final form design before applying it to your project.
5. You can check the different form widget settings that have been saved in the next URL:

   ```bash
   http://localhost:3000/formWidgets
   ```

## Test

- Run the following command (make sure you are in the repository root) to launch the client side unit test.

  ```bash
  npm run test -w client
  ```
