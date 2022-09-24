import { DataSource } from "typeorm";

//각자 db 만들고 개인 테스트해야함

/*
mysql 다운로드 받은 후 CREATE databases haru;
해야 데이터베이스가 생성됨
그리고 password는 mysql을 다운로드 받을 때 설정한 password를 넣어주어야함
이외에는 동일하게 설정
*/
const myDataSource = new DataSource({
  type: "mysql",
  host: "127.0.0.1",
  port: 3306,
  username: "root",
  password: "dlalswo8",
  database: "haru",
  entities: ["src/entity/*.js"],
  logging: true,
  synchronize: true,
});

export default myDataSource;
