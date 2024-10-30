import React from "react";

const MedalForm = ({
  countryName,
  goldMedals,
  silverMedals,
  bronzeMedals,
  setGoldMedals,
  HandleAdd,
  HandleUpdate,
  setCountryName,
  setSilverMedals,
  setBronzeMedals,
}) => {
  return (
    <div>
      <form>
        <input
          className="countryName"
          type="text"
          placeholder="국가 입력"
          value={countryName}
          onChange={(e) => setCountryName(e.target.value)} // 입력 시 상태 업데이트
        />

        <input
          className="goldMedals"
          type="number"
          placeholder="금메달 수"
          value={goldMedals}
          onChange={(e) => setGoldMedals(Number(e.target.value))} // 숫자로 변환
        />
        <input
          className="silverMedals"
          type="number"
          placeholder="은메달 수"
          value={silverMedals}
          onChange={(e) => setSilverMedals(Number(e.target.value))}
        />
        <input
          className="bronzeMedals"
          type="number"
          placeholder="동메달 수"
          value={bronzeMedals}
          onChange={(e) => setBronzeMedals(Number(e.target.value))}
        />

        <button type="submit" className="addBtn" onClick={HandleAdd}>
          국가추가
        </button>
        <button type="submit" className="updBtn" onClick={HandleUpdate}>
          업데이트
        </button>
      </form>
    </div>
  );
};

export default MedalForm;
