# LED Starter Project – Arduino Workshop (9/30/2025)

This starter project is designed to help you learn how to control an LED with your keyboard using the Arduino Serial Monitor. The provided code is heavily commented with `TODO` markers so you can customize it, add your own commands, and expand it into creative projects.

---

## How It Works
- Upload `led_keyboard_control.ino` to your Arduino board.  
- Open the Serial Monitor (`Ctrl + Shift + M` in Arduino IDE).  
- Make sure the **baud rate** is set to `9600`.  
- Type commands like:
  - **`on`** → turns the LED **ON**  
  - **`off`** → turns the LED **OFF**  
- Try adding your own commands in the code! Examples in comments show how to:
  - Blink the LED (`blink`)  
  - Change brightness with PWM pins (`bright`, `dim`)  
  - Extend the project with buzzers, buttons, or sensors  

---

## Circuit Setup
- **LED**: Use any standard 5mm LED.  
- **Connections**:
  - Long leg (**anode / +**) → connect to **digital pin 13** through a **220–330 Ω resistor**  
  - Short leg (**cathode / -**) → connect to **GND**  

⚠️ Always use a resistor in series with the LED to avoid burning it out.

---

## Helpful Videos
- ▶️ [How to Use a Breadboard](https://www.youtube.com/watch?v=6WReFkfrUIk)  

---

## Modifications
The code is written with **TODOs** and examples so you can expand it:
- Add more LEDs (e.g., `LED_PIN2`)  
- Add buttons or switches  
- Add sound with a buzzer  
- Make custom patterns (blinking, fading, sequences)  

---

## License
This starter code was developed by the **IEEE Student Chapter at St. Mary’s University** and is licensed under the MIT License.
