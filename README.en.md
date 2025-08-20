# JavaScript Practice Projects

This repository contains two small projects built during my JavaScript learning journey:  
📌 **Image Gallery with SimpleLightbox**  
📌 **Feedback Form with LocalStorage**  

---

## 📌 Projects

### 1. Image Gallery with SimpleLightbox
- **Goal:**  
  Provide a clickable gallery of preview images.  
  When an image is clicked, the larger version opens and its description (`alt`) is shown with a 250ms delay.  

- **Technologies:**  
  - JavaScript (ES6)  
  - [SimpleLightbox](https://simplelightbox.com/) library  

- **Features:**  
  - Images use `alt` text as captions.  
  - Captions appear with a 250ms delay after opening.  
  - Responsive layout.  

---

### 2. Feedback Form with LocalStorage
- **Goal:**  
  Preserve user input in a feedback form without losing it on page reload.  

- **Technologies:**  
  - JavaScript (ES6)  
  - LocalStorage API  

- **Features:**  
  - Uses event delegation to listen for `input` events on the form.  
  - Saves email and message under one key (`feedback-form-state`) in localStorage.  
  - Automatically restores saved data when the page reloads.  
  - On submit:  
    - Checks that both fields are filled.  
    - Logs the data object to the console.  
    - Clears localStorage and resets the form.  

---

## 🚀 How to Run

1. Clone this project:
   ```bash
   git clone https://github.com/username/project-name.git
