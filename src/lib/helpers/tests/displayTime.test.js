import { displayTime, timeRemaining } from "../index";

// driver code
const oneSecond = 1;
const tenSeconds = 10;
const oneMinute = 60;
const tenMinutes = 600;
const oneHour = 3600;

displayTime();
timeRemaining();

test("display the time:one second in correct format", () => {
  const time = displayTime(oneSecond);
  expect(time).toEqual("0:00:01");
});
test("display the time:ten seconds in correct format", () => {
  const time = displayTime(tenSeconds);
  expect(time).toEqual("0:00:10");
});
test("display the time:one min in correct format", () => {
  const time = displayTime(oneMinute);
  expect(time).toEqual("0:01:00");
});
test("display the time: ten min in correct format", () => {
  const time = displayTime(tenMinutes);
  expect(time).toEqual("0:10:00");
});
test("display the time: one hour in correct format", () => {
  const time = displayTime(oneHour);
  expect(time).toEqual("1:00:00");
});

// --- elapsed tests

// 30sec - 30sec === 0:00:00
// 45sec - 43 sec === 0:00:02
// 5 min 3 sec: (60 * 5 + 3) - 2 min 10 sec: (60 * 2 + 10) === 0:02:53
// 3 hours
