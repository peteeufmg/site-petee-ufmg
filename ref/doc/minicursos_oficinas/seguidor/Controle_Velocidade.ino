 int IN1 = 22;
 int IN2 = 24;
 int PWM_A = 2;


void setup() {
  pinMode (IN1, OUTPUT);
  pinMode (IN2, OUTPUT);
  pinMode (PWM_A, OUTPUT);
}

void loop() {
  
  digitalWrite (IN1, HIGH);
  digitalWrite (IN2, LOW);
  analogWrite (PWM_A, 200);
  delay(2000);
 
  analogWrite (PWM_A, 50);
  delay(2000);
  
  analogWrite (PWM_A, 40);
  delay(2000);

}
