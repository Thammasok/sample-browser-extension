# Chrome Todo List Extension

A simple and clean todo list Chrome extension that helps you manage your tasks efficiently.

## Features

- Add new tasks
- Mark tasks as complete/incomplete
- Delete tasks
- Persistent storage using Chrome's sync storage
- Clean and responsive UI
- Works offline

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/sample-browser-extension.git
   ```

2. Open Chrome and go to `chrome://extensions/`

3. Enable "Developer mode" (toggle in the top-right corner)

4. Click "Load unpacked" and select the `to-do` directory from this repository

## Usage

1. Click the extension icon in the Chrome toolbar
2. To add a task:
   - Type your task in the input field
   - Press Enter or click the "Add" button
3. To mark a task as complete:
   - Click the checkbox next to the task
4. To delete a task:
   - Click the "Delete" button next to the task

## Project Structure

```
to-do/
├── images/             # Extension icons
├── manifest.json       # Extension configuration
├── popup.html         # Main interface
├── popup.js           # Core functionality
└── styles.css         # Styling
```

## Development

1. Make your changes to the files in the `to-do` directory
2. To test your changes:
   - Go to `chrome://extensions/`
   - Find the Todo List extension
   - Click the refresh icon
