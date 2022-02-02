import React from "react";
import { render, screen } from "../test-utils";
import Home from "../../pages/index";
import { isResSent } from "next/dist/shared/lib/utils";
import { MdOutlineAlarm } from "react-icons/md";
describe("Home", () => {
  it("Renders home page", () => {
    render(<Home />);
  
  });

});
describe("Check timer",() => {
  it("sets stage correctly",() =>{
    try {
      expect(switchState(0)).toBe('pomodoro');
      expect(switchState(1)).toBe('short break');
      expect(switchState(2)).toBe('long break');
      done();
    } catch (error) {
    }
  });
  it("timer start correctly and sets approprite flags",() =>{
    try {
      startTimer();
      expect(isTicking.toBe(true));
      expect(isTimeUp.toBe(false));
      done();
    } catch (error) {
    }
  });
  it("on time up, resets everything",() =>{
    try {
      reset();
      expect(isTicking.toBe(false));
      expect(isTimeUp.toBe(true));
      expect(consumedSecond.toBe(false));
      done();
    } catch (error) {
    }
  });
  it("mute alarm button works as expected",() =>{
    try {
      muteAlarm();
      expect(alarmRef.current.pause().toBe(true));
      expect(alarmRef.current.time.toBe(0));
      expect(consumedSecond.toBe(false));
      done();
    } catch (error) {
    }
  });
});
