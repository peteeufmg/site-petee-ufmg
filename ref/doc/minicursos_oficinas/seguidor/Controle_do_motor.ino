  int IN1 = 22;
  int IN2 = 24;
  

void setup() {
  
  pinMode (IN1, OUTPUT);
  pinMode (IN2, OUTPUT);

}

void loop() {

  //gira no sentido horario
  digitalWrite (IN1, HIGH);
  digitalWrite (IN2, LOW);
  delay (500);

  //para o motor
  digitalWrite (IN1, HIGH);
  digitalWrite (IN2, HIGH);
  delay(500);

  //gira o motor no sentido anti-horario
  digitalWrite (IN1, LOW);
  digitalWrite (IN2, HIGH);
  delay(500);

  //para o motor
  digitalWrite (IN1, HIGH);
  digitalWrite (IN2, HIGH);
  delay(500);  

}
