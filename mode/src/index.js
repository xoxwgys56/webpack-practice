/**
 * "process"를 가져오는데 둘 다 가능한 표현식이다.
 */
// const { env } = require("process");
import { env } from "process";

/**
 * 아래의 값이 `undefined`라고 나온다.
 * webpack의 환경변수가 소스코드까지 오지 않는 모양이다.
 */
console.log(`current mode is ${env.mode}`);
console.log("Hello webpack");