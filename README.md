# Object-detector

The theme of the thesis is the development of a web application for recognizing objects in images and videos.
The most popular recognition libraries were reviewed and analyzed in my work:  face-api.js, ml5.js. The result of the graduation project is a custom software product that works with the specified libraries via javascript and allows you to recognize a wide range of objects in images and videos.

Now let's look at all the menu items in this web application:
- Face Detection is a function of face recognition in images, the image is placed in a rectangular area in which the probability that it is a face is placed at the bottom, and also a special marker determines certain facial features (face-api js);
- Webcam Face Detection is a real-time face recognition function with the same properties as Face Detection (face-api js);
- Face Expression Recognition is a function that recognizes human emotions in images. The following emotions are presented: Cheerful, sad, angry, disgusted, surprised, afraid, without emotional and presented images used in this web application (face-api js);
-  Webcam Face Expression Recognition is a function that recognizes a person's emotions in real time. The face is highlighted by a rectangular area, and the person's emotions are displayed at the bottom (face-api js);
- Age and Gender Recognition is a function that recognizes a person's age and gender (face-api js);
- Webcam Age and Gender Recognition is a real-time recognition function with the same properties as Age and Gender Recognition;
- Face Extraction is a function of face recognition in a photo with their subsequent output in separate images (face-api js);
- Video Face Tracking is a feature of face recognition on video, it supports all known video formats: mp4. m4v, mov, etc. (face-api js);
- Bodypix Webcam is a function in which the human body stands out and the whole background is covered in black (ml5 js);
- PoseNet Webcam is a function in which a person's posture is recognized, ie selection of arms, legs, torso (ml5 js);
- CocoSSD Detector Webcam is a real-time object recognition function, this model has been trained for 90 image classes (ml5 js);
- YOLO Detector Webcam is a real-time object recognition function, this model has been trained for 90 image classes (ml5 js);

Some sceenshots:

![image](https://user-images.githubusercontent.com/18406724/117358518-ee4d6180-aebe-11eb-9d57-e0a6d403a891.png)

![image](https://user-images.githubusercontent.com/18406724/117358007-4e8fd380-aebe-11eb-8547-fcbb88be376b.png)

![image](https://user-images.githubusercontent.com/18406724/117358579-00c79b00-aebf-11eb-93ef-730faec606cd.png)

![image](https://user-images.githubusercontent.com/18406724/117358603-07561280-aebf-11eb-9f82-0f0744a34ea3.png)


## Installation

Object detector requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start the server.

```sh
cd Object-detector
npm i
npm start
```
