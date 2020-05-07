#include <Ultrasonic.h>
 Ultrasonic ultrassom(8,7);
//trigger, echo
float distancia;

 void setup() {
 Serial.begin(9600); 
 
 }

 void loop()
 {
   distancia = ultrassom.Ranging(CM);//e polegadas INC
   Serial.print(distancia); 
   Serial.println("cm");
   delay(100);
 }
