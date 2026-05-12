# Algebra Placement Test Grader

A browser-based grading system for 25-question multiple-choice tests. Installs to your iPhone home screen, works offline, no App Store required. Runs entirely in the browser using OpenCV.js for camera-based bubble detection.

**Live demo:** https://raaziaali.github.io/BubbleSheet-Grader/

**Repository:** https://github.com/raaziaAli/BubbleSheet-Grader

## Install on iPhone

1. Open the live demo URL in **Safari** (must be Safari, not Chrome).
2. Tap the **Share** button (square with arrow up).
3. Scroll down and tap **"Add to Home Screen"**.
4. Tap **Add**.

You'll get an app icon on your home screen that launches fullscreen with no browser bar — looks and feels like a real app. Works offline after first use.

Same process works on iPad. On Android, the browser will usually show an "Install app" prompt automatically.

## What's in this repo

- **`index.html`** — Landing page with links to the two tools
- **`bubble-scanner.html`** — Camera scanner with answer key setup, batch processing, review, and CSV export
- **`answer-sheet-printable.html`** — Printable bubble sheet with fiducial corner markers (one per student)
- **`manifest.json`** — PWA manifest defining app name, icons, and launch behavior
- **`sw.js`** — Service worker for offline support
- **`icon-*.png`**, **`apple-touch-icon.png`** — App icons

## How to use

1. Print the answer sheet — one per student
2. Students bubble in their answers
3. Open the scanner, set the answer key
4. Take photos of completed sheets (phone camera or upload)
5. Hit "Process All" — the scanner detects the four corner markers, flattens the page, and reads each bubble
6. Review any failed scans, then export results as CSV

## Important notes

- The scanner uses OpenCV.js (~8 MB) — first load takes 10–30 seconds with internet, then it's cached offline
- Accuracy is roughly 85–92% in good conditions; always review before relying on results
- Don't crop, fold, or write near the four corner markers on the printed sheet
- If accuracy is consistently poor, adjust the darkness threshold slider in the scanner
- For high-volume classroom use, [ZipGrade](https://www.zipgrade.com/) ($7/year) is more polished and battle-tested
