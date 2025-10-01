# Arduino Workshop – 9/30/2025

This workshop introduces two beginner-friendly Arduino projects hosted by the **IEEE Student Chapter at St. Mary’s University**.  

- **LED Starter Project** (`starter/`)  
  A template sketch with step-by-step `TODO` instructions where you can control an LED with keyboard commands via the Serial Monitor. This project is designed for experimentation and can be extended with buzzers, buttons, or other outputs.  

- **Buzzer Project** (`buzzer/`)  
  Complete code adapted from [HiBit’s buzzer repository](https://github.com/hibit-dev/buzzer), which demonstrates how to play melodies, theme songs, and other tunes with a passive buzzer.

---

## Workshop Structure

### `starter/`
- `led_keyboard_control.ino` — A heavily commented starter sketch with `TODO` markers.  
  - Default commands: `on` (turn LED on) and `off` (turn LED off).  
  - Example extensions: blinking, brightness control, buzzer sounds, or button input.  
- See the `starter/README.md` for wiring instructions and beginner-friendly video guides.

### `buzzer/`
A full library of buzzer examples adapted from [HiBit’s buzzer repository](https://github.com/hibit-dev/buzzer).  

**Contents:**
- `src/buzzer/` — Basic buzzer control examples  
- `src/games/` — Video game theme songs (Mario, Pac-Man, Tetris, etc.)  
- `src/movies/` — Movie themes (Star Wars, Harry Potter, Game of Thrones, etc.)  
- `src/songs/` — Popular music (Coldplay, Imagine Dragons, etc.)  
- `src/other/` — Special occasions (Happy Birthday, Christmas, etc.)  
- `lib/` — Supporting library files (e.g., pitches)  
- `schema/` — Circuit diagrams and wiring guides  
- `notes.png` — Musical note frequency reference  

---

## Getting Started

1. **LED Starter Project**:  
   - Open `starter/led_keyboard_control.ino` in the Arduino IDE.  
   - Upload it to your board.  
   - Open the Serial Monitor (Ctrl + Shift + M), set baud rate to `9600`, and type `on` or `off`.  
   - Check the `starter/README.md` for wiring instructions, breadboard setup, and video tutorials:  
     - ▶️ [How to Use a Breadboard](https://www.youtube.com/watch?v=6WReFkfrUIk)  

2. **Buzzer Examples**:  
   - Explore `buzzer/src/` directories for different song categories.  
   - Use `buzzer/schema/schema.png` for wiring.  
   - Reference `buzzer/notes.png` when writing your own melodies.  

---

## Attribution

- **Buzzer Code**: Adapted from [HiBit’s buzzer repository](https://github.com/hibit-dev/buzzer), licensed under the MIT License.  
  - Original Repository: [https://github.com/hibit-dev/buzzer](https://github.com/hibit-dev/buzzer)  
  - Documentation: [Playing popular songs with Arduino and a buzzer](https://www.hibit.dev/posts/62/playing-popular-songs-with-arduino-and-a-buzzer)  
  - Copyright (c) 2022 HiBit  

- **LED Starter Code**: Created by the **IEEE Student Chapter at St. Mary’s University** for educational purposes, licensed under the MIT License.
