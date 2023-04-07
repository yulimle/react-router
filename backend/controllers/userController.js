const connection = require('./mysqlConnect');

const registerUser = (req, res) => {
  try {
    connection.query(
      `SELECT * FROM mydb.user WHERE USER_ID = '${req.body.id}'`,
      (err, data) => {
        if (err) throw err;
        if (data.length !== 0)
          return res.status(400).json('이미 가입된 회원입니다.'); //회원 가입한 애가 있을 때 (데이터를 받아올 때 배열로 받아옴)
        connection.query(
          `INSERT INTO mydb.user (USER_ID, PASSWORD) values ('${req.body.id}','${req.body.password}')`,
          (err, data) => {
            if (err) throw err; //에러잇으면 캐치문에 던지기
            res.status(200).json('회원가입성공');
          }
        );
      }
    );
  } catch (err) {
    console.error(err);
    res.status(500).json('회원 가입 실패, 알 수 없는 문제 발생');
  }
};

module.exports = {
  registerUser,
};
