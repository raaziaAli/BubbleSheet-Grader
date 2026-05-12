# Algebra Placement Test Grader

A browser-based grading system for 25-question multiple-choice tests. No server, no install — runs entirely in the browser using OpenCV.js for camera-based bubble detection.

**Live demo:** https://raaziaali.github.io/BubbleSheet-Grader/

**Repository:** https://github.com/raaziaAli/BubbleSheet-Grader

## What's in this repo

- **`index.html`** — Landing page with links to the two tools
- **`answer-sheet-printable.html`** — Printable bubble sheet with fiducial corner markers (one per student)
- **`bubble-scanner.html`** — Camera scanner with answer key setup, batch processing, review, and CSV export

## How it works

1. Print the answer sheet — one per student
2. Students bubble in their answers
3. Open the scanner, set the answer key
4. Take photos of completed sheets (phone camera or upload)
5. Hit "Process All" — the scanner detects the four corner markers, flattens the page, and reads each bubble
6. Review any failed scans, then export results as CSV

## Important notes

- The scanner uses OpenCV.js (~8 MB) — first load takes 10–30 seconds
- Accuracy is roughly 85–92% in good conditions; always review before relying on results
- Don't crop, fold, or write near the four corner markers on the printed sheet
- If accuracy is consistently poor, adjust the darkness threshold slider in the scanner

For high-volume classroom use, [ZipGrade](https://www.zipgrade.com/) ($7/year) is more polished and battle-tested.
