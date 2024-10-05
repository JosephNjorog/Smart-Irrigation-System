// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CropHealth {
    struct HealthData {
        uint256 timestamp;
        uint256 ndviValue;
        string pestRisk;
        string nutrientLevel;
    }

    mapping(uint256 => HealthData) public fieldHealthData;
    uint256 public fieldCount;

    event HealthDataUpdated(uint256 indexed fieldId, uint256 timestamp, uint256 ndviValue, string pestRisk, string nutrientLevel);

    function updateHealthData(uint256 _fieldId, uint256 _ndviValue, string memory _pestRisk, string memory _nutrientLevel) public {
        if (_fieldId > fieldCount) {
            fieldCount = _fieldId;
        }

        fieldHealthData[_fieldId] = HealthData(block.timestamp, _ndviValue, _pestRisk, _nutrientLevel);
        emit HealthDataUpdated(_fieldId, block.timestamp, _ndviValue, _pestRisk, _nutrientLevel);
    }

    function getHealthData(uint256 _fieldId) public view returns (uint256, uint256, string memory, string memory) {
        require(_fieldId <= fieldCount, "Invalid field ID");
        HealthData memory data = fieldHealthData[_fieldId];
        return (data.timestamp, data.ndviValue, data.pestRisk, data.nutrientLevel);
    }
}