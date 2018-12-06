import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Day4Component } from './day4.component';

describe('Day4Component', () => {
  let component: Day4Component = new Day4Component();

  it('should find guard asleep longest and minute most asleep from ordered records', () => {
    const input = `[1518-11-01 00:00] Guard #10 begins shift
    [1518-11-01 00:05] falls asleep
    [1518-11-01 00:25] wakes up
    [1518-11-01 00:30] falls asleep
    [1518-11-01 00:55] wakes up
    [1518-11-01 23:58] Guard #99 begins shift
    [1518-11-02 00:40] falls asleep
    [1518-11-02 00:50] wakes up
    [1518-11-03 00:05] Guard #10 begins shift
    [1518-11-03 00:24] falls asleep
    [1518-11-03 00:29] wakes up
    [1518-11-04 00:02] Guard #99 begins shift
    [1518-11-04 00:36] falls asleep
    [1518-11-04 00:46] wakes up
    [1518-11-05 00:03] Guard #99 begins shift
    [1518-11-05 00:45] falls asleep
    [1518-11-05 00:55] wakes up`;
    expect(component.strategy1(input)).toEqual(240);
  });

  it('should find guard asleep longest and minute most asleep from unordered records', () => {
    const input = `[1518-11-01 00:00] Guard #10 begins shift
    [1518-11-01 00:05] falls asleep
    [1518-11-03 00:05] Guard #10 begins shift
    [1518-11-05 00:03] Guard #99 begins shift
    [1518-11-01 00:55] wakes up
    [1518-11-01 23:58] Guard #99 begins shift
    [1518-11-02 00:50] wakes up
    [1518-11-03 00:24] falls asleep
    [1518-11-03 00:29] wakes up
    [1518-11-04 00:02] Guard #99 begins shift
    [1518-11-04 00:36] falls asleep
    [1518-11-04 00:46] wakes up
    [1518-11-01 00:25] wakes up
    [1518-11-01 00:30] falls asleep
    [1518-11-02 00:40] falls asleep
    [1518-11-05 00:45] falls asleep
    [1518-11-05 00:55] wakes up`;
    expect(component.strategy1(input)).toEqual(240);
  });

  it('should find guard asleep during an particular minute the most times from unordered records', () => {
    const input = `[1518-11-01 00:00] Guard #10 begins shift
    [1518-11-01 00:05] falls asleep
    [1518-11-03 00:05] Guard #10 begins shift
    [1518-11-05 00:03] Guard #99 begins shift
    [1518-11-01 00:55] wakes up
    [1518-11-01 23:58] Guard #99 begins shift
    [1518-11-02 00:50] wakes up
    [1518-11-03 00:24] falls asleep
    [1518-11-03 00:29] wakes up
    [1518-11-04 00:02] Guard #99 begins shift
    [1518-11-04 00:36] falls asleep
    [1518-11-04 00:46] wakes up
    [1518-11-01 00:25] wakes up
    [1518-11-01 00:30] falls asleep
    [1518-11-02 00:40] falls asleep
    [1518-11-05 00:45] falls asleep
    [1518-11-05 00:55] wakes up`;
    expect(component.strategy2(input)).toEqual(4455);
  });
});
