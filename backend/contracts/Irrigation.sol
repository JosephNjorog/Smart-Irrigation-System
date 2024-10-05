// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Irrigation {
    struct IrrigationSchedule {
        uint256 startTime;
        uint256 duration;
        bool isActive;
    }

    mapping(uint256 => IrrigationSchedule) public schedules;
    uint256 public scheduleCount;

    event ScheduleCreated(uint256 indexed scheduleId, uint256 startTime, uint256 duration);
    event ScheduleUpdated(uint256 indexed scheduleId, uint256 startTime, uint256 duration);
    event ScheduleActivated(uint256 indexed scheduleId);
    event ScheduleDeactivated(uint256 indexed scheduleId);

    function createSchedule(uint256 _startTime, uint256 _duration) public {
        scheduleCount++;
        schedules[scheduleCount] = IrrigationSchedule(_startTime, _duration, true);
        emit ScheduleCreated(scheduleCount, _startTime, _duration);
    }

    function updateSchedule(uint256 _scheduleId, uint256 _startTime, uint256 _duration) public {
        require(_scheduleId <= scheduleCount, "Invalid schedule ID");
        IrrigationSchedule storage schedule = schedules[_scheduleId];
        schedule.startTime = _startTime;
        schedule.duration = _duration;
        emit ScheduleUpdated(_scheduleId, _startTime, _duration);
    }

    function activateSchedule(uint256 _scheduleId) public {
        require(_scheduleId <= scheduleCount, "Invalid schedule ID");
        schedules[_scheduleId].isActive = true;
        emit ScheduleActivated(_scheduleId);
    }

    function deactivateSchedule(uint256 _scheduleId) public {
        require(_scheduleId <= scheduleCount, "Invalid schedule ID");
        schedules[_scheduleId].isActive = false;
        emit ScheduleDeactivated(_scheduleId);
    }

    function getSchedule(uint256 _scheduleId) public view returns (uint256, uint256, bool) {
        require(_scheduleId <= scheduleCount, "Invalid schedule ID");
        IrrigationSchedule memory schedule = schedules[_scheduleId];
        return (schedule.startTime, schedule.duration, schedule.isActive);
    }
}