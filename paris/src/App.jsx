// src/MedalTracker.js
import React, { useState } from "react";
import "./App.css";
import Footer from "./Components/footer";
import MedalItem from "./Components/MedalItem";
import MedalForm from "./Components/MedalForm";

const Medal = () => {
  const [countries, setCountries] = useState([]);
  const [countryName, setCountryName] = useState("");
  const [goldMedals, setGoldMedals] = useState(0);
  const [silverMedals, setSilverMedals] = useState(0);
  const [bronzeMedals, setBronzeMedals] = useState(0);

  const handleDelete = (countryName) => {
    setCountries(countries.filter((country) => country.name !== countryName));
  };

  // 추가 함수
  const onSubmit = (e) => {
    e.preventDefault(); // 새로고침 방지

    if (!countryName) {
      alert("올바른 국가명을 입력하세요.");
      return;
    }
    if (goldMedals >= 100 || silverMedals >= 100 || bronzeMedals >= 100) {
      alert("제대로 입력해주세요!");
      return;
    }
    if (goldMedals < 0 || silverMedals < 0 || bronzeMedals < 0) {
      alert("제대로 입력해주세요!");
      return;
    }

    const existingCountry = countries.find(
      (country) => country.name === countryName
    );

    if (existingCountry) {
      alert("이미 존재하는 국가입니다."); 
      return;
    }

    // 국가 추가
    setCountries([
      ...countries,
      {
        name: countryName,
        gold: goldMedals,
        silver: silverMedals,
        bronze: bronzeMedals,
      },
    ]);

    // 입력 필드 초기화
    resetFields();
  };

  // 업데이트 함수
  const HandleUpdate = (e) => {
    e.preventDefault(); 

    // 기존 국가 찾기
    const existingCountry = countries.find(
      (country) => country.name === countryName
    );

    if (!existingCountry) {
      alert("존재하지 않는 국가입니다."); 
      return;
    }
    if (goldMedals >= 100 || silverMedals >= 100 || bronzeMedals >= 100) {
      alert("제대로 입력해주세요!");
      return;
    }
    if (goldMedals < 0 || silverMedals < 0 || bronzeMedals < 0) {
      alert("제대로 입력해주세요!");
      return;
    }
    // 존재하면 메달 수 누적
    setCountries(
      countries.map((country) =>
        country.name === countryName
          ? {
              ...country,
              gold: country.gold + goldMedals,
              silver: country.silver + silverMedals,
              bronze: country.bronze + bronzeMedals,
            }
          : country
      )
    );

    // 입력 필드 초기화
    resetFields();
  };

  const resetFields = () => {
    setCountryName("");
    setGoldMedals(0);
    setSilverMedals(0);
    setBronzeMedals(0);
  };

  return (
    <div>
      <h1>2024 Paris Olympics</h1>

      <MedalForm
        countryName={countryName}
        goldMedals={goldMedals}
        silverMedals={silverMedals}
        bronzeMedals={bronzeMedals}
        setGoldMedals={setGoldMedals}
        onSubmit={onSubmit}
        HandleUpdate={HandleUpdate}
        setCountryName={setCountryName}
        setSilverMedals={setSilverMedals}
        setBronzeMedals={setBronzeMedals}
      />

      <MedalItem countries={countries} handleDelete={handleDelete} />

      <Footer />
    </div>
  );
};

export default Medal;
