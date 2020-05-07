
int sensor0=33;
int sensor1=35;
int sensor2=37;
int sensor3=39;
int sensor4=41;
int sensor5=43;
int sensor6=45;
int sensor[7];


void setup() {
 pinMode(sensor0,INPUT);
  pinMode(sensor1,INPUT);
  pinMode(sensor2,INPUT);
  pinMode(sensor3,INPUT);
  pinMode(sensor4,INPUT);
  pinMode(sensor5,INPUT);
  pinMode(sensor6,INPUT);
  Serial.begin(9600);
}

void loop() {
  
  sensor[0]=digitalRead(sensor0);
  sensor[1]=digitalRead(sensor1);
  sensor[2]=digitalRead(sensor2);
  sensor[3]=digitalRead(sensor3);
  sensor[4]=digitalRead(sensor4);
  sensor[5]=digitalRead(sensor5);
  sensor[6]=digitalRead(sensor6);
  Serial.print(sensor[0]);
  Serial.print(sensor[1]);
  Serial.print(sensor[2]);
  Serial.print(sensor[3]);
  Serial.print(sensor[4]);
  Serial.print(sensor[5]);
  Serial.println(sensor[6]);
  delay(2000);

  }
