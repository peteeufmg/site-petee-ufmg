int IN1 = 4;
int IN2 = 5;
int IN3 = 6;
int IN4 = 7;
int PWM_A = 8;
int PWM_B = 9;

int sensor0 = 33;
int sensor1 = 35;
int sensor2 = 37;
int sensor3 = 39;
int sensor4 = 41;
int sensor5 = 43;
int sensor6 = 45;


int sensor [7];
int vel_A = 200;
int vel_B = 255;



void setup() {
 pinMode (IN1, OUTPUT);
 pinMode (IN2, OUTPUT);
 pinMode (IN3, OUTPUT);
 pinMode (IN4, OUTPUT);
 pinMode (PWM_A, OUTPUT);
 pinMode (PWM_B, OUTPUT);
 pinMode (sensor0, INPUT);
 pinMode (sensor1, INPUT);
 pinMode (sensor2, INPUT);
 pinMode (sensor3, INPUT);
 pinMode (sensor4, INPUT);
 pinMode (sensor5, INPUT);
 pinMode (sensor6, INPUT);

}

void loop() {

  sensor[0] = digitalRead (sensor0);
  sensor[1] = digitalRead (sensor1);
  sensor[2] = digitalRead (sensor2);
  sensor[3] = digitalRead (sensor3);
  sensor[4] = digitalRead (sensor4);
  sensor[5] = digitalRead (sensor5);
  sensor[6] = digitalRead (sensor6);


    if(sensor[0]==1 && sensor[1]==1 && sensor[2]==1 && sensor[3]==0 && sensor[4]==1 && sensor[5]==1 && sensor[6]==1){ //LINHA RETA
    digitalWrite(IN1, HIGH);
    digitalWrite(IN2, LOW);
    analogWrite(PWM_A, vel_A*(0.85));
    digitalWrite(IN3, HIGH);
    digitalWrite(IN4, LOW);
    analogWrite(PWM_B, vel_B*(0.85));
  }
  
    else if(sensor[0]==1 && sensor[1]==1 && sensor[2]==1 && sensor[3]==0 && sensor[4]==0 && sensor[5]==1 && sensor[6]==1){ //CURVA LEVE À DIREITA
    digitalWrite(IN1, HIGH);
    digitalWrite(IN2, LOW);
    analogWrite(PWM_A, vel_A*(0.5));
    digitalWrite(IN3, HIGH);
    digitalWrite(IN4, LOW);
    analogWrite(PWM_B, vel_B*(0.8));
  }
  
   else if(sensor[0]==1 && sensor[1]==1 && sensor[2]==0 && sensor[3]==0 && sensor[4]==1 && sensor[5]==1 && sensor[6]==1){  //CURVA LEVE À ESQUERDA
    digitalWrite(IN1, HIGH);
    digitalWrite(IN2, LOW);
    analogWrite(PWM_A, vel_A*(0.8));
    digitalWrite(IN3, HIGH);
    digitalWrite(IN4, LOW);
    analogWrite(PWM_B, vel_B*(0.5));
  }

    else if(sensor[0]==1 && sensor[1]==1 && sensor[2]==1 && sensor[3]==1 && sensor[4]==0 && sensor[5]==1 && sensor[6]==1){ //CURVA ACENTUADA À DIREITA
    digitalWrite(IN1, HIGH);
    digitalWrite(IN2, LOW);
    analogWrite(PWM_A, vel_A*(0.2));
    digitalWrite(IN3, HIGH);
    digitalWrite(IN4, LOW);
    analogWrite(PWM_B, vel_B*(0.8));
  }
  
    else if(sensor[0]==1 && sensor[1]==1 && sensor[2]==0 && sensor[3]==1 && sensor[4]==1 && sensor[5]==1 && sensor[6]==1){ //CURVA ACENTUADA À ESQUERDA
    digitalWrite(IN1, HIGH);
    digitalWrite(IN2, LOW);
    analogWrite(PWM_A, vel_A*(0.8));
    digitalWrite(IN3, HIGH);
    digitalWrite(IN4, LOW);
    analogWrite(PWM_B, vel_B*(0.2));
  }

  else if(sensor[0]==1 && sensor[1]==1 && sensor[2]==1 && sensor[3]==1 && sensor[4]==1 && sensor[5]==0 && sensor[6]==1){ //CURVA + ACENTUADA À DIREITA
    digitalWrite(IN1, HIGH);
    digitalWrite(IN2, LOW);
    analogWrite(PWM_A, vel_A*(0.1));
    digitalWrite(IN3, HIGH);
    digitalWrite(IN4, LOW);
    analogWrite(PWM_B, vel_B*(0.8));
  }
  else if(sensor[0]==1 && sensor[1]==0 && sensor[2]==1 && sensor[3]==1 && sensor[4]==1 && sensor[5]==1 && sensor[6]==1){ //CURVA + ACENTUADA À ESQUERDA
    digitalWrite(IN1, HIGH);
    digitalWrite(IN2, LOW);
    analogWrite(PWM_A, vel_A*(0.8));
    digitalWrite(IN3, HIGH);
    digitalWrite(IN4, LOW);
    analogWrite(PWM_B, vel_B*(0.1));
  }

  else if(sensor[0]==1 && sensor[1]==1 && sensor[2]==1 && sensor[3]==1 && sensor[4]==1 && sensor[5]==1 && sensor[6]==1){ //PARADA
    digitalWrite(IN1, HIGH);
    digitalWrite(IN2, HIGH);
    analogWrite(PWM_A, vel_A*(0));
    digitalWrite(IN3, HIGH);
    digitalWrite(IN4, HIGH);
    analogWrite(PWM_B, vel_B*(0));
  }
    
  
  
  

}
