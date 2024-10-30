const MedalItem = ({ countries, handleDelete }) => {
  return (
    <>
      <div className="table">
        <table className="medalTable">
          <thead>
            <tr>
              <th>국가명</th>
              <th>금메달</th>
              <th>은메달</th>
              <th>동메달</th>
              <th>액션</th>
            </tr>
          </thead>
          <tbody>
            {countries
              .slice() // 원본 배열을 수정하지 않기 위해 복사
              .sort((a, b) => b.gold - a.gold) // 금메달 수로 내림차순 정렬
              .map((country) => (
                <tr key={country.name}>
                  <td>{country.name}</td>
                  <td>{country.gold}</td>
                  <td>{country.silver}</td>
                  <td>{country.bronze}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(country.name)}
                      className="dleBtn"
                    >
                      삭제
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MedalItem;
