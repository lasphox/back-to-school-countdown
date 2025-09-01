## 🏫 Back to School Countdown Timer

An elegant, visually appealing countdown timer and progress tracker for the upcoming school year. Designed with modern UI/UX principles and smooth animations, this web app helps students and parents keep track of the days, hours, minutes, and seconds remaining until school starts, alongside a dynamic progress bar and calendar integration.

## Project Overview

The **Back to School Countdown Timer** is a responsive, dark-themed web application built with vanilla JavaScript, HTML5, and CSS3. It features a live countdown to a fixed target date (school opening day), a progress bar showing the year’s progress, and a convenient "Add to Calendar" button to save the event effortlessly.

This lightweight tool is perfect for educational websites, personal blogs, or school portals seeking an engaging way to remind users about the approaching school start date.

## Key Features

- **Live Countdown** updating every second with smooth animation.
- **Days, Hours, Minutes, Seconds** displayed in distinct, interactive cards.
- **Dynamic Progress Bar** visualizing the percentage of the academic year elapsed.
- **"Add to Calendar" Button** for quick event addition to personal calendars.
- **Responsive Design** optimized for desktop, tablet, and mobile devices.
- **Dark Theme** with subtle blurred background and modern typography.
- Clean, modular codebase for easy customization and scalability.

## How It Works

1. The countdown calculates the time difference between the current date and the predefined school opening date (September 11, 2025, 9:00 AM).
2. The progress bar reflects the elapsed percentage of the full academic year starting from the previous school opening date (September 11, 2024).
3. The countdown numbers animate whenever they update, providing a smooth and dynamic user experience.
4. When the countdown reaches zero, the headline changes to indicate the school year has started.
5. Users can click the **Add to Calendar** button to export the school start event to their personal calendar apps.

## 🛠Installation & Setup

### Prerequisites

- Modern web browser (Chrome, Firefox, Edge, Safari)
- Basic knowledge of HTML, CSS, and JavaScript (optional, for customization)

### Getting Started

1. **Clone or download the repository:**

```bash
git clone https://github.com/KaloudasDev/school-countdown-timer.git
cd school-countdown-timer
````

2. **Open `index.html`** in your preferred browser.

3. **Customize the target date** by editing the `TARGET` constant inside `script.js` if needed.

4. (Optional) Replace the background image by changing the URL in `style.css` under `.background-blur`.

## Customization

* **Change Target Date:**
  Modify the `TARGET` variable in `script.js` to your desired event date/time.

* **Style Adjustments:**
  Use CSS variables defined in `:root` for quick color scheme changes.

* **Background Image:**
  Update the `.background-blur` selector in `style.css` with your own image URL or remove for a plain background.

## Folder Structure

```
school-countdown-timer/
├── assets/
│   └── background.webp           # Background image
├── index.html                    # Main HTML file
├── style.css                    # Styling with CSS variables and animations
└── script.js                    # Countdown and progress logic with animations
```


## Technologies Used

* **HTML5** for semantic markup
* **CSS3** with Flexbox, variables, animations
* **Vanilla JavaScript** for time calculations, DOM updates, and animations
* Responsive design principles for cross-device compatibility
* Google Fonts (Inter & Montserrat) for modern typography

## Contribution Guidelines

Contributions are warmly welcomed! To help improve this project:

* Fork the repository and create your feature branch (`git checkout -b feature/your-feature`)
* Commit your changes clearly (`git commit -m "Add feature XYZ"`)
* Push to your branch (`git push origin feature/your-feature`)
* Open a Pull Request describing your modifications and improvements

Please ensure code is clean, well-documented, and tested before submitting.

## License

This project is licensed under the **MIT License** – a permissive license that enables free use, modification, and distribution. See the [LICENSE](./LICENSE) file for full details.

## Author

Created and maintained by **KaloudasDev**.
If you find this project helpful or inspiring, your ⭐️ star on GitHub would be greatly appreciated!

## Useful Links

* [GitHub Repository](https://github.com/KaloudasDev/back-to-school-countdown)
* [Contact](mailto:kaloudasdev@gmail.com)
