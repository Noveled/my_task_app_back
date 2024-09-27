const express = require('express'); // express 모듈 불러오기
const cors = require('cors');
const PORT = '8080';

const app = express(); // express 모듈을 사용하기 위해 app 변수에 할당

app.use(cors()); // http, https 프로토콜을 사용하는 서버 간의 통신을 허용한다.

app.use(express.json()); // express 모듈의 json() 메소드 사용

app.get('/', (req, res) => {
  res.send('hello World. backend deploy complete wow!');
});


app.use(require('./routes/getRoutes'));
app.use(require('./routes/postRoutes'));
app.use(require('./routes/deleteRoutes'));
app.use(require('./routes/updateRoutes'));


app.listen(PORT, () => console.log(`Server is running on ${PORT}`)); // 서버 실행 확인