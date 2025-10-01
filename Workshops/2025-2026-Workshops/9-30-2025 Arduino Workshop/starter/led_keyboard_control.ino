/*
 * TODO: Give your project a creative name!
 * Example: "Magic Light Controller", "Robot Eye Blinker", "Party Light Remote"
 * 
 * TODO: Write a brief description of what your project does
 * Example: "Controls LED lights with keyboard commands for a fun interactive experience"
 * 
 * Hardware Setup:
 * - TODO: Connect an LED to pin __ (fill in your chosen pin number)
 * - TODO: Add any additional components you want to control (buzzer, motor, etc.)
 * - Make sure your Arduino is connected to your computer via USB
 * 
 * Software Setup:
 * - Open the Serial Monitor (Tools -> Serial Monitor)
 * - TODO: Set baud rate to _____ (choose your speed: 9600, 115200, etc.)
 * - TODO: Type your custom commands and press Enter
 */

// TODO: Define pin numbers for your components
const int LED_PIN = 13;  // TODO: Change this to your chosen pin
// TODO: Add more pins for additional components
// const int LED_PIN2 = 8;
// const int BUTTON_PIN = 2;

// TODO: Add variables to store data
String inputString = "";
// TODO: Add more variables as needed
// int ledState = 0;
// int brightness = 0;

void setup() {
  // FUNCTION: Serial.begin()
  // PURPOSE: Initializes serial communication between Arduino and computer
  // PARAMETER: baud rate (9600) - how fast data is sent (bits per second)
  // COMMON RATES: 9600 (slow, reliable), 115200 (fast, good for debugging)
  Serial.begin(9600);  // TODO: Try different speeds like 115200
  
  // FUNCTION: pinMode()
  // PURPOSE: Configures a pin as either INPUT or OUTPUT
  // PARAMETERS: 
  //   - Pin number (LED_PIN = 13)
  //   - Mode: OUTPUT (sends signals out), INPUT (reads signals in), INPUT_PULLUP (reads with built-in resistor)
  pinMode(LED_PIN, OUTPUT);  // TODO: Add setup for more pins
  // pinMode(BUZZER_PIN, OUTPUT);      // OUTPUT for sending sound signals
  // pinMode(BUTTON_PIN, INPUT_PULLUP); // INPUT_PULLUP for reading button presses
  
  // FUNCTION: digitalWrite()
  // PURPOSE: Sets a digital pin to HIGH (5V) or LOW (0V)
  // PARAMETERS:
  //   - Pin number (LED_PIN = 13)
  //   - Value: HIGH (5V, turns LED ON), LOW (0V, turns LED OFF)
  digitalWrite(LED_PIN, LOW);  // Start with LED off
  // TODO: Initialize other components
  
  // FUNCTION: Serial.println()
  // PURPOSE: Sends text to the Serial Monitor (shows up on computer screen)
  // PARAMETER: Text string (in quotes) - what you want to display
  // NOTE: println() adds a new line after the text, print() doesn't
  Serial.println("=== TODO: Your Project Name Here ===");
  Serial.println("TODO: Write instructions for your user");
  Serial.println("TODO: List your custom commands");
  Serial.println("Example: 'on', 'off', 'blink', 'bright'");
  Serial.println("----------------------------------------");
}

void loop() {
  // FUNCTION: loop()
  // PURPOSE: Runs continuously while Arduino is powered - this is your main program
  // PARAMETERS: None - this function runs automatically
  // NOTE: This function repeats forever, so put your main logic here
  
  // TODO: Add your main program logic here
  
  // FUNCTION: Serial.available()
  // PURPOSE: Checks if data is waiting to be read from Serial Monitor
  // PARAMETERS: None
  // RETURNS: Number of bytes available (0 if no data, >0 if data waiting)
  if (Serial.available() > 0) {
    
    // FUNCTION: Serial.readString()
    // PURPOSE: Reads incoming data from Serial Monitor as a text string
    // PARAMETERS: None
    // RETURNS: String containing what user typed
    inputString = Serial.readString();
    
    // FUNCTION: String.trim()
    // PURPOSE: Removes whitespace (spaces, tabs, newlines) from beginning and end
    // PARAMETERS: None
    // WHY: User might accidentally press Enter or add spaces
    inputString.trim();
    
    // TODO: Create your own commands!
    // Examples to get you started:
    
    // BASIC LED CONTROL EXAMPLES:
    // digitalWrite(LED_PIN, HIGH);  // Turns LED ON (5V)
    // digitalWrite(LED_PIN, LOW);   // Turns LED OFF (0V)
    
    if (inputString == "on") {  // TODO: Change "on" to your command
      digitalWrite(LED_PIN, HIGH);  // This line turns the LED ON
      Serial.println("TODO: Write your own message here!");
    }
    else if (inputString == "off") {  // TODO: Change "off" to your command
      digitalWrite(LED_PIN, LOW);    // This line turns the LED OFF
      Serial.println("TODO: Write your own message here!");
    }
    // TODO: Add more creative commands!
    
    // BLINKING LED EXAMPLE:
    // else if (inputString == "blink") {
    //   for (int i = 0; i < 5; i++) {  // Loop 5 times
    //     digitalWrite(LED_PIN, HIGH); // Turn ON
    //     
    //     // FUNCTION: delay()
    //     // PURPOSE: Pauses the program for a specified amount of time
    //     // PARAMETER: milliseconds (500) - how long to wait
    //     // NOTE: 1000ms = 1 second, so 500ms = half a second
    //     delay(500);                  // Wait 500ms
    //     
    //     digitalWrite(LED_PIN, LOW);  // Turn OFF
    //     delay(500);                  // Wait 500ms
    //   }
    //   Serial.println("Blinked 5 times!");
    // }
    
    // BRIGHTNESS CONTROL EXAMPLE (needs PWM pin like 3, 5, 6, 9, 10, 11):
    // else if (inputString == "bright") {
    //   
    //   // FUNCTION: analogWrite()
    //   // PURPOSE: Controls brightness/speed using PWM (Pulse Width Modulation)
    //   // PARAMETERS:
    //   //   - Pin number (must be PWM pin: 3, 5, 6, 9, 10, 11 on Arduino Uno)
    //   //   - Value: 0 (completely off) to 255 (full brightness/speed)
    //   // NOTE: Only works on PWM pins (marked with ~ on Arduino board)
    //   analogWrite(LED_PIN, 255);     // Maximum brightness (0-255)
    //   Serial.println("LED at full brightness!");
    // }
    // else if (inputString == "dim") {
    //   analogWrite(LED_PIN, 100);     // Medium brightness
    //   Serial.println("LED dimmed!");
    // }
    // else if (inputString == "off") {
    //   analogWrite(LED_PIN, 0);       // Completely off
    //   Serial.println("LED off!");
    // }
    // TODO: Add sound effects with buzzer
    // TODO: Add button interactions
    // TODO: Add timing delays for cool effects
    
    else {
      // TODO: Write your own help message
      Serial.println("TODO: Write help text for invalid commands");
      Serial.println("Available commands: TODO: List your commands");
    }
    
    inputString = "";
  }
  
  // TODO: Add other things to do in the main loop
  // Example: Check button presses, read sensors, create animations
  
  // FUNCTION: delay()
  // PURPOSE: Pauses the program for a short time to prevent overwhelming the system
  // PARAMETER: milliseconds (10) - very short pause
  // WHY: Prevents the loop from running too fast and using too much CPU
  delay(10);  // TODO: Adjust this delay as needed (try 50, 100, 1000)
}
